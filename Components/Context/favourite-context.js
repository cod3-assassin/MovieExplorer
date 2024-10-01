import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removefavourite: (id) => {},
});

function FavouriteContextProvider({ children }) {
  const [favouriteMovie, setFavouriteMovie] = useState([]);
  function addFavourite(id) {
    setFavouriteMovie((currentFavId) => [...currentFavId, id]);
  }

  function removefavourite(id) {
    setFavouriteMovie((currentFavId) =>
      currentFavId.filter((MovieId) => MovieId !== id)
    );
  }

  const value = {
    ids: favouriteMovie,
    addFavourite: addFavourite,
    removefavourite: removefavourite,
  };
  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContextProvider;
