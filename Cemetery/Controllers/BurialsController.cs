using System.Collections.Generic;
using System.Linq;
using CemeteryApp.Models;
using CemeteryApp.ViewModels;
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
        public IEnumerable<BurialViewModel> GetAll()
        {
            var burials =  db.Burials
                .Include(b => b.Other)
                .Include(b => b.Relative);
                // .Include(b => b.Place)
                    // .ThenInclude(p => p.Sector)
                        // .ThenInclude(s => s.Cemetery);
                // .ToList();

            // ВьюМодельки для переправки со всеми включающими
            // подструктурами, лол
            var burialViews = new List<BurialViewModel>();
            foreach (var burial in burials)
            {
                burialViews.Add(new BurialViewModel
                {
                    Id = burial.Id,
                    Surname = burial.Surname,
                    Name = burial.Name,
                    Patronymic = burial.Patronymic,
                    DeathDate = burial.DeathDate,
                    BirthDate = burial.BirthDate,
                    BurialDate = burial.BurialDate,
                    imgs = burial.imgs,
                    ChangeDate = burial.ChangeDate,
                    CreateDate = burial.CreateDate,
                    FuneralUrn = burial.FuneralUrn,
                    PlaceId = burial.PlaceId,

                    CertificateNumber = burial.Other.CertificateNumber,
                    RegistryOffice = burial.Other.RegistryOffice,
                    DateOfReference = burial.Other.DateOfReference,
                    RegistrationAddress = burial.Other.RegistrationAddress,
                    ArchivedNumber = burial.Other.ArchivedNumber,
                    CremationPlace = burial.Other.CremationPlace,
                    GraveDepth = burial.Other.GraveDepth,
                    DitcherSurname = burial.Other.DitcherSurname,
                    SoilType = burial.Other.SoilType,

                    RelativeFullName = burial.Relative.RelativeFullName,
                    Address = burial.Relative.Address,
                    Contacts = burial.Relative.Contacts,
                });
            }

            return burialViews;
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
        public IActionResult CreatePerson([FromBody]BurialViewModel person)
        {
            // Create new burial
            Burial newBurial = new Burial()
            {
                Surname = person.Surname,
                Name = person.Name,
                Patronymic = person.Patronymic,
                DeathDate = person.DeathDate,
                BirthDate = person.BirthDate,
                BurialDate = person.BurialDate,
                imgs = person.imgs,
                ChangeDate = person.ChangeDate,
                CreateDate = person.CreateDate,
                FuneralUrn = person.FuneralUrn,
                PlaceId = person.PlaceId,
            };

            // New other info about new burial
            Other other = new Other()
            {
                CertificateNumber = person.CertificateNumber,
                RegistryOffice = person.RegistryOffice,
                DateOfReference = person.DateOfReference,
                RegistrationAddress = person.RegistrationAddress,
                ArchivedNumber = person.ArchivedNumber,
                CremationPlace = person.CremationPlace,
                GraveDepth = person.GraveDepth,
                DitcherSurname = person.DitcherSurname,
                SoilType = person.SoilType,
            };

            // New relatives about new burial
            Relative relative = new Relative
            {
                RelativeFullName = person.RelativeFullName,
                Address = person.Address,
                Contacts = person.Contacts,
            };

            newBurial.Other = other;
            newBurial.Relative = relative;

            db.Burials.Add(newBurial);
            db.SaveChanges();

            return Ok(person);
        }

        [HttpPut]
        public IActionResult UpdatePerson([FromBody]BurialViewModel person)
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

            // Create new burial
            Burial newBurial = new Burial()
            {
                Id = person.Id,
                Surname = person.Surname,
                Name = person.Name,
                Patronymic = person.Patronymic,
                DeathDate = person.DeathDate,
                BirthDate = person.BirthDate,
                BurialDate = person.BurialDate,
                imgs = person.imgs,
                ChangeDate = person.ChangeDate,
                CreateDate = person.CreateDate,
                FuneralUrn = person.FuneralUrn,
                PlaceId = person.PlaceId,
            };

            // New other info about new burial
            Other other = new Other()
            {
                CertificateNumber = person.CertificateNumber,
                RegistryOffice = person.RegistryOffice,
                DateOfReference = person.DateOfReference,
                RegistrationAddress = person.RegistrationAddress,
                ArchivedNumber = person.ArchivedNumber,
                CremationPlace = person.CremationPlace,
                GraveDepth = person.GraveDepth,
                DitcherSurname = person.DitcherSurname,
                SoilType = person.SoilType,
            };

            // New relatives about new burial
            Relative relative = new Relative
            {
                RelativeFullName = person.RelativeFullName,
                Address = person.Address,
                Contacts = person.Contacts,
            };

            newBurial.Other = other;
            newBurial.Relative = relative;

            db.Burials.Update(newBurial);
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
