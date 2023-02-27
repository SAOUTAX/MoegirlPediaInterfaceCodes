"use strict";
const octokit = require("../modules/octokit.js");
const core = require("@actions/core");
(async () => {
    core.info(await octokit.rest.issues.create({
        title: "test",
        body: "test",
        labels: "ci:generatePolyfill",
    }));
    core.startGroup("process.env");
    core.info(JSON.stringify(process.env));
    core.endGroup();
})();
