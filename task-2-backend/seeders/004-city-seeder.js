'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Cities', [
            {
                name: 'Islamabad',
                slug: 'islamabad',
                description: 'We provide trusted home staff services across all sectors of Islamabad.',
                coverageAreas: 'Sectors: F-6 to F-11, G-6 to G-11, E-7 to E-11, D-12, D-13, I-8 to I-10, Gulberg Greens, B-17',
                metaTitle: 'Home Staff Services in Islamabad – Verified Maids, Babysitters & More',
                metaDescription: 'Hire verified home staff in Islamabad. Maids, babysitters, cooks, drivers, security guards. Background-checked professionals.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Rawalpindi',
                slug: 'rawalpindi',
                description: 'Reliable home staff services across all major areas of Rawalpindi.',
                coverageAreas: 'Saddar, Satellite Town, Westridge, Bahria Town, DHA, Gulraiz, Chaklala Scheme 3',
                metaTitle: 'Home Staff Services in Rawalpindi – Trusted Caregivers & Helpers',
                metaDescription: 'Find verified maids, nannies, cooks, drivers in Rawalpindi. Background-checked staff. Quick hiring.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Lahore',
                slug: 'lahore',
                description: 'Professional home staff services across all major localities of Lahore.',
                coverageAreas: 'DHA (Phase 1-11), Gulberg, Johar Town, Model Town, Bahria Town Lahore, Valencia, Wapda Town, Faisal Town, Cantt, Iqbal Town, Garden Town, Allama Iqbal Town',
                metaTitle: 'Home Staff Services in Lahore – Verified Maids, Babysitters & Cooks',
                metaDescription: 'Hire trusted home staff in Lahore. Maids, babysitters, cooks, drivers, security. Background-checked professionals.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Karachi',
                slug: 'karachi',
                description: 'Verified home staff services across all major localities of Karachi.',
                coverageAreas: 'DHA (Phase 1-8), Clifton, Gulshan-e-Iqbal, North Nazimabad, Gulistan-e-Johar, PECHS, Saddar, Nazimabad, Korangi, Malir, Bahria Town Karachi, Scheme 33',
                metaTitle: 'Home Staff Services in Karachi – Trusted Caregivers & Helpers',
                metaDescription: 'Find verified maids, nannies, cooks, drivers in Karachi. Background-checked staff. Quick response.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Peshawar',
                slug: 'peshawar',
                description: 'Professional home staff services across all major areas of Peshawar.',
                coverageAreas: 'University Town, Hayatabad (Phase 1-7), Saddar, Cantt, DHA Peshawar, Gulbahar, Warsak Road, Ring Road, Peshawar City, Faqirabad',
                metaTitle: 'Home Staff Services in Peshawar – Verified Maids, Babysitters & More',
                metaDescription: 'Hire trusted home staff in Peshawar. Maids, babysitters, cooks, drivers. Background-checked professionals.',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('Cities', null, {});
    }
};