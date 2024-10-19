# Quiz Application

This project is a simple web-based quiz application that allows users to select a category, fetch quiz questions from a server, and answer them. The app dynamically fetches quiz data based on the selected category and checks the user's answers, providing instant feedback.

## Features

- Fetches quiz questions from a local server (`http://localhost:3000/results`).
- Supports multiple categories of quizzes.
- Provides multiple-choice questions with feedback on the answers.
- Displays correct and incorrect answers.
- Keeps track of the score.
 
## Technologies Used

- **HTML**: Structure of the web application.
- **CSS**: For basic styling.
- **JavaScript : To fetch quiz data, handle user interaction, and display results.
- **API/Server**: Local server for fetching quiz data (`http://localhost:3000`).

### Example of a Sample Quiz Data Format

The application expects quiz data to be returned in the following format:

```json
[
    {
        "id": 1,
        "category": "Science",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the chemical symbol for water?",
        "correct_answer": "H2O",
        "incorrect_answers": ["O2", "CO2", "N2"]
    },
    ...
]
