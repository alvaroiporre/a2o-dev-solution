# Technical Test: Test for Web App Developers 

Welcome to our technical test that was solved by Alvaro Iporre.

## Problem Description

The goal of this test is to know the skill level of the Web App Developer Candidate in the following topics:
- Problem solving, analysis skills and solution proposals.
- Standards, Coding Conventions and Best Practices.
- Front End development: AJAX, UI/UX, HTML, CSS, Javascript, Front End frameworks and libraries
- Back End development: Data Structures, OOP, Design Patterns.
- English comprehension.


## Technologies Used

- **Backend**: Laravel 8.x
- **Frontend**: React 17.x & Tailwindcss

## Prerequisites

Before starting the test, make sure you have the following tools installed on your system:

- [Node.js](https://nodejs.org/) (version 12.x or higher)
- [npm](https://www.npmjs.com/) (usually installed with Node.js)
- [Composer](https://getcomposer.org/) (for installing Laravel dependencies)
- [PHP](https://www.php.net/) (version 7.4 or higher)


Here's the text you can use for your README.md:

markdown
Copy code
## Installation Instructions

### Backend (Laravel)

1. Clone this repository to your local machine.
2. Navigate to the backend directory (`backend/`).
3. Run `composer install` to install PHP dependencies.
4. Start the development server with `php artisan serve`. The server will run by default at `http://localhost:8000`.

### API Endpoint
- **URL:** `http:/localhost:8000/api/v1/solve/{id}` 
- **id:** Is the number of problem
- **Method:** POST

### Instructions:

1. **Send a POST Request:** Use a tool like Postman, or your preferred programming language's HTTP client to send a POST request to the provided URL.

2. **Request Body:**
   - The request body should contain the input data in string format, wich required for solving problem `id`.


3. **Response:**
   - Upon receiving the request, the API will process the input data and generate a response in json format with the following format {"output": "{solution_for_input}"}.


### Frontend (React)

1. Navigate to the frontend directory (`frontend/`).
2. Run `npm install` to install Node.js dependencies.
3. Set the `API_URL` in the `.env` file and copy your backend api url by default `http://localhost:8000/api/v1`.
3. Start the development server with `npm run dev`. The server will run by default at `http://localhost:5173`.
4. The page to solve the problem-1 will be `http://localhost:5173/problem-1`
5. The page to solve the problem-2 will be `http://localhost:5173/problem-2`


Good luck and have fun developing!
