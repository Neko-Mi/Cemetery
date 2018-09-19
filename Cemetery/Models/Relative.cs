using Newtonsoft.Json;

namespace CemeteryApp.Models
{
    public class Relative
    {
        public int Id { get; set; }
        public string RelativeFullName { get; set; }
        public string Address { get; set; }
        public string Contacts { get; set; }

        [JsonIgnore]
        public int? PersonKey { get; set; }
        [JsonIgnore]
        public Burial Person { get; set; }
    }
}
