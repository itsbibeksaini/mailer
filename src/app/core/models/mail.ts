import { MailContent } from "./mail-content";

export class Mail{

    private _ID! : string;
    public get ID() : string {
        return this._ID;
    }
    public set ID(v : string) {
        this._ID = v;
    }
    
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
    
    private _IS_DELETED! : string;
    public get IS_DELETED() : string {
        return this._IS_DELETED;
    }
    public set IS_DELETED(v : string) {
        this._IS_DELETED = v;
    }
    
    
    private _CONTENT! : MailContent;
    public get CONTENT() : MailContent {
        return this._CONTENT;
    }
    public set CONTENT(v : MailContent) {
        this._CONTENT = v;
    }
    
}