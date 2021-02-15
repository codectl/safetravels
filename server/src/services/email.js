import nodemailer from "nodemailer";

export default class EmailService {

    /**
     * Send email message.
     * @param data message data
     */
    static async send(data) {
        const name = data.name;
        const email = data.email;
        const message = data.message;
        const subject = "New message from: " + name + " (" + email + ")";

        const mail = {
            from: name,
            to: process.env.SMTP_USER,
            subject: subject,
            text: message
        }

        const transporter = nodemailer.createTransport({
            service: process.env.SMTP_SERVICE,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        await transporter.sendMail(mail);
    }
}
