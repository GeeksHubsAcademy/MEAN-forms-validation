import { Component, OnInit, OnDestroy  } from '@angular/core';
import {  } from '@angular/router'
@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, OnDestroy {
  id;
  paramsSubscription:any;
  constructor( ) { }
  ngOnInit() {
  }
  ngOnDestroy(){
  }
}
