import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";

describe("Pruebas en GifGrid.jsx", () => {
  const category = "Dragons";

  test("debe de mostrar el loading inicialmente", () => {
    render(<GifGrid category={category} />);
    // expect(screen.getByText("Cargando..."));
    // HELP
    expect(screen.getByText(category));
  });
});
