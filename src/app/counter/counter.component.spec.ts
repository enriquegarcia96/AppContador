import { TestBed } from "@angular/core/testing";
import { CounterComponent } from "./counter.component"


describe("CounterComponet", () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CounterComponent
      ],
    }).compileComponents();
  });

  it('se debe crear el componente Counter', ()=>{
    const fixture = TestBed.createComponent(CounterComponent);
    expect(fixture.componentInstance).toBeTruthy()
  });

  it('debe crear el texto Counter: 23', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    fixture.detectChanges() // que rederice algo en el html

    const compiled: HTMLElement = fixture.nativeElement

    expect(compiled.querySelector('h1')?.textContent).toEqual('Contador: 23')

  })



  it('valor inicial del contador es 23', () =>{
    const counter = new CounterComponent()
    expect(counter.contador).toBe(23)
  });



})

