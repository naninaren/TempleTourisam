import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasadamComponent } from './prasadam.component';

describe('PrasadamComponent', () => {
  let component: PrasadamComponent;
  let fixture: ComponentFixture<PrasadamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrasadamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasadamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
