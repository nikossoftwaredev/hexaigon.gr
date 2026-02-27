"use server";

export const submitContactForm = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false };
  }

  // TODO: Send email via Resend/SendGrid
  console.log("Contact form submission:", { name, email, message });

  return { success: true };
};
