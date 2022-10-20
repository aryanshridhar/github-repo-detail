# github-repo-detail

Get owner and name of repository passed as SSH or HTTPs

### Motivation

When dealing with octokit, it requres a <i>proper</i> owner and a repository name as params for it to fetch requests.<br/>
However, I have been in situation wherein I only have Github URL and have to perform certain task with octokit.

### Usage

#### getDetails

```ts
import { getDetails, RepoDetails } from 'github-repo-detail';

// Accepts URL passed in form of HTTPs or SSH
const details: RepoDetails = getDetails(url_here);
console.log(details);
/* {
    owner: string,
    name: string
} */
```

That's it!
