module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  coverageDirectory: "coverage",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{vue}",
    "!**/node_modules/**",
    "!<rootDir>/dist/**",
    "!<rootDir>/src/plugins/**",
    "!<rootDir>/tests/unit/**"
  ],
  coverageReporters: ["lcov", "text-summary"]
};
