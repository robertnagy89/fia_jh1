using FIA.Api.Models;
using FIA.Api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FIA.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatController : ControllerBase
    {
        private readonly ChatService _chatService;
        public ChatController(ChatService chatService)
        {
            _chatService = chatService;
        }

        [Authorize]
        [HttpPost("register")]
        public IActionResult RegisterUser(User user)
        {
            if (_chatService.AddUserToList(user.Name))
            {
                // 204 code
                return NoContent();
            }

            return BadRequest("This name is unavailable, please choose another different name.");
        }
    }
}
