// Admin JavaScript
/**
 * Admin Panel JavaScript
 * Handles sidebar toggle, delete confirmations, image preview, slug generation
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ========== SIDEBAR TOGGLE ==========
    const sidebarToggle = document.querySelector('.admin-sidebar-toggle');
    const sidebar = document.querySelector('.admin-sidebar');
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
        });
    }

    // ========== CONFIRM DELETE ==========
    const deleteForms = document.querySelectorAll('form[action*="/delete"]');
    deleteForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!confirm('Are you sure you want to delete this item? This action cannot be undone.')) {
                e.preventDefault();
            }
        });
    });
    
    // Also handle any button with class 'delete-btn'
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (!confirm('Are you sure? This cannot be undone.')) {
                e.preventDefault();
            }
        });
    });

    // ========== IMAGE PREVIEW ==========
    const imageInput = document.querySelector('input[type="file"][name="image"]');
    const previewContainer = document.querySelector('.image-preview');
    if (imageInput && previewContainer) {
        imageInput.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    previewContainer.innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-width: 200px; margin-top: 10px; border-radius: 8px;">`;
                };
                reader.readAsDataURL(file);
            } else {
                previewContainer.innerHTML = '';
            }
        });
    }

    // ========== SLUG AUTO-GENERATION ==========
    const titleInput = document.querySelector('input[name="title"]');
    const slugInput = document.querySelector('input[name="slug"]');
    if (titleInput && slugInput && slugInput.value === '') {
        titleInput.addEventListener('blur', function() {
            const slug = this.value
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '');
            if (slug) slugInput.value = slug;
        });
    }
});