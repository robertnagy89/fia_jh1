using System.ComponentModel.DataAnnotations;

namespace FIA.Api.Models
{
    public class User
    {
        [Required]
        [StringLength(20, MinimumLength =3, ErrorMessage="Name must be between {2}, and {1} characters!")]
        public string Name { get; set; }
    }
}
