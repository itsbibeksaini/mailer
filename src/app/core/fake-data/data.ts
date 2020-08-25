import { FakeMail } from '../../data-models/fake-mail';
import { MailContent } from '../../data-models/mail-content';

export function getInboxData():FakeMail[] {

    let fakeInboxData: FakeMail[] = new Array();

    let fakeData1:FakeMail = new FakeMail();
    fakeData1.SUBJECT = "Dribble 1";
    fakeData1.SENDER = "DRIBBLE DIGEST",
    fakeData1.MAIL_DATE = "JAN, 06 2016"
    fakeData1.IS_READED = false;
    
    let fakeData1Content:MailContent = new MailContent();
    fakeData1Content.CONTENT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    fakeInboxData.push(fakeData1);

    let fakeData2:FakeMail = new FakeMail();
    fakeData2.SUBJECT = "Dribble 2";
    fakeData2.SENDER = "DRIBBLE DIGEST",
    fakeData2.MAIL_DATE = "JAN, 06 2016"
    fakeData2.IS_READED = true;

    let fakeData2Content:MailContent = new MailContent();
    fakeData2Content.CONTENT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    fakeInboxData.push(fakeData2);

    return fakeInboxData;
}