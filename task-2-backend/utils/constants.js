// Cities, Services list
exports.SERVICES = [
    { name: 'Maid Service', slug: 'maid' },
    { name: 'Babysitter Service', slug: 'babysitter' },
    { name: 'Cook / Chef Service', slug: 'cook' },
    { name: 'Driver Service', slug: 'driver' },
    { name: 'Security Guard Service', slug: 'security' },
    { name: 'Patient Care Service', slug: 'patient-care' },
    { name: 'Helper Service', slug: 'helper' }
];

exports.CITIES = ['Islamabad', 'Rawalpindi', 'Lahore', 'Karachi', 'Peshawar'];

// WhatsApp Configuration
exports.WHATSAPP_ADMIN_NUMBER = process.env.WHATSAPP_ADMIN_NUMBER || '923177799786';