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
router.get("/users", isLoggedIn, getUsers);
router.get("/users/:id", isLoggedIn, getUser);
router.patch("/users/:id", isLoggedIn, patchUser);
router.post("/users/login", isLoggedIn, loginUser);
router.delete("/users/:id", isLoggedIn, deleteUser);
export default router;
