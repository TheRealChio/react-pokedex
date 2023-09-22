import styled, { css } from "styled-components";
import { handleStatBackground } from "../../../utils/utils";

export const StyledDetailCard = styled.section`
  width: 25rem;
  height: 670px;
  position: fixed;
  top: 14rem;
  right: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  box-shadow: #ededed 0 10px 10px;
  background-color: rgba(255, 255, 255, 1);
`;

export const FlavorText = styled.p`
  font-size: 1rem;
  color: #8e9397;
  margin-inline: 2rem;
`;

export const Section = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  ${({ variant }) =>
    variant === "stats" &&
    css`
      flex-direction: row;
    `}
`;

export const WrapperDiv = styled.div`
  display: flex;
  justify-content: space-around;

  ${({ variant }) =>
    variant === "stats" &&
    css`
      flex-direction: column;
    `}
`;

export const Heading = styled.h3`
  font-size: 1.2rem;

  ${({ variant }) =>
    variant === "stats" &&
    css`
      font-size: 0.7rem;
      margin-bottom: 0.5rem;
      ${({ statColor }) => handleStatBackground(statColor)};
      padding: 0.5rem;
      border-radius: 1rem;
    `}
`;

export const Data = styled.p`
  background: #ededed;
  width: 100%;
  padding: 0.3rem 0.7rem;
  border-radius: 1rem;
  margin-inline: 0.2rem;

  ${({ variant }) =>
    variant === "stats" &&
    css`
      width: auto;
    `}
`;
