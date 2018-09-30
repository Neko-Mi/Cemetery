using System;

namespace CemeteryApp.ViewModels
{
    public class BurialViewModel
    {
        // burial's info
        public int Id { get; set; }
        public string Surname { get; set; }
        public string Name { get; set; }
        public string Patronymic { get; set; }
        public DateTime DeathDate { get; set; }
        public DateTime BirthDate { get; set; }
        public DateTime BurialDate { get; set; }
        public string[] imgs { get; set; }
        public DateTime ChangeDate { get; set; }
        public DateTime CreateDate { get; set; }
        public string FuneralUrn { get; set; }
        public int PlaceId { get; set; }

        // other
        public string CertificateNumber { get; set; }
        public string RegistryOffice { get; set; }
        public DateTime DateOfReference { get; set; }
        public string RegistrationAddress { get; set; }
        public int ArchivedNumber { get; set; }
        public string CremationPlace { get; set; }
        public double GraveDepth { get; set; }
        public string DitcherSurname { get; set; }
        public string SoilType { get; set; }

        // relative
        public string RelativeFullName { get; set; }
        public string Address { get; set; }
        public string Contacts { get; set; }
    }
}