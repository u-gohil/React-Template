module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  },
}
