import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store'; // Importe o store da sua aplicação
import Table from '../components/Table';

// Mock do módulo @react-pdf/renderer, react-icons e react-redux
jest.mock('@react-pdf/renderer', () => ({
  Page: () => 'Page',
  Text: () => 'Text',
  View: () => 'View',
  Document: () => 'Document',
  StyleSheet: {
    create: jest.fn().mockReturnValue({}),
  },
}));

jest.mock('react-icons/fa', () => ({
  FaEdit: () => 'FaEdit',
  FaFilePdf: () => 'FaFilePdf',
  FaTrashAlt: () => 'FaTrashAlt',
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Table', () => {
  it('renders the correct content based on props', () => {
    const data = [{
      id: '1',
      title: 'Test Title',
      description: 'Test Description',
      date: '2022-01-01',
      location: 'Test Location',
      participants: 'Test Participants',
    }];

    const { getByText } = render(
      <Provider store={store}>
        <Table data={data} />
      </Provider>
    );

    // Verifique se o título está sendo renderizado corretamente
    expect(getByText(data[0].title)).toBeInTheDocument();
    // Continue com as outras verificações...
  });

  it('calls the edit function when the edit button is clicked', () => {
    const data = [{
      id: '1',
      title: 'Test Title',
      description: 'Test Description',
      date: '2022-01-01',
      location: 'Test Location',
      participants: 'Test Participants',
    }];

    const { getByText } = render(
      <Provider store={store}>
        <Table data={data} />
      </Provider>
    );

    fireEvent.click(getByText('FaEdit'));
    // Verifique se a função de edição foi chamada
    // ...
  });

  it('calls the delete function when the delete button is clicked', () => {
    const data = [{
      id: '1',
      title: 'Test Title',
      description: 'Test Description',
      date: '2022-01-01',
      location: 'Test Location',
      participants: 'Test Participants',
    }];

    const { getByText } = render(
      <Provider store={store}>
        <Table data={data} />
      </Provider>
    );

    fireEvent.click(getByText('FaTrashAlt'));
    // Verifique se a função de exclusão foi chamada
    // ...
  });
});
