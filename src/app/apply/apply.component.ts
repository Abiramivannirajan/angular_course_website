import { Component } from '@angular/core';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent {
  onclick() {

  }
  unable = true
  inputText = ""
  toEnable(element: any) {
    this.inputText = (element.target as HTMLInputElement).value

    if (this.inputText.length > 2) {
      this.unable = false
    }
    else {
      this.unable = true
    }
  }


  sumbitpage(coursevalue: string): void {
    console.log(`display ` + coursevalue);
  }


}
