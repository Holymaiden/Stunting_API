const {
  create,
  getAll,
  remove,
  update,
} = require("../controllers/stunting.controller");

const resObj = {
  json: {},
  status: 200,
  send: jest.fn(),
  statusCode: 200,
};

test("should create stunting", async () => {
  const newData = {
    body: {
      id: 1,
      user_id: 99,
      username: "Fihaa",
      umur: "5",
      tinggi_badan: "120",
      berat_badan: "30",
      stunting: "Ya",
    },
  };
  const expectedData = {
    code: 200,
    message: "Success",
    data: [1],
    meta: undefined,
  };

  const res = {
    status: jest.fn((status) => ({
      res: { ...resObj, statusCode: 200 },
      json: jest.fn((result) => result),
    })),
    statusCode: 200,
  };
  const result = await create(newData, res);
  expect(result).toStrictEqual(expectedData);
});

test("should get all stunting", async () => {
  const req = {
    query: {
      limit: 1,
      startIndex: 0,
      sort: "created_at",
      ordinal: "DESC",
      search: null,
      id: null,
      user_id: 99,
    },
  };
  const expectedData = {
    code: 200,
    data: [
      {
        berat_badan: 30,
        created_at: expect.anything(),
        id: 1,
        stunting: "Tidak",
        tinggi_badan: 120,
        umur: 5,
        updated_at: expect.anything(),
        user_id: 99,
        username: "Fihaa",
      },
    ],
    message: "Success",
    meta: undefined,
  };

  const res = {
    status: jest.fn((status) => ({
      res: { ...resObj, statusCode: 200 },
      json: jest.fn((result) => result),
    })),
    statusCode: 200,
  };
  const result = await getAll(req, res);

  expect(result).toEqual(expectedData);
});

test("should update stunting", async () => {
  const newData = {
    params: {
      id: 1,
    },
    body: {
      username: "Fihaa",
      umur: "5",
      tinggi_badan: "120",
      berat_badan: "30",
      stunting: "Ya",
    },
  };
  const expectedData = {
    code: 200,
    message: "Success",
    data: 1,
    meta: undefined,
  };

  const res = {
    status: jest.fn((status) => ({
      res: { ...resObj, statusCode: 200 },
      json: jest.fn((result) => result),
    })),
    statusCode: 200,
  };
  const result = await update(newData, res);
  expect(result).toStrictEqual(expectedData);
});

test("should delete stunting", async () => {
  const newData = {
    params: {
      id: 1,
    },
  };
  const expectedData = {
    code: 200,
    message: "Success",
    data: 1,
    meta: undefined,
  };

  const res = {
    status: jest.fn((status) => ({
      res: { ...resObj, statusCode: 200 },
      json: jest.fn((result) => result),
    })),
    statusCode: 200,
  };
  const result = await remove(newData, res);
  expect(result).toStrictEqual(expectedData);
});
