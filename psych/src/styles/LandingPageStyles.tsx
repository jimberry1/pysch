import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleStyles = styled.h1`
  width: 100%;
  margin: auto;
  margin-top: 25px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const GameControlButton = styled.button`
  width: 75vw;
  outline: none;
  margin: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  height: 200px;
  align-content: center;
  align-items: center;
  width: 50%;
  min-width: 250px;
`;
export const GameCodeInput = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const GameCodeInputColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  // border: 1px solid lightgray;
`;

export const GameInputSubSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const GameCodeInputBar = styled.input`
  padding: 15px;
  text-align: center;
  font-size: 22px;
  outline: none;
  margin-bottom: 5px;
  border-radius: 10px;
`;

export const SkinnyGameCodeInputBar = styled.input`
  padding: 15px;
  text-align: center;
  font-size: 22px;
  outline: none;
  margin-bottom: 5px;
  border-radius: 10px;

  @media (max-width: 1000px) {
    padding: 5px;
  }
`;

export const StyledTextArea = styled.textarea`
  padding: 15px;
  text-align: center;
  font-size: 20px;
  outline: none;
  margin-bottom: 5px;
  width: 80%;
  font-family: 'Reggae One', cursive;
`;
