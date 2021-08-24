using System;
using System.Collections.Generic;

namespace TaskTracker.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime DueDate { get; set; }
        public bool Completed { get; set; }
        public List<Task> Tasks { get; set; }
    }
}