import { render } from '@testing-library/react';
import PdfDocument from '../components/PdfDocument';

// Mock do módulo @react-pdf/renderer
jest.mock('@react-pdf/renderer', () => ({
  Page: () => 'Page',
  Text: () => 'Text',
  View: () => 'View',
  Document: () => 'Document',
  StyleSheet: {
    create: jest.fn().mockReturnValue({}),
  },
}));

describe('PdfDocument', () => {
  it('renders without crashing', () => {
    const data = {
      id: '1',
      title: 'Test Title',
      description: 'Test Description',
      date: '2022-01-01',
      location: 'Test Location',
      participants: 'Test Participants',
    };

    const { container } = render(<PdfDocument data={data} />);
    expect(container).toBeTruthy();
  });
});
