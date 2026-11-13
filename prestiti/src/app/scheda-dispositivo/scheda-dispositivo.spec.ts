import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchedaDispositivo } from './scheda-dispositivo';

describe('SchedaDispositivo', () => {
  let component: SchedaDispositivo;
  let fixture: ComponentFixture<SchedaDispositivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedaDispositivo],
    }).compileComponents();

    fixture = TestBed.createComponent(SchedaDispositivo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
