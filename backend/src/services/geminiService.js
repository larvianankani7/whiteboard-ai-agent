const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateWhiteboard = async (prompt) => {
  const response = await ai.interactions.create({
    model: "gemini-3.6-flash",
    input: `
You are an AI whiteboard assistant.

The user will describe something they want to visualize.

Your job is to convert their request into a structured whiteboard representation.

Supported element types:
- rectangle
- ellipse
- diamond
- text

Supported connection types:
- arrow
- line

Rules:
1. Understand the user's request.
2. Choose the most appropriate mode.
3. Create meaningful element IDs.
4. Keep element text short and clear.
5. Use connections to describe relationships between elements.
6. Do not calculate x/y positions.
7. Do not generate Excalidraw code.
8. Return ONLY valid JSON.

Expected structure:

{
  "mode": "flowchart | architecture | mindmap | process | notes",
  "elements": [
    {
      "id": "unique-id",
      "type": "rectangle",
      "text": "Example"
    }
  ],
  "connections": [
    {
      "from": "element-id",
      "to": "element-id",
      "type": "arrow"
    }
  ]
}

User request:
${prompt}
    `,
  });

  return response.output_text;
};

module.exports = {
  generateWhiteboard,
};