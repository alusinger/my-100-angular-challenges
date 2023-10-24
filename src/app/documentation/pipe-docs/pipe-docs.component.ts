import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-docs',
  templateUrl: './pipe-docs.component.html',
  styleUrls: ['./pipe-docs.component.scss']
})
export class PipeDocsComponent {

  public flattenData = [1, 2, [3], [4, [5, 6, [7]]]];

  public modifyFlatten(): void {
    this.flattenData.push(3, 5);
  }

  public reassignFlatten(): void {
    this.flattenData = [...this.flattenData];
  }
}
