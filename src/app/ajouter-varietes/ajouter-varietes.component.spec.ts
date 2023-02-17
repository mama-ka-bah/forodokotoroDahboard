import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterVarietesComponent } from './ajouter-varietes.component';

describe('AjouterVarietesComponent', () => {
  let component: AjouterVarietesComponent;
  let fixture: ComponentFixture<AjouterVarietesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterVarietesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterVarietesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
