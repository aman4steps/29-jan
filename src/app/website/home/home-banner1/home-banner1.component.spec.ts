import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBanner1Component } from './home-banner1.component';

describe('HomeBanner1Component', () => {
  let component: HomeBanner1Component;
  let fixture: ComponentFixture<HomeBanner1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeBanner1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBanner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
