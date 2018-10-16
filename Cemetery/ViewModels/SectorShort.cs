using CemeteryApp.Models;

namespace CemeteryApp.ViewModels
{
    public class SectorShort
    {
        public SectorShort(Sector sector)
        {
            Id = sector.Id;
            SectorName = sector.SectorName;
        }
        
        public int Id { get; set; }
        public string SectorName { get; set; }
    }
}