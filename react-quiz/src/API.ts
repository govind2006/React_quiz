
import { shuffleArray } from "./utils";

export type Question = {
    correct_answer:string;
    incorrect_answers:string[];
    question:string;

}

export type QuestionState = Question & {answers:string[]};


export const fetchQuizQuestions = async () => {
    // const endpoint = `https://opentdb.com/api.php?amount=${TOTAL_QUESTIONS}&category=${18}&difficulty=${difficulty}&type=multiple`;
    const endpoint = `https://react-api-7xil.onrender.com/`;
  
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`Failed to fetch quiz questions: ${response.statusText}`);
      }
  
      const data = await response.json();
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
  