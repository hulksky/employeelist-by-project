namespace SprintProject.DTO
{
    internal class LoginDto
    {
        public string Username { get; set; }
        public int EmployeeId { get; set; }
        public Designation Designation { get; set; }
        public string Token { get; set; }
    }
}