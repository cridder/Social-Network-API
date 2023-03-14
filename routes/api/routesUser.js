const router = require("express").Router();

const {
	getUserss,
	getSingleUsers,
	usersCreate,
	usersUpdate,
	usersDelete,
	friendAdd,
	friendDelete,
} = require("../../controllers/controllerUser");

router.route("/").get(getUserss).post(usersCreate);

router
	.route("/:userId")
	.get(getSingleUsers)
	.put(usersUpdate)
	.delete(usersDelete);

router.route("/:userId/friends/:friendId").post(friendAdd).delete(friendDelete);

module.exports = router;
