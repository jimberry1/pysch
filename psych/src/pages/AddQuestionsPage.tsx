import { useState } from 'react';
import { GameCodeInputBar, StyledTextArea } from '../styles/LandingPageStyles';
import db from '../firebase';
import {
  ContainerStyles,
  GeneralBlueButtonStyles,
} from '../styles/GeneralStyles';
import firebase from 'firebase';
import { AnimatePresence, motion } from 'framer-motion';
export interface AddQuestionsPageProps {
  user: any;
}

const AddQuestionsPage: React.SFC<AddQuestionsPageProps> = ({ user }) => {
  const [question, setQuestion] = useState('');
  const [hasSubmittedQuestion, setHasSubmittedQuestion] = useState(false);
  const submitQuestionHandler = () => {
    if (question.length > 10) {
      db.collection('questions')
        .doc('Indexor')
        .get()
        .then((Indexor) => {
          const index = Indexor.get('index');

          //   db.collection('questions').add({
          //     question: question,
          //     index: index,
          //     uid: user.uid,
          //     name: user.name,
          //   });

          //   db.collection('questions')
          //     .doc('Indexor')
          //     .update({ index: firebase.firestore.FieldValue.increment(1) });
        });

      setQuestion('');
      setHasSubmittedQuestion(true);
    }
  };
  return (
    <ContainerStyles>
      <h2>Contribute your questions!</h2>
      <span>
        To contribute towards our questions simply enter your question in the
        box below and type 'XXX' where the name of a random player will be
        substituted
      </span>
      <span>
        Example contribution: 'What would XXX do on their first night out after
        lockdown?'
      </span>

      <StyledTextArea
        placeholder="Enter question here..."
        value={question}
        onChange={(e) => {
          setQuestion(e.target.value);
          setHasSubmittedQuestion(false);
        }}
      />
      <GeneralBlueButtonStyles onClick={submitQuestionHandler}>
        Submit
      </GeneralBlueButtonStyles>
      <AnimatePresence>
        {hasSubmittedQuestion && (
          <motion.div
            variants={{
              hidden: { opacity: 0, x: '-100vw' },
              visible: { opacity: 1, x: 0 },
              exitted: { opacity: 0, x: '100vw' },
            }}
            initial="hidden"
            animate="visible"
            exit="exitted"
          >
            <p>Thanks for submitting your question!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </ContainerStyles>
  );
};

export default AddQuestionsPage;