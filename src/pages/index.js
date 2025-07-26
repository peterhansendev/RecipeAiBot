import { useState } from "react";
import axios from "axios";

export default function Home() {
    const [userInput, setUserInput] = useState("");
    const [aiResponse, setAiResponse] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        setAiResponse("Generating response...");
        try {
            const res = await axios.post("/api/inference", { text: userInput });
             console.log(res)
            setAiResponse(res.data.response);
        } catch (error) {
            setAiResponse("Error generating response. Try again!");
        }
    };
    console.log(aiResponse.content)
    return (
        <div className="container">
            <h1>Hugging Face AI Chat</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Ask me anything..." 
                    value={userInput} 
                    onChange={(e) => setUserInput(e.target.value)} 
                    required 
                />
                <button type="submit">Generate</button>
            </form>
            <p><strong>Response:</strong> {aiResponse.content}</p>
            <style jsx>{`
                .container {
                    text-align: center;
                    max-width: 600px;
                    margin: auto;
                    padding: 50px;
                }
                input {
                    width: 80%;
                    padding: 10px;
                    margin: 10px;
                }
                button {
                    padding: 10px;
                    background: #0070f3;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
                button:hover {
                    background: #005bb5;
                }
            `}</style>
        </div>
    );
}