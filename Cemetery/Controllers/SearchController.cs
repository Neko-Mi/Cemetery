using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CemeteryApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CemeteryApp.Controllers
{
    //[Route("api/[controller]")]
    [Route("[controller]/[action]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        CemeteryContext db;

        public SearchController(CemeteryContext context)
        {
            db = context;
        }

        // search
        // .../
        [HttpGet("{part}")]
        public IEnumerable<Burial> Burial(string part)
        {
            var burials = db.Burials
                .Where(b => b.Surname.ToLower().Contains(part.ToLower())
                    || b.Name.ToLower().Contains(part.ToLower())
                    || b.Patronymic.ToLower().Contains(part.ToLower()))
                .ToList();
                //.Distinct();  // удалить повторы 

            return burials;
        }

        [HttpGet("{part}")]
        public IEnumerable<Place> Place(string part)
        {
            var places = db.Places
                .Where(place => place.Number.ToString().Contains(part.ToLower()));

            return places.ToList();
        }

        [HttpGet("{part}")]
        public IEnumerable<Sector> Sector(string part)
        {
            var sectors = db.Sectors
                .Where(sect => sect.SectorName.ToLower().Contains(part.ToLower()));

            return sectors.ToList();
        }

        [HttpGet("{part}")]
        public IEnumerable<Cemetery> Cemetery(string part)
        {
            var cemeteries = db.Cemeteries
                .Where(cem => cem.Name.ToLower().Contains(part.ToLower()));

            return cemeteries.ToList();
        }
    }
}