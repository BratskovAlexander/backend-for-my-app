const { Router } = require("express");
const router = Router();
const UserController = require('../controllers/user-controller');
const user_controller = new UserController();

router.get("/admin", user_controller.getAllUsers);
router.get("/user", user_controller.getUser);
// router.get("/token", user_controller);
router.post("/user", user_controller.addUser);
// router.post("/login", user_controller);
router.put("/:id", user_controller.updateUser);
router.delete("/:id", user_controller.deleteUser);


module.exports = router;
