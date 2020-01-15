import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = [
    {pid: '1001',pname: 'mouse', price: 250},
    {pid: '1002',pname: 'keyboard', price: 2500}
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }
  showDetails(product) {
    this.router.navigate(['home/product-details', product.pid], {queryParams: {prdName: product.pname}});
  }
}
