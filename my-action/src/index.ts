import * as core from '@actions/core';

async function run(): Promise<void> {
  try {
    const message: string = core.getInput('message');
    console.log(`You entered: ${message}`);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.setFailed('Unknown error occurred');
    }
  }
}

run();
