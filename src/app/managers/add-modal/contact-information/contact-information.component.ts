import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

interface FormArrayType {
  contacts_info_addresses: any;
  contacts_info_phones: any;
}

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss', '../managers-modal.component.scss'],
})
export class ContactInformationComponent implements OnInit, OnChanges {
  @Input() formData: FormArrayType | null = null;
  @Output() form = new EventEmitter<FormGroup>();
  public contacts_info!: FormArray;
  public contacts_info_phones!: FormArray;
  public contactInformationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactInformationForm = this.fb.group({
      contacts_info: this.fb.array([this.createAddress()]),
      contacts_info_phones: this.fb.array([this.createPhone()]),
    });
  }

  ngOnChanges() {
    if (this.formData) {
      const contactInfoFormArray = this.contactInformationForm.get('contacts_info') as FormArray;

      contactInfoFormArray.clear();

      this.formData?.contacts_info_addresses?.forEach((data: any) => {
        const formGroup = this.createAddress();

        formGroup.patchValue(data);
        contactInfoFormArray.push(formGroup);
      });

      const workMobilePhonesFormArray = this.contactInformationForm.get('contacts_info_phones') as FormArray;

      workMobilePhonesFormArray.clear();

      this.formData?.contacts_info_phones?.forEach((phone: any) => {
        const phoneFormGroup = this.createPhone();

        phoneFormGroup.patchValue({ phone });
        workMobilePhonesFormArray.push(phoneFormGroup);
      });
    }

    if (!this.formData) {
      const contactInfoFormArray = this.contactInformationForm.get('contacts_info') as FormArray;
      const workMobilePhonesFormArray = this.contactInformationForm.get('contacts_info_phones') as FormArray;

      contactInfoFormArray.clear();
      workMobilePhonesFormArray.clear();
      contactInfoFormArray.push(this.createAddress());
      workMobilePhonesFormArray.push(this.createPhone());
    }
  }

  ngOnInit(): void {
    this.form.emit(this.contactInformationForm);
  }

  address() {
    return this.contactInformationForm.get('contacts_info') as FormArray;
  }

  phones() {
    return this.contactInformationForm.get('contacts_info_phones') as FormArray;
  }

  get addressControls() {
    return this.address()?.['controls'];
  }

  get phonesControls() {
    return this.phones()?.['controls'];
  }

  createAddress(): FormGroup {
    return this.fb.group({
      address: '',
      city: '',
      zip_code: '',
    });
  }

  createPhone(): FormGroup {
    return this.fb.group({
      phone: '',
    });
  }

  addAddress(): void {
    this.contacts_info = this.address();
    this.contacts_info.push(this.createAddress());
  }

  addPhone(): void {
    this.contacts_info_phones = this.phones();
    this.contacts_info_phones.push(this.createPhone());
  }

  removeAddress(i: number) {
    this.contacts_info.removeAt(i);
  }

  removePhone(i: number) {
    this.contacts_info_phones.removeAt(i);
  }
}
