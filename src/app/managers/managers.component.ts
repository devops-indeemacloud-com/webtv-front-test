/* eslint-disable no-shadow */
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

declare const window: {
  bootstrap: {
    Modal: new (arg0: HTMLElement | null) => any;
    Offcanvas: new (arg0: HTMLElement | null) => any;
  };
};
@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagersComponent {
  isRenderManagersModal = false;
  isRenderDetailsModal = false;
  isRenderDeleteModal = false;
  modalData: any;
  currentModal: any;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  openModal(modalId: string, modalData?: any) {
    switch (modalId) {
      case 'managersModal':
        this.isRenderDetailsModal = false;
        this.isRenderDeleteModal = false;
        this.isRenderManagersModal = true;
        break;
      case 'detailModal':
        this.isRenderDetailsModal = true;
        this.isRenderManagersModal = true;
        this.isRenderDeleteModal = true;
        break;
      case 'deleteModal':
        this.isRenderDetailsModal = false;
        this.isRenderManagersModal = false;
        this.isRenderDeleteModal = true;
        break;
    }

    if (modalData) {
      this.modalData = modalData;
    } else {
      this.modalData = null;
    }

    setTimeout(() => {
      this.currentModal = new window.bootstrap.Modal(this.document.getElementById(modalId));
      this.currentModal.show();
    }, 0);
  }

  closeDriverModal() {
    this.isRenderManagersModal = false;
    this.currentModal.hide();
  }
  closeDeleteModal() {
    this.isRenderDeleteModal = false;
    this.currentModal.hide();
  }
  closeDetailsModal() {
    this.isRenderDetailsModal = false;
    this.currentModal.hide();
  }
}
