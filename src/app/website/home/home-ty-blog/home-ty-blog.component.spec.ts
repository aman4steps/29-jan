import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTyBlogComponent } from './home-ty-blog.component';

describe('HomeTyBlogComponent', () => {
  let component: HomeTyBlogComponent;
  let fixture: ComponentFixture<HomeTyBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeTyBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeTyBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
