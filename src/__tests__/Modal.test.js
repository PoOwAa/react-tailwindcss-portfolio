import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HireMeModal from '../components/HireMeModal';

// Get user event
function setupUserEvent(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

test('modal shows the children', async () => {
  const { user } = setupUserEvent(<HireMeModal />);

  expect(
    screen.getByText(/Make the world better together/i),
  ).toBeInTheDocument();
});
