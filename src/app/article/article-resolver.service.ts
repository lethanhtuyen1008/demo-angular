import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
@Injectable()
export class ArticleResolver implements Resolve<any> {
  constructor(
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  }
}
