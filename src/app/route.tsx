import { render } from "@jsx-email/all";
import { Template } from "../../emails/templates/WelcomeEmail";

export async function POST(request: Request) {
  const html = render(<Template />, {});
  // Don't send the email, just render it.
  return Response.json({ html })
}