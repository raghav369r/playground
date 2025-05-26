import { Request, Response } from "express";
import { GLOT_URL } from "../utils/const";

interface codeInput {
  code: string;
  language: string;
  input: string;
}

export const runCode = async (
  req: Request<{}, {}, codeInput>,
  res: Response
) => {
  const { code, language, input } = req.body;
  const dataBody = {
    stdin: input,
    files: [{ name: `main.${language}`, content: code }],
  };
  const headers = {
    Authorization: process.env.GLOT_API_KEY || "",
    "Content-type": "application/json",
  };
  try {
    const response = await fetch(
      GLOT_URL(language == "python" ? "py" : language),
      {
        method: "POST",
        body: JSON.stringify(dataBody),
        headers: headers,
      }
    );
    const jsonResponse = await response.json();
    res.status(200).json(jsonResponse);
  } catch (ex: any) {
    console.log(ex?.message);
    console.log(ex);
    res.status(500).json({
      messsage: "server down try again after some time!!",
      error: ex?.message || ex?.error,
    });
  }
};
