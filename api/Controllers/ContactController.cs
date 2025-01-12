using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly EmailService _emailService;

    public ContactController(EmailService emailService)
    {
        _emailService = emailService;
    }

    [HttpPost]
    public async Task<IActionResult> SendEmail([FromBody] ContactForm form)
    {
        if (!ModelState.IsValid || string.IsNullOrEmpty(form.Name) || string.IsNullOrEmpty(form.Email) || string.IsNullOrEmpty(form.Message))
        {
            return BadRequest(new { Message = "All fields are required." });
        }

        await _emailService.SendEmailAsync(
            "test@gmail.com", // Receiver
            $"Text from {form.Name}",
            $"De: {form.Email}\n\nText:\n{form.Message}"
        );

        return Ok(new { Message = "E-mail successfully sent!" });
    }
}

public class ContactForm
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string Message { get; set; }
}