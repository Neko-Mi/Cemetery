using System.Collections.Generic;
using System.Linq;
using CemeteryApp.Models;
using CemeteryApp.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace CemeteryApp
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

        // Получение Всех "коротких" мест захоронений
        // для карточек изменения/создания
        // ../api/places/short
        [HttpGet]
        [Route("api/[controller]/[action]")]
        public IEnumerable<PlaceShort> Short()
        {
            var shorts = new List<PlaceShort>();

            foreach(var place in db.Places)
            {
                shorts.Add(new PlaceShort(place));
            }

            return shorts;
        }

        // Получения "коротких" мест захоронений, которые
        // принадлежат сектору с Id передаваемым
        // в параметре
        // ../api/places/short/5
        [HttpGet("{id}")]
        [Route("api/[controller]/[action]/{id}")]
        public IEnumerable<PlaceShort> Short(int id)
        {
            var shorts = new List<PlaceShort>();

            foreach(var place in db.Places.Where(pl => pl.sectorId == id))
            {
                shorts.Add(new PlaceShort(sector));
            }

            return shorts;
        }

        // api/Places/id
        // return full info of one Place
        [HttpGet("{id}")]
        public IActionResult GetPlace(int id)
        {
            var Place = db.Places.Find(id);

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
