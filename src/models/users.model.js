const conn = require("../../config/database");
const { newDate } = require("../utils/date.util");

const getAllUsers = async (
  limit = 0,
  startIndex = 0,
  sort = "created_at",
  ordinal = "DESC",
  search = null,
  id = null,
  username = null
) => {
  let query = conn("users").select(
    "id",
    "username",
    "created_at",
    "updated_at"
  );

  if (search) {
    query = query.where("username", "like", `%${search}%`);
  }

  if (id) {
    query = query.where({ id: id });
  }

  if (username) {
    query = query.select("password");
    query = query.where({ username: username });
  }

  query.orderBy(sort, ordinal).limit(limit).offset(startIndex);

  return query;
};

const createUser = async (data) => {
  return conn("users")
    .insert({
      username: data.username,
      password: data.password,
      created_at: newDate(),
      updated_at: newDate(),
    })
    .onConflict("username")
    .ignore();
};

const updateUser = async (id, data) => {
  return conn("users")
    .update({
      username: data.username,
      password: data.password,
      updated_at: newDate(),
    })
    .where({ id: id })
    .onConflict("username")
    .ignore();
};

const deleteUser = async (id) => {
  return conn("users").where({ id: id }).del();
};

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
