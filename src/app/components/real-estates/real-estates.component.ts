import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RealEstate } from 'src/app/models/real-estate';

@Component({
  selector: 'app-real-estates',
  templateUrl: './real-estates.component.html',
  styleUrls: ['./real-estates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RealEstatesComponent {
  @Input()
  realEstates!: RealEstate[] | null;

  constructor() { }
}
