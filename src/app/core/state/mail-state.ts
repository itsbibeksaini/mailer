import { Mail } from '../models';

export interface MailState{
    inboxMails: Mail[],
    sentMails: Mail[],
    draftMails: Mail[],
    trashedMails: Mail[],
    isLoaded: boolean
}

export const getInitialState = () => {
    return {
        inboxMails: [],
        sentMails: [],
        draftMails: [],
        trashedMails: [],
        isLoaded: false
    }
}