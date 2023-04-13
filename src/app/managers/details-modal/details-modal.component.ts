import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsModalComponent {}
