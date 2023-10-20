import { Component } from '@angular/core';
import { TitleService } from './documentation/service-docs/title/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public titleService: TitleService){}

  public ngOnInit(): void {
    this.titleService.initializeTitleService();
  }
}
