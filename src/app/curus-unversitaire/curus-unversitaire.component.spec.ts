import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurusUnversitaireComponent } from './curus-unversitaire.component';

describe('CurusUnversitaireComponent', () => {
  let component: CurusUnversitaireComponent;
  let fixture: ComponentFixture<CurusUnversitaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurusUnversitaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurusUnversitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
