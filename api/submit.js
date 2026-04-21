function parseBody(req) {
  if (req.body == null) return {};
  if (typeof req.body === "object" && !Buffer.isBuffer(req.body)) return req.body;
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return {};
}

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data = parseBody(req);

    return res.status(200).json({
      success: true,
      message: "Formulário recebido com sucesso!",
      timestamp: new Date().toISOString(),
      data_received: {
        email: data.email ?? null,
        nome: data.nome ?? null,
        empresa: data.empresa ?? null,
      },
    });
  } catch (error) {
    console.error("Erro:", error);
    return res.status(500).json({
      error: "Erro ao processar formulário",
      details: error.message,
    });
  }
};
