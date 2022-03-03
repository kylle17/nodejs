import * as express from "express";
import catsRouter from "./cats/cats.route";

const app: express.Express = express();

// * logging middleware
app.use((req, res, next) => {
  console.log("\n\n");
  console.log("==== middleware start");
  console.log(req.rawHeaders[1]);
  console.log("==== middleware end");
  console.log("\n\n");
  next();
});

// * json middleware
app.use(express.json());

// * catsRouter
app.use(catsRouter);

// * 404 error middleware
app.use((req, res) => {
  res.send({ error: "  404 not found error " });
});

app.listen("8000", () => {
  console.log("server is on ... ");
});
