# Frontend-Mentor projects

This web app presents list of my mini projects that are available on [Frontend Mentor](https://www.frontendmentor.io)
. This web app is my sandbox that helps present my frontend skills. You can switch between subpages where each page 
is another project/component etc.

## Installation

- download my repo
- run `npm install`
- setup: **Node v18.16.0** and **npm v9.5.1**

### Husky config:
- create *.husky* in main directory
- in script in `package.json` add command `prepare: "husky install"`
- run command `npx add .husky/pre-commit "npx lint-staged`
- create `.prettierrc` and `.eslintrc` with your config
- add config in `package.json` in lint-staged your config
- now when you run commit husky check whether any file has change and automatically will lint or show error/warning

### Technologies and tools
- Vue
- TypeScript
- SASS(SCSS)
- Eslint
- Prettier
- Husky (with lint-staged)

## Projects
This is list of my projects with summary
### Project 1 - 

todo - add to package json    "./src/**/*.{vue, scss}": "stylelint --fix"