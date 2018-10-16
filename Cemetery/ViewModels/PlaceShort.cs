using CemeteryApp.Models;

namespace CemeteryApp.ViewModels
{
    public class PlaceShort
    {
        public PlaceShort(Place place)
        {
            Id = place.Id;
            Number = place.Number;
        }

        public int Id { get; set; }
        public int Number { get; set; }
    }
}