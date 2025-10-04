import { GoogleGenAI } from "@google/genai";
import { useState } from "react";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyCPhrwWnaRkCtX6XAaM3oZ5KIOuL3CnH8M", // Note: Consider using environment variables for API keys
});

const Chatbot = ({ expDetails, expLoading, expErr }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function answerQuestionFromUrl(userQuestion, url) {
    if (!url || !userQuestion.trim()) {
      return "Please provide both a URL and a question.";
    }

    try {
      setLoading(true);

      // Add user message to chat
      const userMessage = { text: userQuestion, sender: "user" };
      setMessages((prev) => [...prev, userMessage]);

      const contents = [
        {
          text: `Answer the following question based  on the content found at this URL: ${url}. The question is: "${userQuestion}".Reply in plai text with organized response`,
        },
      ];

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: contents,
      });

      const aiResponse =
        response.text || "Sorry, I couldn't generate a response.";

      // Add AI response to chat
      const aiMessage = { text: aiResponse, sender: "ai" };
      setMessages((prev) => [...prev, aiMessage]);

      return aiResponse;
    } catch (error) {
      console.error("Error calling AI API:", error);
      const errorMessage = {
        text: "Sorry, I encountered an error while processing your request.",
        sender: "ai",
      };
      setMessages((prev) => [...prev, errorMessage]);
      return null;
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const url =
      expDetails?.paperUrl ||
      "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4136787/";
    await answerQuestionFromUrl(input, url);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
      <h1 className="mt-6 text-2xl mb-4 font-semibold text-violet-900">
        Experiment Chatbot
      </h1>

      {/* Chat Messages */}
      <div className="w-full h-96 border border-violet-300 rounded-lg mb-4 p-4 overflow-y-auto bg-gray-50">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-4">
            Ask me anything about the experiment!
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`mb-3 ${
                message.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block px-4 py-2 rounded-lg max-w-xs lg:max-w-md ${
                  message.sender === "user"
                    ? "bg-violet-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))
        )}
        {loading && (
          <div className="text-left mb-3">
            <div className="inline-block px-4 py-2 rounded-lg bg-gray-200 text-gray-800">
              Thinking...
            </div>
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex gap-2.5">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading}
            className="flex-1 py-2 px-4 text-[18px] border border-violet-900 rounded-md bg-white placeholder:text-violet-900 text-violet-900 focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="Ask anything about this Experiment..."
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="bg-violet-500 hover:bg-violet-600 disabled:bg-violet-300 py-2 rounded-md px-6 text-white font-medium transition-colors"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>

      {/* URL Info */}
      {expDetails?.paperUrl && (
        <div className="mt-3 text-sm text-gray-600">
          Chatting about: {expDetails.paperUrl}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
