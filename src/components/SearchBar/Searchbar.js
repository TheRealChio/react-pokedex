import { useState } from "react";
import styled from "styled-components";
import { UilSearch } from "@iconscout/react-unicons";

export const StyledTextInput = styled.input`
  position: fixed;
  right: 8rem;
  top: 5rem;
  width: 360px;
  height: 60px;
  border-radius: 20px;
  box-shadow: #ededed 0 10px 10px;
  padding: 15px;
  background-color: rgb(255, 255, 255);
  border: 2px solid #e0e0e0;
  font-size: 1rem;
  outline: none;
  color: #8e9397;
`;

export const StyledSearchIcon = styled(UilSearch)`
  color: white;
  background: #ff5251;
  box-shadow: 2px 2px 2px 2px #ffc2c2;
  border-radius: 20px;
  width: 60px;
  height: 60px;
  padding: 10px;
  position: fixed;
  right: 3rem;
  top: 5rem;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #ff5251;
    background: white;
  }
`;

const SearchBar = ({ onSearch, searchInput }) => {
  const [toggleSearch, setToggleSearch] = useState(false);

  function handleToggleSearch() {
    setToggleSearch((prev) => !prev);
  }

  return (
    <section>
      <StyledSearchIcon onClick={handleToggleSearch} />
      {toggleSearch && (
        <StyledTextInput
          type="text"
          placeholder="Search Pokemon by Name, ID or Type"
          value={searchInput}
          onChange={(e) => onSearch(e.target.value)}
        />
      )}
    </section>
  );
};

export default SearchBar;
