export const get = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ data: "Some data" }));
};

export const post = (req, res) => {};
export const put = (req, res) => {};
