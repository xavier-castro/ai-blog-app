import { Configuration, OpenAIApi, CreateChatCompletionResponse } from "openai";
import { NextResponse } from "next/server";
import { AxiosResponse } from "axios";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
  try {
    const { title, role } = await request.json();

    // OpenAI uses Axios hence this following code:
    const aiResponse: AxiosResponse<CreateChatCompletionResponse, any> =
      await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            // content: `Create small blog post with html tags based on this title: ${title}`,
            content: `Create 3 line blog post with html tags based on this title: ${title}`,
          },
          {
            role: "system",
            content: `${
              role || "I am a helpful assistant"
            }. Write with html tags.`,
          },
        ],
      });

    return NextResponse.json(
      {
        content: aiResponse.data.choices[0].message?.content,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("request error", error);
    NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}
