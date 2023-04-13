import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagersComponent } from './managers.component';
import { ManagersRoutingModule } from './managers-routing.module';
import { ManagersModalModule } from './add-modal/managers-modal.module';
import { TranslateModule } from '@ngx-translate/core';
import { SearchModule } from '../shared/components/search/search.module';
import { NotificationModule } from '../shared/components/notification/notification.module';
import { ExportModule } from '../shared/components/export/export.module';
import { DetailsModalComponent } from './details-modal/details-modal.component';

@NgModule({
  declarations: [ManagersComponent, DetailsModalComponent, DetailsModalComponent],
  imports: [
    CommonModule,
    ManagersRoutingModule,
    TranslateModule,
    ManagersModalModule,
    SearchModule,
    NotificationModule,
    ExportModule,
  ],
})
export class ManagersModule {}
