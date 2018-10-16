using System;
using System.Collections.Generic;
using System.Linq;
using CemeteryApp.Models;
using CemeteryApp.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace CemeteryApp
{
    [Route("api/[controller]")]
    public class CemeteriesController : Controller
    {
        CemeteryContext db;
        public CemeteriesController(CemeteryContext context)
        {
            db = context;
        }

        // Метод для коротких записей кладбищей
        // для выбора в карточках добавления/изменения
        // api/[controller]/[action]
        [HttpGet]
        [Route("api/[controller]/[action]")]
        public IEnumerable<CemeteryShort> Short()
        {
            var shorts = new List<CemeteryShort>();
            
            foreach(var cemetery in db.Cemeteries)
            {
                shorts.Add(new CemeteryShort(cemetery));
            }

            return shorts;
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

            return new JsonResult(Cemetery);
        }

        // api/Cemeteries
        // create new Cemetery
        [HttpPost]
        public IActionResult CreateCemetery([FromBody]Cemetery Cemetery)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            db.Cemeteries.Add(Cemetery);
            db.SaveChanges();

            return Ok(Cemetery);
        }

        // 
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

            Cemetery.ChangeDate = DateTime.Now;
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

            return Ok(Cemetery);
        }
    }
}
