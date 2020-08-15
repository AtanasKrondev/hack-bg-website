<h1 align="center" style="margin-top: 1em; margin-bottom: 3em;">
  <p><a href="https://hack.bg"><img alt="hack logo" src="./src/assets/images/hack-logo.png" alt="hack.bg"></a></p>
</h1>

# 👋 Welcome to hack.bg!


[![Build Status](https://travis-ci.com/hackbg/hack-bg-website.svg?branch=develop)](https://travis-ci.com/hackbg/hack-bg-website)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/hackbg/hack-bg-website.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/hackbg/hack-bg-website/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/hackbg/hack-bg-website.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/hackbg/hack-bg-website/alerts/)

## Build setup

```bash
# install dependencies
yarn

# start development server
yarn dev
```

## Contributing

We use the [gitflow](https://danielkummer.github.io/git-flow-cheatsheet/) workflow [this is also helpful](https://gist.github.com/JamesMGreene/cdd0ac49f90c987e45ac).
* Development of features happens in branches made from **develop** called feature/<the-feature> like feature/update-profile.
* When development is finished a pull request to **develop** is created. At least one person has to review the PR and when everything is fine the PR gets merged.
* The develop branch gets deployed to the [stage environment](https://01101000011000010110001101101011.com/) by travis.
* To make a new release create a release branch called release/vX.X.X, also bump the version number in package.json in this branch.
* Create a PR to master which then also has to be accepted.
* Create a tag for this version and push the tag.
* Also merge back the changes (like the version bump) into develop.
* The master branch has to be deployed to the [production environment](https://hack.bg/) manually.

## Deployment

We have a stage (develop) and a production (master) branch and environments where these branches will be deployed to.
* [stage environment](https://01101000011000010110001101101011.com/)
* [production environment](https://hack.bg/)

### stage
* Is used to see changes to the code in effect in a "real" environment without the fear of breaking the production environment.

### production
* Is the production environment, code lives in the "master" branch.
