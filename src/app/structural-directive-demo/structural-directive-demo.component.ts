import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive-demo',
  templateUrl: './structural-directive-demo.component.html',
  styleUrls: ['./structural-directive-demo.component.scss']
})
export class StructuralDirectiveDemoComponent implements OnInit {
  countries = [{code: 'in',name: 'India', population: '1001'},
  {code: 'ch',name: 'China', population: '500'},
  {code: 'us',name: 'USA', population: '1007'}];
  countryList = ['India','China','USA','Australia'];
  country = '';
  constructor() { }

  ngOnInit() {
  }
  refresh() {
    this.countries = [{code: 'in',name: 'India', population: '1001'},
  {code: 'ch',name: 'China', population: '500'},
  {code: 'us',name: 'USA', population: '1007'},
  {code: 'aus',name: 'Australia', population: '1009'}];
  }
  onCountryChange(e) {
    this.country = e.target.value;
  }
  trackByCode(index, item: {code: string, name: string, population: string}) {
    item.name = item.name.toLocaleUpperCase();
    return item.code;
  }
}
