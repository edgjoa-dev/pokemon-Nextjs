import { render, screen } from '@testing-library/react'
import HomePage from '../pages/index';


describe('Pruebas en el componente HomePage', () => {

    test('Se debe de mostrar correctamente', () => {
        render(<HomePage />)
        screen.debug()

        // const heading = screen.getByRole('heading', {name: /welcome to next\.js!/i})

        // expect(heading).toBeInTheDocument()
    });
})
