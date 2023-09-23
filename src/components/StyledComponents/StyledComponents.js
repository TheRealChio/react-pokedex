import styled, { css } from "styled-components";
import { handleTypeBackground } from "../../utils/utils";

export const StyledPokeballImg = styled.img`
  position: absolute;
  top: -15%;
  left: -10%;
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding-inline: 1.5rem;
  list-style: none;
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 160px;
  margin: 10px;
  border-radius: 20px;
  box-shadow: #ededed 0 10px 10px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  margin-top: 60px;
  transition: 0.4s ease;
  cursor: pointer;

  &:hover {
    border: 2px solid #e0e0e0;
    scale: 1.05;
  }

  &:hover img {
    scale: 1.1;
  }
`;

export const StyledPokemonImage = styled.img`
  width: 100px;
  height: auto;
  position: absolute;
  bottom: 70%;
  transition: 0.4s ease;

  ${({ variant }) =>
    variant === "detail" &&
    css`
      width: auto;
      scale: 2;
      bottom: 90%;
    `}
`;

export const StyledPokemonInfo = styled.article`
  position: absolute;
  top: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  ${({ variant }) =>
    variant === "detail" &&
    css`
      top: 20%;
      gap: 1.5rem;
    `}
`;

export const StyledPokemonId = styled.p`
  font-weight: bold;
  color: #8e9397;
  font-size: 0.8rem;

  ${({ variant }) =>
    variant === "detail" &&
    css`
      font-size: 1rem;
    `}
`;

export const StyledPokemonName = styled.h2`
  font-size: 1.3rem;

  ${({ variant }) =>
    variant === "detail" &&
    css`
      font-size: 1.5rem;
    `}
`;

export const StyledTypesList = styled.ul`
  display: flex;
  gap: 5px;
  list-style: none;
`;

export const StyledTypesListItem = styled.li`
  color: white;
  padding: 3px 7px;
  border-radius: 5px;
  ${({ color }) => handleTypeBackground(color)}

  ${({ variant }) =>
    variant === "detail" &&
    css`
      color: black;
      ${({ color }) => handleTypeBackground(color)};
      font-size: 1.2rem;
    `}
`;

// Loading

export const StyledLoading = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledRotatingPokeballImg = styled.img`
  height: 30%;
  width: auto;
  position: relative;
  animation: rotate 1.5s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
