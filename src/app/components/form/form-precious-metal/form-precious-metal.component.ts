import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Rings } from 'src/app/models/rings';

@Component({
  selector: 'app-form-precious-metal',
  templateUrl: './form-precious-metal.component.html',
  styleUrls: ['./form-precious-metal.component.sass'],
})
export class FormPreciousMetalComponent implements OnInit {
  selectedPartition: number = 1;

  public preciousMetalForm: FormGroup;

  @Input() rings: Rings = new Rings();
  @Output() changeForm = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {
    this.preciousMetalForm = this.fb.group({
      partition: [''],
      partition2: [''],
      partition3: [''],
      metal1: [''],
      alloy1: [''],
      surface1: [''],
      metal2: [''],
      alloy2: [''],
      surface2: [''],
      metal3: [''],
      alloy3: [''],
      surface3: [''],
    });
  }

  ngOnInit(): void {
    this.preciousMetalForm.controls['metal1'].patchValue(
      this.rings.ring1.preciousMetal.ringPreciousMetalSingleColoured
        .partitionUnit.colour
    );
    this.preciousMetalForm.controls['alloy1'].patchValue(
      this.rings.ring1.preciousMetal.ringPreciousMetalSingleColoured
        .partitionUnit.purity
    );
    this.preciousMetalForm.controls['surface1'].patchValue(
      this.rings.ring1.preciousMetal.ringPreciousMetalSingleColoured
        .partitionUnit.surface
    );
  }
  submit() {
    console.log('submit');
    // this.rings.ring1.preciousMetal.ringPreciousMetalSingleColoured.partitionUnit.colour = this.preciousMetalForm.controls['metalSingle'].value;
    // this.rings.ring1.preciousMetal.ringPreciousMetalSingleColoured.partitionUnit.surface = this.preciousMetalForm.controls['surfaceSingle'].value;
    // this.rings.ring1.preciousMetal.ringPreciousMetalSingleColoured.partitionUnit.purity = this.preciousMetalForm.controls['puritySingle'].value;
  }
  setPartition(index: number) {
    this.selectedPartition = index;
  }
}
