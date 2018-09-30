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
    [Route("[controller]")]
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
        public IEnumerable<Burial> LookFor(string part)
        {
            var burials = db.Burials
                .Where(b => b.Surname.ToLower().Contains(part.ToLower())
                    || b.Name.ToLower().Contains(part.ToLower())
                    || b.Patronymic.ToLower().Contains(part.ToLower()))
                .ToList();
                //.Distinct();  // удалить повторы 

            return burials;
        }

    }
}