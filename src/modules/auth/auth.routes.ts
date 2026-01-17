import { Router, Request, Response } from "express";
import { AuthController } from "./auth.controller";
import { authenticate } from "../../middlewares/auth.middleware";

const router = Router();

router.post("/login", AuthController.login);
router.get("/me", authenticate, (req, res) => res.json(req));

router.get("/", (_req: Request, res: Response) => {
  res.json({ response: "Hi API is running" });
});
export default router;
