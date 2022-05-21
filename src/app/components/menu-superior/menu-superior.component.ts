import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.sass'],
})
export class MenuSuperiorComponent implements OnInit {
  @Input() index: number;
  @Output() changeIndex = new EventEmitter<number>();

  constructor() {
    this.index = 1;
  }

  ngOnInit(): void {}

  setIndex(index: number) {
    this.index = index;

    this.changeIndex.emit(this.index);
  }
  goBack() {
    if (this.index > 1) {
      this.index--;
      this.changeIndex.emit(this.index);
    }
  }

  goForward() {
    if (this.index < 6) {
      this.index++;
      this.changeIndex.emit(this.index);
    }
  }
}
