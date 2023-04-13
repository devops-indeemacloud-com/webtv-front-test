import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { AccountInformationComponent } from './account-information/account-information.component';
import { ManagersModalComponent } from './managers-modal.component';

@NgModule({
  declarations: [ManagersModalComponent, AccountInformationComponent, ContactInformationComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ManagersModalComponent],
  providers: [DatePipe],
})
export class ManagersModalModule {}
