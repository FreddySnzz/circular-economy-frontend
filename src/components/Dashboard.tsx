import { useEffect, useState } from "react";
import {
  FaUser,
  FaRegEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";
import Spinner from "@/components/Spinner";

import { buscarMensagens } from "@/services/api";

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export default function Dashboard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        const response = await buscarMensagens();

        if (response) {
          setMessages(response);
        } else {
          setMessages([]);
        };
      } catch (error) {
        setMessages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);
  
  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-green-800 mb-8">
        Mensagens
      </h1>

      {loading ? (
        <div className="flex flex-col items-center justify-center h-full space-y-4"> 
          <Spinner />
          <span className="text-gray-600">Carregando mensagens...</span>
        </div>
      ) : messages.length === 0 ? (
        <p className="text-gray-600">Nenhuma mensagem encontrada.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-white rounded-lg shadow p-6 border border-green-100 hover:shadow-lg transition"
              data-aos="fade-left"
            >
              <div className="flex items-center gap-2 mb-2">
                <FaUser className="text-green-700" />
                <span className="font-semibold text-green-800">{msg.name}</span>
              </div>
              <div className="flex items-center gap-2 mb-2 text-gray-700">
                <FaRegEnvelope className="text-green-700" />
                <span>{msg.email}</span>
              </div>
              <div className="flex items-center gap-2 mb-2 text-gray-700">
                <span className="text-justify">"{msg.message}"</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaCalendarAlt className="text-green-700" />
                <span>{new Date(msg.createdAt).toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}