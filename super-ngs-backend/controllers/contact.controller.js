import ContactModel from '../models/contact.model.js';

export default class ContactController {

    static async sendEmail(req, res) {
        const email = req.body?.email;
        const name = req.body?.name;
        const phone = req.body?.phone;
        const message = req.body?.message;
        ContactModel.sendEmail(req.app, email, name, phone, message)
            .then((data) => {
                return res.status(201).json({
                    success: true,
                    data: data
                });
            })
            .catch((err) => { 
                console.error(err);
                return res.status(500).json({
                    success: false,
                    message: 'Internal Server Error'
                });
             });
    }
}