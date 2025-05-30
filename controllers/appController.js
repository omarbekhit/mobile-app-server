const fs = require('fs');
const path = require('path');
const generateManifest = require('../utils/generateManifest');

exports.handleAppCreation = async (req, res) => {
    const { appName, appColor, appLogo, siteUrl, siteSlug } = req.body;

    if (!appName || !siteUrl || !siteSlug) {
        return res.status(400).json({ error: 'بيانات ناقصة' });
    }

    // مجلد الموقع
    const appDir = path.join(__dirname, '..', 'public', 'apps', siteSlug);
    if (!fs.existsSync(appDir)) fs.mkdirSync(appDir, { recursive: true });

    // توليد manifest.json
    const manifestData = generateManifest(appName, appColor, appLogo, siteUrl);
    fs.writeFileSync(path.join(appDir, 'manifest.json'), JSON.stringify(manifestData, null, 2));

    // توليد service-worker.js بشكل ثابت كبداية
    const swContent = `self.addEventListener('fetch', function(event) { });`;
    fs.writeFileSync(path.join(appDir, 'service-worker.js'), swContent);

    // رد بالرابط
    res.json({
        success: true,
        message: 'تم إنشاء التطبيق بنجاح',
        appUrl: `${process.env.SERVER_URL}apps/${siteSlug}/manifest.json`
    });
};

