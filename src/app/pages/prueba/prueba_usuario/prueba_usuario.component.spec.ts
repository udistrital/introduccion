import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaUsuarioComponent } from '../prueba_usuario/prueba_usuario.component';

describe('PruebaComponent', () => {
  let component: PruebaUsuarioComponent;
  let fixture: ComponentFixture<PruebaUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
