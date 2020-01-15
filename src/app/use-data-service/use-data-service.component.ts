import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
DataService
@Component({
  selector: 'app-use-data-service',
  templateUrl: './use-data-service.component.html',
  styleUrls: ['./use-data-service.component.scss']
})
export class UseDataServiceComponent implements OnInit {

  un: string;
  unFromService: string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  setValue() {
    this.dataService.setUserName(this.un);
  }
  getValue() {
    this.unFromService = this.dataService.getUserName();
  }
}
