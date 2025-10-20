import * as core from '@actions/core';

async function run(): Promise<void> {
  try {
    const message = core.getInput('message');
    console.log(`You entered: ${message}`);
  } catch (error) {
    core.setFailed(`Action failed: ${error}`);
  }
}

run();
