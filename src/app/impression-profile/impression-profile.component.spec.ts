import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressionProfileComponent } from './impression-profile.component';

describe('ImpressionProfileComponent', () => {
  let component: ImpressionProfileComponent;
  let fixture: ComponentFixture<ImpressionProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpressionProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImpressionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
