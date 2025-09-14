# Article Generator

A full-stack web application that generates detailed articles based on a user-provided topic and number of keywords. The article is formatted in Markdown and can be easily copied. The app uses the **Gemini API** as its backend language model.

---

## 🚀 Features

- User-friendly interface built with React and Tailwind CSS
- Accepts topic and keyword count as input
- Generates well-structured articles in Markdown format
- Copy-to-clipboard functionality
- Backend powered by Node.js and Express, integrating with the Gemini API

---

## 🛠 Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **API**: Gemini API (via REST)
- **Environment**: `.env` file for API keys
- **Version Control**: Git & GitHub

---

## 📂 Project Structure

```
article-generator/
├── backend/                # Express server and Gemini API integration
│   ├── index.js            # Server entry point
│   ├── .env                # Environment variables (excluded in .gitignore)
│   └── package.json        # Backend dependencies
├── frontend/               # React app
│   ├── public/             # Static files
│   ├── src/                # React components and styling
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   └── package.json        # Frontend dependencies
├── .gitignore              # Files and directories to exclude from version control
└── README.md               # This documentation file
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/article-generator.git
cd article-generator
```

---

### 2️⃣ Setup Backend

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file and add your Gemini API key:

   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. Start the backend server:

   ```bash
   node index.js
   ```

   The server will run on `http://localhost:5000`.

---

### 3️⃣ Setup Frontend

1. Open a new terminal and navigate to the frontend folder:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   The app will open at `http://localhost:3000`.

---

## 🔑 Environment Variables

- `GEMINI_API_KEY`: Your Gemini API key required to access the content generation API.

Make sure this file is never pushed to public repositories.

---

## 📦 Deployment

For production, you should:
- Secure environment variables
- Use a process manager like PM2 or Docker
- Deploy the frontend to platforms like Vercel or Netlify
- Deploy the backend to platforms like Heroku, Render, or Railway

---

## 📜 License

MIT License - feel free to use and modify this project!

---

## 🤝 Contributions

Feel free to fork the repository and submit pull requests. Improvements, bug fixes, or additional features are welcome!

---

## 📫 Contact

For questions or collaboration, connect on GitHub: [yourusername](https://github.com/yourusername)

---

Happy writing! ✍️📚