import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDataComponent } from './sub-data.component';

describe('SubDataComponent', () => {
  let component: SubDataComponent;
  let fixture: ComponentFixture<SubDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
