module.exports = {
  preset: 'ts-jest',
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  transformIgnorePatterns: ["/node_modules/(?!(vest|@hookform/resolvers))"],
  setupFiles: [
    "whatwg-fetch"
  ],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "@api/(.*)": "<rootDir>/src/api/$1",
    "@assets/(.*)": "<rootDir>/src/assets/$1",
    "@atoms/(.*)": "<rootDir>/src/components/atoms/$1",
    "@harness/(.*)": "<rootDir>/src/harness/$1",
    "@models/(.*)": "<rootDir>/src/models/$1",
    "@navigation/(.*)": "<rootDir>/src/navigation/$1",
    "@pages/(.*)": "<rootDir>/src/pages/$1",
    "@store/(.*)": "<rootDir>/src/store/$1",
    "@styles/(.*)": "<rootDir>/src/styles/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/utils/tests/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy"
  }
};
