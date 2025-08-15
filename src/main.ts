import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function start() {
  const app = await NestFactory.create(AppModule);

  // .env fayldan yoki 3003 dan port olish
  const PORT = process.env.API_PORT || process.env.PORT || 3003;

  await app.listen(PORT, () => {
    console.log(`Server started at: http://localhost:${PORT}`);
  });
}

start();
