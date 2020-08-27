// import PswdModel from '../Models/PswdModel';
import { Request, Response } from 'express';

export default class PswdController {
    static async GeneratePassword (req: Request, res: Response) {
        try {
            const {
                length,
                specifications
            } = req.body;
            console.log(length, specifications);
            if ( !length || specifications.length() == 0 ) {
                return res.send("BAD REQUEST").status(404);
            }
            return req.body;
        } 
        catch (error) {
            console.log(error);
        }
    }
}