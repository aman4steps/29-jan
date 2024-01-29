import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeReviewsSectionComponent } from './home-reviews-section.component';

describe('HomeReviewsSectionComponent', () => {
  let component: HomeReviewsSectionComponent;
  let fixture: ComponentFixture<HomeReviewsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeReviewsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeReviewsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
