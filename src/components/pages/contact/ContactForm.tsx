import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { CircleCheck, CircleX } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(3, "Name should be at least 3 characters"),
  email: z.email("Invalid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof contactSchema>;

function ContactForm() {
  const {
    register,
    reset,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        "service_ut6zbt3",
        "template_lecwjys",
        {
          name: data.name,
          email: data.email,
          title: data.subject,
          message: data.message,
        },
        {
          publicKey: "_cB_f_h5fN7PkwMin",
        },
      );

      toast.success("Message sent successfully!", {
        icon: <CircleCheck className="text-green-500" size={20} />,
      });

      reset();
    } catch (error) {
      console.error("Failed:", error);

      toast.error("Failed to send message. Please try again.", {
        icon: <CircleX className="text-red-500" size={20} />,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-start w-130 bg-white gap-3 p-10 m-10 rounded shadow-lg z-1"
    >
      <div>
        <strong className="font-bold text-2xl">Contact Me</strong>
      </div>

      <div className="w-full flex flex-col gap-1">
        <label htmlFor="name">
          Name <strong className="text-red-400">*</strong>
        </label>
        <input
          id="name"
          type="text"
          className="text-sm border border-gray-500/70 rounded-sm w-full focus:border-black outline-none p-1"
          {...register("name")}
        />
      </div>
      {errors.name && (
        <p className="text-red-500 text-sm">{errors.name.message}</p>
      )}

      <div className="w-full flex flex-col gap-1">
        <label htmlFor="email">
          Email <strong className="text-red-400">*</strong>
        </label>
        <input
          id="email"
          type="email"
          className="text-sm border border-gray-500/70 rounded-sm w-full focus:border-black outline-none p-1"
          {...register("email")}
        />
      </div>
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}

      <div className="w-full flex flex-col gap-1">
        <label htmlFor="subject">
          Subject <strong className="text-red-400">*</strong>
        </label>
        <input
          id="subject"
          className="text-sm border border-gray-500/70 rounded-sm w-full focus:border-black outline-none p-1"
          {...register("subject")}
        />
      </div>
      {errors.message && (
        <p className="text-red-500">{errors.message.message}</p>
      )}

      <div className="w-full flex flex-col gap-1">
        <label htmlFor="message">
          Message <strong className="text-red-400">*</strong>
        </label>
        <textarea
          id="message"
          className="text-sm border border-gray-500/70 rounded-sm w-full focus:border-black outline-none p-1"
          rows={7}
          {...register("message")}
        />
      </div>
      {errors.message && (
        <p className="text-red-500">{errors.message.message}</p>
      )}

      <button
        type="submit"
        className="text-center rounded p-2 mt-2 h-10 w-full cursor-pointer text-white bg-[#1d3557] hover:bg-[#457b9d] transition-all duration-300"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="mx-auto h-5 w-5 animate-spin rounded-full border-3 border-white border-t-transparent"></div>
        ) : (
          <div>Submit</div>
        )}
      </button>
    </form>
  );
}

export default ContactForm;
