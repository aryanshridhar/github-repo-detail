import { getDetails } from '../index';

describe('getDetails', () => {
  const HTTPSGithubUrl =
    'https://github.com/aryanshridhar/github-repo-detail.git';
  const SSHGithubUrl = 'git@github.com:aryanshridhar/github-repo-detail.git';
  const invalidGithubURL = 'git@github.com:aryanshridhar/github-repo-detail';

  const expectedDetails = {
    owner: 'aryanshridhar',
    name: 'github-repo-detail',
  };

  it('tests with HTTPS github URL', () => {
    const details = getDetails(HTTPSGithubUrl);
    expect(details).toStrictEqual(expectedDetails);
  });

  it('tests with SSH github URL', () => {
    const details = getDetails(SSHGithubUrl);
    expect(details).toStrictEqual(expectedDetails);
  });

  it('throws error on invalid Github URL', () => {
    expect(() => getDetails(invalidGithubURL)).toThrowError(
      'Invalid Github URL passed',
    );
  });
});
