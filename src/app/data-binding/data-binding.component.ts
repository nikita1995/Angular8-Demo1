import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  title = 'Data Binding Component'
  btnValue: Boolean = false;
  count = 0;
  @Input() userName = 'NA';
  @Output() counter: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  btnClick() {
    this.title = 'Event Binding Demo';
    this.count = this.count + 1;
    this.counter.emit(this.count);
  }
  onResetClick() {
    this.title = 'Data Binding Component';
    this.btnValue = false;
  }
}
