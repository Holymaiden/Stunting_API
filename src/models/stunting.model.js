const conn = require("../../config/database");
const { newDate } = require("../utils/date.util");

const getAllStuntings = async (
  limit,
  startIndex,
  sort = "created_at",
  ordinal = "DESC",
  search = null,
  id = null,
  user_id = null
) => {
  let query = conn("stuntings").select(
    "id",
    "user_id",
    "username",
    "umur",
    "tinggi_badan",
    "berat_badan",
    "stunting",
    "created_at",
    "updated_at"
  );

  if (search) {
    query = query.where("username", "like", `%${search}%`);
  }

  if (id) {
    query = query.where({ id: id });
  }

  if (user_id) {
    query = query.where({ user_id: user_id });
  }

  query.orderBy(sort, ordinal).limit(limit).offset(startIndex);

  return query;
};

const createStunting = async (data) => {
  return conn("stuntings").insert({
    id: data.id,
    user_id: data.user_id,
    username: data.username,
    umur: data.umur,
    tinggi_badan: data.tinggi_badan,
    berat_badan: data.berat_badan,
    stunting: data.stunting,
    created_at: newDate(),
    updated_at: newDate(),
  });
};

const updateStunting = async (id, data) => {
  return conn("stuntings")
    .update({
      username: data.username,
      umur: data.umur,
      tinggi_badan: data.tinggi_badan,
      berat_badan: data.berat_badan,
      stunting: data.stunting,
      updated_at: newDate(),
    })
    .where({ id: id });
};

const deleteStunting = async (id) => {
  return conn("stuntings").where({ id: id }).del();
};

module.exports = {
  createStunting,
  getAllStuntings,
  updateStunting,
  deleteStunting,
};
