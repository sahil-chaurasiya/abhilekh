import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Appointment from "@/models/Appointment";
import { appointmentSchema } from "@/lib/validations";
import { sendAppointmentNotification } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = appointmentSchema.safeParse(body);

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

    await connectToDatabase();

    const appointment = await Appointment.create(parsed.data);

    try {
      await sendAppointmentNotification(parsed.data);
    } catch (emailError) {
      console.error("Appointment saved but email notification failed:", emailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your appointment request has been received. Our team will call you shortly to confirm.",
        id: appointment._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Appointment API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while submitting your request. Please call the clinic directly.",
      },
      { status: 500 }
    );
  }
}
