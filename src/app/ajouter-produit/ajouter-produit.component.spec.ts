import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterProduitComponent } from './ajouter-produit.component';

describe('AjouterProduitComponent', () => {
  let component: AjouterProduitComponent;
  let fixture: ComponentFixture<AjouterProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
