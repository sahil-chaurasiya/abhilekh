import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { sendContactNotification } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the highlighted fields and try again.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    try {
      await sendContactNotification(parsed.data);
    } catch (emailError) {
      console.error("Contact email failed:", emailError);
      return NextResponse.json(
        {
          success: false,
          message: "We could not send your message right now. Please call the clinic directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Thank you — your message has been sent." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
