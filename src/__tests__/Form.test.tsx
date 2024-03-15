import { render, fireEvent, screen, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store"; 
import Form from "../pages/Form";

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

describe("Form", () => {
  it("renders form with inputs and DatePicker", () => {
    render(
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <BrowserRouter>
            <Form />
          </BrowserRouter>
        </LocalizationProvider>
      </Provider>
    );

    // Verificar se os elementos do formulário estão presentes
    expect(screen.getByLabelText("Title")).toBeInTheDocument();
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
    // Aqui, em vez de usar getByTestId, você pode precisar usar outra função como getByLabelText, getByRole, etc., dependendo de como o DatePicker está renderizando o elemento
    // expect(screen.getByLabelText("Select a date")).toBeInTheDocument();
    expect(screen.getByLabelText("Location")).toBeInTheDocument();
    expect(screen.getByLabelText("Participants")).toBeInTheDocument();
  });

  it("submits form when button is clicked", async () => {
    render(
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <BrowserRouter>
            <Form />
          </BrowserRouter>
        </LocalizationProvider>
      </Provider>
    );

    // Simular ação do usuário preenchendo o formulário
    fireEvent.change(screen.getByLabelText("Title"), {
      target: { value: "Test Title" },
    });
    fireEvent.change(screen.getByLabelText("Description"), {
      target: { value: "Test Description" },
    });
    fireEvent.change(screen.getByLabelText("Location"), {
      target: { value: "Test Location" },
    });
    fireEvent.change(screen.getByLabelText("Participants"), {
      target: { value: "Test Participants" },
    });

    // Aqui, em vez de usar getByTestId, você pode precisar usar outra função como getByLabelText, getByRole, etc., dependendo de como o DatePicker está renderizando o elemento
    // fireEvent.change(screen.getByLabelText("Select a date"), {
    //   target: { value: "2024-03-15" },
    // });

    // Simular o clique no botão de submit
    await act(async () => {
        fireEvent.click(screen.getByText("submit"));
      });

    // Aqui você pode adicionar expectativas para verificar se a função de envio foi chamada
    // ...
  });
});
