using System.Collections.Generic;
using System.Linq;
using lastCemetery3.Models;
using Microsoft.AspNetCore.Mvc;

namespace lastCemetery3
{
    [Route("api/[controller]")]
    public class CemeteriesController : Controller
    {
        CemeteryContext db;
        public CemeteriesController(CemeteryContext context)
        {
            db = context;
        }

        // api/Cemeteries
        // return all Cemeteriess
        [HttpGet]
        public IEnumerable<Cemetery> GetAll()
        {
            return db.Cemeteries.ToList();
        }

        // api/Cemeteries/id
        // return full info of one Cemetery
        [HttpGet("{id}")]
        public IActionResult GetCemetery(int id)
        {
            var Cemetery = db.Cemeteries.Find(id);
            // допиши этот кусок со всеми
            // инклудами
            // выборкой по странице
            // дополнительные фильтры мб?

            return new JsonResult(Cemetery);
        }

        // api/Cemeteries
        // create new Cemetery(aka burial)
        [HttpPost]
        public IActionResult CreateCemetery([FromBody]Cemetery Cemetery)
        {
            db.Cemeteries.Add(Cemetery);
            db.SaveChanges();

            return Ok(Cemetery);
        }

        [HttpPut]
        public IActionResult UpdateCemetery([FromBody]Cemetery Cemetery)
        {
            // validation
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            // check existing
            if (!db.Cemeteries.Any(pers => pers.Id == Cemetery.Id))
            {
                return NotFound(Cemetery);
            }

            db.Cemeteries.Update(Cemetery);
            db.SaveChanges();

            return Ok(Cemetery);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCemetery(int id)
        {
            var Cemetery = db.Cemeteries.Find(id);
            if (Cemetery == null)
            {
                return NotFound(id);
            }

            db.Cemeteries.Remove(Cemetery);
            db.SaveChanges();

            return Ok(id);
        }
    }
}
