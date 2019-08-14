import { ViewChild, ElementRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'mari-frank-new';
  @ViewChild('chevron', {static: false}) 
  chevron: ElementRef;

  getChevronHeight():number{
    return this.chevron.nativeElement.height;
  }

  convertRemToPixels(rem):number {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }
}