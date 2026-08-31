# Whiteboard AI Agent 🧠✏️

An AI-powered interactive whiteboard application that converts natural language instructions into visual diagrams.

Users can manually create diagrams using an interactive canvas or describe what they want using natural language. The AI processes the request and generates structured visual elements directly on the whiteboard.

## Features

### Interactive Whiteboard

* Infinite canvas
* Draw shapes manually
* Add text
* Create arrows and connections
* Zoom and pan
* Element selection and editing
* Light and dark canvas modes

### AI Diagram Generation

Users can provide natural language instructions such as:

> Create a login flowchart with validation

The application uses Gemini AI to understand the request and convert it into structured diagram data.

The generation pipeline works as follows:

```text
User Prompt
     ↓
Gemini AI
     ↓
Structured JSON
     ↓
Layout Engine
     ↓
Excalidraw Elements
     ↓
Interactive Whiteboard
```

### Supported AI Generation Modes

* Flowcharts
* Architecture diagrams
* Process diagrams
* Mind maps
* Notes

### Whiteboard Controls

* Undo
* Redo
* Save board
* Share board link
* Theme switching
* Manual drawing tools

---

# Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* Excalidraw
* Lucide React

## Backend

* Node.js
* Express.js
* Gemini AI

## AI

* Google Gemini
* `@google/genai`

---

# Project Structure

```text
whiteboard-ai/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AIPrompt.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── LeftToolbar.jsx
│   │   │   ├── RightPanel.jsx
│   │   │   └── Whiteboard.jsx
│   │   │
│   │   ├── utils/
│   │   │   └── aiToExcalidraw.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── Dockerfile
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   └── aiRoutes.js
│   │   │
│   │   ├── services/
│   │   │   └── geminiService.js
│   │   │
│   │   └── server.js
│   │
│   ├── Dockerfile
│   ├── .env
│   └── package.json
│
├── docker-compose.yml
└── README.md
```

---

# Installation

## Clone the repository

```bash
git clone <repository-url>
cd whiteboard-ai
```

---

# Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

# Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
```

Start the backend server:

```bash
npm run dev
```

The backend runs on:

```text
http://localhost:5000
```

---

# AI Generation Architecture

The AI does not directly generate Excalidraw code.

Instead, Gemini converts the user request into structured JSON.

Example:

```json
{
  "mode": "flowchart",
  "elements": [
    {
      "id": "start",
      "type": "ellipse",
      "text": "Start"
    },
    {
      "id": "login",
      "type": "rectangle",
      "text": "Enter Credentials"
    },
    {
      "id": "validate",
      "type": "diamond",
      "text": "Valid?"
    }
  ],
  "connections": [
    {
      "from": "start",
      "to": "login",
      "type": "arrow"
    },
    {
      "from": "login",
      "to": "validate",
      "type": "arrow"
    }
  ]
}
```

The frontend then processes this data through a conversion layer:

```text
Gemini JSON
     ↓
aiToExcalidraw
     ↓
Position Calculation
     ↓
Excalidraw Elements
     ↓
Canvas Rendering
```

This separation allows the AI to focus on understanding the user's intent while the frontend handles visual rendering.

---

# Running with Docker

Build and start the application:

```bash
docker compose up --build
```

Frontend:

```text
http://localhost:3000
```

Backend:

```text
http://localhost:5000
```

Stop containers:

```bash
docker compose down
```

---

# Current Development Status

## Phase 1 — Whiteboard

* [x] Infinite canvas
* [x] Manual shapes
* [x] Text
* [x] Arrows
* [x] Zoom and pan
* [x] Floating tools

## Phase 2 — Basic AI Generation

* [x] Gemini integration
* [x] Natural language prompts
* [x] Structured JSON generation
* [x] Layout engine
* [x] Excalidraw conversion
* [x] AI diagram rendering

## Phase 3 — Smart Modification

* [ ] Understand existing board
* [ ] Add elements to existing diagrams
* [ ] Modify existing elements
* [ ] Remove requested elements
* [ ] AI context awareness

## Phase 4 — Multiple Generation Modes

* [ ] Notes mode
* [ ] Flowchart mode
* [ ] Architecture mode
* [ ] Mind map mode
* [ ] Process diagram mode
* [ ] Automatic mode detection

## Phase 5 — Persistence

* [ ] Supabase authentication
* [ ] Save boards
* [ ] Load boards
* [ ] Board history
* [ ] Sharing system

---

# Future Improvements

* Smart AI modifications
* Better automatic diagram layouts
* Context-aware whiteboard editing
* Real-time collaboration
* Board persistence with Supabase
* User authentication
* Shareable boards
* Export as PNG/PDF
* Multiple AI generation modes

---

# Author

Built as an AI-powered visual thinking and diagram generation platform using React, Excalidraw, Node.js, Express, and Google Gemini AI.
