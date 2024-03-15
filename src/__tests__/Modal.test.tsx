
import { render, fireEvent } from '@testing-library/react';
import Modal from "../components/Modal";

describe('Modal', () => {
  it('renders the Modal and responds to button clicks', () => {
    const onClose = jest.fn();
    const onConfirm = jest.fn();

    const { getByText } = render(
      <Modal isOpen={true} onClose={onClose} onConfirm={onConfirm} />
    );

    const yesButton = getByText('Yes');
    const noButton = getByText('No');

    fireEvent.click(yesButton);
    expect(onConfirm).toHaveBeenCalled();

    fireEvent.click(noButton);
    expect(onClose).toHaveBeenCalled();
  });
});
