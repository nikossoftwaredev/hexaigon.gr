"use server";

export const submitContactForm = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false };
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          embeds: [
            {
              title: "📩 New Contact Form Submission",
              color: 0x6366f1,
              fields: [
                { name: "👤 Name", value: name, inline: true },
                { name: "📧 Email", value: email, inline: true },
                { name: "💬 Message", value: message },
              ],
              timestamp: new Date().toISOString(),
              footer: { text: "hexaigon.gr" },
            },
          ],
        }),
      });
    } catch (error) {
      console.error("Failed to send Discord webhook:", error);
    }
  }

  return { success: true };
};
