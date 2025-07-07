import axios from "axios";

const API_URL = "http://localhost:8080/messages";

export async function enviarFormulario(
  data: any
): Promise<any> {
  return axios.post(API_URL, data);
};

export async function buscarMensagens(): Promise<any> {
  const res = await axios.get(API_URL);
  return res.data;
};