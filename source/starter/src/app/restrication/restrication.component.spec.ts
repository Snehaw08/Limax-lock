import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestricationComponent } from './restrication.component';

describe('RestricationComponent', () => {
  let component: RestricationComponent;
  let fixture: ComponentFixture<RestricationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestricationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestricationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
