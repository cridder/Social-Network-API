const router = require("express").Router();

const {
	thoughtsGet,
	thoughtsUserGet,
	thoughtsCreate,
	thoughtsUpdate,
	thoughtsDelete,
	reactionsAdd,
	reactionsDelete,
} = require("../../controllers/controllerThoughts");

// /api/thoughts
router.route("/").get(thoughtsGet).post(thoughtsCreate);

// /api/thoughts/:thoughtId
router
	.route("/:thoughtId")
	.get(thoughtsUserGet)
	.put(thoughtsUpdate)
	.delete(thoughtsDelete);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(reactionsAdd);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(reactionsDelete);

module.exports = router;
