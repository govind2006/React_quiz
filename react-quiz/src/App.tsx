import React,{useState} from 'react';
// Components
import { fetchQuizQuestions,QuestionState } from './API';

import QuestionCard from './components/QuestionCard';

import { GlobalStyle,Wrapper } from './App.style';

export type AnserObject = {
  question:string;
  answer:string;
  correct:boolean;
  correctAnswer:string;
}


const TOTAL_QUESTIONS = 10;

function App() {
  const [loading,setLoading]=useState(false);
  const [questions,setQuestions]=useState<QuestionState[]>([]);
  const [number,setNumber] = useState(0);
  const[userAnswers,setUserAnswer]=useState<AnserObject[]>([])
  const[score,setScore] = useState(0);
  const [gameover,setGameOver]=useState(true);


  const startTrivia = async()=>{ 
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions();

    setQuestions(newQuestions);

    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameover) {
      // User's answer
      const answer = e.currentTarget.value;
      // Check if the answer is correct
      const correct = questions[number].correct_answer === answer;
      // Add score if the answer is correct
      if (correct) setScore(prev => prev + 1);
      
      // Create answer object
      const answerObject: AnserObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
  
      // Save the answer in the user's answers array
      setUserAnswer(prev => [...prev, answerObject]);
    }
  };

  const nextQuestion = () =>{
    // move on to the next question if not the last quaestion

    const nextQuestion = number+1;

    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true);
    }else{
      setNumber(nextQuestion)
    }
  };


  return (
    <>
    <GlobalStyle />
      <Wrapper>
        <h1>CS QUIZ</h1> <br /><br />
        {gameover || userAnswers.length===TOTAL_QUESTIONS ? (
        <button className='start' onClick={startTrivia}>
        {userAnswers.length===TOTAL_QUESTIONS ? 'Restart' : 'Start'}
        </button>
        ):null}


        {!gameover && userAnswers.length===TOTAL_QUESTIONS ? (
           <p className='score'>Congratulations 🎉 Your Score : {score}/{TOTAL_QUESTIONS}</p>
        ):null}

        {loading &&<p>Loading Questions...</p>}
        {loading && <div id="loader"></div>}

      {!loading && !gameover  && (
        <QuestionCard
        questionNR={number+1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers?userAnswers[number]: undefined}
        callback={checkAnswer}
        />
      )}

      {!gameover && !loading && userAnswers.length===number+1 && number!==TOTAL_QUESTIONS-1?(
        <button className='next' onClick={nextQuestion}>
          Next Questions
        </button>
      ):null}

      </Wrapper>
      </>
  );
}

export default App;
