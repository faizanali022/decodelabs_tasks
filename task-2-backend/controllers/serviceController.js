// Services & Cities dynamic pages
const db = require('../config/database');

// Static service mapping
const serviceMap = {
    'maid': { title: 'Professional Maid Service', desc: 'Trusted maids for cleaning and household chores' },
    'babysitter': { title: 'Babysitter Services', desc: 'Professional childcare and newborn care' },
    'cook': { title: 'Cook / Chef Services', desc: 'Home cooking and meal preparation' },
    'driver': { title: 'Driver Services', desc: 'Personal and family drivers' },
    'security': { title: 'Security Guard Services', desc: 'Home and property security' },
    'security-guard': { title: 'Security Guard Services', desc: 'Home and property security' },
    'patient-care': { title: 'Patient Care Services', desc: 'Elderly and patient care' },
    'helper': { title: 'Home Helper Services', desc: 'General household help' },
    'chef': { title: 'Professional Chef Service', desc: 'Fine dining and catering services' },
    'nanny': { title: 'Professional Nanny Service', desc: 'Full-time childcare and education' },
    'nurse': { title: 'Professional Nurse Service', desc: 'Healthcare and medical assistance' },
    'filipino': { title: 'Filipino Maid Service', desc: 'International standard domestic workers' },
    'office-boy': { title: 'Professional Office Boy Service', desc: 'Office management and administrative support' }
};

exports.showService = async (req, res) => {
    try {
        let slug = req.params.slug;
        console.log('🔍 Requested slug:', slug);
        console.log('📋 ServiceMap keys:', Object.keys(serviceMap));
        
        // Map slug-to-filename conversions
        const filenameMap = {
            'security-guard': 'security-guard',
            'patient-care': 'patient-care',
            'security': 'security',  // fallback for old links
            'chef': 'chef',
            'nanny': 'nanny',
            'nurse': 'nurse',
            'filipino': 'filipino',
            'office-boy': 'office-boy'
        };
        
        // Check if service exists in our static map
        if (!serviceMap[slug]) {
            console.log('❌ Service not found in serviceMap:', slug);
            return res.status(404).render('pages/404', { metaTitle: 'Service Not Found' });
        }
        console.log('✅ Service found in serviceMap');
        
        const service = serviceMap[slug];
        const filename = filenameMap[slug] || slug;  // Use mapped filename if available
        
        // Try to fetch from database first, if available
        try {
            const dbService = await db.Service.findOne({ where: { slug } });
            if (dbService) {
                return res.render(`services/${filename}`, { 
                    service: dbService, 
                    metaTitle: dbService.metaTitle, 
                    metaDescription: dbService.metaDescription 
                });
            }
        } catch (dbErr) {
            console.warn('Database not available, using static service data');
        }
        
        // Use static data
        res.render(`services/${filename}`, { 
            service, 
            metaTitle: service.title,
            metaDescription: service.desc
        });
    } catch (err) {
        console.error('Error showing service:', err);
        res.status(500).render('pages/500', { metaTitle: 'Server Error' });
    }
};

exports.adminManage = async (req, res) => {
    try {
        const services = await db.Service.findAll();
        res.render('admin/services/manage', { services, title: 'Manage Services' });
    } catch (err) {
        console.warn('Database not available for admin services');
        res.render('admin/services/manage', { services: [], title: 'Manage Services' });
    }
};