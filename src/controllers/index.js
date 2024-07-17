export const get = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Welcome to my API!" }));
};

export const post = (req, res) => {};
export const put = (req, res) => {};
