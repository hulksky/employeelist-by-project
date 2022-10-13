using System.ComponentModel.DataAnnotations;


namespace SprintProject.Models
{
    public class Leave
    { 


        public int Id { get; set; }
        [Required]
        public int EmployeeId { get; set; }
        public virtual Employee? Employee { get; set; }
        [Required]
        public LeaveType LeaveType { get; set; }
        [Required]
        public int RequestedDays { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; }
        [Required]
        public StatusType StatusType { get; set; }
        [Required]
        public string Reason { get; set; }
        public int ManagerID { get; set; }




    }
}
