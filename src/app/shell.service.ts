import { Injectable } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { NewsComponent } from './blog/news/news.component';
import { HomeComponent } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class ShellService {

  constructor(private route: Router) { }
  static childRooting(routes: Routes): Route {

    return {
      path: '',
      children: routes,
      // component: HomeComponent

    };



  }
}
