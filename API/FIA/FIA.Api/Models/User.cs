using System.ComponentModel.DataAnnotations;
using System;

public class User
{
    [Key]
    public Guid Id { get; set; }

    [Required]
    [StringLength(20, MinimumLength = 3, ErrorMessage = "Name must be between {2} and {1} characters.")]
    public string Name { get; set; }

    
    [EmailAddress(ErrorMessage = "Invalid email address.")]
    public string Email { get; set; }

    [Required]
    [MinLength(6, ErrorMessage = "Password must be at least 6 characters.")]
    public string Password { get; set; }

    public string Token { get; set; }

    public string Role { get; set; }
}