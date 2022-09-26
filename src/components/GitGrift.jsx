import { useFetchGifs } from "../hooks/useFetchGifs";
import { ItemGift } from "./itemGift";

export const GitGrift = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando... </h2>}
      
      <div className="card-grid">
        {
          images.map((image) => (
          <ItemGift
            key={image.id}
            {...image} //== Forma de llevar todas las props de manera general
          />
        ))}
      </div>
    </>
  );
};
