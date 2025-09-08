import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import FileSystem from "fs";
export default class ContactModel {
    static async sendEmail(app, email, name, phone, message) {
        if (!email || !name || !message) {
            throw new Error("Missing required fields: email, name, and message are required.");
        }

        // Retrieve the receiver name from the database configuration
        let emailName;
        await app.locals.db.ref("/configuration").child("/email-name").once('value', async (config) => {
            emailName = await config.val();
        }).catch(err => {
            throw err;
        });

        // Retrieve the recipient email address from the database configuration
        let emailTo;
        await app.locals.db.ref("/configuration").child("/email-to").once('value', async (config) => {
            emailTo = await config.val();
        }).catch(err => {
            throw err;
        });

        // Retrieve the MailerSend verified sender email from the database configuration
        let emailFrom;
        await app.locals.db.ref("/configuration").child("/email-from").once('value', async (config) => {
            emailFrom = await config.val();
        }).catch(err => {
            throw err;
        });

        // Read the MailerSend API key from a secure configuration file
        const apiKey = process.env.MAILER_SEND_KEY ?? FileSystem.readFileSync('config/mailerSendKey.key', 'utf8');

        // Initialize MailerSend with the API key from configuration
        const mailerSend = new MailerSend({
            apiKey: apiKey,
        });

        // Set the sender to the configured MailerSend verified sender
        const sentFrom = new Sender(emailFrom, "Super NGS Contact Form");

        // Set the recipient to self
        let recipients = [
            new Recipient(emailTo, emailName)
        ];

        let htmlMessage = `
            <h1>New Contact Form Submission</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;

        let textMessage = `
            New Contact Form Submission
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
        `;

        // Set the email parameters from the provided input, formatting the message body
        const emailParams = new EmailParams()
            .setFrom(sentFrom)
            .setTo(recipients)
            .setReplyTo(sentFrom)
            .setSubject("New Contact Form Submission: " + name)
            .setHtml(htmlMessage)
            .setText(textMessage);

        let success = [];

        // Attempt to send the email through MailerSend
        await mailerSend.email.send(emailParams).then((response) => {
            success[0] = "Contact form submitted successfully.";
        }).catch((error) => {
            throw error;
        });

        recipients = [
            new Recipient(email, name)
        ];

        htmlMessage = `
            <h1>Thank You for Contacting Us</h1>
            <p>Dear ${name},</p>
            <p>Thank you for reaching out. We have received your message and will get back to you as soon as possible.</p>
            <br>
            <p>Best regards,</p>
            <p>The Super NGS Team</p>
        `;

        textMessage = `
            Thank You for Contacting Us
            Dear ${name},
            Thank you for reaching out. We have received your message and will get back to you as soon as possible.
            Best regards,
            The Super NGS Team
        `;

        // Set the email parameters for the auto-response
        const autoResponseParams = new EmailParams()
            .setFrom(sentFrom)
            .setTo(recipients)
            .setReplyTo(sentFrom)
            .setSubject("Thank You for Contacting Us")
            .setHtml(htmlMessage)
            .setText(textMessage);

        // Attempt to send the auto-response email through MailerSend
        await mailerSend.email.send(autoResponseParams).then((response) => {
            success[1] = "Auto-response email sent successfully.";
        }).catch((error) => {
            throw error;
        });

        if (success && success.length == 2) {
            return success;
        } else {
            throw new Error("Failed to send one or more emails.");
        }
    }
}