import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linkedin-post',
  templateUrl: './linkedin-post.component.html',
  styleUrls: ['./linkedin-post.component.scss']
})
export class LinkedinPostComponent {

  constructor(public router: Router) {}

  public get linkedinMessage(): string {
     const base = 'https://www.linkedin.com/shareArticle?mini=true';
     //TODO: Change to personal portfolio site
     const currentSite = `&url=https://github.com/alusinger${this.router.url}`;
     return `${base}${currentSite}`;
  }
}
