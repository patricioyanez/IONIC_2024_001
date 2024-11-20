import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
// npm test

describe('HomePage ts: ', () => {
  let component: HomePage;

  beforeEach(async () => {
    component = new HomePage();
  });

  it('sumar: suma 2 numeros positivos', () => {
    expect(component.sumar(1,2)).toEqual(3);
  });
  it('sumar: suma 2 numeros negativos', () => {
    expect(component.sumar(-21,-2)).toEqual(-23);
  });
  it('sumar: suma 2 numeros solo el 2do es negativo', () => {
    expect(component.sumar(10,-2)).toBeGreaterThanOrEqual(0);
  });
});
