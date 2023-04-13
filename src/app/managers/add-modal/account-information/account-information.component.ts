import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.scss', '../managers-modal.component.scss'],
})
export class AccountInformationComponent implements OnInit {
  @Input() formData = null;
  @Output() form = new EventEmitter<FormGroup>();
  accountInformationForm: FormGroup;
  public imageFile: SafeUrl | undefined = '';

  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe, private _sanitizer: DomSanitizer) {
    this.accountInformationForm = this.formBuilder.group({
      driverIsActive: [true],
      driverNumber: [''],
      employeeType: [''],
      driverFirstName: [''],
      driverLastName: [''],
      driverEmail: [''],
      driverMobile: [''],
      driverPassword: [''],
      driverStartDate: this.datePipe.transform(new Date(), 'YYYY-MM-dd'),
      driverEndDate: [{ value: '', disabled: true }],
      endDateCheckbox: [false],
    });
  }

  ngOnInit(): void {
    this.form.emit(this.accountInformationForm);
  }

  onChangePhoto(e: Event) {
    const file = (e.target as HTMLInputElement)?.files?.[0];

    if (file) {
      this.accountInformationForm.addControl('file_name', new FormControl(file.name));

      this.convertFile(file).subscribe((base64) => {
        this.accountInformationForm.addControl('file_base64_content', new FormControl(base64));
      });

      const photoURL = URL.createObjectURL(file);

      this.imageFile = this._sanitizer.bypassSecurityTrustUrl(photoURL);
    }
  }

  convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();

    reader.readAsBinaryString(file);
    reader.onload = (e) => result.next(btoa(e?.target?.result?.toString() || ''));

    return result;
  }
}
