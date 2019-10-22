module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,vue}",
    "!<rootDir>/src/main.ts",
    "!<rootDir>/src/registerServiceWorker.ts"
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text-summary"],
  testMatch: ["<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)"]
};
