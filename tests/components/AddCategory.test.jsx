import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe("Pruebas en AddCategory.jsx", () => {
  const newValue = "Dragons";

  beforeEach(() => {});

  test("Debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: newValue } });

    expect(input.value).toBe(newValue);
  });

  test("Debe llamar onNewCategory si el input tiene valor", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: newValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(newValue);
  });

  test("No debe llamar onNewCategory si el input está vacio", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "a" } });
    fireEvent.submit(form);

    expect(input.value).toBe("a");
    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});
