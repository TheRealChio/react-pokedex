export const handleTypeBackground = (color) => {
  switch (color) {
    case "Normal":
      return "background-color: #bcbcac";
    case "Fighting":
      return "background-color: #d56723";
    case "Flying":
      return "background-color: #669aff";
    case "Poison":
      return "background-color: #ab549a";
    case "Ground":
      return "background-color: #debc54";
    case "Rock":
      return "background-color: #bcac66";
    case "Bug":
      return "background-color: #abbc1c";
    case "Ghost":
      return "background-color: #6666bc";
    case "Steel":
      return "background-color: #abacbc";
    case "Fire":
      return "background-color: #ff6849";
    case "Water":
      return "background-color: #2f9aff";
    case "Grass":
      return "background-color: #78cd54";
    case "Electric":
      return "background-color: #ffcd30";
    case "Psychic":
      return "background-color: #ff549a";
    case "Ice":
      return "background-color: #78deff";
    case "Dragon":
      return "background-color: #7866ef";
    case "Dark":
      return "background-color: #785442";
    case "Fairy":
      return "background-color: #ffacff";
    case "Shadow":
      return "background-color: #0e2e4c";
    default:
      return "background-color: #ccc";
  }
};

export const statName = ["HP", "ATK", "DEF", "SATK", "SDEF", "SPD"];

export const handleStatBackground = (statColor) => {
  switch (statColor) {
    case "HP":
      return "background: #df2140";
    case "ATK":
      return "background: #ff994d";
    case "DEF":
      return "background: #eecd3d";
    case "SATK":
      return "background: #85ddff";
    case "SDEF":
      return "background: #96da83";
    case "SPD":
      return "background: #fb94a8";
    default:
      return;
  }
};
