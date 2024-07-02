import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixMasterComponent } from './choix-master.component';

describe('ChoixMasterComponent', () => {
  let component: ChoixMasterComponent;
  let fixture: ComponentFixture<ChoixMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoixMasterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoixMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
