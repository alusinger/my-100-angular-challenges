import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() public title: string = '';
  public isHidden: boolean = true;


  public closeModal(): void {
    this.isHidden = true;
  }

  public openModal(): void {
    this.isHidden = false;
  }
}
