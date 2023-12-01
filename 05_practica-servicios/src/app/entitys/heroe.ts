export class Heroe {

    private _id: number = 0;
    
    private _nombre: string = "";
    
    private _universo: string = "";

    constructor () {}

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get universo(): string {
        return this._universo;
    }
    public set universo(value: string) {
        this._universo = value;
    }

}
