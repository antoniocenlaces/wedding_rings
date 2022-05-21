import { Component, OnInit, ViewChild } from '@angular/core';
import { FormDimensionsComponent } from './components/form/form-dimensions/form-dimensions.component';
import { Rings } from './models/rings';
import { WeddingServiceService } from './services/wedding-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  @ViewChild(FormDimensionsComponent)
  formDimensionsComponent!: FormDimensionsComponent;

  index: number = 1;

  selectedRingIndex = 1;

  rings: Rings;

  constructor(private weddingService: WeddingServiceService) {
    this.rings = new Rings();
  }
  ngOnInit(): void {
    this.updateRingsInBackend();
  }
  title = 'wedding-configurator';

  // Visualizar
  setSelectorIndex(index: number) {
    this.index = index;
  }

  setSelectedRing(index: number) {
    this.rings.selectedRingIndex = index;
    this.formDimensionsComponent.UpdateValues();
  }
  setSelectedRingPair(selected: boolean) {
    this.rings.ringPair = selected;
  }

  // 1. Profiles
  setProfileIndex(index: number) {
    if (this.rings.selectedRingIndex == 1 || this.rings.ringPair) {
      this.rings.ring1.profile.index = index;
    }
    if (this.rings.selectedRingIndex == 2 || this.rings.ringPair) {
      this.rings.ring2.profile.index = index;
    }

    this.updateRingsInBackend();
  }
  getRingProfileIndex() {
    return this.rings.selectedRingIndex == 1
      ? this.rings.ring1.profile.index
      : this.rings.ring2.profile.index;
  }

  updateRingsInBackend() {
    console.log('Connecting to backend');
    this.weddingService.computeRingInBackend(this.rings).subscribe(
      (res) => {
        console.log('Result is ', res);
      },
      (error) => {
        console.error('HAY UN ERROR');
      }
    );
  }
}
