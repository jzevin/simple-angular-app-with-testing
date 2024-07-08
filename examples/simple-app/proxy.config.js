module.exports = {
  "/api/names": {
    target: "http://nbme.org",
    secure: false,
    selfHandleResponse: true,
    configure: (proxy, _options) => {
      proxy.on("proxyRes", (proxyRes, req, res) => {
        const delay = Math.round(Math.random() * 900) + 100;
        const names = [
          "Scott",
          "Jane",
          "John",
          "Emily",
          "Michael",
          "Olivia",
          "Daniel",
          "Sophia",
          "David",
          "Mia",
          "James",
          "Isabella",
          "Ethan",
          "Ava",
          "Alexander",
          "Charlotte",
          "Benjamin",
          "Amelia",
          "Lucas",
          "Evelyn",
          "Matthew",
          "Harper",
          "William",
          "Abigail",
          "Mason",
          "Ella",
          "Logan",
          "Grace",
          "Jackson",
          "Lily",
        ];
        return setTimeout(() => {
          res.end(JSON.stringify(names.map((name) => ({ name }))));
        }, delay);
      });
    },
  },
};
