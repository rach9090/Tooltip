import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  viewClicked = false;
  downloadClicked = false;

  buttonClick(event) {
    var id = event.srcElement.id;
    switch(id){
      case 'view': this.viewClicked = true, this.downloadClicked = false; break;
      case 'download': this.downloadClicked = true, this.viewClicked = false; break; 
    }
  }

  reset(event){
    var id = event.srcElement.id;
    switch(id){
      case 'view': this.viewClicked = false; break;
      case 'download': this.downloadClicked = false; break; 
    }
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.viewClicked = this.downloadClicked = false;
  }
}
