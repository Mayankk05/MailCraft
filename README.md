# MailCraft

## Project Overview
MailCraft is an email writing application that provides users with a seamless experience for composing and managing their emails. The application consists of three main components: an extension for quick access, a frontend for user interaction, and a backend for managing email operations.

<img width="679" height="400" alt="image" src="https://github.com/user-attachments/assets/3d09ff3e-53af-48cb-9b60-2f04ca59143e" />

<img width="389" height="362" alt="image" src="https://github.com/user-attachments/assets/e147a29c-9564-4dd6-abb1-45b89344fa70" />
<img width="475" height="212" alt="image" src="https://github.com/user-attachments/assets/da67f2f9-9144-420d-85d6-49b2c08d2454" />



## Features
- User-friendly interface for composing emails
- Rich text editor for formatting
- Integration with popular email services
- Extension support for quick email access
- History of sent emails for easy reference
- Collaboration features for team email management

## Installation Instructions
To set up the MailCraft application, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mayankk05/MailCraft.git
   cd MailCraft
   ```

2. **Install dependencies:**
   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```

   - For the backend:
     ```bash
     cd backend
     npm install
     ```

3. **Set up the environment:**
   - Create a `.env` file in the backend directory and configure the environment variables as needed.

4. **Start the application:**
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```

   - Start the frontend application:
     ```bash
     cd frontend
     npm start
     ```

## Usage Guide
Once the application is running, you can access it via your web browser. Follow these steps to start using MailCraft:

1. Open the application in your browser (usually at `http://localhost:3000` for the frontend).
2. Log in using your email credentials.
3. Use the rich text editor to compose your emails.
4. Save drafts or send emails directly from the application.

## Project Structure
The MailCraft project is organized as follows:

```
MailCraft/
│
├── extension/          # Chrome/Firefox extension code
├── frontend/           # Frontend application code
│   └── src/            # Source files for the frontend
│
├── backend/            # Backend application code
│   └── src/            # Source files for the backend
│
└── README.md           # Project documentation
```

## Contribution Guidelines
We welcome contributions to MailCraft! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request describing your changes.

Thank you for considering contributing to MailCraft!
