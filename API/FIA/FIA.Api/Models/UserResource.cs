using System.ComponentModel.DataAnnotations;

namespace FIA.Api.Models
{
    public class UserResource
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public decimal Quantity { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }

    }
}
