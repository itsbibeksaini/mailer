import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { Mail } from "src/app/core/models";
import { MailStoreService } from "../../sidebar/state/mail-store/mail-store.service";
import { defaultMailPreview, MailPreviewState } from "./mail-preview-state";

@Injectable({
    providedIn: 'root'
  })
  
@StoreConfig({name: "mail-preview"})
export class MailPreviewStore extends Store<MailPreviewState>{
    constructor(private mailStore:MailStoreService) { 
        super(defaultMailPreview())
    }

    selectMail(id:string){        
        this.unselectAllMails()
        this.update(state => {
            
            const folder:Mail[] = [...state.selectedFolder]
            let readOnlyMail = folder.find(x => x.ID === id)
            let editableMail;
            if(readOnlyMail !== undefined){
              editableMail = Object.assign(new Mail(), readOnlyMail)
              editableMail.IS_SELECTED = true
              editableMail.IS_READED = true
              let index = folder.findIndex(x => x.ID === id)
              folder[index] = editableMail
              
            }
    
            this.updateMailStore(folder)
    
            return{
              ...state,
              selectedFolder:folder,
              selectedMail: editableMail
            }
            
          })
    }

    unselectAllMails(){
        this.update(state => {
            const folder:Mail[] = [...state.selectedFolder]
            let readOnlyMail = folder.find(x=>x.IS_SELECTED)
            let editableMail;
            if(readOnlyMail !== undefined){
                editableMail = Object.assign(new Mail(), readOnlyMail)
                editableMail.IS_SELECTED = false
                let index = folder.findIndex(x => x.ID === readOnlyMail?.ID)
                folder[index] = editableMail
            }

            return{
                ...state,
                selectedMail: editableMail,
                selectedFolder: folder
            }
        })
    }

    toggleSelection(folder:Mail[], state:MailPreviewState, isSelected:boolean){
        let readOnlyMail = folder.find(x=>x.IS_SELECTED)
            let editableMail;
            if(readOnlyMail !== undefined){
                editableMail = Object.assign(new Mail(), readOnlyMail)
                editableMail.IS_SELECTED = isSelected
                let index = folder.findIndex(x => x.ID === readOnlyMail?.ID)
                folder[index] = editableMail
            }

            return{
                ...state,
                selectedMail: editableMail,
                selectedFolder: folder
            }
    }

    updateMailStore(folder:Mail[]){
        this.mailStore.update(mailState =>{
            if(mailState.selectedFolder === 'inbox')
                return{
                    ...mailState,
                    inboxMails: folder
                }
            else if(mailState.selectedFolder === 'sent')
                return{
                    ...mailState,
                    sentMails: folder
                }
            else if(mailState.selectedFolder === 'draft')
                return{
                    ...mailState,
                    draftMails: folder
                }
            else if(mailState.selectedFolder === 'trashed')
                return{
                    ...mailState,
                    trashedMails: folder
                }
            else
                return{
                    ...mailState,                    
                }
        })
    }
}