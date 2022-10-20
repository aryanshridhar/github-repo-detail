module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  preset: 'ts-jest',
  roots: ['<rootDir>/tests'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
};
