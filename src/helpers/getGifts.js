export const giftFetch = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=WqpXWStdaMREN4uPs6F5VGTU5NvSbuzq&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(boxGift => ({
    id: boxGift.id,
    title: boxGift.title,
    imgUrl: boxGift.images.downsized_medium.url,
  }));
  // const { data } = await resp.json();
  console.log(gifs);
  return gifs;
};
