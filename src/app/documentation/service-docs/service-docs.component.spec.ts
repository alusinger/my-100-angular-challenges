import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDocsComponent } from './service-docs.component';

describe('ServiceDocsComponent', () => {
  let component: ServiceDocsComponent;
  let fixture: ComponentFixture<ServiceDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
