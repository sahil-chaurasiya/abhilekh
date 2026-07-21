import nodemailer from "nodemailer";

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_SECURE } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 465,
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : true,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });
}

interface AppointmentEmailPayload {
  name: string;
  age: number;
  gender: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  symptoms: string;
  additionalNotes?: string;
}

export async function sendAppointmentNotification(payload: AppointmentEmailPayload) {
  const transporter = getTransporter();
  const to = process.env.CLINIC_NOTIFICATION_EMAIL;
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;

  if (!transporter || !to) {
    console.warn(
      "Email not sent: SMTP or CLINIC_NOTIFICATION_EMAIL is not configured. Appointment was still saved to the database."
    );
    return { sent: false };
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color:#0A2E4D;">New Appointment Request</h2>
      <table style="width:100%; border-collapse: collapse;">
        <tr><td style="padding:8px 0; font-weight:bold;">Name</td><td>${payload.name}</td></tr>
        <tr><td style="padding:8px 0; font-weight:bold;">Age</td><td>${payload.age}</td></tr>
        <tr><td style="padding:8px 0; font-weight:bold;">Gender</td><td>${payload.gender}</td></tr>
        <tr><td style="padding:8px 0; font-weight:bold;">Phone</td><td>${payload.phone}</td></tr>
        <tr><td style="padding:8px 0; font-weight:bold;">Email</td><td>${payload.email}</td></tr>
        <tr><td style="padding:8px 0; font-weight:bold;">Preferred Date</td><td>${payload.preferredDate}</td></tr>
        <tr><td style="padding:8px 0; font-weight:bold;">Preferred Time</td><td>${payload.preferredTime}</td></tr>
        <tr><td style="padding:8px 0; font-weight:bold;">Symptoms</td><td>${payload.symptoms}</td></tr>
        <tr><td style="padding:8px 0; font-weight:bold;">Additional Notes</td><td>${payload.additionalNotes || "—"}</td></tr>
      </table>
    </div>
  `;

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject: `New Appointment Request — ${payload.name}`,
    html,
  });

  return { sent: true };
}

interface ContactEmailPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function sendContactNotification(payload: ContactEmailPayload) {
  const transporter = getTransporter();
  const to = process.env.CLINIC_NOTIFICATION_EMAIL;
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;

  if (!transporter || !to) {
    console.warn("Email not sent: SMTP or CLINIC_NOTIFICATION_EMAIL is not configured.");
    return { sent: false };
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color:#0A2E4D;">New Contact Message</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Phone:</strong> ${payload.phone || "—"}</p>
      <p><strong>Message:</strong></p>
      <p>${payload.message}</p>
    </div>
  `;

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject: `New Contact Message — ${payload.name}`,
    html,
  });

  return { sent: true };
}
