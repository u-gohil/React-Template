module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  },
}
