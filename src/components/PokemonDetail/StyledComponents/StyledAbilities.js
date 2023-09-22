import { Section, WrapperDiv, Heading, Data } from "./StyledDetailComponents";

export default function StyledAbilities({ abilities }) {
  return (
    <Section>
      <WrapperDiv>
        <Heading>Abilities</Heading>
      </WrapperDiv>
      <WrapperDiv>
        {abilities[0] && (
          <Data>
            {abilities[0].ability.name
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </Data>
        )}

        {abilities[1] && (
          <Data>
            {abilities[1].ability.name
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </Data>
        )}
      </WrapperDiv>
    </Section>
  );
}
