using CemeteryApp.Models;

namespace CemeteryApp.ViewModels
{
    public class CemeteryShort
    {
        public CemeteryShort(Cemetery cemetery)
        {
            Id = cemetery.Id;
            Name = cemetery.Name;
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}