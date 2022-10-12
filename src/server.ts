import express from "express"
import { categoriaRoutes } from "./routers/categoria.routes";
import { expesificacoesRoutes } from "./routers/espesificacao.routes";
const porta = 9090
const app = express();

app.use(express.json());

app.use("/categoria", categoriaRoutes)

app.use("/expesificacao", expesificacoesRoutes)


app.listen(porta, () => { console.log(`Servidor Rodando na porta: ${porta}`) })