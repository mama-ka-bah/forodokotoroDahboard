import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPrevisionComponent } from './ajouter-prevision.component';

describe('AjouterPrevisionComponent', () => {
  let component: AjouterPrevisionComponent;
  let fixture: ComponentFixture<AjouterPrevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPrevisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterPrevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
