import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteursEnattenteComponent } from './transporteurs-enattente.component';

describe('TransporteursEnattenteComponent', () => {
  let component: TransporteursEnattenteComponent;
  let fixture: ComponentFixture<TransporteursEnattenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransporteursEnattenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransporteursEnattenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
