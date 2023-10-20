import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XPostComponent } from './x-post.component';

describe('XPostComponent', () => {
  let component: XPostComponent;
  let fixture: ComponentFixture<XPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
