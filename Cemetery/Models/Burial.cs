/* Модель для изменения */

using Newtonsoft.Json;
using System;

namespace CemeteryApp.Models
{
    public class Burial
    {
        public int Id { get; set; }
        public string Surname { get; set; }
        public string Name { get; set; }
        public string Patronymic { get; set; }
        public DateTime DeathDate { get; set; }
        public DateTime BirthDate { get; set; }
        public DateTime BurialDate { get; set; }
        public string[] imgs { get; set; }
        // [JsonIgnore]
        public DateTime ChangeDate { get; set; }
        // [JsonIgnore]
        public DateTime CreateDate { get; set; }
        public string FuneralUrn { get; set; }

        //
        [JsonIgnore]
        public int PlaceId { get; set; }
        //[JsonIgnore]
        public Place Place { get; set; }
        //
        //[JsonIgnore]
        public Relative Relative { get; set; }
        //
        //[JsonIgnore]
        public Other Other { get; set; }
    }
}
