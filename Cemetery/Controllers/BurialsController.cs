using System.Collections.Generic;
using System.Linq;
using CemeteryApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CemeteryApp
{
    [Route("api/[controller]")]
    public class BurialsController : Controller
    {
        CemeteryContext db;
        public BurialsController(CemeteryContext context)
        {
            db = context;
        }

        // api/people
        // return all peoples
        [HttpGet]
        public IEnumerable<Burial> GetAll()
        {
            return db.Burials
                .Include(b => b.Other)
                .Include(b => b.Relative)
                .Include(b => b.Place)
                    .ThenInclude(p => p.Sector)
                        .ThenInclude(s => s.Cemetery)
                .ToList();
        }

        // api/people/id
        // return full info of one person
        [HttpGet("{id}")]
        public IActionResult GetPerson(int id)
        {
            var person = db.Burials.Find(id);
            // допиши этот кусок со всеми
            // инклудами
            // выборкой по странице
            // дополнительные фильтры мб?

            return new JsonResult(person);
        }

        // api/people
        // create new person(aka burial)
        [HttpPost]
        public IActionResult CreatePerson([FromBody]Burial person)
        {
            db.Burials.Add(person);
            db.SaveChanges();

            return Ok(person);
        }

        [HttpPut]
        public IActionResult UpdatePerson([FromBody]Burial person)
        {
            // validation
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            // check existing
            if (!db.Burials.Any(pers => pers.Id == person.Id))
            {
                return NotFound(person);
            }

            db.Burials.Update(person);
            db.SaveChanges();

            return Ok(person);
        }

        [HttpDelete("{id}")]
        public IActionResult DeletePerson(int id)
        {
            var person = db.Burials.Find(id);
            if (person == null)
            {
                return NotFound(id);
            }

            db.Burials.Remove(person);
            db.SaveChanges();

            return Ok(id);
        }
    }
}
