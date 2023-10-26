import { useState } from "react";
import useSWR from "swr";
import Pokedex from "./components/Pokedex/Pokedex";
import SearchBar from "./components/SearchBar/Searchbar";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import Header from "./components/Header/Header";
import pokeball from "./assets/pokeball-icon.png";
import {
  StyledPokeballImg,
  StyledLoading,
  StyledRotatingPokeballImg,
} from "./components/StyledComponents/StyledComponents";

const fetcher = (url) => fetch(url).then((res) => res.json());
const multiFetcher = (urls) => Promise.all(urls.map((url) => fetcher(url.url)));

function App() {
  const pokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=898";

  const [searchInput, setSearchInput] = useState("");
  const [selectPokemon, setSelectPokemon] = useState(null);

  const { data, isLoading } = useSWR(pokemonUrl, {
    revalidateOnFocus: false,
  });

  const { data: finalData, isLoading: stillLoading } = useSWR(
    data?.results,
    multiFetcher,
    {
      revalidateOnFocus: false,
    }
  );

  if (isLoading || stillLoading)
    return (
      <StyledLoading>
        <StyledRotatingPokeballImg src={pokeball} alt="Pokeball" />
      </StyledLoading>
    );
  if (!finalData) return;

  const pokedexNew = finalData.map((data) => {
    return {
      id: data.id,
      name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
      types: data.types.map(
        (type) =>
          type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
      ),
      img: data.sprites.front_default,
      animatedImg:
        data.sprites.versions["generation-v"]["black-white"].animated
          .front_default,
      url: `https://pokeapi.co/api/v2/pokemon/${data.id}/`,
    };
  });

  function handleSearch(input) {
    setSearchInput(input);
  }

  const filteredPokedex = pokedexNew?.filter((pokemon) => {
    return (
      pokemon.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      pokemon.id.toString() === searchInput.toLowerCase() ||
      pokemon.types.some((type) =>
        type.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  });

  function handleSelectPokemon(pokemon) {
    setSelectPokemon(pokemon);
  }

  return (
    <main>
      {pokedexNew && (
        <>
          <StyledPokeballImg src={pokeball} alt="Pokeball" />

          <Header />
          <SearchBar onSearch={handleSearch} searchInput={searchInput} />

          <Pokedex
            pokedex={filteredPokedex}
            onSelectPokemon={handleSelectPokemon}
          />

          {selectPokemon && <PokemonDetail selectPokemon={selectPokemon} />}
        </>
      )}
    </main>
  );
}

export default App;
