import Pokemon from "../Pokemon/Pokemon";
import { StyledList } from "../StyledComponents/StyledComponents";

export default function Pokedex({ pokedex, onSelectPokemon }) {
  return (
    <section>
      <StyledList>
        {pokedex.map((pokemon) => (
          <Pokemon
            pokemon={pokemon}
            key={pokemon.id}
            onSelectPokemon={onSelectPokemon}
          />
        ))}
      </StyledList>
    </section>
  );
}
