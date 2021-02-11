export class MailContent{
    
    
    private _CONTENT! : string;
    public get CONTENT() : string {
        return this._CONTENT;
    }
    public set CONTENT(v : string) {
        this._CONTENT = v;
    }
    

    
    private _IS_HTML! : string;
    public get IS_HTML() : string {
        return this._IS_HTML;
    }
    public set IS_HTML(v : string) {
        this._IS_HTML = v;
    }
    
    
}