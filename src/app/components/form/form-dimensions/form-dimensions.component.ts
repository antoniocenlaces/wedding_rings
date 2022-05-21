import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rings } from '../../../models/rings';

@Component({
  selector: 'app-form-dimensions',
  templateUrl: './form-dimensions.component.html',
  styleUrls: ['./form-dimensions.component.sass'],
})
export class FormDimensionsComponent implements OnInit {
  public ringDimensionsForm: FormGroup;

  @Input() rings: Rings = new Rings();
  @Output() changeForm = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {
    this.ringDimensionsForm = this.fb.group({
      ringWidth: ['', [Validators.required]],
      ringThickness: ['', [Validators.required]],
      automaticThickness: [''],
      ringIntPerimeter: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.ringDimensionsForm.controls['ringWidth'].patchValue(
      this.rings.ring1.dimensions.width
    );
    this.ringDimensionsForm.controls['ringThickness'].patchValue(
      this.rings.ring1.dimensions.height
    );
    this.ringDimensionsForm.controls['ringIntPerimeter'].patchValue(
      this.rings.ring1.dimensions.intDiameter
    );

    this.ringDimensionsForm.valueChanges.subscribe(() => {
      if (this.rings.selectedRingIndex == 1 || this.rings.ringPair == true) {
        this.rings.ring1.dimensions.width =
          this.ringDimensionsForm.controls['ringWidth'].value;
        this.rings.ring1.dimensions.height =
          this.ringDimensionsForm.controls['ringThickness'].value;
        this.rings.ring1.dimensions.intDiameter =
          this.ringDimensionsForm.controls['ringIntPerimeter'].value;
      }

      if (this.rings.selectedRingIndex == 2 || this.rings.ringPair == true) {
        this.rings.ring2.dimensions.width =
          this.ringDimensionsForm.controls['ringWidth'].value;
        this.rings.ring2.dimensions.height =
          this.ringDimensionsForm.controls['ringThickness'].value;
        this.rings.ring2.dimensions.intDiameter =
          this.ringDimensionsForm.controls['ringIntPerimeter'].value;
      }
      this.changeForm.emit(true);
    });
  }

  UpdateValues() {
    if (this.rings.selectedRingIndex == 1 || this.rings.ringPair == true) {
      this.ringDimensionsForm.controls['ringWidth'].patchValue(
        this.rings.ring1.dimensions.width,
        { emitEvent: false }
      );
      this.ringDimensionsForm.controls['ringThickness'].patchValue(
        this.rings.ring1.dimensions.height,
        { emitEvent: false }
      );
      this.ringDimensionsForm.controls['ringIntPerimeter'].patchValue(
        this.rings.ring1.dimensions.intDiameter,
        { emitEvent: false }
      );
    }
    if (this.rings.selectedRingIndex == 2 || this.rings.ringPair == true) {
      this.ringDimensionsForm.controls['ringWidth'].patchValue(
        this.rings.ring2.dimensions.width,
        { emitEvent: false }
      );
      this.ringDimensionsForm.controls['ringThickness'].patchValue(
        this.rings.ring2.dimensions.height,
        { emitEvent: false }
      );
      this.ringDimensionsForm.controls['ringIntPerimeter'].patchValue(
        this.rings.ring2.dimensions.intDiameter,
        { emitEvent: false }
      );
    }
  }
}
