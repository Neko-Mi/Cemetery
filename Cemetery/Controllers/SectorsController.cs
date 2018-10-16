using System;
using System.Collections.Generic;
using System.Linq;
using CemeteryApp.Models;
using CemeteryApp.ViewModels;
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

        // Получение Всех "коротких" секторов
        // для карточек изменения/создания
        // ../api/sectors/short
        [HttpGet]
        [Route("api/[controller]/[action]")]
        public IEnumerable<SectorShort> Short()
        {
            var shorts = new List<SectorShort>();

            foreach(var sector in db.Sectors)
            {
                shorts.Add(new SectorShort(sector));
            }

            return shorts;
        }

        // Получения "коротких" секторов, которые
        // принадлежат кладбищу с Id передаваемым
        // в параметре
        // ../api/sectors/short/5
        [HttpGet("{id}")]
        [Route("api/[controller]/[action]/{id}")]
        public IEnumerable<SectorShort> Short(int id)
        {
            var shorts = new List<SectorShort>();

            foreach(var sector in db.Sectors.Where(sect => sect.cemeteryId == id))
            {
                shorts.Add(new SectorShort(sector));
            }

            return shorts;
        }

        // api/Sectors
        // return all Sectorss
        [HttpGet]
        public IEnumerable<Sector> GetAll()
        {
            return db.Sectors.ToList();
        }

        // api/Sectors/page
        [HttpGet("{page}")]
        public IActionResult GetSector(int page)
        {
            int pageSize = 30;
            var sectors = db.Sectors.Skip((page - 1) * pageSize).Take(pageSize).ToList();

            return new JsonResult(sectors);
        }

        // api/Sectors
        // create new Sector(aka burial)
        [HttpPost]
        public IActionResult CreateSector([FromBody]Sector Sector)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

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
                return NotFound(Sector.Id);
            }

            Sector.ChangeDate = DateTime.Now;
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
