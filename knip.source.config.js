export default {
  entry: ['src/main.js', 'src/utilities-page.js'],
  project: ['src/**/*.js'],
  rules: {
    cycles: 'error',
  },
};
