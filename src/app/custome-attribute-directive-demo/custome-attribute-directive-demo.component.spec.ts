import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeAttributeDirectiveDemoComponent } from './custome-attribute-directive-demo.component';

describe('CustomeAttributeDirectiveDemoComponent', () => {
  let component: CustomeAttributeDirectiveDemoComponent;
  let fixture: ComponentFixture<CustomeAttributeDirectiveDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomeAttributeDirectiveDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeAttributeDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
