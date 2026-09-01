'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Services', [
            {
                name: 'Maid Service',
                slug: 'maid',
                description: 'Professional maids for cleaning, washing, and daily household chores. Available as part time, full time, or live in.',
                icon: '🧹',
                metaTitle: 'Maid Service in Islamabad & Rawalpindi – Trusted Home Maids',
                metaDescription: 'Hire verified, trained maids for cleaning, washing, and household chores. Background-checked staff. Call now!',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Babysitter Service',
                slug: 'babysitter',
                description: 'Trained babysitters ensuring complete care, safety, and attention for children. Specialized in newborn and infant care.',
                icon: '👶',
                metaTitle: 'Babysitter Service in Islamabad & Rawalpindi – Trusted Nannies',
                metaDescription: 'Safe, caring, and trained babysitters for your child. Background-checked, CPR trained. Hire part-time or full-time.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cook / Chef Service',
                slug: 'cook',
                description: 'Experienced cooks preparing hygienic, delicious meals. Pakistani, vegetarian, continental cuisine available.',
                icon: '🍳',
                metaTitle: 'Cook & Chef Service in Islamabad & Rawalpindi – Home Cooks',
                metaDescription: 'Hire professional cooks for daily meals or special occasions. Verified, skilled chefs. Customized menus.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Driver Service',
                slug: 'driver',
                description: 'Professional, punctual, and verified drivers for safe travel. Available as personal driver on monthly basis.',
                icon: '🚗',
                metaTitle: 'Driver Service in Islamabad & Rawalpindi – Reliable Chauffeurs',
                metaDescription: 'Licensed, verified drivers for family or office commute. Background-checked. Monthly hiring available.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Security Guard Service',
                slug: 'security',
                description: 'Trained guards ensuring safety for home or property. Armed and unarmed options available.',
                icon: '🛡️',
                metaTitle: 'Security Guard Service in Islamabad & Rawalpindi – 24/7 Protection',
                metaDescription: 'Hire trained, licensed security guards for home or business. Background-checked, emergency response ready.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Patient Care Service',
                slug: 'patient-care',
                description: 'Experienced caregivers providing support for patients and elderly. Available as home nurse or live-in caregiver.',
                icon: '❤️',
                metaTitle: 'Patient Care Service in Islamabad & Rawalpindi – Compassionate Caregivers',
                metaDescription: 'Elderly care, patient attendant, home nurse. Verified staff assist with medication, mobility, and companionship.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Helper Service',
                slug: 'helper',
                description: 'General helpers assisting in household tasks, maintenance, and daily routine work.',
                icon: '🛠️',
                metaTitle: 'Helper Service in Islamabad & Rawalpindi – Household Assistants',
                metaDescription: 'Reliable helpers for cleaning, organizing, maintenance. Quick hiring, flexible timings. Background-checked staff.',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('Services', null, {});
    }
};