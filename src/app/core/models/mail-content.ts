export class MailContent{
    
    
    private _CONTENT! : string;
    public get CONTENT() : string {
        return this._CONTENT;
    }
    public set CONTENT(v : string) {
        this._CONTENT = v;
    }
    

    
    private _IS_HTML! : boolean;
    public get IS_HTML() : boolean {
        return this._IS_HTML;
    }
    public set IS_HTML(v : boolean) {
        this._IS_HTML = v;
    }
    
    
}