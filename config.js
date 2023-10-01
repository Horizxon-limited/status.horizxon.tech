module.exports = {
  nodes: [
     {
      host: "lava.horizxon.tech",
      password: "horizxon.xyz",
      port: 80,
      retryDelay: 1,
      identifier: "lava.horizxon.tech・(NO-SSL)",
      secure: false,
    },

     {
      host: "lava1.horizxon.tech",
      password: "horizxon.xyz",
      port: 443,
      retryDelay: 1,
      identifier: "lava1.horizxon.tech・(SSL)",
      secure: true,
    },

    {
      host: "lava2.horizxon.tech",
      password: "horizxon.tech",
      port: 443,
      retryDelay: 1,
      identifier: "lava2.horizxon.tech・(SSL)",
      secure: true,
    },

    {
      host: "lava3.horizxon.tech",
      password: "horizxon.xyz",
      port: 443,
      retryDelay: 1,
      identifier: "lava3.horizxon.tech・(SSL)",
      secure: true,
    },   
  ],
};
