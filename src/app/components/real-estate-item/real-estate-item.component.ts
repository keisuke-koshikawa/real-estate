import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RealEstate } from 'src/app/models/real-estate';

@Component({
  selector: 'app-real-estate-item',
  templateUrl: './real-estate-item.component.html',
  styleUrls: ['./real-estate-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RealEstateItemComponent {
  @Input()
  estate!: RealEstate;

  constructor() { }


}
