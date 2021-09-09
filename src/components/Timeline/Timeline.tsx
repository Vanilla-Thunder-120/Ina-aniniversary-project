import React, { useState } from "react";
import styled from "styled-components";
import { ScrollList } from "./ScrollList";
import { Milestone } from "./Milestone";
import { NavLink } from "react-router-dom";
import { Article } from "./Article";

const Container = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  color: var(--ika-purple);
`;

const Navbar = styled.nav`
  background: var(--inai-purple);
  display: flex;
  position: relative;
  flex: 0 1;
  padding: 0.9rem 1.25rem;
  text-align: left;
  font: normal normal normal 3em montserrat;
  letter-spacing: 0;
  justify-content: space-between;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
`;

const flavorSwitch = (
  flavour: string,
  milestones: Milestone[],
  mobile?: boolean
): JSX.Element => {
  switch (flavour) {
    case "article":
      return <Article milestones={milestones} />;
    // case "gallery":
    //   return <Gallery milestones={milestones} />;
    case "mobileList":
      return <ScrollList milestones={milestones} mobile />;
    case "list":
    default:
      return <ScrollList milestones={milestones} mobile={false} />;
  }
};

export const Timeline = ({
  milestones,
}: {
  milestones: Milestone[];
}): JSX.Element => {
  const [flavour, setFlavour] = useState("list");

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFlavour(event.target.value);
  };

  return (
    <Container>
      <Navbar>
        <NavLink exact to="/">
          <i className="fa fa-angle-left" /> Timeline
        </NavLink>
        <select value={flavour} onChange={handleSelect}>
          <option value="article">Article</option>
          {/*<option value="gallery">Gallery</option>*/}
          <option value="list">List</option>
          <option value="mobileList">mobileList</option>
        </select>
      </Navbar>

      <Content>{flavorSwitch(flavour, milestones)}</Content>
    </Container>
  );
};
