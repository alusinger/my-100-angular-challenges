import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-x-post',
  templateUrl: './x-post.component.html',
  styleUrls: ['./x-post.component.scss']
})
export class XPostComponent {
  //TODO: Change to personal portfolio site
  @Input() public baseHref: string = 'https://github.com/alusinger';
  @Input() public hashTags: string[] = ['AnthonyLusinger', 'Angular', 'TypeScript', 'JavaScript', '100 Angular Challenge'];


  constructor(public titleService: Title) {}

  public get xUrl(): string {
    const base: string = this.getBaseWithHashTagsAndRoute();
    const message: string = encodeURIComponent(`Check out ${this.titleService.getTitle()} on ${this.baseHref}`);

    return `${base}${message}`;
  }

  private getBaseWithHashTagsAndRoute(): string {
    const route: string = encodeURI(this.baseHref);
    const hashTags: string = this.hashTags.join(',');

    return `https://www.twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashTags)}&related=alusinger&url=${route}&text=`;
  }
}
