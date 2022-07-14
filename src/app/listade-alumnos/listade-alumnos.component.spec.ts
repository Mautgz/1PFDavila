import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadeAlumnosComponent } from './listade-alumnos.component';

describe('ListadeAlumnosComponent', () => {
  let component: ListadeAlumnosComponent;
  let fixture: ComponentFixture<ListadeAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadeAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadeAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
