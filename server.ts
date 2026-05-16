import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // AI Recommendation Endpoint
  app.post("/api/recommend", async (req, res) => {
    try {
      const { profile } = req.body;
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Based on this personality profile: "${profile}", suggest a Coca-Cola product (Original, Zero Sugar, Diet, Sprite, Fanta, Energy). Provide a short, energetic explanation why it matches. Return JSON format: { "product": "string", "reason": "string" }`,
        config: {
          responseMimeType: "application/json",
        },
      });
      res.json(JSON.parse(response.text));
    } catch (error) {
      console.error("AI Recommendation Error:", error);
      res.status(500).json({ error: "Failed to get recommendation" });
    }
  });

  // AI Chatbot Endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: "You are a friendly, energetic Coca-Cola brand ambassador. You love talking about happiness, refreshment, and the history of Coca-Cola. Keep responses short, youthful, and engaging. Always mention 'Open Happiness' where appropriate.",
        },
      });
      
      // Note: In a real app we'd map history to the SDK format, but for now we just handle the latest message
      const response = await chat.sendMessage({ message });
      res.json({ reply: response.text });
    } catch (error) {
      console.error("AI Chat Error:", error);
      res.status(500).json({ error: "Chat failed" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
