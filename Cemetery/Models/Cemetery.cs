using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace lastCemetery3.Models
{
    public class Cemetery
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public DateTime ChangeDate { get; set; }
        public DateTime CreateDate { get; set; }
        public string[] imgs { get; set; }
        
        [JsonIgnore]
        public List<Sector> Sectors { get; set; }
        public Cemetery()
        {
            Sectors = new List<Sector>();
        }
    }
}
