import PswdModel from '../Models/PswdModel';
import PswdSpecifications from '../Models/PswdSpecifications';
import { Request, Response } from 'express';

export default class PswdController {
    static async RecieveSpecifications (req: Request, res: Response) {
        const {
            length,
            specifications
        } = req.body;
        if ( !length || specifications.length == 0 ) {
            return res.status(404).send("BAD REQUEST");
        }
        return res.send(req.body);
    }

    // static GeneratePassword (req: Request, res: Response) {
    //     try {
            
    //     } 
    //     catch (error) {
    //         console.log(error);
    //     }
    // }
}