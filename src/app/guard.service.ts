import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot): boolean {
    if(this.dataService.userName !== '' && this.dataService.userName.length > 8){
      return true;
    } else {
      this.router.navigate(['login'])
      return false;
    }
  }
  constructor(private dataService: DataService, private router: Router) { }
}
