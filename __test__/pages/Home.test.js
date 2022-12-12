import { render, screen } from '@testing-library/react'
import HomePage from "pages";

describe('Pruebas en el componente HomePage', () => {
    
    test('Se debe de mostrar correctamente el HomePage', () => {
        render(<HomePage />)

        const heading = screen.getByRole('heading', {
            name: /welcome to next\.js!/i,
        
            expect(heading).toBeInTheDocument()
        })
    });
    

});
