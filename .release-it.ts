/* eslint-disable no-template-curly-in-string */
import type { Config } from 'release-it';

const configs: Config = {
    git: {
        commit: true,
        commitMessage: 'chore: release v${version}',
        push: true,
        tag: true,
    },
    github: {
        release: true,
    },
    npm: {
        publish: false,
    },
};

export default configs;
