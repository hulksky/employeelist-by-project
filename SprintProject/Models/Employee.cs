using System.ComponentModel.DataAnnotations;

namespace SprintProject.Models
{
    public class Employee
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Range(typeof(DateTime), "1/1/1960", "1/1/2001", ErrorMessage = "Date is out of Range")]
        public DateTime DateOfBirth { get; set; }
        public int ManagerID { get; set; }
        [Required]
        [EmailAddress]        
        public string Email { get; set; }

        [RegularExpression(@"^\d{10}$")]
        public long MobileNo { get; set; }
        public int ProjectId { get; set; }
        public virtual Project? Project { get; set; }

    }
}
