import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsAgricoleComponent } from './produits-agricole.component';

describe('ProduitsAgricoleComponent', () => {
  let component: ProduitsAgricoleComponent;
  let fixture: ComponentFixture<ProduitsAgricoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsAgricoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsAgricoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
