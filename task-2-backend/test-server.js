const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Test route
app.get('/services/:slug', (req, res) => {
    console.log('✅ Route hit with slug:', req.params.slug);
    
    const serviceMap = {
        'chef': { title: 'Professional Chef Service', desc: 'Fine dining' },
        'maid': { title: 'Professional Maid Service', desc: 'Cleaning' }
    };
    
    const slug = req.params.slug;
    if (!serviceMap[slug]) {
        console.log('❌ Service not found:', slug);
        return res.status(404).json({ error: 'Service not found' });
    }
    
    console.log('✅ Service found:', slug);
    const service = serviceMap[slug];
    const filename = slug;
    
    console.log(`🔍 About to render: services/${filename}`);
    
    try {
        res.render(`services/${filename}`, { 
            service, 
            metaTitle: service.title,
            metaDescription: service.desc
        });
    } catch (err) {
        console.error('❌ Render error:', err.message);
        res.status(500).json({ error: 'Render error', details: err.message });
    }
});

app.get('/test', (req, res) => res.json({ status: 'ok' }));

const server = app.listen(3000, () => console.log('🚀 Test server on http://localhost:3000'));

process.on('uncaughtException', (err) => {
    console.error('❌ Uncaught Exception:', err);
    process.exit(1);
});

process.on('unhandledRejection', (err) => {
    console.error('❌ Unhandled Rejection:', err);
    process.exit(1);
});
