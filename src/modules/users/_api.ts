import { Router } from "express";
import {
  getUser,
  getUsers,
  postUser,
  patchUser,
  deleteUser,
  loginUser,
} from "./_controllers";
import { isLoggedIn } from "../../shared/auth/is-loggedin.js";

const router = Router();

router.post("/users", postUser);
router.post("/users/login", loginUser);
router.get("/users", isLoggedIn, getUsers);
router.get("/users/:id", isLoggedIn, getUser);
router.patch("/users/:id", isLoggedIn, patchUser);
router.delete("/users/:id", isLoggedIn, deleteUser);
export default router;
