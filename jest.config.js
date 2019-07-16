module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: ["**/__tests__/*.(ts|tsx)"],
  setupFiles: ["./enzyme.config.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  coveragePathIgnorePatterns: ["/node_modules/", "./enzyme.config.js"],
  setupFilesAfterEnv: ["@testing-library/react/cleanup-after-each", "./enzyme.config.js"],
  coverageReporters: ["json", "lcov", "text", "text-summary"],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/__mocks__/style.css"
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json"
    }
  }
};