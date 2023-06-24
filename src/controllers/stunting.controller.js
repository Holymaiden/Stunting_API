const {
  createStunting,
  getAllStuntings,
  updateStunting,
  deleteStunting,
} = require("../models/stunting.model");
const paginate = require("../helpers/pagination.helper");
const Response = require("../utils/response.util");
const NaiveBayes = require("../helpers/naiveBayes.helper");

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {JSON}
 */

const getAll = async (req, res) => {
  try {
    const data = await getAllStuntings(
      req.query.limit,
      0,
      req.query.sort,
      req.query.ordinal,
      req.query.search,
      req.query.id,
      req.query.user_id
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
    body = req.body;
    let naive;
    await new Promise((resolve, reject) => {
      resolve(NaiveBayes(body.umur, body.tinggi_badan, body.berat_badan));
    }).then((result) => {
      naive = result;
    });

    body.stunting = naive;

    const data = await createStunting(req.body);
    return Response.success(res, data);
  } catch (err) {
    return Response.error(res, err.message);
  }
};

const update = async (req, res) => {
  try {
    const data = await updateStunting(req.params.id, req.body);
    return Response.success(res, data);
  } catch (err) {
    return Response.error(res, err.message);
  }
};

const remove = async (req, res) => {
  try {
    const data = await deleteStunting(req.params.id);
    return Response.success(res, data);
  } catch (err) {
    return Response.error(res, err.message);
  }
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
