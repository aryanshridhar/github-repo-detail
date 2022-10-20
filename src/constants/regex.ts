// Thanks to https://serverfault.com/a/917253
export const VALID_GITHUB_URL_REGEX = new RegExp(
  '^(https|git)(://|@)([^/:]+)[/:]([^/:]+)/(.+).git$',
);
