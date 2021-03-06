const db = require("../knexConfig.js");

module.exports = {
	getAll,
	findById,
	insert,
	update,
	remove,
	getByPotluckId,
};

async function getAll() {
	return await db("potluckRequirements");
}

async function findById(id) {
	return await db("potluckRequirements")
		.where({ id: Number(id) })
		.first();
}

async function insert(record) {
	return await db("potluckRequirements").insert(record);
}

async function update(id, potluck) {
	return await db("potluckRequirements")
		.where("id", Number(id))
		.update(potluck);
}

async function remove(id) {
	let [{ potluckId }] = await db("potluckRequirements").select("potluckId").where("id", Number(id));

	await db("potluckRequirements").where("id", Number(id)).del();
	return potluckId;
}

async function getByPotluckId(potluckId) {
	return await db("potluckRequirements").where({ potluckId });
}