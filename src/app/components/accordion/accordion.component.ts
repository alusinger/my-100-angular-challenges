import { Component, Input } from '@angular/core';
import { AccordionItem } from './../interfaces';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() public accordionItems: AccordionItem[] = [];

  public toggle(accordionItem: AccordionItem): void {
    accordionItem.isExpanded = !accordionItem.isExpanded;
  }
}
