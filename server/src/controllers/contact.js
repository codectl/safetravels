import EmailService from "../services/email";

export default class ContactController {

    /**
     * Receive contact message.
     */
    static async contactUs(req, res) {
        await EmailService.send(req.body);
        return res.sendStatus(204);
    }
}
