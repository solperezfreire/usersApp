import { getUserService, postUserService } from "../services/userService.js";

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

export const postUserController = (req, res) => {

    const hasNullValue = Object.values(req.body).some(value => value === null || value == '');

    if (hasNullValue) {
        res.status(400);
        return res.send({
            "status": false,
            "message": "can't create user: it has null/empty value"
        });
    }

    const newUser = postUserService(req.body);

    res.send({
        "status": true,
        "data": { id: newUser }
    });
};