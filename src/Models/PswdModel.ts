export default class PswdModel {
    constructor ( password: string, symbols: boolean, numbers: boolean,length: number ){
        this.passwordBody = password;
        this.Length = length;
        this.Symbols = symbols;
        this.Numbers = numbers;
    }
    passwordBody: string;
    Length: number;
    Symbols: boolean;
    Numbers: boolean;

    calculateStrength ():number {
        let Strength = this.Length;
        if ( this.Symbols ) { Strength +=1 }
        if ( this.Numbers ) { Strength += 1 }
        return Strength;
    }
}