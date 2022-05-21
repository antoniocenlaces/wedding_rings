import { Ring } from './ring';

export class Rings {
  public ring1: Ring;
  public ring2: Ring;
  public selectedRingIndex: number = 1;
  public ringPair: boolean = false;

  constructor() {
    this.ring1 = new Ring();
    this.ring2 = new Ring();
  }
}
