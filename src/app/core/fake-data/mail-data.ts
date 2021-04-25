import { Mail, MailContent } from '../models';

// export const MAILS:Mail[] = []


function generateFakeMailData(counter:number): Mail[]{
    let MAILS: Mail[] = []
    for (let index = 0; index < counter; index++) {
        let mail: Mail = new Mail()
        mail.ID = index + ""
        mail.SENDER = "Dribbble"
        mail.SUBJECT = "Test mail"
        mail.IS_READED = false
        mail.DATE = new Date()

        let mailContent:MailContent = new MailContent()
        mailContent.CONTENT = "Testing mail"
        mailContent.IS_HTML = false
        mail.CONTENT =  mailContent
        MAILS.push(mail)
    }
    return MAILS
}

export function getInboxMails(): Mail[]{
    return generateFakeMailData(10)    
}

export function getSentMails(): Mail[]{
    return generateFakeMailData(5)    
}

export function getDraftMails(): Mail[]{
    return generateFakeMailData(3)    
}

// export function getTrashedMails(): Mail[]{
//     return MAILS
// }