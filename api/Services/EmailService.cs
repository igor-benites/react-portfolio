using MailKit.Net.Smtp;
using MimeKit;
using Microsoft.Extensions.Configuration;

public class EmailService
{
    private readonly IConfiguration _configuration;

    public EmailService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public async Task SendEmailAsync(string to, string subject, string message)
    {
        var email = new MimeMessage();
        email.From.Add(MailboxAddress.Parse(_configuration["SmtpSettings:User"]));
        email.To.Add(MailboxAddress.Parse(to));
        email.Subject = subject;
        email.Body = new TextPart("plain") { Text = message };

        using var smtp = new SmtpClient();
        await smtp.ConnectAsync(
            _configuration["SmtpSettings:Host"],
            int.Parse(_configuration["SmtpSettings:Port"]),
            MailKit.Security.SecureSocketOptions.StartTls
        );
        await smtp.AuthenticateAsync(
            _configuration["SmtpSettings:User"],
            Environment.GetEnvironmentVariable("SMTP_PASSWORD") // Protect your password with ambient variables
        );
        await smtp.SendAsync(email);
        await smtp.DisconnectAsync(true);
    }
}
