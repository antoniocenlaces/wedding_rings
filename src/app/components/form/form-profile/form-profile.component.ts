import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  styleUrls: ['./form-profile.component.sass'],
})
export class FormProfileComponent implements OnInit, OnChanges {
  @Input() index: number = 1;
  @Output() changeProfileIndex = new EventEmitter<number>();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}

  SetProfileIndex(index: number) {
    this.index = index;
    this.changeProfileIndex.emit(this.index);
  }
}
