using Newtonsoft.Json;
using System.Collections.Generic;

namespace CemeteryApp.Models
{
    public class AspNetRole
    {
        public int Id { get; set; }
        public string Name { get; set; }

        // надо для внешних ключей
        [JsonIgnore]
        public List<AspNetUser> Users { get; set; }
        public AspNetRole()
        {
            Users = new List<AspNetUser>();
        }
    }
}
