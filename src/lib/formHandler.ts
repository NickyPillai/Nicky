import type { FormData } from "@/types";

export async function submitForm(data: FormData): Promise<boolean> {
  try {
    const results = await Promise.allSettled([
      // Send email via Web3Forms
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: data.name,
          email: data.email,
          company: data.company,
          role: data.role,
          service_type: data.serviceType,
          message: data.message,
          subject: `Portfolio Inquiry: ${data.serviceType}`,
          from_name: "Nicky Pillai Portfolio",
        }),
      }),

      // Log to Google Sheet (if URL configured)
      ...(process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL
        ? [
            fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                timestamp: new Date().toISOString(),
                ...data,
              }),
            }),
          ]
        : []),
    ]);

    const emailResult = results[0];
    return emailResult.status === "fulfilled" && emailResult.value.ok;
  } catch {
    return false;
  }
}
