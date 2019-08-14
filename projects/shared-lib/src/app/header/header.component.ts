import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  @Input()
  logoLocation: string;
  @Input()
  bgColor: string;
  @Input()
  navBarColor: string;
  @Input()
  navbarText: string;
  navItemsSpacing: number = 25;

  constructor() { }

  ngOnInit() {
    
  }

}
