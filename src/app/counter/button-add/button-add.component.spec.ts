import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddComponent } from './button-add.component';

describe('ButtonAddComponent', () => {
  let component: ButtonAddComponent;
  let fixture: ComponentFixture<ButtonAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //.- emitir valores .-//
  it('Dede emitir el valor de 1', () =>{
    let nuevoContador = 0;

    //.- valido un emiter o emisiones o eventos .-//
    component.onAdd.subscribe( contador => {
      nuevoContador = contador;
    } );
    component.add();// cada vez que lo llame es como que le "click" al boton de agregar
    expect(nuevoContador).toBe(1);

  })

});
