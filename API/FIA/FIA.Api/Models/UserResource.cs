﻿using System.ComponentModel.DataAnnotations;
using System;

namespace FIA.Api.Models
{
    public class UserResource
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
        public string Start { get; set; }
        public string End { get; set; }
    }
}
