import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABMdeAlumnosComponent } from './abmde-alumnos.component';

describe('ABMdeAlumnosComponent', () => {
  let component: ABMdeAlumnosComponent;
  let fixture: ComponentFixture<ABMdeAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABMdeAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABMdeAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
