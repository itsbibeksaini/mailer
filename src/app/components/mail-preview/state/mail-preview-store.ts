import { Store } from "@datorama/akita";
import { defaultMailPreview, MailPreviewState } from "./mail-preview-state";

export class MailPreviewStore extends Store<MailPreviewState>{
    constructor() { 
        super(defaultMailPreview())
    }
}