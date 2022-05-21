import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-resumen-precio',
  templateUrl: './resumen-precio.component.html',
  styleUrls: ['./resumen-precio.component.sass'],
})
export class ResumenPrecioComponent implements OnInit {
  @Input() price1: string = '0€';
  @Input() price2: string = '0€';
  @Input() total: string = '0€';

  @Output() addToShoppingBag = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
}
