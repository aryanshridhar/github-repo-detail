import { RepoDetails } from '../types/getDetails';
import { VALID_GITHUB_URL_REGEX } from './constants/regex';

export function getDetails(url: string): RepoDetails {
  const match = VALID_GITHUB_URL_REGEX.exec(url);
  if (match === null) {
    throw new Error('Invalid Github URL passed');
  }
  const owner = match[4];
  const name = match[5];

  return {
    owner,
    name,
  };
}
