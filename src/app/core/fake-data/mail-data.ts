import { Mail } from '../models';

export const MAILS:Mail[] = []

let mail1:Mail = new Mail()
mail1.SENDER = "Dribbble"
mail1.SUBJECT = "Test mail"
mail1.IS_READED = false
mail1.DATE = new Date()
MAILS.push(mail1)

export function getInboxMails(): Mail[]{
    return MAILS
}

export function getSentMails(): Mail[]{
    return MAILS
}

export function getDraftMails(): Mail[]{
    return MAILS
}

export function getTrashedMails(): Mail[]{
    return MAILS
}