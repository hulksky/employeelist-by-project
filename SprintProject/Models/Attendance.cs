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
        //[Range(typeof(DateTime), "1/1/1960", "1/1/2001", ErrorMessage = "Date is out of Range")]
        [Required]
        //[WithinSixYears]
   
        public DateTime DateTime { get; set; }
        public virtual Employee? Employee { get; set; }
    }
}
