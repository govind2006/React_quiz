import React,{useState} from 'react';
// Components
import { fetchQuizQuestions,Difficulty,QuestionStste } from './API';

import QuestionCard from './components/QuestionCard';

type AnserObject = {
  question:string;
  answer:string;
  correct:boolean;
  correctAnswer:string;
}


const TOTAL_QUATIONS = 10;

function App() {
  const [loading,setLoading]=useState(false);
  const [questions,setQuestions]=useState<QuestionStste[]>([]);
  const [number,setNumber] = useState(0);
  const[userAnswers,setUserAnswer]=useState<AnserObject[]>([])
  const[score,setScore] = useState(0);
  const [gameover,setGameOver]=useState(true);

  console.log(questions);




  const startTrivia = async()=>{
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUATIONS,Difficulty.EASY);

    setQuestions(newQuestions);

    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);


  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>)=>{

  }

  const nextQuestion = () =>{

  }


  return (
    (
      <div className='App'>
        <h1>REACT QUIZ</h1>
        <button className='start' onClick={startTrivia}>
          start
        </button>
        <p className='score'>Score:</p>
        <p>Loading Questions...</p>

        {/* <QuestionCard
        questionNR={number+1}
        totalQuestions={TOTAL_QUATIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers?userAnswers[number]: undefined}
        callback={checkAnswer}
        /> */}

        <button className='next' onClick={nextQuestion}>
          Next Questions
        </button>

      </div>
    )
  );
}

export default App;
