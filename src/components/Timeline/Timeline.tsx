import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { DrawerToggle, ScrollList } from "./ScrollList";
import { Milestone } from "./Milestone";
import { NavLink } from "react-router-dom";
import { NavLinkContainer } from "./styles/List";

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
  font: normal normal normal 45px/55px montserrat;
  letter-spacing: 0;
  justify-content: space-between;
  &.mobile {
    font: normal normal normal 25px/30px Montserrat;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
`;

const flavorSwitch = (
  flavour: string,
  props: {
    milestones: Milestone[];
    mobile: boolean;
    modalControls: boolean;
    drawerVisible: boolean;
    toggleDrawer: () => void;
  }
): JSX.Element => {
  switch (flavour) {
    case "list":
    default:
      return <ScrollList {...props} />;
  }
};

export const Timeline = ({
  milestones,
}: {
  milestones: Milestone[];
}): JSX.Element => {
  const [flavour, setFlavour] = useState("list");
  const [mobile, setMobile] = useState(false);
  const [modalControls, setModalControls] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navBarRef = useRef(null);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFlavour(event.target.value);
  };

  const checkMobile = () => {
    setMobile(window.innerWidth < 768);
    setModalControls(window.innerWidth < 1200);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Container>
      <Navbar ref={navBarRef} className={mobile ? "mobile" : ""}>
        <NavLinkContainer>
          <NavLink exact to="/">
            <i className="fa fa-angle-left" /> Timeline
          </NavLink>
        </NavLinkContainer>
        {flavour === "list" && modalControls && (
          <DrawerToggle onClick={handleDrawerToggle} />
        )}
        {/*<select value={flavour} onChange={handleSelect}>*/}
        {/*  <option value="article">Article</option>*/}
        {/*  /!*<option value="gallery">Gallery</option>*!/*/}
        {/*  <option value="list">List</option>*/}
        {/*</select>*/}
      </Navbar>

      <Content>
        {flavorSwitch(flavour, {
          milestones,
          mobile,
          modalControls,
          drawerVisible: drawerOpen,
          toggleDrawer: handleDrawerToggle,
        })}
      </Content>
    </Container>
  );
};
