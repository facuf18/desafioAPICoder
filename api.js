const express = require('express');
const productsRouter = require('./routes/productsRouter.js')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/api/productos', productsRouter);


const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
server.on("error", (err) => { console.log(err); });