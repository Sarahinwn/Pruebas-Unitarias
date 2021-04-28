// describe(description: 'Pruebas de String');
// it(expectation: 'Debe de regresar un string');
// it(expectation: 'Debe contener un nombre');

describe('Pruebas de String', ()=> {

    it('Debe de regresar un string', () => {
       const resp =  mensaje('carreón');
       expect(typeof resp).toBe('string')
    });
    it('Debe de mandar un saludo a Carreón', () => {
       const resp =  mensaje('carreón');
       expect(resp).toBe('Saludos a Carreón')
    });
});