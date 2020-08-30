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
        const newPswd: PswdModel = PswdController.ProcessSpecifications(length, specifications[0]);
        if (newPswd.Length == 0){
            return res.status(500).send("We're facing some troubles, please do have patience, and try again");
        }
        return res.send(req.body);
    }

    static ProcessSpecifications(length: number, specifications: PswdSpecifications):PswdModel {
        try {
            const {
                number,
                symbols
            } = specifications;
            console.log(length, number, symbols);
            const newPswd: PswdModel = new PswdModel("", symbols, number, length);
            return newPswd;
        } 
        catch (error) {
            console.log(error);
            return (new PswdModel("", false, false, 0));
        }
    }

    // static GeneratePassword (req: Request, res: Response) {
    //     try {
            
    //     } 
    //     catch (error) {
    //         console.log(error);
    //     }
    // }
}