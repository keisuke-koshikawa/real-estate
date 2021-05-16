import { Component, Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { RealEstateFilter } from '../../models/state';

@Component({
  selector: 'app-real-estate-list-filter',
  templateUrl: './real-estate-list-filter.component.html',
  styleUrls: ['./real-estate-list-filter.component.scss']
})
export class RealEstateListFilterComponent implements OnDestroy, OnInit {
  @Input() set value(value: RealEstateFilter | null) {
    this.setFormValue(value as RealEstateFilter);
  }
  @Output() valueChange = new EventEmitter<RealEstateFilter>();

  form: FormGroup;

  private onDestroy = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      tradePriceFilter: ['']
    });
  }

  ngOnInit() {
    this.form.valueChanges.pipe(takeUntil(this.onDestroy)).subscribe(value => {
      this.valueChange.emit(value);
    });
  }

  ngOnDestroy() {
    this.onDestroy.next();
  }

  private setFormValue(value: RealEstateFilter) {
    this.form.setValue(value, { emitEvent: false });
  }

}
