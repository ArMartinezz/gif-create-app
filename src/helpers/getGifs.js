export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=FJ6WfAPmI7tp7r7jSfYtjbdLRPvky8JX&q=${category}&limit=6`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((image) => ({
    id: image.id,
    title: image.title,
    url: image.images.downsized_medium.url,
  }));

  return gifs;
};
