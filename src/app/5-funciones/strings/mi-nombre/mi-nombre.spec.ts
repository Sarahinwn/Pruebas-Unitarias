import { nombreCompleto } from "./mi-nombre";

describe('Prueba de Nombre Completo', () => {
    it('Regresar un string', () => {
        const result = nombreCompleto('Sarahi', 'Rivas')
        expect(typeof result).toBe('string');
    });
    it('Mostrar mi nombre completo', () => {
        const result = nombreCompleto('Sarahi', 'Rivas');
        expect(result).toBe('Mi nombre es: Judith Rivas');
    });
});