import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { CalculadoraPage } from './calculadora.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

describe('=== Formulario Calculadora:', () => {
  let component: CalculadoraPage;
  let fixture: ComponentFixture<CalculadoraPage>;

  beforeEach(waitForAsync(async() => {
    await TestBed.configureTestingModule({
      declarations:[CalculadoraPage],
      imports: [IonicModule.forRoot(),FormsModule]
    }).compileComponents();
    
    fixture = TestBed.createComponent(CalculadoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Botón sumar', fakeAsync (() => {
    fixture.componentInstance.n1 = 3;
    fixture.componentInstance.n2 = 6;

    document.getElementById("btnSumar")?.click();
    fixture.detectChanges();
    tick();
    const resultado =(<HTMLInputElement>document.getElementById("resultado")).value;
    expect(resultado).toContain("9");
  }));
});
