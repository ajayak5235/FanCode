# FanCode task Automate Application

This is a full-stack application built with **React** for the frontend and **Node.js** for the backend. The application allows users to sign up, log in, and view their tasks. The tasks are fetched from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/), and users can see their task completion percentage. The backend includes automation logic to ensure that all users in the city **"FanCode"** have more than 50% of their tasks completed.

## Features
- **Frontend**:
  - User authentication (Sign up, Login, Logout).
  - View task status (user ID, name, completion percentage, and task status).
  - Button to show tasks.
  - Logout button at the top-right corner.
  
- **Backend**:
  - Automation logic to ensure that users from **"FanCode"** have more than 50% of their tasks completed.
  - **Node.js/Express** backend that interacts with the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to fetch users and tasks.

## Tech Stack
- **Frontend**: React, TypeScript
- **Backend**: Node.js, Express
- **API**: JSONPlaceholder API (mocked data for users and tasks)
- **Routing**: React Router for navigation
- **State Management**: React's `useState` and `useEffect` hooks
- **Authentication**: JWT tokens for user authentication

## Prerequisites

Before setting up the project, make sure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)

## Setup Instructions

### 1. Clone the Repository
npm install
npm start
This will start the backend server on http://localhost:5000.

### Key Sections:
- **Frontend Setup**: Instructions to set up and run the React-based frontend.
- **Backend Setup**: Instructions to set up and run the Node.js backend.
- **Automation Details**: Explanation of the automation logic to ensure users from **FanCode** have more than 50% of their tasks completed.
- **Folder Structure**: An overview of the project structure, including both frontend and backend directories.

This `README.md` provides clear and concise instructions for setting up and running both the frontend and backend, as well as explaining the automation feature.

Clone this repository to your local machine using Git:

```bash
git clone https://github.com/yourusername/task-management-app.git
cd task-management-app
