'use strict';

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Categories', [
            { name: 'Maid Tips', slug: 'maid-tips', description: 'Advice for hiring and managing maids', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Baby Care', slug: 'baby-care', description: 'Newborn and infant care guidance', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Cooking', slug: 'cooking', description: 'Recipes and kitchen tips', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Safety', slug: 'safety', description: 'Home security and child safety', createdAt: new Date(), updatedAt: new Date() },
            { name: 'Customer Stories', slug: 'customer-stories', description: 'Testimonials and experiences', createdAt: new Date(), updatedAt: new Date() }
        ]);
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('Categories', null, {});
    }
};