import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas para GifItem.jsx", () => {
  const title = "Dog GIF by ViralHog";
  const url =
    "https://media3.giphy.com/media/HzkZeQM6aHcodITVXf/giphy-downsized-medium.gif?cid=a1421da0rdcgni9gzmnijg3t8awj5jdf4metzs7r4yfftz6u&ep=v1_gifs_search&rid=giphy-downsized-medium.gif&ct=g";

  test("Match Snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Mostrar imagen y contener alt text", () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("Debe mostrar el título del componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
