import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdobjectListComponent } from './udobject-list.component';

describe('UdobjectListComponent', () => {
  let component: UdobjectListComponent;
  let fixture: ComponentFixture<UdobjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdobjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdobjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
