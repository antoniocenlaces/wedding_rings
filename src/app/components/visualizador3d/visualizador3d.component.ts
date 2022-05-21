import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-visualizador3d',
  templateUrl: './visualizador3d.component.html',
  styleUrls: ['./visualizador3d.component.sass'],
})
export class Visualizador3dComponent implements OnInit {
  @Input() selectedRingIndex: Number = 1;
  @Input() selectedRingPair: boolean = false;

  @Output() changeIndex = new EventEmitter<number>();
  @Output() changeRingPair = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
  setSelectedIndex(index: number) {
    this.selectedRingIndex = index;
    this.changeIndex.emit(index);
  }
  setRingPair() {
    this.selectedRingPair = !this.selectedRingPair;
    this.changeRingPair.emit(this.selectedRingPair);
  }
}
