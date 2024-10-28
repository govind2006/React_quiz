
import { shuffleArray } from "./utils";

export type Question = {
    category:string;
    correct_answer:string;
    difficulty:string;
    incorrect_answers:string[];
    question:string;
    type:string;

}

export type QuestionStste = Question & {answers:string[]};


export enum Difficulty{
    EASY="easy",
    MEDIUM="medium",
    HARD="hard"
}

export const fetchQuizQuestions = async (TOTAL_QUESTIONS: number, difficulty: Difficulty) => {
    // const endpoint = `https://opentdb.com/api.php?amount=${TOTAL_QUESTIONS}&category=${18}&difficulty=${difficulty}&type=multiple`;
    const endpoint = `https://react-api-7xil.onrender.com/`;
  
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`Failed to fetch quiz questions: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("Gvoind",data)
      if (!data.results || !Array.isArray(data.results)) {
        throw new Error("API response does not contain results");
      }

      const shuffledQuestions = shuffleArray(data.results);
  
      return shuffledQuestions.map((question: Question) => ({
        ...question,
        answers: shuffleArray([
          ...question.incorrect_answers,
          question.correct_answer,
        ]),
      }));
    } catch (error) {
      console.error("Error fetching quiz questions:", error);
      return [];  // Return an empty array or handle the error appropriately
    }
  };
  