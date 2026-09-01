const serviceMap = {
    'maid': { title: 'Professional Maid Service' },
    'chef': { title: 'Professional Chef Service' },
    'nanny': { title: 'Professional Nanny Service' }
};

const slug = 'chef';
console.log('Testing slug:', slug);
console.log('ServiceMap keys:', Object.keys(serviceMap));
console.log('serviceMap[slug]:', serviceMap[slug]);
console.log('Check passed:', !!(serviceMap[slug]));
