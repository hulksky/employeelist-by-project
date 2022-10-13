using System.ComponentModel.DataAnnotations;


namespace SprintProject.Models
{
    public class Attendance
    {
       
        public int Id { get; set; }
        [Required]
        public int EmployeeId { get; set; }
        [Required]
        public Status Status { get; set; }
        [Required]
   
        public DateTime DateTime { get; set; }
        public virtual Employee? Employee { get; set; }
    }
}
