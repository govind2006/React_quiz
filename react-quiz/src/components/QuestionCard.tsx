import React from 'react';
import { AnserObject } from '../App';

import { Wrapper,ButtonWrapper } from './QuestionCard.style';

type props = {
    question:string;
    answers:string[];
    callback:(e: React.MouseEvent<HTMLButtonElement>)=>void;
    userAnswer:AnserObject | undefined;
    questionNR:number;
    totalQuestions:number;
}

const QuestionCard: React.FC<props> =({question,answers,callback,userAnswer,questionNR,totalQuestions})=> (

<Wrapper>
    <p className='number'>
        Question: {questionNR} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html:question}}/>
    <div>
        {answers.map(answer=>(
            <ButtonWrapper
             key={answer}
             correct={userAnswer?.correctAnswer===answer}
             userClicked={userAnswer?.answer===answer}
             
             >
                <button disabled={userAnswer?true:false} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{ __html:answer}}></span>
                </button>
            </ButtonWrapper>
        ))}

    </div>
</Wrapper>
);

export default QuestionCard;