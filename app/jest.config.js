module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  testMatch: ["**/__tests__/**/*.test.ts"],
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
};
