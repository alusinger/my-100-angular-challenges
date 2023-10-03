import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss']
})
export class CreditCardInputComponent {
  @Input() public creditCardNumber = '';
  private readonly = false;
  public get isReadonly(): boolean{
    return this.readonly;
  }
  @Input() public set isReadonly(value: boolean) { 
    this.creditCardNumber = value ? this.formatReadonlyCCNumb(this.creditCardNumber) : this.creditCardNumber;
    this.readonly = value;
  }

  private formatReadonlyCCNumb(ccNum: string): string {
    // Alternatively can use slice() instead of map().
    // const last4 = ccNum.slice(-4);
    // return `xxxx-xxxx-xxxx-${last4}`;

    const parts = ccNum.match(/[\s\S]{1,4}/g) || [];
    
    const onlyLast4Shown = parts.map((part, index) => {
      if (index === parts.length - 1) {
        return part;
      }
      return 'xxxx';
    });

    return onlyLast4Shown.join('-');
  }

}
