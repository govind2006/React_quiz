// https://dashboard.render.com/web/srv-csf5p3m8ii6s739c5900/deploys/dep-csf64lrtq21c738k5lbg
// https://react-api-7xil.onrender.com/


import express from 'express';
import cors from 'cors'; // Import CORS

const app = express();
const PORT = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors());

const quizData = {
  'response_code': 0,
  'results': 
  [
    {
        "question": "In web design, what does CSS stand for?",
        "correct_answer": "Cascading Style Sheet",
        "incorrect_answers": [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet"
        ]
    },
    {
        "question": "What does 'GUI' stand for?",
        "correct_answer": "Graphical User Interface",
        "incorrect_answers": [
            "Global User Interface",
            "Graphical Universal Interface",
            "General Utility Interface"
        ]
    },
    {
        "question": "What programming language shares its name with an island?",
        "correct_answer": "Java",
        "incorrect_answers": [
            "Python",
            "C",
            "Kotlin"
        ]
    },
    {
        "question": "What does 'HTML' stand for?",
        "correct_answer": "Hypertext Markup Language",
        "incorrect_answers": [
            "Hyper Tool Markup Language",
            "Hyperlink Markup Language",
            "Hyperlink and Text Markup Language"
        ]
    },
    {
        "question": "What is the main language used for Android development?",
        "correct_answer": "Java",
        "incorrect_answers": [
            "Swift",
            "Python",
            "Ruby"
        ]
    },
    {
        "question": "Which of these is a binary search algorithm that divides the list in half each time?",
        "correct_answer": "Binary Search",
        "incorrect_answers": [
            "Linear Search",
            "Depth-First Search",
            "Breadth-First Search"
        ]
    },
    {
        "question": "What does 'CPU' stand for?",
        "correct_answer": "Central Processing Unit",
        "incorrect_answers": [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit"
        ]
    },
    {
        "question": "In programming, what does 'IDE' stand for?",
        "correct_answer": "Integrated Development Environment",
        "incorrect_answers": [
            "Integrated Debug Environment",
            "Internal Development Environment",
            "Intelligent Development Environment"
        ]
    },
    {
        "question": "Who is considered the 'father' of computer science?",
        "correct_answer": "Alan Turing",
        "incorrect_answers": [
            "Bill Gates",
            "Steve Jobs",
            "Charles Babbage"
        ]
    },
    {
        "question": "Which company created the iPhone?",
        "correct_answer": "Apple",
        "incorrect_answers": [
            "Microsoft",
            "Samsung",
            "Google"
        ]
    },
    {
        "question": "In computer science, what does the 'FIFO' principle mean?",
        "correct_answer": "First In, First Out",
        "incorrect_answers": [
            "Fast In, Fast Out",
            "First Input, First Output",
            "First In, Final Out"
        ]
    },
    {
        "question": "Which programming language is primarily used for iOS app development?",
        "correct_answer": "Swift",
        "incorrect_answers": [
            "Kotlin",
            "Python",
            "Ruby"
        ]
    },
    {
        "question": "What does 'HTTP' stand for?",
        "correct_answer": "Hypertext Transfer Protocol",
        "incorrect_answers": [
            "Hyperlink Text Transfer Protocol",
            "Hyperlink Transfer Protocol",
            "Hypertext Transmission Protocol"
        ]
    },
    {
        "question": "What is the most popular database management system?",
        "correct_answer": "MySQL",
        "incorrect_answers": [
            "PostgreSQL",
            "MongoDB",
            "SQLite"
        ]
    },
    {
        "question": "Which language is primarily used for machine learning and AI?",
        "correct_answer": "Python",
        "incorrect_answers": [
            "Java",
            "C++",
            "Ruby"
        ]
    },
    {
        "question": "What is the main purpose of the Git version control system?",
        "correct_answer": "Tracking changes in source code",
        "incorrect_answers": [
            "Managing project dependencies",
            "Compiling code",
            "Generating documentation"
        ]
    },
    {
        "question": "What does 'SQL' stand for?",
        "correct_answer": "Structured Query Language",
        "incorrect_answers": [
            "Simple Query Language",
            "Statement Query Language",
            "Sequential Query Language"
        ]
    },
    {
        "question": "Which company developed the programming language TypeScript?",
        "correct_answer": "Microsoft",
        "incorrect_answers": [
            "Google",
            "Facebook",
            "Amazon"
        ]
    },
    {
        "question": "Which language is commonly used for web development on the server side?",
        "correct_answer": "PHP",
        "incorrect_answers": [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        "question": "What does 'XML' stand for?",
        "correct_answer": "Extensible Markup Language",
        "incorrect_answers": [
            "Extended Markup Language",
            "Executable Markup Language",
            "External Markup Language"
        ]
    },
    {
        "question": "Which operating system is developed by Apple Inc.?",
        "correct_answer": "macOS",
        "incorrect_answers": [
            "Windows",
            "Linux",
            "Unix"
        ]
    },
    {
        "question": "What does the acronym 'API' stand for?",
        "correct_answer": "Application Programming Interface",
        "incorrect_answers": [
            "Application Protocol Interface",
            "Advanced Programming Interface",
            "Automated Programming Interface"
        ]
    },
    {
        "question": "What language is used for developing iOS and macOS applications?",
        "correct_answer": "Swift",
        "incorrect_answers": [
            "Java",
            "Kotlin",
            "Objective-C"
        ]
    },
    {
        "question": "What does 'RAM' stand for?",
        "correct_answer": "Random Access Memory",
        "incorrect_answers": [
            "Rapid Access Memory",
            "Read Access Memory",
            "Runtime Access Memory"
        ]
    },
    {
        "question": "What is the main difference between RAM and ROM?",
        "correct_answer": "RAM is volatile, ROM is non-volatile",
        "incorrect_answers": [
            "RAM is slower than ROM",
            "ROM is used for temporary storage",
            "RAM cannot be accessed randomly"
        ]
    },
    {
        "question": "What does the 'OOP' in programming stand for?",
        "correct_answer": "Object-Oriented Programming",
        "incorrect_answers": [
            "Object-Oriented Process",
            "Object-Oriented Performance",
            "Object Operational Programming"
        ]
    },
    {
        "question": "What does 'BIOS' stand for in computer terminology?",
        "correct_answer": "Basic Input Output System",
        "incorrect_answers": [
            "Binary Input Output System",
            "Basic Internal Operating System",
            "Binary Internal Operating System"
        ]
    },
    {
        "question": "Which device is used as the brain of the computer?",
        "correct_answer": "CPU",
        "incorrect_answers": [
            "RAM",
            "Motherboard",
            "Hard Drive"
        ]
    },
    {
        "question": "What does the term 'debugging' mean?",
        "correct_answer": "Fixing errors in the code",
        "incorrect_answers": [
            "Writing new code",
            "Compiling code",
            "Removing outdated code"
        ]
    },
    {
        "question": "Which language is primarily used for building web pages?",
        "correct_answer": "HTML",
        "incorrect_answers": [
            "Python",
            "Java",
            "SQL"
        ]
    },
    {
        "question": "What is an example of a version control system?",
        "correct_answer": "Git",
        "incorrect_answers": [
            "JavaScript",
            "HTML",
            "CSS"
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
