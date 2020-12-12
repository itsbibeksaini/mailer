import { Mail } from '../models';

export interface MailState{
    mails: Mail[],
    isLoaded: boolean
}

export const getInitialState = () => {
    return {
        mails: [],
        isLoaded: false
    }
}