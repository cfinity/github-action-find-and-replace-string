import * as core from '@actions/core'

export function replaceOccurrences(
  inputString: string,
  regexPattern: string,
  replacement: string
): string {
  try {
    // Create a RegExp object from the given pattern
    const regex = new RegExp(regexPattern, 'g')

    // Replace all occurrences that match the regex
    const replaced = inputString.replace(regex, replacement)

    // Replace multiple consecutive "-" with a single "-"
    const result = replaced.replace(/-+/g, '-')

    return result
  } catch (error) {
    // Handle any errors in the regular expression pattern or replacement
    if (error instanceof Error) core.setFailed(error.message)
    return inputString
  }
}

// Example usage within a GitHub Action
function run(): void {
  try {
    const inputString = core.getInput('input')
    const regexPattern = core.getInput('replace')
    const replacement = core.getInput('with')

    const result = replaceOccurrences(inputString, regexPattern, replacement)

    core.setOutput('value', result)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
