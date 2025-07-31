"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useActionState } from "react"
import { submitContactForm } from "@/app/contacto/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// Define el esquema de validación para el formulario de contacto
const formSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre es requerido y debe tener al menos 2 caracteres.")
    .max(50, "El nombre es demasiado largo."),
  email: z.string().email("Por favor, introduce un correo electrónico válido."),
  phone: z.string().optional(),
  message: z
    .string()
    .min(10, "El mensaje es requerido y debe tener al menos 10 caracteres.")
    .max(500, "El mensaje es demasiado largo."),
})

type ContactFormInputs = z.infer<typeof formSchema>

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  // Reset form on successful submission
  if (state?.success) {
    reset()
  }

  return (
    <form action={formAction} className="space-y-6 p-6 sm:p-8 bg-white rounded-xl shadow-lg">
      <h2 className="font-title text-2xl sm:text-3xl text-gray-900 mb-4">Envíanos un Mensaje</h2>
      <div>
        <Label htmlFor="name" className="font-text-regular text-gray-700">
          Nombre Completo
        </Label>
        <Input id="name" type="text" placeholder="Tu nombre" {...register("name")} className="mt-1" />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        {state?.errors?.name && <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>}
      </div>

      <div>
        <Label htmlFor="email" className="font-text-regular text-gray-700">
          Correo Electrónico
        </Label>
        <Input id="email" type="email" placeholder="tu@ejemplo.com" {...register("email")} className="mt-1" />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        {state?.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>}
      </div>

      <div>
        <Label htmlFor="phone" className="font-text-regular text-gray-700">
          Teléfono (Opcional)
        </Label>
        <Input id="phone" type="tel" placeholder="Ej: +54 9 3571 123456" {...register("phone")} className="mt-1" />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        {state?.errors?.phone && <p className="text-red-500 text-sm mt-1">{state.errors.phone}</p>}
      </div>

      <div>
        <Label htmlFor="message" className="font-text-regular text-gray-700">
          Tu Mensaje
        </Label>
        <Textarea
          id="message"
          placeholder="Escribe tu consulta aquí..."
          rows={5}
          {...register("message")}
          className="mt-1"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        {state?.errors?.message && <p className="text-red-500 text-sm mt-1">{state.errors.message}</p>}
      </div>

      <Button type="submit" className="w-full font-text-bold bg-blue-600 hover:bg-blue-700" disabled={isPending}>
        {isPending ? "Enviando..." : "Enviar Mensaje"}
      </Button>

      {state?.success && <p className="text-green-600 text-center mt-4 font-text-regular">{state.message}</p>}
      {state && !state.success && state.message && (
        <p className="text-red-600 text-center mt-4 font-text-regular">{state.message}</p>
      )}
    </form>
  )
}
