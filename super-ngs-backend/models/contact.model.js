export default class ContactModel {
    static async sendEmail(app, email, name, phone, message) {
        console.log("Sending email with the following details:");
        console.log(`Email: ${email}`);
        console.log(`Name: ${name}`);
        console.log(`Phone: ${phone}`);
        console.log(`Message: ${message}`);
        return true;
    }
}