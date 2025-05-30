module.exports = function generateManifest(appName, appColor, appLogo, siteUrl) {
    return {
        name: appName,
        short_name: appName,
        start_url: siteUrl,
        display: "standalone",
        background_color: appColor,
        theme_color: appColor,
        icons: [
            {
                src: appLogo,
                sizes: "192x192",
                type: "image/png"
            },
            {
                src: appLogo,
                sizes: "512x512",
                type: "image/png"
            }
        ]
    };
};
