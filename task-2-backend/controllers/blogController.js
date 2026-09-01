// Blog CRUD operations
const db = require('../config/database');
const slugify = require('slugify');

exports.list = async (req, res) => {
    try {
        const posts = await db.Blog.findAll({
            include: [db.Category],
            order: [['createdAt', 'DESC']],
            where: { published: true }
        });
        const categories = await db.Category.findAll();
        res.render('blog/list', { blogPosts: posts, categories, metaTitle: 'Blog' });
    } catch (err) {
        console.error('Error fetching blog posts:', err);
        res.render('blog/list', { blogPosts: [], categories: [], metaTitle: 'Blog' });
    }
};

exports.detail = async (req, res) => {
    try {
        const post = await db.Blog.findOne({
            where: { slug: req.params.slug, published: true },
            include: [db.Category]
        });
        if (!post) return res.status(404).render('pages/404', { metaTitle: 'Post Not Found' });
        await post.increment('views');
        res.render('blog/detail', { post, metaTitle: post.title, metaDescription: post.excerpt });
    } catch (err) {
        console.error('Error fetching blog post:', err);
        res.status(500).render('pages/500', { metaTitle: 'Server Error' });
    }
};

exports.category = async (req, res) => {
    try {
        const category = await db.Category.findOne({ where: { slug: req.params.slug } });
        if (!category) return res.status(404).render('pages/404', { metaTitle: 'Category Not Found' });
        const posts = await db.Blog.findAll({ where: { categoryId: category.id, published: true } });
        res.render('blog/category', { category, posts, metaTitle: category.name });
    } catch (err) {
        console.error('Error fetching blog category:', err);
        res.status(500).render('pages/500', { metaTitle: 'Server Error' });
    }
};

// Admin functions
exports.adminList = async (req, res) => {
    const posts = await db.Blog.findAll({ include: [db.Category] });
    res.render('admin/blog/list', { posts, title: 'Manage Blog' });
};

exports.createForm = async (req, res) => {
    const categories = await db.Category.findAll();
    res.render('admin/blog/create', { categories, title: 'New Post' });
};

exports.create = async (req, res) => {
    const { title, categoryId, excerpt, content, slug } = req.body;
    const finalSlug = slug || slugify(title, { lower: true, strict: true });
    let imagePath = null;
    if (req.file) imagePath = '/uploads/' + req.file.filename;
    
    await db.Blog.create({ title, slug: finalSlug, categoryId, excerpt, content, featuredImage: imagePath });
    res.redirect('/admin/blog');
};

exports.editForm = async (req, res) => {
    const post = await db.Blog.findByPk(req.params.id);
    const categories = await db.Category.findAll();
    res.render('admin/blog/edit', { post, categories, title: 'Edit Post' });
};

exports.update = async (req, res) => {
    const post = await db.Blog.findByPk(req.params.id);
    const { title, categoryId, excerpt, content, slug } = req.body;
    let imagePath = post.featuredImage;
    if (req.file) imagePath = '/uploads/' + req.file.filename;
    
    await post.update({ title, slug, categoryId, excerpt, content, featuredImage: imagePath });
    res.redirect('/admin/blog');
};

exports.delete = async (req, res) => {
    await db.Blog.destroy({ where: { id: req.params.id } });
    res.redirect('/admin/blog');
};