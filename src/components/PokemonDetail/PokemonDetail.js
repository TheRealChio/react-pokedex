import useSWR from "swr";
import {
  StyledPokemonImage,
  StyledPokemonInfo,
  StyledPokemonId,
  StyledPokemonName,
  StyledTypesList,
  StyledTypesListItem,
  // StyledLoading,
  // StyledRotatingPokeballImg,
} from "../StyledComponents/StyledComponents";
import {
  Heading,
  FlavorText,
  StyledDetailCard,
} from "./StyledComponents/StyledDetailComponents";

import StyledSizes from "./StyledComponents/StyledSizes";
import StyledAbilities from "./StyledComponents/StyledAbilities";
import StyledStats from "./StyledComponents/StyledStats";

// import pokeball from "../../assets/pokeball-icon.png";

export default function PokemonDetail({ selectPokemon }) {
  const { data } = useSWR(selectPokemon.url);

  const { data: finalInfo } = useSWR(data?.species.url);

  if (!data || !finalInfo) return;
  const { abilities, height, weight, stats } = data;
  const { flavor_text_entries: flavorTextArray } = finalInfo;

  const filteredFlavorText = flavorTextArray.filter(
    (entry) => entry.language.name === "en"
  );

  const flavorText =
    filteredFlavorText.length > 0 ? filteredFlavorText[0].flavor_text : "";

  const detailPokemon = {
    ...selectPokemon,
    abilities,
    height,
    weight,
    stats,
    flavorText,
  };

  return (
    <>
      {detailPokemon && (
        <StyledDetailCard>
          <StyledPokemonImage
            variant={"detail"}
            src={
              detailPokemon.animatedImg
                ? detailPokemon.animatedImg
                : detailPokemon.img
            }
            alt={detailPokemon.name}
          />

          <StyledPokemonInfo variant={"detail"}>
            <StyledPokemonId variant={"detail"}>
              N° {detailPokemon.id}
            </StyledPokemonId>

            <StyledPokemonName variant={"detail"}>
              {detailPokemon.name}
            </StyledPokemonName>

            <StyledTypesList>
              {detailPokemon.types.map((type, index) => (
                <StyledTypesListItem
                  variant={"detail"}
                  color={type}
                  key={index}
                >
                  {type}
                </StyledTypesListItem>
              ))}
            </StyledTypesList>

            <Heading>Pokedex Entry</Heading>

            <FlavorText>{detailPokemon.flavorText}</FlavorText>

            <StyledSizes
              height={detailPokemon.height}
              weight={detailPokemon.weight}
            />

            <StyledAbilities abilities={detailPokemon.abilities} />

            <StyledStats stats={detailPokemon.stats} />
          </StyledPokemonInfo>
        </StyledDetailCard>
      )}
    </>
  );
}
