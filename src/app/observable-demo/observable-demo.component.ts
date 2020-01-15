import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.scss']
})
export class ObservableDemoComponent implements OnInit {
  myObservable;
  arr = [];
  msg: string = '';
  constructor() { }

  ngOnInit() {
    this.myObservable = new Observable ( //creating obsevable
      observer => {
        setTimeout(() => {
          observer.next(50);
        },2000)
        setTimeout(() => {
          observer.next(60);
        },1000)
        setTimeout(() => {
          observer.next(35);
        },5000)
        setTimeout(() => {
          observer.next(78);
        },5000)
        // setTimeout(() => {
        //   observer.complete();
        // },2000)
        setTimeout(() => {
          observer.error('DB closed');
        },7000)
        
      }
    )
  }

  start() { //consuming the observable
    this.myObservable.pipe(map (data => Number(data)*2)).subscribe(
      data => this.arr.push(data),
      err => this.msg = err,
      () => this.msg = 'All data received'
    )
  }
}
