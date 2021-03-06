const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require("./package.json").dependencies;

module.exports = {
  webpack: {
    configure: (config) => {
      config.output.publicPath = "auto";

      if (!config.plugins) {
        config.plugins = [];
      }

      config.plugins.unshift(
        new ModuleFederationPlugin({
          name: "home",
          filename: "remoteEntry.js",
          remotes: {
            home: "home@http://localhost:4003/remoteEntry.js", /** self served */
          },
          exposes: {
            './HomePage': './src/HomePage'
          },
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          },
        })
      );

      return config;
    },
  },
};
