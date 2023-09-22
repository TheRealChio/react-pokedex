import styled from "styled-components";

export const StyledHeadLine = styled.h1`
  font-family: "PokeFont", sans-serif;
  font-size: 4rem;
  color: #ffcb06;
  text-align: center;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #0660de;
  letter-spacing: 2px;
`;

export default function Header() {
  return (
    <header>
      <StyledHeadLine>Pokédex</StyledHeadLine>
    </header>
  );
}
