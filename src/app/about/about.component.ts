import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  product: any;

  constructor(private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
   this.activateRouter.data.subscribe((sub) => 
  { this.product=sub
    console.log(this.product,'product ');
    
  }
   )
  }

}
