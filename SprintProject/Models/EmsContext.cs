using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace SprintProject.Models
{
    public class EmsContext:DbContext
    {
        public EmsContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Attendance> Attendances { get; set; }

        public DbSet<Leave> Leaves { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<Project> Projects { get; set; }
    }
}
