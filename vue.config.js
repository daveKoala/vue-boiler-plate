module.exports = {
  transpileDependencies: ["vuetify"],
  pwa: {
    name: "skills-desire",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "dev/sw.js"
    }
  }
};
