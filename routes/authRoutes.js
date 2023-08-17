import express from "express";
import authenticate from "../controllers/authControllers.js";

const router = express.Router();

router.get("/login", authenticate.userLogin);
router.get("/signup", authenticate.userSignup);
router.post("/signup", authenticate.createAccount);
router.post("/login", authenticate.logUser);
router.get('/forget', authenticate.forgotPassword);

export default router;
