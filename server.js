//  linea para aceptar certificados autofirmados (solo para pruebas) en caso contrario comentar
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const express = require('express');
const Minio = require('minio');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/connect', async (req, res) => {
  const { endpoint, accessKey, secretKey } = req.body;

  try {
    const url = new URL(endpoint);

    const minioClient = new Minio.Client({
      endPoint: url.hostname,
      port: parseInt(url.port) || (url.protocol === 'https:' ? 443 : 80),
      useSSL: url.protocol === 'https:',
      accessKey,
      secretKey
    });

    const buckets = await minioClient.listBuckets();
    const bucketNames = buckets.map(b => b.name);

    res.json({ status: 'success', buckets: bucketNames });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
