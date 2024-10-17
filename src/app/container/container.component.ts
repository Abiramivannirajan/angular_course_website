import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
    button:"click"
  }
  card2={
    imagelocation:"assets/images/python.png",
    title:"Python",
    paragraph:"This  is a python",
    button:"click"
  }
card3={
  imagelocation:"assets/images/sql.png",
    title:"Sql",
    paragraph:"This  is a sql",
    button:"click"
    
}
card4={
  imagelocation:"assets/images/c.png",
    title:"C",
    paragraph:"This  is a C",
    button:"click"
} 
courseDetails = [ this.card1, this.card2, this.card3,this.card4 ] 
}