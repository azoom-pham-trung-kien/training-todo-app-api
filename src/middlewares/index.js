const middlewares = [
  // global middleware
  function logger(req, res, next) {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    return true;
  },

  // function authenticate(req, res) {
  //   if (req.headers["x-auth-token"] === "secret-token") {
  //     return true;
  //   }

  //   res.writeHead(401, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify({ message: "Unauthorized" }));
  //   return false;
  // },

  //group middleware
  function groupRouteValidate(req, res) {
    const validateURLs = ["/data"];
    const shouldValidateUrl = validateURLs.includes(req.url);

    if (!shouldValidateUrl) {
      return true;
    }

    res.writeHead(401, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "You can not access this route" }));
    return false;
  },
];

export default middlewares;
