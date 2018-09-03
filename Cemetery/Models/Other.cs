using Newtonsoft.Json;
using System;

namespace lastCemetery3.Models
{
    public class Other
    {
        public int Id { get; set; }
        public string CertificateNumber { get; set; }
        public string RegistryOffice { get; set; }
        public DateTime DateOfReference { get; set; }
        public string RegistrationAddress { get; set; }
        public int ArchivedNumber { get; set; }
        public string CremationPlace { get; set; }
        public string GraveDepth { get; set; }
        public string DitcherSurname { get; set; }
        public string SoilType { get; set; }

        [JsonIgnore]
        public int? PersonKey { get; set; }
        [JsonIgnore]
        public Burial Person { get; set; }
    }
}
