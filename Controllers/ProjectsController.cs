using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskTracker.Models;

namespace TaskTracker.Controllers
{
    // All of these routes will be at the base URL:     /api/Projects
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case ProjectsController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public ProjectsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Projects
        //
        // Returns a list of all your Projects
        //
        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

        public async Task<ActionResult<IEnumerable<Project>>> GetProjects()

        {

            // Uses the database context in `_context` to request all of the Projects, sort
            // them by row id and return them as a JSON array.
            // return await _context.Projects.OrderBy(row => row.Id).ToListAsync();

            Console.WriteLine(GetCurrentUserId());

            return await _context.Projects.Where(project => project.UserId == GetCurrentUserId()).OrderBy(project => project.Id).Include(project => project.Tasks).ToListAsync();
            // return await _context.Projects.OrderBy(project => project.Id).Include(project => project.Tasks).ToListAsync();

        }

        // GET: api/Projects/5
        //
        // Fetches and returns a specific project by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Project>> GetProject(int id)
        {
            // Find the project in the database using `FindAsync` to look it up by id
            var project = await _context.Projects.Include(project => project.Tasks).Where(project => project.Id == id).FirstOrDefaultAsync();

            // If we didn't find anything, we receive a `null` in return
            if (project == null)
            {
                // Return a `404` response to the client indicating we could not find a project with this id
                return NotFound();
            }

            //  Return the project as a JSON object.
            return project;
        }

        // PUT: api/Projects/5
        //
        // Update an individual project with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Project
        // variable named project. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Project POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProject(int id, Project project)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != project.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in project to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from project
            _context.Entry(project).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!ProjectExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // Return a copy of the updated data
            return Ok(project);
        }

        // POST: api/Projects
        //
        // Creates a new project in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Project
        // variable named project. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Project POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<ActionResult<Project>> PostProject(Project project)
        {
            project.UserId = GetCurrentUserId();
            // Indicate to the database context we want to add this new record
            _context.Projects.Add(project);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetProject", new { id = project.Id }, project);
        }

        // DELETE: api/Projects/5
        //
        // Deletes an individual project with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

        public async Task<IActionResult> DeleteProject(int id)
        {
            // Find this project by looking for the specific id
            var project = await _context.Projects.FindAsync(id);
            if (project == null)
            {
                // There wasn't a project with that id so return a `404` not found
                return NotFound();
            }

            if (project.UserId != GetCurrentUserId())
            {
                // Make a custom error response
                var response = new
                {
                    status = 401,
                    errors = new List<string>() { "Not Authorized" }
                };

                // Return our error with the custom response
                return Unauthorized(response);
            }


            // Tell the database we want to remove this record
            _context.Projects.Remove(project);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // Return a copy of the deleted data
            // return Ok(project);
            return NoContent();
        }

        // Private helper method that looks up an existing project by the supplied id
        private bool ProjectExists(int id)
        {
            return _context.Projects.Any(project => project.Id == id);
        }

        private int GetCurrentUserId()
        {
            return int.Parse(User.Claims.FirstOrDefault(claim => claim.Type == "Id").Value);
        }
    }
}
