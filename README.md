# Plop generator utils

> Utility functions for using with [https://plopjs.com/]

## Getting started

### Install

```sh
npm i -g @brpaz/plop-generator-utils
```

### Usage

Add to your `plopfile.js`

```js
import { projectName, projectDescription, projectUrl } from '@brpaz/plop-generator-util/prompts.js';

export default function (
    /** @type {import('plop').NodePlopAPI} */
    plop
) {
    plop.setGenerator('template', {
        prompts: [
            projectName(),
            projectDescription(),
            projectUrl(),
        ],
        actions: () => {

        }
    });
}
```

#### Available functions

## Available Prompt Functions

| Function             | Description                         |
| -------------------- | ----------------------------------- |
| `projectName`        | Prompts for the project name        |
| `projectDescription` | Prompts for the project description |
| `projectUrl`         | Prompts for the project URL         |
| `authorName`         | Prompts for the author's name       |
| `authorEmail`        | Prompts for the author's email      |
| `repoSlug`           | Prompts for the repository slug     |
| `repoUrl`            | Prompts for the repository URL      |



