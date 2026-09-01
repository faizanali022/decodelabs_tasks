// Static pages (Home, About, etc.)
exports.home = (req, res) => {
    res.render('pages/index', { metaTitle: 'Home Staff Services – Trusted Maids & Babysitters', metaDescription: 'Verified home staff across Pakistan' });
};

exports.about = (req, res) => {
    res.render('pages/about', { metaTitle: 'About Us', metaDescription: 'Learn about our mission and values' });
};

exports.contact = (req, res) => {
    res.render('pages/contact', { metaTitle: 'Contact Us', metaDescription: 'Get in touch for home staff services' });
};

// Handle Contact Form Submission - Simple WhatsApp Link
exports.submitContact = (req, res) => {
    try {
        const { fullname, email, phone, service, message } = req.body;

        // Validate required fields
        if (!fullname || !email || !phone || !service || !message) {
            return res.status(400).json({ success: false, message: 'Please fill all fields' });
        }

        // Format WhatsApp message
        const whatsappMessage = `🎯 *New Client Inquiry* 🎯

*Name:* ${fullname}
*Email:* ${email}
*Phone:* ${phone}
*Service:* ${service}

📝 *Message:*
${message}

---
From: Al-Noor Services Website`;

        // Get WhatsApp number from constants
        const constants = require('../utils/constants');
        const adminWhatsApp = constants.WHATSAPP_ADMIN_NUMBER.replace(/\+/g, '');

        // Create WhatsApp link with pre-filled message
        const whatsappLink = `https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`;

        console.log('✅ WhatsApp link created:');
        console.log(whatsappLink);

        res.json({ 
            success: true, 
            message: 'Redirecting to WhatsApp...',
            whatsappLink: whatsappLink
        });

    } catch (err) {
        console.error('❌ Error processing contact form:', err);
        res.status(500).json({ 
            success: false, 
            message: 'Error processing your message. Please try again.' 
        });
    }
};

exports.privacy = (req, res) => {
    res.render('pages/privacy', { metaTitle: 'Privacy Policy' });
};

exports.servicesList = async (req, res) => {
    try {
        const db = require('../config/database');
        const services = await db.Service.findAll();
        res.render('pages/all-services', { services, metaTitle: 'All Services' });
    } catch (err) {
        console.error('Error fetching services:', err);
        res.render('pages/all-services', { services: [], metaTitle: 'All Services' });
    }
};

exports.allCities = (req, res) => {
    res.render('pages/all-cities', { 
        metaTitle: 'Our Service Cities – Islamabad, Rawalpindi, Lahore, Karachi, Peshawar',
        metaDescription: 'Professional home staff services available in Islamabad, Rawalpindi, Lahore, Karachi, and Peshawar'
    });
};

// Static city data
const cityMap = {
    'islamabad': { name: 'Islamabad', areas: 'F-6, F-7, G-6, G-7, I-8, I-9, I-10, Sector F, H, G' },
    'rawalpindi': { name: 'Rawalpindi', areas: 'Saddar, Bahria Town, Pindi Point, Westridges' },
    'lahore': { name: 'Lahore', areas: 'DHA, Gulberg, Johar Town, Data Ganj Baksh, Model Town' },
    'karachi': { name: 'Karachi', areas: 'Clifton, Defence, Gulshan-e-Iqbal, Lyari' },
    'peshawar': { name: 'Peshawar', areas: 'Hayatabad, University Town, Peshawar Cantt' }
};

exports.cityPage = async (req, res) => {
    try {
        const slug = req.params.slug;
        
        // Check if city exists in our static map
        if (!cityMap[slug]) {
            return res.status(404).render('pages/404', { metaTitle: 'City Not Found' });
        }
        
        const city = cityMap[slug];
        const services = ['Maid', 'Babysitter', 'Cook', 'Driver', 'Security', 'Patient Care', 'Helper'];
        
        res.render(`cities/${slug}`, { 
            cityName: city.name,
            coverageAreas: city.areas,
            services,
            metaTitle: `Home Staff Services in ${city.name}`
        });
    } catch (err) {
        console.error('Error in city page:', err);
        res.status(500).render('pages/500', { metaTitle: 'Server Error' });
    }
};