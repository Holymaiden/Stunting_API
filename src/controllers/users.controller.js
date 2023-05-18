const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../models/users.model");
const Response = require("../utils/response.util");
const bcrypt = require("bcrypt");

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {JSON}
 */

const getAll = async (req, res) => {
  try {
    const data = await getAllUsers(
      req.query.limit,
      0,
      req.query.sort,
      req.query.ordinal,
      req.query.search,
      req.query.id,
      null
    );

    if (data.length <= 0) {
      return Response.notFound(res);
    }

    return Response.success(res, data);
  } catch (err) {
    return Response.error(res, err.message);
  }
};

const create = async (req, res) => {
  try {
    let body = req.body;
    body.password = await bcrypt.hash(body.password, 10);

    const data = await createUser(body);
    if (data == 0) {
      return Response.conflict(res, "Username already exists");
    }
    return Response.success(res, data);
  } catch (err) {
    return Response.error(res, err.message);
  }
};

const update = async (req, res) => {
  try {
    let body = req.body;
    if (body.password) {
      body.password = await bcrypt.hash(body.password, 10);
    }

    const data = await updateUser(req.params.id, body);
    if (data == 0) {
      return Response.conflict(res, "Username already exists");
    }
    return Response.success(res, data);
  } catch (err) {
    return Response.error(res, err.message);
  }
};

const remove = async (req, res) => {
  try {
    const data = await deleteUser(req.params.id);
    return Response.success(res, data);
  } catch (err) {
    return Response.error(res, err.message);
  }
};

const login = async (req, res) => {
  try {
    let data = await getAllUsers(
      1,
      0,
      "created_at",
      "DESC",
      null,
      null,
      req.body.username
    );

    if (data.length <= 0) {
      return Response.notFound(res);
    }

    const match = await bcrypt.compare(req.body.password, data[0].password);

    delete data[0].password;

    if (!match) {
      return Response.error(res, "Password is incorrect");
    }

    return Response.success(res, data[0]);
  } catch (err) {
    return Response.error(res, err.message);
  }
};

module.exports = {
  getAll,
  create,
  update,
  remove,
  login,
};
