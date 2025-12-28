import { useState } from "react";
import API from "../api";

export default function Chatbot() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    const res = await API.post("/chat", { message });
    setReply(res.data.reply);
  };

  return (
    <div>
      <h3>🤖 AI Assistant</h3>
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={sendMessage}>Send</button>
      <p>{reply}</p>
    </div>
  );
}
