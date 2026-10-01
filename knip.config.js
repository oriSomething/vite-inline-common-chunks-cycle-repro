export default {
  entry: ['dist/*.js'],
  project: ['dist/*.js'],
  rules: {
    cycles: 'error',
  },
};
