import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { buttonValue } from '../services/buttonValue.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  card1 ={
    imagelocation:"assets/images/js.png" ,
    title:"JAVA",
    paragraph: " This is a java",
    button:"Apply"
  }
  card2={
    imagelocation:"assets/images/python.png",
    title:"Python",
    paragraph:"This  is a python",
    button:"Apply "
  }
card3={
  imagelocation:"assets/images/sql.png",
    title:"Sql",
    paragraph:"This  is a sql",
    button:"Apply"
    
}
card4={
  imagelocation:"assets/images/c.png",
    title:"C",
    paragraph:"This  is a C",
    button:"Apply"
} 
card5={
  imagelocation:"assets/images/c.png",
  title:"c++",
  paragraph:"This is a c++",
  button:"Apply"
}
courseDetails = [ this.card1, this.card2, this.card3,this.card4,this.card5]
courselist =["java","python","sql","c","c++"]

apply( cardvalue : string){
  alert(`Welcome to `+ cardvalue);  
  this.courseName.value = cardvalue.toLowerCase();
 }
 constructor(private courseName : buttonValue){

 }
 
 somevalue = "";


 
}