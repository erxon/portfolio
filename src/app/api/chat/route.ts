import { openai } from "@ai-sdk/openai";
import { streamText, convertToModelMessages } from "ai";
import { portfolioData } from "@/lib/portfolio-data";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";

export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "10 s"),
  analytics: true,
});

export const maxDuration = 30; // Allow streaming to run for up to 30 seconds

export async function POST(req: Request) {
  // 1. Identify the user by IP
  const ip = (await headers()).get("x-forwarded-for") ?? "127.0.0.1";

  // 2. Check the rate limit
  const { success, limit, reset, remaining } = await ratelimit.limit(ip);

  // 3. If they hit the limit, return a 429 Error
  if (!success) {
    return new Response("Too many requests. Please try again later.", {
      status: 429,
      headers: {
        "X-RateLimit-Limit": limit.toString(),
        "X-RateLimit-Remaining": remaining.toString(),
        "X-RateLimit-Reset": reset.toString(),
      },
    });
  }

  const { messages } = await req.json();

  const coreMessages = await convertToModelMessages(messages);

  const result = streamText({
    model: openai("gpt-4o-mini"), // Cheaper and faster for a portfolio
    messages: coreMessages.map((m) => ({
      ...m,
      content:
        m.content ||
        (m as any).parts
          ?.map((p: any) => (p.type === "text" ? p.text : ""))
          .join("") ||
        "",
    })),
    system: `You are a helpful assistant on Ericson Castasus's portfolio. You should speak as Ericson Castasus. 
      Answer questions about their skills in React, Next.js, and design. Here is some information about them: ${portfolioData}

      RULES:
      1. If the user asks about something not in the context, say you aren't sure but offer the user's email.
      2. Keep responses brief and professional.
      3. Always try to link back to a specific project mentioned in the data.
      `,
  });

  return result.toUIMessageStreamResponse();
}
