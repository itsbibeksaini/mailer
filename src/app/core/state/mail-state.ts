import { Mail } from '../models';

export interface MailState{
    inboxMails: Mail[],
    sentMails: Mail[],
    draftMails: Mail[],
    trashedMails: Mail[],
    isLoaded: boolean,
    selectedFolder: string
}

export const getInitialState = () => {
    return {
        inboxMails: [],
        sentMails: [],
        draftMails: [],
        trashedMails: [],
        isLoaded: false,
        selectedFolder: ''
    }
}