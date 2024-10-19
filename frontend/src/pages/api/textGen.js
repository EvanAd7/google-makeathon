import { GoogleAuth } from "google-auth-library";

export default async function handler(req, res) {
    // Initialize Google Auth client
    const auth = new GoogleAuth({
        scopes: "https://www.googleapis.com/auth/cloud-platform",
    });
    const client = await auth.getClient();

    // Get the prompt from the request body
    let prompt = req.body.prompt;
    prompt = prompt.trim();

    console.log("⭐️ ", prompt);

    // Prepare the request body for the AI model
    let body = JSON.stringify({
        contents: [
            {
                role: "user",
                parts: [{ text: prompt }]
            }
        ],
        generationConfig: {
            temperature: 0.9,
            topK: 1,
            topP: 1,
        }
    });

    // Set up project and model IDs
    const PROJECT_ID = "stone-resource-439021-h6";
    const MODEL_ID = "gemini-1.5-flash-002";

    try {
        // Get the access token
        const accessToken = await client.getAccessToken();

        // Make a POST request to the AI model API
        const response = await fetch(
            `https://us-central1-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/us-central1/publishers/google/models/${MODEL_ID}:streamGenerateContent`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken.token}`,
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: body,
            }
        );

        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the response JSON
        const data = await response.json();
        console.log("🟢 data", data);

        // Extract and combine the generated text from all chunks
        let generatedText = '';
        for (const chunk of data) {
            if (chunk.candidates && chunk.candidates[0]?.content?.parts) {
                generatedText += chunk.candidates[0].content.parts[0].text || '';
            }
        }

        console.log("🟢 Generated text:", generatedText);

        // Send the generated text as a JSON response
        return res.status(200).json({ generatedText: generatedText });
    } catch (error) {
        // Log and return an error if something goes wrong
        console.error("🟠 Error generating text:", error.message);
        return res.status(500).json({ error: "Failed to generate text" });
    }
}
