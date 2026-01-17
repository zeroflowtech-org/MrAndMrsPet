import app from "./app";
import { connectDatabase } from "./config/database";

const PORT = process.env.PORT || 4000;

(async () => {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
  });
})();
