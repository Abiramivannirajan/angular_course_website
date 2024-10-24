import { Component } from '@angular/core';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent {
  onclick() {
      
  }
  
  sumbitpage(coursevalue: string): void {
    console.log(`display `+coursevalue);
  }
  

}
