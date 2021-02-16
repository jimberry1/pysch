import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Menu from './Menu';
import HamburgerMenu from 'react-hamburger-menu';
const SideDrawer = styled.div`
  height: 110vh;
  width: 35vw;
  position: absolute;
  left: -50vw;
  background: black;
  color: white;

  @media (max-width: 1000px) {
    width: 50%;
  }
`;

const HamburgerContainer = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 1;

  @media (max-width: 1000px) {
    top: 25px;
  }
`;

const Sidedraw = ({ toggled, setToggled, logout }) => {
  const animationControl = useAnimation();

  useEffect(() => {
    if (toggled) {
      animationControl.start('visible');
    } else {
      animationControl.start('hidden');
    }
  }, [toggled]);
  return (
    <div>
      <HamburgerContainer>
        <HamburgerMenu
          isOpen={toggled}
          menuClicked={setToggled}
          color="white"
          strokeWidth={3}
        />
      </HamburgerContainer>

      <motion.div
        variants={{
          hidden: { x: '-50vw', opacity: 0.2 },
          visible: {
            x: '50vw',
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
          },
        }}
        animate={animationControl}
      >
        <SideDrawer>
          <Menu logout={logout} setToggle={setToggled} />
        </SideDrawer>
      </motion.div>
    </div>
  );
};

export default Sidedraw;
