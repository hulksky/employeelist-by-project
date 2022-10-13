namespace SprintProject.DTO
{
    internal class LoginDto
    {
        public int EmployeeId { get; set; }
        public Role Role { get; set; }
        public string Token { get; set; }
    }
}