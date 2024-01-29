import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastedCardComponent } from './toasted-card.component';

describe('ToastedCardComponent', () => {
  let component: ToastedCardComponent;
  let fixture: ComponentFixture<ToastedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToastedCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToastedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
