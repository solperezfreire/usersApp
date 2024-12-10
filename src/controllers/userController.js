import { getUserService } from "../services/userService.js";

export const getUserController = (req, res) => {

    const { id } = req.params;

    const user = getUserService(id);

    if (!user) {
        res.status(404);
        res.send({
            "status": false,
            "message": "user not found"
        });
    }

    res.send({
        "status": true,
        "data": user
    });
};