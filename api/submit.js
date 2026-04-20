module.exports = async (req, res) => {
  // Permitir apenas POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body;
    
    console.log('Dados recebidos:', data);

    // Para teste, vamos apenas confirmar recebimento
    // Depois você pode integrar com um banco de dados (MongoDB, Supabase, etc)
    
    return res.status(200).json({ 
      success: true,
      message: 'Formulário recebido com sucesso!',
      timestamp: new Date().toISOString(),
      data_received: {
        email: data.email,
        nome: data.nome,
        empresa: data.empresa
      }
    });
  } catch (error) {
    console.error('Erro:', error);
    return res.status(500).json({ 
      error: 'Erro ao processar formulário',
      details: error.message 
    });
  }
};