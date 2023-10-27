import { Directive, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy {

  
  @Output() public debouceClick = new EventEmitter();
  public clicks = new Subject();
  public subscription: Subscription = new Subscription();

  constructor() { }

  public ngOnInit(): void {

    const debounceTimeInMs = 500;

      this.subscription = this.clicks.pipe(
        debounceTime(debounceTimeInMs)
      ).subscribe((e: any) => this.debouceClick.emit(e));
  }

  public ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  public clickEvent(event: MouseEvent): void {
      event.preventDefault();
      event.stopPropagation();
      this.clicks.next(event);
  }
}
