import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-one',
  templateUrl: './practice-one.component.html',
  styleUrls: ['./practice-one.component.css']
})
export class PracticeOneComponent implements OnInit {
title='Interpolation';
propertybtn:boolean=true;
twowaybinding: string = "Display binding string";


demo(){
  this.propertybtn=false;
}
test(){
  this.propertybtn=true;
}
  constructor() { }

  ngOnInit(): void {
  }

}
