const { Users, Thoughts, Reactions } = require("../models");

module.exports = {
	// Add a reaction
	reactionsAdd(req, res) {
		Thoughts.findOneAndUpdate(
			{ _id: req.params.thoughtId },
			{ $push: { reactions: req.body } },
			{ new: true, runValidators: true }
		)
			.then((thoughtData) =>
				!thoughtData
					? res.status(404).json({ message: "No thought found with this id" })
					: res.json(thoughtData)
			)
			.catch((err) => res.status(500).json(err));
	},

	// Delete reaction
	reactionsDelete(req, res) {
		Thoughts.findOneAndUpdate(
			{ _id: req.params.thoughtId },
			{ $pull: { reactions: { reactionId: req.params.reactionId } } }, //reactionId is undegined?
			{ new: true }
		)
			.then((thoughtData) =>
				!thoughtData
					? res.status(404).json({ message: "No thought found with this id" })
					: res.json({ message: "Successfully deleted the reaction" })
			)
			.catch((err) => res.status(500).json(err));
	},

	// Create thoughts
	thoughtsCreate(req, res) {
		Thoughts.create(req.body)
			.then((thoughtData) => {
				Users.findOneAndUpdate(
					{ _id: req.body.userId },
					{ $push: { thoughts: thoughtData._id } },
					{ new: true }
				)
					.then((UsersData) =>
						!UsersData
							? res.status(404).json({ message: "No user found with this id" })
							: res.json(UsersData)
					)
					.catch((err) => res.json(err));
			})
			.catch((err) => res.status(400).json(err));
	},

	// Get all thoughts
	thoughtsGet(req, res) {
		Thoughts.find({})
			.populate({ path: "reactions", select: "-__v" })
			.select("-__v")
			.then((thoughtData) => res.json(thoughtData))
			.catch((err) => {
				console.log(err);
				res.status(500).json(err);
			});
	},

	// Update thought
	thoughtsUpdate(req, res) {
		Thoughts.findOneAndUpdate({ _id: req.params.thoughtId }, req.body, {
			new: true,
		})
			.then((thoughtData) =>
				!thoughtData
					? res.status(404).json({ message: "No thought found with this id" })
					: res.json(thoughtData)
			)
			.catch((err) => res.status(400).json(err));
	},

	// Get thoughts by ID
	thoughtsUserGet(req, res) {
		Thoughts.findOne({ _id: req.params.id })
			.populate({ path: "reactions", select: "-__v" })
			.select("-__v")
			.then((thoughtData) =>
				!thoughtData
					? res.status(404).json({ message: "No thought found with this id" })
					: res.json(thoughtData)
			)
			.catch((err) => {
				console.log(err);
				res.status(400).json(err);
			});
	},

	// Delete thought by id
	thoughtsDelete(req, res) {
		Thoughts.findOneAndDelete({ _id: req.params.thoughtId })
			.then((thoughtData) => {
				!thoughtData
					? res.status(404).json({ message: "No thought found with this id" })
					: Users.findOneAndUpdate(
							{ username: thoughtData.username },
							{ $pull: { thoughts: req.params.thoughtId } }
					  )
							.then(() => {
								res.json({ message: "Successfully deleted the thought" });
							})
							.catch((err) => res.status(500).json(err));
			})
			.catch((err) => res.status(500).json(err));
	},
};
