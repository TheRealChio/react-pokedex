import {
  StyledListItem,
  StyledPokemonImage,
  StyledPokemonInfo,
  StyledPokemonId,
  StyledPokemonName,
  StyledTypesList,
  StyledTypesListItem,
} from "../StyledComponents/StyledComponents";

export default function Pokemon({ pokemon, onSelectPokemon }) {
  return (
    <StyledListItem onClick={() => onSelectPokemon(pokemon)}>
      <StyledPokemonImage src={pokemon.img} alt={pokemon.name} />
      <StyledPokemonInfo>
        <StyledPokemonId>N° {pokemon.id}</StyledPokemonId>
        <StyledPokemonName>{pokemon.name}</StyledPokemonName>
        <StyledTypesList>
          {pokemon.types.map((type, index) => (
            <StyledTypesListItem color={type} key={index}>
              {type}
            </StyledTypesListItem>
          ))}
        </StyledTypesList>
      </StyledPokemonInfo>
    </StyledListItem>
  );
}
