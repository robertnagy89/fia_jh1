using System.ComponentModel.DataAnnotations;
using System;

namespace FIA.Api.Models
{
    public class UserSettings
    {
        [Key]
        public Guid Id { get; set; }
        public string PrimaryColor { get; set; }
        public string SecondaryColor { get; set; }
        public string AccentColor { get; set; }
        public string AccentColorHover { get; set; }
        public string DangerColor { get; set; }
        public string TextColor { get; set; }

    }
}
