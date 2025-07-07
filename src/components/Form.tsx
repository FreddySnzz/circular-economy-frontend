'use client';

import { useState } from "react";
import { 
  FaPaperPlane
} from "react-icons/fa";
import { toast } from "react-toastify";

import { enviarFormulario } from "@/services/api";

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  className?: string;
};

export default function SimpleForm({ className }: FormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email.includes("@") || !form.message) {
      toast.error("Preencha todos os campos corretamente.");
      return;
    };

    setLoading(true);

    try {
      await enviarFormulario(form);
      toast.success("Mensagem enviada com sucesso!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    };
  };

  return (
    <section id="contact" className={`flex bg-green-50 py-16 px-4 ${className}`}>
      <div className="flex flex-col md:flex-row justify-center items-center mx-auto text-center md:gap-20 gap-10 w-full max-w-7xl px-4" data-aos="fade-left">
        <div>
          <h2 className="text-6xl font-bold text-green-800 mb-6">
            Fale Conosco
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Compartilhe suas ideias, deixe uma mensagem ou dúvidas sobre Economia Circular.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-green-300 p-8 rounded-4xl shadow-md max-w-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={form.name}
            onChange={handleChange}
            required
            className="bg-white w-full p-3 mb-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-green-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="bg-white w-full p-3 mb-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-green-500"
          />
          <textarea
            name="message"
            placeholder="Mensagem"
            value={form.message}
            onChange={handleChange}
            required
            className="bg-white w-full p-3 mb-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-green-500"
          />
          <button
            type="submit"
            className="bg-green-700 text-white w-full px-6 py-3 rounded-4xl hover:bg-green-800 transition"
            disabled={loading}
          >
            {loading ? (
              <div className="flex justify-center items-center gap-2">Enviando... <FaPaperPlane /></div>
            ) : (
              <div className="flex justify-center items-center gap-2">Enviar <FaPaperPlane /></div>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}