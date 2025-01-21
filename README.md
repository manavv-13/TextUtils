# TextUtils

TextUtils is a simple React + Vite project that provides users with various text manipulation utilities. Users can convert text to uppercase, lowercase, remove extra spaces, get word and character counts, copy text, and preview their input.

## Features

- Convert text to **Uppercase**
- Convert text to **Lowercase**
- **Remove Extra Spaces** from text
- **Word and Character Count**
- **Copy Text** to clipboard
- **Live Preview** of formatted text

## Tech Stack

- **React** (Frontend framework)
- **Vite** (Build tool)
- **React Router** (For navigation)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/manavv-13/TextUtils.git
   cd TextUtils
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173/` to use the app.

## Project Structure

```
TextUtils/
├── src/
│   ├── components/       # Reusable components
│   ├── pages/            # Page components
│   ├── App.jsx           # Main application file
│   ├── main.jsx          # Entry point for React
│   ├── index.css         # Global styles
├── public/               # Static assets
├── package.json          # Project metadata and dependencies
├── vite.config.js        # Vite configuration
└── README.md             # Documentation
```

## Usage

1. Enter text in the input box.
2. Click the respective buttons to apply transformations.
3. View the results instantly in the preview section.
