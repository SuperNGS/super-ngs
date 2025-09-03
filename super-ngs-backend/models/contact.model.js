import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
export default class ContactModel {
    static async sendEmail(app, email, name, phone, message) {
        console.log("Sending email with the following details:");
        console.log(`Email: ${email}`);
        console.log(`Name: ${name}`);
        console.log(`Phone: ${phone}`);
        console.log(`Message: ${message}`);

        // Retrieve the receiver name from the database configuration
        let emailName;
        await app.locals.db.ref("/configuration").child("/email-name").once('value', async (config) => {
            emailName = await config.val();
        }).catch(err => {
            console.error("Error retrieving email-name configuration:", err);
            throw err;
        });

        // Retrieve the recipient email address from the database configuration
        let emailTo;
        await app.locals.db.ref("/configuration").child("/email-to").once('value', async (config) => {
            emailTo = await config.val();
        }).catch(err => {
            console.error("Error retrieving email-to configuration:", err);
            throw err;
        });

        // Retrieve the MailerSend verified sender email from the database configuration
        let emailFrom;
        await app.locals.db.ref("/configuration").child("/email-from").once('value', async (config) => {
            emailFrom = await config.val();
        }).catch(err => {
            console.error("Error retrieving email-from configuration:", err);
            throw err;
        });

        // Retrieve the MailerSend API key from the database configuration
        let apiKey;
        await app.locals.db.ref("/configuration").child("/email-key").once('value', async (config) => {
            apiKey = await config.val();
        }).catch(err => {
            console.error("Error retrieving email configuration:", err);
            throw err;
        });

        // Initialize MailerSend with the API key from configuration
        const mailerSend = new MailerSend({
            apiKey: apiKey,
        });

        // Set the sender to the configured MailerSend verified sender
        const sentFrom = new Sender(emailFrom, "Super NGS Contact Form");

        // Set the recipient to self
        const recipients = [
            new Recipient(emailTo, emailName)
        ];

        // Set the email parameters from the provided input, formatting the message body
        const emailParams = new EmailParams()
            .setFrom(sentFrom)
            .setTo(recipients)
            .setReplyTo(sentFrom)
            .setSubject("New Contact Form Submission: " + name)
            .setHtml("Greetings from the team, you got this message through MailerSend.")
            .setText("Greetings from the team, you got this message through MailerSend.");

        // Attempt to send the email through MailerSend
        await mailerSend.email.send(emailParams).then((response) => {
            return "Email sent successfully";
        }).catch((error) => {
            return error;
        });
    }
}