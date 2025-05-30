module.exports = function generateManifest(appName, appColor, appLogo, siteUrl) {
    return {
        name: appName,
        short_name: appName,
        start_url: "/",           // بداية التطبيق، ممكن تغييره حسب موقعك
        scope: "/",               // نطاق التطبيق داخل الموقع
        display: "standalone",
        background_color: appColor,
        theme_color: appColor,
        orientation: "portrait",
        description: `تطبيق ${appName} من موقعنا`,
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
