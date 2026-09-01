// Format dates, etc.
exports.formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' });
};

exports.truncate = (str, len = 100) => {
    if (str.length <= len) return str;
    return str.substr(0, len) + '...';
};