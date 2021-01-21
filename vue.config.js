module.exports = {
  transpileDependencies: ["vuetify"],
  pwa: {
    name: "skills-desire",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxPluginMode: "GenerateSW",
    orientation: "portrait",
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
  },
};
