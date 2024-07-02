import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoyenneBacComponent } from './moyenne-bac.component';

describe('MoyenneBacComponent', () => {
  let component: MoyenneBacComponent;
  let fixture: ComponentFixture<MoyenneBacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoyenneBacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoyenneBacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
