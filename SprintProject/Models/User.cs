using System.ComponentModel.DataAnnotations;
using System.Data;

namespace SprintProject.Models
{
    public class User
    {

        public int Id { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public int EmployeeId { get; set; }
        public virtual Employee? Employee { get; set; }
        public Role Role { get; set; }

    }
}
