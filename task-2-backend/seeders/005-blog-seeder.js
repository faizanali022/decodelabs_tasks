'use strict';

module.exports = {
    up: async (queryInterface) => {
        // First get category IDs (assumes categories already seeded)
        const categories = await queryInterface.sequelize.query(
            `SELECT id, slug FROM Categories;`,
            { type: queryInterface.sequelize.QueryTypes.SELECT }
        );
        const catMap = {};
        categories.forEach(c => catMap[c.slug] = c.id);

        await queryInterface.bulkInsert('Blogs', [
            {
                title: 'Why You Need a Professional Security Guard for Your Home',
                slug: 'home-security-guard-benefits',
                excerpt: 'Locks and alarms are not enough. Discover the top reasons why hiring a trained security guard gives you unmatched protection and peace of mind.',
                content: `<p>Home security is a top priority for every family. While CCTV cameras and alarm systems help, a professional security guard adds a layer of protection that technology alone cannot provide.</p>

<h3>1. Visible Deterrent</h3>
<p>The presence of a uniformed guard discourages burglars, vandals, and unwanted visitors. It also reassures your family and neighbours.</p>

<h3>2. 24/7 Surveillance and Quick Response</h3>
<p>Our guards are trained to monitor entry points, patrol the property, and respond instantly to any suspicious activity. They can also handle medical emergencies until help arrives.</p>

<h3>3. Trained in Threat Management</h3>
<p>From fire safety to crowd control, our security personnel undergo rigorous training. Armed and unarmed options are available based on your risk assessment.</p>

<h3>4. Regular Patrols and Incident Reporting</h3>
<p>Guards maintain a log of visitors, patrol rounds, and any unusual events. You receive daily reports for complete transparency.</p>

<h3>5. Peace of Mind</h3>
<p>Whether you're at work, on holiday, or asleep at night, knowing a trained professional is watching over your home is priceless.</p>

<p>Secure your home with Al‑Noor's verified security guards. <a href="/contact">Call us for a free consultation</a>.</p>`,
                featuredImage: '/images/blog/security-guard.jpg',
                published: true,
                categoryId: catMap['safety'],
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'How to Choose the Right Maid for Your Home',
                slug: 'how-to-choose-right-maid',
                excerpt: 'Finding a trustworthy maid is essential for every household. Follow these 5 proven steps – from background checks to trial periods – to hire the perfect candidate.',
                content: `<p>Hiring a maid is one of the most important decisions for any family. A reliable maid not only keeps your home clean but also gives you peace of mind. Here's a step‑by‑step guide to help you make the right choice.</p>

<h3>1. Define Your Requirements</h3>
<p>Decide whether you need a full‑time, part‑time, or live‑in maid. List the specific chores: cleaning, cooking, laundry, childcare, or all of the above.</p>

<h3>2. Insist on Background Verification</h3>
<p>Always choose an agency that performs thorough background checks. At Al‑Noor, we verify identity, previous employment, and police clearance for every staff member.</p>

<h3>3. Conduct a Personal Interview</h3>
<p>Meet the candidate face‑to‑face. Assess communication skills, experience, and attitude. Discuss expectations clearly – working hours, duties, and leave policies.</p>

<h3>4. Start with a Trial Period</h3>
<p>A 1‑2 week trial is the best way to evaluate performance and compatibility. We offer a free replacement if you're not satisfied.</p>

<h3>5. Discuss Salary and Benefits</h3>
<p>Be transparent about salary, days off, and annual increments. A happy, well‑treated maid will stay longer and work better.</p>

<p>With these steps, you can confidently hire a maid who meets your family's needs. <a href="/contact">Contact Al‑Noor</a> to get started.</p>`,
                featuredImage: '/images/blog/maid-guide.jpg',
                published: true,
                categoryId: catMap['maid-tips'],
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Essential Qualities of a Good Babysitter',
                slug: 'qualities-of-good-babysitter',
                excerpt: 'Your child's safety and happiness depend on the caregiver you choose. Learn the top 5 qualities to look for when hiring a babysitter or nanny.',
                content: `<p>Choosing a babysitter is one of the most important decisions a parent can make. A great babysitter becomes an extension of your family. Here are the essential qualities to look for.</p>

<h3>1. Patience and Calmness</h3>
<p>Children can be unpredictable. A patient babysitter handles tantrums, crying, and messy situations without losing their cool.</p>

<h3>2. Experience and Training</h3>
<p>Look for someone with hands‑on experience, especially with your child's age group. CPR and first‑aid certification is a huge plus.</p>

<h3>3. Genuine Love for Children</h3>
<p>The best babysitters don't just supervise – they engage, play, read, and nurture. Watch how they interact with your child during the interview.</p>

<h3>4. Reliability and Punctuality</h3>
<p>A good babysitter arrives on time, follows your schedule, and communicates clearly. We background‑check all our staff for reliability.</p>

<h3>5. Problem‑Solving Skills</h3>
<p>From a scraped knee to a power outage, a good babysitter stays calm and handles minor emergencies until you return.</p>

<p>We provide trained, loving babysitters for families across Pakistan. <a href="/contact">Find your perfect nanny today</a>.</p>`,
                featuredImage: '/images/blog/babysitter-tips.jpg',
                published: true,
                categoryId: catMap['baby-care'],
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('Blogs', null, {});
    }
};