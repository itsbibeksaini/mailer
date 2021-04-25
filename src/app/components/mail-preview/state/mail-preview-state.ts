import { Mail } from "src/app/core/models";

export interface MailPreviewState{
    selectedMail: Mail
    selectedFolder: Mail[]
}

export const defaultMailPreview = ()=> {
    return {
        selectedMail: new Mail(),
        selectedFolder: []
    }
}