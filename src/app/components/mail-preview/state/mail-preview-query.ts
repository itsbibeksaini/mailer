import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import { MailPreviewState } from "./mail-preview-state";
import { MailPreviewStore } from "./mail-preview-store";


@Injectable({
  providedIn: 'root'
})export class MailPreviewQuery extends Query<MailPreviewState>{
    constructor(private mailPreviewStore: MailPreviewStore){
        super(mailPreviewStore);
      }
}