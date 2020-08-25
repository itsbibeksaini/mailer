import { MailContent } from "./mail-content";

export class FakeMail{
        
    private _SENDER : string;
    public get SENDER() : string {
        return this._SENDER;
    }
    public set SENDER(v : string) {
        this._SENDER = v;
    }
    
    private _SUBJECT : string;
    public get SUBJECT() : string {
        return this._SUBJECT;
    }
    public set SUBJECT(v : string) {
        this._SUBJECT = v;
    }    
    
    private _MAIL_DATE : string;
    public get MAIL_DATE() : string {
        return this._MAIL_DATE;
    }
    public set MAIL_DATE(v : string) {
        this._MAIL_DATE = v;
    }
    
    private _MAIL_CONTENT : MailContent;
    public get MAIL_CONTENT() : MailContent {
        return this._MAIL_CONTENT;
    }
    public set MAIL_CONTENT(v : MailContent) {
        this._MAIL_CONTENT = v;
    }    

    
    private _IS_READED : boolean;
    public get IS_READED() : boolean {
        return this._IS_READED;
    }
    public set IS_READED(v : boolean) {
        this._IS_READED = v;
    }
    
    
}