/* eslint-env node */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom'], // Adiciona funcionalidades do jest-dom
};
