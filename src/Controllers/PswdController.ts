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
        return res.status(201).send(newPswd.passwordBody);
    }

    static ProcessSpecifications(length: number, specifications: PswdSpecifications):PswdModel {
        try {
            const {
                number,
                symbols
            } = specifications;
            const newPswd: PswdModel = new PswdModel(
                    PswdController.GeneratePassword(length, number, symbols), 
                    symbols, 
                    number, 
                    length);
            return newPswd;
        } 
        catch (error) {
            console.log(error);
            return (new PswdModel([], false, false, 0));
        }
    }

    static GeneratePassword ( length: number, number: boolean, symbols: boolean ): string[]{
        try {
            const password: string[] = [];
            let i = 0;
            while ( i < length ){
                const rndNumber = Math.floor(Math.random()* 3);
                password[i] = PswdController.NextCharDecision(number, symbols, rndNumber)
                console.log(password[i], length, i, rndNumber);
                i += 1;
            }
            return password;
        } 
        catch (error) {
            console.log(error);
            return [];
        }
    }

    static NextCharDecision (number: boolean, symbols: boolean, rndNumber: number): string {
        try {
            if ( rndNumber == 0 ){
                let generatedChar = PswdController.GenerateChar();
                return generatedChar;
            }
            else if (rndNumber == 1 && number ){
                return Math.floor(Math.random() * 10).toLocaleString();
            }
            else if ( rndNumber == 2 && symbols ){
                return "&"            
            }
            else{
                return "A"
            }
        } 
        catch (error) {
            console.log(error)
            return "A"           
        }
    } 
}