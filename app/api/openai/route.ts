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
      await openai.createCompletion({
        model: "gpt-3.5-turbo",
        prompt:
          "I want you to act as a social media influencer. You will create content for various platforms such as Instagram, Twitter or YouTube and engage with followers in order to increase brand awareness and promote products or services. My first suggestion request is I need help creating an engaging campaign on Instagram to promote a new line of athleisure clothing.",
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
