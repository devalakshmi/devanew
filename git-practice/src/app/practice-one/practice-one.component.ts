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
ngifdisplay=true;
ngfordirectives = [
  {name:"deva",id:"01",age:"20"},
  {name:"vino",id:"02",age:"21"},
  {name:"ribi",id:"03",age:"22"},
  {name:"rohith",id:"04",age:"23"},
  {name:"preetha",id:"05",age:"24"}
];
ngswitchusername="raja";
attributearr=[{value:9},{value:10},{value:11},{value:12},{value:13}]
pipebirthday = new Date(1997, 10, 25);

birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
toggle = true; // start with true == shortDate
get format()   { 
  return this.toggle ? 'shortDate' : 'fullDate'; 
}
toggleFormat() { 
  this.toggle = !this.toggle; 
}


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
