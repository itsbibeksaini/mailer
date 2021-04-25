import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { defaultMailPreview, MailPreviewState } from "./mail-preview-state";

@Injectable({
    providedIn: 'root'
  })
  
@StoreConfig({name: "mail-preview"})
export class MailPreviewStore extends Store<MailPreviewState>{
    constructor() { 
        super(defaultMailPreview())
    }
}