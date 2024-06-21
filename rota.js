const express = require('express');
const app = express();
const port = 4000;


app.get('/', (req, res) => {
 res.send('pegou agora')
});




app.listen(port, () => console.log(`Server rodando na porta ${port}`));
