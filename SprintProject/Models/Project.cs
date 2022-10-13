using System.ComponentModel.DataAnnotations;

namespace SprintProject.Models
{
    public class Project
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Domain { get; set; }
    }
}
