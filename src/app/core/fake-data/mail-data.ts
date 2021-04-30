import { Mail, MailContent } from '../models';

// export const MAILS:Mail[] = []


function generateFakeMailData(counter:number,isReaded:boolean): Mail[]{
    let MAILS: Mail[] = []
    for (let index = 1; index <= counter; index++) {
        let mail: Mail = new Mail()
        mail.ID = index + ""
        mail.SENDER = "Dribbble"
        mail.SUBJECT = "Test mail"
        mail.IS_READED = isReaded
        mail.DATE = new Date()
        mail.INITIALS = "D"

        let mailContent:MailContent = new MailContent()
        mailContent.CONTENT = "Test mail " + index
        mailContent.IS_HTML = false
        mail.CONTENT =  mailContent
        MAILS.push(mail)
    }
    return MAILS
}

export function getInboxMails(): Mail[]{
    return generateFakeMailData(10, false)    
}

export function getSentMails(): Mail[]{
    return generateFakeMailData(5, true)    
}

export function getDraftMails(): Mail[]{
    return generateFakeMailData(3, true)    
}

// export function getTrashedMails(): Mail[]{
//     return MAILS
// }