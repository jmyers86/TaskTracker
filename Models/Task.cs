using System;

namespace TaskTracker.Models
{
    public class Task
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string EstimatedTime { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime DueDate { get; set; }
        public DateTime CreatedOn { get; private set; } = DateTime.Now;
        public bool Completed { get; set; }

        public int ProjectId { get; set; }
    }
}