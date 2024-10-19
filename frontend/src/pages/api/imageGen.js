import { GoogleAuth } from "google-auth-library";

export default async function handler(req, res) {
    // Check if the request method is POST, if not, return 405 Method Not Allowed
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // Initialize Google Auth client with necessary scopes
    const auth = new GoogleAuth({
        scopes: "https://www.googleapis.com/auth/cloud-platform",
    });
    const client = await auth.getClient();

    // Extract the prompt from the request body
    let { prompt } = req.body;

    // Remove leading and trailing whitespace from the prompt
    prompt = prompt.trim();

    console.log("⭐️ ", prompt);

    // Prepare the request body for the image generation API
    let body = JSON.stringify({
        instances: [
            {
                prompt: prompt,
            },
        ],
        parameters: {
            sampleCount: 1,
        },
    });

    try {
        // Get the access token from the Google Auth client
        const accessToken = await client.getAccessToken();

        // Make a POST request to the Google AI Platform image generation API
        const response = await fetch(
            `https://us-central1-aiplatform.googleapis.com/v1/projects/stone-resource-439021-h6/locations/us-central1/publishers/google/models/imagen-3.0-generate-001:predict`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken.token}`,
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: body,
            }
        );

        // Check if the response is successful, if not, throw an error
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Extract the base64 encoded image from the response
        let image = data.predictions[0].bytesBase64Encoded;

        console.log("🟢 got image", image.slice(0, 100));

        // Return the generated image as a JSON response
        return res.status(200).json({ image: image });
    } catch (error) {
        // Log any errors that occur during the process
        console.error("🟠 Error generating image:", error.message);

        // Return a 500 Internal Server Error response if image generation fails
        return res.status(500).json({ error: "Failed to generate image" });
    }
}
