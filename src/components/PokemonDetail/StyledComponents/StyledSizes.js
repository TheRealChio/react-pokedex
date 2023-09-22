import { Section, WrapperDiv, Heading, Data } from "./StyledDetailComponents";

export default function StyledSizes({ height, weight }) {
  return (
    <Section>
      <WrapperDiv>
        <Heading>Height</Heading>
        <Heading>Weight</Heading>
      </WrapperDiv>
      <WrapperDiv>
        <Data>{height}</Data>
        <Data>{weight}</Data>
      </WrapperDiv>
    </Section>
  );
}
