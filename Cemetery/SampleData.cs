using System.Linq;
using CemeteryApp.Models;
using System.IO;
using System;

namespace CemeteryApp
{
    public static class SampleData
    {
        public static void Initialize(CemeteryContext context)
        {
            if (context.Roles.Any())
            {
                return;
            }

            var role = new AspNetRole
            {
                Name = "admin"
            };
            context.Roles.Add(role);
            context.SaveChanges();

            var user = new AspNetUser
            {
                UserName = "demo",
                PasswordHash = "demo",
                Role = role
            };
            context.Users.Add(user);
            context.SaveChanges();

            var cem = new Cemetery
            {
                Address = "Воронино посёлок, 1",
                Name = "Кладбище Воронино",
                CreateDate = DateTime.Now,
                ChangeDate = DateTime.Now,
                imgs = new string[] { "assets/images/img.jpg", "assets/images/img1.jpg", "assets/images/img2.jpg" }
            };
            context.Cemeteries.Add(cem);
            context.SaveChanges();

            var sector = new Sector
            {
                SectorName = "35",
                CreatedDate = DateTime.Now,
                ChangeDate = DateTime.Now,
                Cemetery = cem,
                Imgs = new string[] { "assets/images/img.jpg", "assets/images/img1.jpg", "assets/images/img2.jpg" }
            };
            context.Sectors.Add(sector);
            context.SaveChanges();

            for (int i = 1; i <= 224; i++)
            {
                var place = new Place
                {
                    CreatedAt = DateTime.Now,
                    Sector = sector,
                    Number = i
                };

                context.Places.Add(place);
            }
            context.SaveChanges();

            var textData = File.ReadAllLines(@"cemetery_data.txt");
            foreach (var line in textData)
            {
                var data = line.Split(" ");

                // deathdate
                var ddstr = data[5].Split(".");
                DateTime dd = new DateTime(
                    int.Parse(ddstr[2]),
                    int.Parse(ddstr[1]),
                    int.Parse(ddstr[0])
                );
                // birthdate
                var bdstr = data[4].Split(".");
                DateTime bd = new DateTime(
                    int.Parse(bdstr[2]),
                    int.Parse(bdstr[1]),
                    int.Parse(bdstr[0])
                );

                var burial = new Burial
                {
                    FullName = data[1] + " " + data[2] + " " + data[3],
                    DeathDate = dd,
                    BirthDate = bd,
                    BurialDate = bd,
                    CreatedAt = DateTime.Now,
                    FuneralUrn = "нет",
                    Place = context.Places.FirstOrDefault(p => p.Number == int.Parse(data[0])),
                    DeathCertificate = "СВ-123456",
                    ArchivedNumber = (new Random()).Next(10000),
                    BurialType = "нормальное",
                    imgs = new string[] {"assets/images/img.jpg", "assets/images/img1.jpg", "assets/images/img2.jpg" }
                };
                context.Burials.Add(burial);

                var other = new Other()
                {
                    PersonKey = burial.Id,
                    GraveDepth = "2m",
                    DateOfReference = bd,
                    RegistrationAddress = "Томский ЗАГС",
                    SoilType = "хорошее",

                };
                context.Others.Add(other);

                var relat = new Relative() { RelativeFullName = "Chelpa", Address = "Baker st., 7", Contacts = "89002281488", PersonKey = burial.Id };
                context.Relatives.Add(relat);
            }
            context.SaveChanges();
        }

        public static void TestData(CemeteryContext db)
        {
            if (db.Cemeteries.Any())
            {
                return;
            }

            for (int c = 1; c <= 10; c++)
            {
                var cem = new Cemetery
                {
                    Address = "Воронино посёлок, 1",
                    Name = "Кладбище Воронино" + c,
                    CreateDate = DateTime.Now,
                    ChangeDate = DateTime.Now
                };
                db.Cemeteries.Add(cem);

                for (int s = 1; s <= 40; s++)
                {
                    var sect = new Sector
                    {
                        SectorName = $"{s}",
                        CreatedDate = DateTime.Now,
                        ChangeDate = DateTime.Now,
                        Cemetery = cem
                    };
                    db.Sectors.Add(sect);

                    for (int p = 1; p <= 125; p++)
                    {
                        var place = new Place
                        {
                            CreatedAt = DateTime.Now,
                            Sector = sect,
                            Number = p
                        };
                        db.Places.Add(place);

                        var pers1 = new Burial
                        {
                            FullName = "Иванов Иван Иванович",
                            DeathDate = DateTime.Now,
                            BirthDate = new DateTime(1980, 10, 13),
                            CreatedAt = DateTime.Now,
                            FuneralUrn = "нет",
                            Place = place
                        };
                        var pers2 = new Burial
                        {
                            FullName = "Иванова Ивна Ивановна",
                            DeathDate = DateTime.Now,
                            BirthDate = new DateTime(1980, 10, 13),
                            CreatedAt = DateTime.Now,
                            FuneralUrn = "нет",
                            Place = place
                        };
                        db.Burials.AddRange(new [] { pers1, pers2 });
                    }
                }
            }
            db.SaveChanges();
        }
    }
}
