import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware para fazer o parse do JSON no body da requisição
  app.use(express.json());

  // API Route: Ponte para o I.Sales
  app.post("/api/enviar-lead", async (req, res) => {
    const { nome, email, telefone, cidade } = req.body;

    // Monta o FormData EXATAMENTE como a documentação do I.Sales pede
    const formData = new FormData();
    
    // IDs da conta I.Sales
    formData.append('e', 'HJK1238ISAL567'); 
    formData.append('fid', 'UFD159TR951'); 
    
    formData.append('redirect', '1');
    formData.append('teste', 'Sim');

    // Mapeia os dados do lead
    formData.append('nome', nome || '');
    formData.append('email', email || '');
    formData.append('telefone', telefone || '');
    formData.append('cidade', cidade || '');
    formData.append('valor_energia', ''); // Envia vazio conforme a doc

    try {
      // Faz o envio real para o banco de dados do I.Sales
      const isalesResponse = await fetch('https://app.isales.company/formulario/cliente', {
        method: 'POST',
        body: formData,
        // Não precisa de cabeçalho 'Content-Type', o FormData resolve sozinho
      });

      if (isalesResponse.ok) {
        // Devolve sucesso para o seu formulário exibir a mensagem verde
        return res.status(200).json({ success: true, message: 'Lead salvo no CRM!' });
      } else {
        const errorText = await isalesResponse.text();
        console.error('Erro na resposta do I.Sales:', isalesResponse.status, errorText);
        return res.status(500).json({ error: 'Erro ao salvar no banco de dados do CRM', details: errorText });
      }
    } catch (error) {
      console.error('Erro de conexão com o Webhook:', error);
      return res.status(500).json({ error: 'Falha na comunicação com o CRM' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
