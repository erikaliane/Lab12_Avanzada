import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendasFormularioComponent } from './tiendas-formulario.component';

describe('TiendasFormularioComponent', () => {
  let component: TiendasFormularioComponent;
  let fixture: ComponentFixture<TiendasFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiendasFormularioComponent]
    });
    fixture = TestBed.createComponent(TiendasFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
