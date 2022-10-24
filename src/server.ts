import express from "express"
import { categoriaRoutes } from "./routers/categoria.routes";
import { espesificacoesRoutes } from "./routers/espesificacao.routes";
 import swaggerUi from "swagger-ui-express"
 import swaggerFile from "./swagger.json"

const porta = 9091
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use("/categoria", categoriaRoutes);

app.use("/expesificacao", espesificacoesRoutes);


app.listen(porta, () => { console.log(`Servidor Rodando na porta: ${porta}`) })