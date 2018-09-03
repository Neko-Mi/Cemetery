using System.Collections.Generic;
using System.Linq;
using lastCemetery3.Models;
using Microsoft.AspNetCore.Mvc;

namespace lastCemetery3
{
    [Route("api/[controller]")]
    public class PlacesController : Controller
    {
        CemeteryContext db;
        public PlacesController(CemeteryContext context)
        {
            db = context;
        }

        // api/Places
        // return all Placess
        [HttpGet]
        public IEnumerable<Place> GetAll()
        {
            return db.Places.ToList();
        }

        // api/Places/id
        // return full info of one Place
        [HttpGet("{id}")]
        public IActionResult GetPlace(int id)
        {
            var Place = db.Places.Find(id);
            // допиши этот кусок со всеми
            // инклудами
            // выборкой по странице
            // дополнительные фильтры мб?

            return new JsonResult(Place);
        }

        // api/Places
        // create new Place(aka burial)
        [HttpPost]
        public IActionResult CreatePlace([FromBody]Place Place)
        {
            db.Places.Add(Place);
            db.SaveChanges();

            return Ok(Place);
        }

        [HttpPut]
        public IActionResult UpdatePlace([FromBody]Place Place)
        {
            // validation
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            // check existing
            if (!db.Places.Any(pers => pers.Id == Place.Id))
            {
                return NotFound(Place);
            }

            db.Places.Update(Place);
            db.SaveChanges();

            return Ok(Place);
        }

        [HttpDelete("{id}")]
        public IActionResult DeletePlace(int id)
        {
            var Place = db.Places.Find(id);
            if (Place == null)
            {
                return NotFound(id);
            }

            db.Places.Remove(Place);
            db.SaveChanges();

            return Ok(id);
        }
    }
}
