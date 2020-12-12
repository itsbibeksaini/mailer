export class Mail{

    private _SENDER! : string;
    public get SENDER() : string {
        return this._SENDER;
    }
    public set SENDER(v : string) {
        this._SENDER = v;
    }
    
    private _SUBJECT! : string;
    public get SUBJECT() : string {
        return this._SUBJECT;
    }
    public set SUBJECT(v : string) {
        this._SUBJECT = v;
    }
    
    private _DATE! : Date;
    public get DATE() : Date {
        return this._DATE;
    }
    public set DATE(v : Date) {
        this._DATE = v;
    }
    
    private _IS_READED! : boolean;
    public get IS_READED() : boolean {
        return this._IS_READED;
    }
    public set IS_READED(v : boolean) {
        this._IS_READED = v;
    }
}