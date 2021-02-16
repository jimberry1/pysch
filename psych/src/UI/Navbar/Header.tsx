import styled from 'styled-components';
import Sidedraw from './Sidedraw';
import { useState } from 'react';
import { motion } from 'framer-motion';
export interface HeaderProps {
  logout: any;
}

const HeaderContainer = styled.div`
  height: 10%;
  width: 100vw;
  position: relative;
  background-color: #1e2d61;
  text-align: center;
  padding-top: 15px;
  font-size: 40px;
  font-family: 'Titan One', cursive;
  color: white;
  padding-bottom: 1%;
  overflow: none;
  @media (max-width: 1000px) {
    height: 11%;
    padding-bottom: 3%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleLetter = styled.span`
  font-family: 'Titan One', cursive;
`;

const Header: React.SFC<HeaderProps> = ({ logout }) => {
  const [toggled, setToggled] = useState(false);
  const titleArray = ['P', 'S', 'Y', 'C', 'H'];
  const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

  return (
    <div>
      <div style={{ zIndex: 1 }}>
        <Sidedraw
          toggled={toggled}
          setToggled={() => setToggled((curVal) => !curVal)}
          logout={logout}
        />
      </div>
      <div style={{ zIndex: 0.9 }}>
        <HeaderContainer>
          <TitleContainer>
            {' '}
            {titleArray.map((letter, index) => {
              return (
                <motion.div
                  variants={{ hover: { scale: 1.15, color: colors[index] } }}
                  whileHover="hover"
                  whileTap="hover"
                  key={`${letter}-${index}`}
                >
                  <TitleLetter>{letter}</TitleLetter>
                </motion.div>
              );
            })}
          </TitleContainer>
        </HeaderContainer>
      </div>
    </div>
  );
};

export default Header;
