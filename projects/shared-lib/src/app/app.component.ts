import { Component } from '@angular/core';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'

@Component({
  selector: 'lib-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'shared-lib';
}
