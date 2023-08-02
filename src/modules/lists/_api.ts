import { Router } from "express";
import {
  getList,
  getLists,
  postList,
  patchList,
  deleteList,
} from "./_controllers";
import { isLoggedIn } from "../../shared/auth/is-loggedin.js";

const router = Router();

router.post("/lists", isLoggedIn, postList);
router.get("/lists", isLoggedIn, getLists);
router.get("/lists/:id", isLoggedIn, getList);
router.patch("/lists/:id", isLoggedIn, patchList);
router.delete("/lists/:id", isLoggedIn, deleteList);
export default router;
