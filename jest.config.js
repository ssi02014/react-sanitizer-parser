module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1', // jest가 alias 경로 알아먹을 수 있게 적용
    '^@(components|assets)(.*)$': '<rootDir>/src/$1$2', // jest가 alias 경로 알아먹을 수 있게 적용, 경로 추가 시 key 정규표현식에다 추가
  },
};
