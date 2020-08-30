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
    static GenerateChar () {
        let rnd = Math.floor(Math.random() * 27);
        switch(rnd){
            case 1:
                return "a";
            case 2:
                return "b";
            case 3:
                return "c";
            case 4:
                return "d";
            case 5:
                return "e";
            case 6:
                return "f";
            case 7:
                return "g";
            case 8:
                return "h";
            case 9:
                return "i";
            case 10:
                return "j";
            case 11:
                return "k";
            case 12:
                return "l";
            case 13:
                return "m";
            case 14:
                return "n";
            case 15:
                return "o";
            case 16:     
                return "p";   
            case 17:
                return "q";
            case 18:
                return "r";
            case 19:
                return "s";
            case 20:
                return "t";
            case 21:
                return "u";
            case 22:
                return "v";
            case 23:
                return "w";
            case 24:
                return "x";
            case 25:
                return "y";
            case 26:
                return "z";
            default:
                return "I"
        }
    }
    static GenerateSymbol () {}
}