using System;

namespace FIA.Api.Models
{
    // Dto
    public class Message
    {
        public string Sender { get; set; }

        public string Text { get; set; }

        public DateTime TimeStamp { get; set; }

        public string Avatar { get; set; }
    }
}