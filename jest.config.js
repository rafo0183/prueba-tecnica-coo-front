module.exports = {
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
};