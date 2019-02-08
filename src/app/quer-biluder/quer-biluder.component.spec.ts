import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerBiluderComponent } from './quer-biluder.component';

describe('QuerBiluderComponent', () => {
  let component: QuerBiluderComponent;
  let fixture: ComponentFixture<QuerBiluderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuerBiluderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerBiluderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
