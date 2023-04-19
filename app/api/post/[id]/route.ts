import { NextResponse } from "next/server";
import { prisma } from "../../client";

/**
This code is a TypeScript function that updates a blog post by ID using the HTTP PATCH method. It imports `NextResponse` from the `"next/server"` module, which is a helper class for returning HTTP responses from Next.js API routes. It also imports the `prisma` client from a `"../../client"` module.
The function takes two arguments: `request` which is of type `Request` and `params` which is an object with a property `id` of type `string`. The `Params` type is defined as an alias for this object.
Inside the function, it extracts the `id` property from the `params` object and uses `request.json()` to get the new `title` and `content` values from the request body. It then uses the `prisma` client to update the post with the given `id`, setting the `title` and `content` fields to the new values.
If the update is successful, it returns a JSON response with the updated post and a status code of 200 using `NextResponse.json()`. If there is an error, it logs the error to the console and returns a JSON response with an error message and a status code of 500.
This function can be used in a Next.js API route to handle PATCH requests to update blog post content.
**/

type Params = { params: { id: string } };

/**
 * Updates a post with the given ID using PATCH method
 * @param request - Request object from Next.js API
 * @param params - Object containing parameters parsed from the request URL
 * @returns Returns a JSON response containing the updated post object
 * @throws Throws an error if there was an issue updating the post
 */
export async function PATCH(request: Request, { params }: Params): Promise<NextResponse> {
  try {
    const { id } = params;
    const { title, content } = await request.json();
    const post = await prisma.post.update({
      where: { id: id },
      data: { title, content },
    });
    return NextResponse.json(post, { status: 200 });
  } catch (e) {
    console.log("request error", e);
    throw new Error("Error updating post.");
  }
}
