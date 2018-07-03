import { describe, it } from 'mocha';
import { expect } from 'chai';
import fb from '../app/js/FizzBuzz';

describe('FizzBuzz', () => {
  it('deve retornar `Fizz` se o número for divisível por 3', () => {
    expect(fb(3)).to.be.equal('Fizz');
    expect(fb(6)).to.be.equal('Fizz');
  });

  it('deve retornar `Buzz` se o número for divisível por 5', () => {
    expect(fb(5)).to.be.equal('Buzz');
    expect(fb(10)).to.be.equal('Buzz');
  });

  it('deve retornar `FizzBuzz` se o número for divisível por 3 e 5', () => {
    expect(fb(15)).to.be.equal('FizzBuzz');
    expect(fb(30)).to.be.equal('FizzBuzz');
  });

  it('deve retornar o numero se não for múltiplo de nada', () => {
    expect(fb(7)).to.be.equal(7);
    expect(fb(4)).to.be.equal(4);
  });

  it('deve retornar 0 se não for passado valor', () => {
    expect(fb()).to.be.equal(0);
  });
});
