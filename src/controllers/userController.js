import { getUser } from "../services/userService.js";

export const getUserController = (req, res) => {

    const { email } = req.body;

    const user = getUser(email);

    if (!user) {
        res.send({ "error": "not found" });
    }

    res.send(user);
};