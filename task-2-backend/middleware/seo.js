// SEO meta tags handler
module.exports = (req, res, next) => {
    res.locals.metaTitle = res.locals.metaTitle || 'Al Noor Maid Services Agency';
    res.locals.metaDescription = res.locals.metaDescription || 'Professional home staff services across Pakistan';
    res.locals.canonicalUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    next();
};