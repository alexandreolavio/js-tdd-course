import { expect } from 'chai';
import { describe, it } from 'mocha';
import { sum, sub, mult, div } from '../app/js/Calculator';

describe('Calculator', () => {
  describe('Smoke tests', () => {
    it('deve existir um metodo `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a.function;
    });

    it('deve existir um metodo `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a.function;
    });

    it('deve existir um metodo `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a.function;
    });

    it('deve existir um metodo `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a.function;
    });
  });

  describe('sum', () => {
    it('deve retornar 4 quando os valores passados forem (2,2)', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('sub', () => {
    it('deve retornar 4 quando os valores passados forem (6,2)', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });

    it('deve retornar -4 quando os valores passados forem (6,10)', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('mult', () => {
    it('deve retornar 4 quando os valores passados forem (2,2)', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });

  describe('div', () => {
    it('deve retornar 2 quando os valores passados forem (4,2)', () => {
      expect(div(4, 2)).to.be.equal(2);
    });

    it('deve retornar `Não é possível divisão por zero!` quando a divisao for por zero', () => {
      expect(div(4, 0)).to.be.equal('Não é possível divisão por zero!');
    });
  });
});
