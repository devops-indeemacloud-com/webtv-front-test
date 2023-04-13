import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-managers-modal',
  templateUrl: './managers-modal.component.html',
  styleUrls: ['./managers-modal.component.scss'],
})
export class ManagersModalComponent {
  @Input() formData: any;
  @Output() reloadTableData = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  public form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  addForm(formName: string, group: FormGroup) {
    this.form.addControl(formName, group);
  }

  onSubmit() {
    //
  }

  closeCurrentModal() {
    this.closeModal.emit();
  }
}
