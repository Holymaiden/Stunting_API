/**
 *
 * @param {object} res
 * @param {object} data
 * @param {object} meta
 * @returns {JSON}
 */

const success = (res, data, meta) => {
  return res.status(200).json({
    code: res.statusCode,
    message: "Success",
    data: data,
    meta: meta,
  });
};

const error = (res, data) => {
  return res.status(400).json({
    code: res.statusCode,
    message: "Error",
    data: data,
  });
};

const notFound = (res, data) => {
  return res.status(404).json({
    code: res.statusCode,
    message: "Not Found",
    data: data,
  });
};

const unauthorized = (res, data) => {
  return res.status(401).json({
    code: res.statusCode,
    message: "Unauthorized",
    data: data,
  });
};

module.exports = {
  success,
  error,
  notFound,
  unauthorized,
};
