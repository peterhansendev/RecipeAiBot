import { InferenceClient } from "@huggingface/inference";

const HF_TOKEN = process.env.HF_TOKEN;  // Store token securely in environment variables
const inference = new InferenceClient(HF_TOKEN);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { text } = req.body;

        if (!text || typeof text !== "string") {
            return res.status(400).json({ error: "Invalid request. 'text' field is required." });
        }
// "google/gemma-2b-it",
        const response = await inference.chatCompletion({
            model: "mistralai/Mistral-7B-Instruct-v0.3",
            messages: [{ role: "user", content: text }],
            max_tokens: 512,
        });
console.log(response)
        if (!response || !response.choices || response.choices.length === 0) {
            throw new Error("Invalid response from Hugging Face API.");
        }

        res.status(200).json({ response: response.choices[0].message });
    } catch (error) {
        console.error("Error calling Hugging Face API:", error);

        res.status(500).json({
            error: "Error in AI response",
            details: error.message || "Unknown error",
        });
    }
}