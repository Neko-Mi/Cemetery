using System.Collections.Generic;
using System.Linq;
using CemeteryApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace CemeteryApp
{
    [Route("api/[controller]")]
    public class SectorsController : Controller
    {
        CemeteryContext db;
        public SectorsController(CemeteryContext context)
        {
            db = context;
        }

        // api/Sectors
        // return all Sectorss
        [HttpGet]
        public IEnumerable<Sector> GetAll()
        {
            return db.Sectors.ToList();
        }

        // api/Sectors/id
        // return full info of one Sector
        [HttpGet("{id}")]
        public IActionResult GetSector(int id)
        {
            var Sector = db.Sectors.Find(id);
            // допиши этот кусок со всеми
            // инклудами
            // выборкой по странице
            // дополнительные фильтры мб?

            return new JsonResult(Sector);
        }

        // api/Sectors
        // create new Sector(aka burial)
        [HttpPost]
        public IActionResult CreateSector([FromBody]Sector Sector)
        {
            db.Sectors.Add(Sector);
            db.SaveChanges();

            return Ok(Sector);
        }

        [HttpPut]
        public IActionResult UpdateSector([FromBody]Sector Sector)
        {
            // validation
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            // check existing
            if (!db.Sectors.Any(pers => pers.Id == Sector.Id))
            {
                return NotFound(Sector);
            }

            db.Sectors.Update(Sector);
            db.SaveChanges();

            return Ok(Sector);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteSector(int id)
        {
            var Sector = db.Sectors.Find(id);
            if (Sector == null)
            {
                return NotFound(id);
            }

            db.Sectors.Remove(Sector);
            db.SaveChanges();

            return Ok(id);
        }
    }
}
