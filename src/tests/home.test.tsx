import '@testing-library/jest-dom'
import Home from "@/app/page"
import { render, screen } from '@testing-library/react'
 
describe('Page', () => {
  it('should renders a heading, test= false', () => {
    render(<Home />)
 
    const heading = screen.queryByRole('heading', { level: 1 })
    expect(heading).not.toBeInTheDocument()
  });
  
  it('should renders a heading, test= true', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
  });
});