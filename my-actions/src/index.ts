
import * as core from '@actions/core';

async function run(): Promise<void> {
  try {
    // Get the input named 'message' from the workflow
    const message = core.getInput('message');

    // Log the message to the console
    console.log(`You entered: ${message}`);
  } catch (error) {
    // If there's an error, mark the action as failed
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.setFailed('Unknown error occurred');
    }
  }
}

run();
