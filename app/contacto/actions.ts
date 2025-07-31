"use server"

import { z } from "zod"

// Define el esquema de validación para el formulario de contacto
const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres.").max(50, "El nombre es demasiado largo."),
  email: z.string().email("Por favor, introduce un correo electrónico válido."),
  phone: z.string().optional(), // Opcional, puedes hacerlo requerido si lo necesitas
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres.")
    .max(500, "El mensaje es demasiado largo."),
})

export async function submitContactForm(prevState: any, formData: FormData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  }

  try {
    const validatedData = contactFormSchema.parse(data)

    // Aquí es donde normalmente integrarías con un servicio de envío de emails
    // o una API de WhatsApp Business.
    // Por ejemplo, podrías usar Nodemailer para enviar un email a tu dirección de correo.
    // O una API como Twilio para enviar un mensaje de WhatsApp.

    // Simulación de envío a WhatsApp:
    console.log("Formulario recibido y validado:", validatedData)
    const whatsappMessage = `Nuevo mensaje de contacto:\n\nNombre: ${validatedData.name}\nEmail: ${validatedData.email}\nTeléfono: ${validatedData.phone || "No proporcionado"}\nMensaje: ${validatedData.message}`
    console.log("Mensaje simulado para WhatsApp:", whatsappMessage)

    // En un entorno real, aquí harías la llamada a la API de WhatsApp/Email
    // await sendWhatsAppMessage(whatsappMessage); // Esto requeriría una implementación real
    // await sendEmail(validatedData); // Esto requeriría una implementación real

    return { success: true, message: "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto." }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.flatten().fieldErrors }
    }
    return { success: false, message: "Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo." }
  }
}
