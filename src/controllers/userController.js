import userService from '../services/userService.js';

export const getUser = (req, res) => {

    const { id } = req.params;

    const user = userService.getUser(id);

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

export const createUser = (req, res) => {

    const newUser = userService.createUser(req.body);

    if (!newUser) {
        res.status(400);
        res.send({
            "status": false,
            "message": "can't create user: it has null/empty value"
        });
    }

    res.send({
        "status": true,
        "data": { id: newUser }
    });
};