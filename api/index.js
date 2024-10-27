import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const PORT = process.env.PORT || 3000;

const quizData = {
        response_code: 0,
        results: [
          {
            "type": "multiple",
            "difficulty": "easy",
            "category": "Science: Computers",
            "question": "In web design, what does CSS stand for?",
            "correct_answer": "Cascading Style Sheet",
            "incorrect_answers": [
              "Counter Strike: Source",
              "Corrective Style Sheet",
              "Computer Style Sheet"
            ]
          },
          {
            "type": "multiple",
            "difficulty": "easy",
            "category": "Science: Computers",
            "question": "How long is an IPv6 address?",
            "correct_answer": "128 bits",
            "incorrect_answers": [
              "32 bits",
              "64 bits",
              "128 bytes"
            ]
          },
          {
            "type": "multiple",
            "difficulty": "easy",
            "category": "Science: Computers",
            "question": "What does GHz stand for?",
            "correct_answer": "Gigahertz",
            "incorrect_answers": [
              "Gigahotz",
              "Gigahetz",
              "Gigahatz"
            ]
          },
          {
            "type": "multiple",
            "difficulty": "easy",
            "category": "Science: Computers",
            "question": "What does the computer software acronym JVM stand for?",
            "correct_answer": "Java Virtual Machine",
            "incorrect_answers": [
              "Java Vendor Machine",
              "Java Visual Machine",
              "Just Virtual Machine"
            ]
          },
          {
            "type": "multiple",
            "difficulty": "easy",
            "category": "Science: Computers",
            "question": "How many kilobytes in one gigabyte (in decimal)?",
            "correct_answer": "1000000",
            "incorrect_answers": [
              "1024",
              "1000",
              "1048576"
            ]
          },
          {
            "type": "multiple",
            "difficulty": "easy",
            "category": "Science: Computers",
            "question": "In any programming language, what is the most common way to iterate through an array?",
            "correct_answer": "&#039;For&#039; loops",
            "incorrect_answers": [
              "&#039;If&#039; Statements",
              "&#039;Do-while&#039; loops",
              "&#039;While&#039; loops"
            ]
          },
          {
            "type": "multiple",
            "difficulty": "easy",
            "category": "Science: Computers",
            "question": "What amount of bits commonly equals one byte?",
            "correct_answer": "8",
            "incorrect_answers": [
              "1",
              "2",
              "64"
            ]
          },
          {
            "type": "multiple",
            "difficulty": "easy",
            "category": "Science: Computers",
            "question": "This mobile OS held the largest market share in 2012.",
            "correct_answer": "iOS",
            "incorrect_answers": [
              "Android",
              "BlackBerry",
              "Symbian"
            ]
          },
          {
            "type": "multiple",
            "difficulty": "easy",
            "category": "Science: Computers",
            "question": "What does the &quot;MP&quot; stand for in MP3?",
            "correct_answer": "Moving Picture",
            "incorrect_answers": [
              "Music Player",
              "Multi Pass",
              "Micro Point"
            ]
          },
          {
            "type": "multiple",
            "difficulty": "easy",
            "category": "Science: Computers",
            "question": "The programming language &#039;Swift&#039; was created to replace what other programming language?",
            "correct_answer": "Objective-C",
            "incorrect_answers": [
              "C#",
              "Ruby",
              "C++"
            ]
          }
        ]
};

app.get('/', (req, res) => {
    res.json(quizData);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
