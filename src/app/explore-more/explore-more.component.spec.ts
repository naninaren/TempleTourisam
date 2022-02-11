import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreMoreComponent } from './explore-more.component';

describe('ExploreMoreComponent', () => {
  let component: ExploreMoreComponent;
  let fixture: ComponentFixture<ExploreMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
