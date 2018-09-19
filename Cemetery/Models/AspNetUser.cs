using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace CemeteryApp.Models
{
    public class AspNetUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public bool EmailConfirmed { get; set; }
        public string PasswordHash { get; set; }
        public string PhoneNumber { get; set; }
        public bool PhoneNumberConfirmed { get; set; }
        public int AccessFailedCount { get; set; }
        
        // внешний ключ
        public int RoleId { get; set; }
        public AspNetRole Role { get; set; }
    }
}
