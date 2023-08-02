import express, { Request, Response } from "express";
import usersRoute from "./modules/users/_api";
import { errorMiddlewareFunc } from "./shared/errors/handle";
import dbConnect from "./db";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(errorMiddlewareFunc);

app.use(usersRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript");
});

dbConnect();

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
