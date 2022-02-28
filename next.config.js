const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdnjs.cloudflare.com/ajax/libs/kute.js/1.6.1/kute.min.js" integrity="sha512-DeLO4mdijNCQ3uOZDb1u+sUadgQUQnPr3zlPejMZBNbLi9rreaGwBjIJXYPU8WNJpRWb9LG6RpP6kdodXw6AGg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>' : '',
}
