import { Router, Response, Request, ErrorRequestHandler } from 'express';
import User from '../models/User';


const router: Router = Router();

router.post('/register', async (response: Response, request: Request) => {
    const user = new User({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
    });
    try {
        const savedUser = await user.save();
        response.status(200).send(user);
    } catch(error) {
        response.status(400).send(error);
    }
});

export default router;