using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace lastCemetery3.Models
{
    public class Place
    {
        public int Id { get; set; }
        public int Row { get; set; }
        public int Number { get; set; }
        public string PlaceType { get; set; }
        public string Status { get; set; }
        public double Width { get; set; }
        public double Height { get; set; }
        public DateTime CreatedAt { get; set; }

        //
        [JsonIgnore]
        public int SectorId { get; set; }
        //[JsonIgnore]
        public Sector Sector { get; set; }

        [JsonIgnore]
        public List<Burial> Persons { get; set; }
        public Place()
        {
            Persons = new List<Burial>();
        }
    }
}
