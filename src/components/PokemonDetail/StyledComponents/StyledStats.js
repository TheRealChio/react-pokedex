import { Section, WrapperDiv, Heading, Data } from "./StyledDetailComponents";
import { statName } from "../../../utils/utils";

export default function StyledStats({ stats }) {
  return (
    <Section variant={"stats"}>
      {stats.map((stat, index) => (
        <WrapperDiv variant={"stats"}>
          <Heading statColor={statName[index]} variant={"stats"} key={index}>
            {statName[index]}
          </Heading>
          <Data variant={"stats"} key={index}>
            {stat.base_stat}
          </Data>
        </WrapperDiv>
      ))}
    </Section>
  );
}
