import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculteursEnattenteComponent } from './agriculteurs-enattente.component';

describe('AgriculteursEnattenteComponent', () => {
  let component: AgriculteursEnattenteComponent;
  let fixture: ComponentFixture<AgriculteursEnattenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriculteursEnattenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgriculteursEnattenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
