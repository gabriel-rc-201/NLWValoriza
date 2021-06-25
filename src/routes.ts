import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReciveComplimentsController } from "./controllers/ListUserReciveComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAutenticated } from "./middlewares/ensureAutenticated";
import { ListTagsController } from "./controllers/ListTagController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController =
  new ListUserSendComplimentsController();
const listUserReciveComplimentsController =
  new ListUserReciveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post("/users", createUserController.handle);
router.post(
  "/tags",
  ensureAutenticated,
  ensureAdmin,
  createTagController.handle
);
router.post("/login", authenticateUserController.handle);
router.post(
  "/compliments",
  ensureAutenticated,
  createComplimentController.handle
);

router.get(
  "/users/compliments/send",
  ensureAutenticated,
  listUserSendComplimentsController.handle
);
router.get(
  "/users/compliments/recive",
  ensureAutenticated,
  listUserReciveComplimentsController.handle
);

router.get("/tags", ensureAutenticated, listTagsController.handle);

router.get("/users", ensureAutenticated, listUsersController.handle);

export { router };
