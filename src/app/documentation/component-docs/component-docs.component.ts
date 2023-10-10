import { Component } from '@angular/core';
import { LoaderType } from 'src/app/components/loader/loader-type.enum';
import { AccordionItem } from 'src/app/documentation/component-docs/interfaces';

@Component({
  selector: 'app-component-docs',
  templateUrl: './component-docs.component.html',
  styleUrls: ['./component-docs.component.scss']
})
export class ComponentDocsComponent {

  public accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Exampled Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Exampled Content 2',
      isExpanded: false,
    }
  ];
  public progressValue = 25;
  public loaderTypeLoading = LoaderType.Loading;
  public loaderTypeCircular = LoaderType.Circular;

  
}
