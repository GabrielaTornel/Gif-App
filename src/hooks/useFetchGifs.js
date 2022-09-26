import { useEffect, useState } from "react";
import { giftFetch } from "../helpers/getGifts";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchImagen = async () => {
    const imageNew = await giftFetch(category);
    setImages(imageNew);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchImagen();
  }, []);

  return {
    images: images,
    isLoading: isLoading,
  };
};
