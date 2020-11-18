import { render, screen } from '@testing-library/react';
import SignUpPage from './pages/signup/signup';

//simulate clicking sign up on empty form.
test('sign up validation', () => {
  render(<SignUpPage />);

  const linkElement = screen.getByText(/Sign Up/i);
  linkElement.click();

  const errorMsg = screen.getByText(/Please enter your full name/i);
  expect(errorMsg).toBeInTheDocument();
});
