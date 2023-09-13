import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en getGifs.js", () => {
  test("Debe de retornar un array de gifs", async () => {
    const gifs = await getGifs("Cats");
    expect(gifs.length).toBe(6);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
