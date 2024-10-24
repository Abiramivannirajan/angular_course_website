import { Component } from '@angular/core';
import { buttonValue } from '../services/buttonValue.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent {
  courseName : string= this.courseNameSerive.value;

  constructor( private courseNameSerive : buttonValue  ){

  }

  buttonValue(){
    console.log(this.courseNameSerive);
    
  }
  
}