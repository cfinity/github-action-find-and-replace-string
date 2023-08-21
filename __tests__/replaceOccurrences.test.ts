import {replaceOccurrences} from '../src/main' // Adjust the import path as needed

describe('replaceOccurrences', () => {
  it('should replace all specified symbols with "-"', () => {
    const branches = [
      'DEV-1346_create/page$for{refund}.form',
      'DEV-1238_frontend,articles$api.integration',
      'DEV-26_create$funnel{v5}.flow'
    ]

    const replacements = [
      {find: '\\/', replace: '-'},
      {find: '\\$', replace: '-'},
      {find: '\\{', replace: '-'},
      {find: '\\}', replace: '-'},
      {find: '\\.', replace: '-'},
      {find: '\\,', replace: '-'}
    ]

    const expected = [
      'DEV-1346_create-page-for-refund-form',
      'DEV-1238_frontend-articles-api-integration',
      'DEV-26_create-funnel-v5-flow'
    ]

    branches.forEach((branch, index) => {
      let result = branch
      replacements.forEach(replacement => {
        result = replaceOccurrences(
          result,
          replacement.find,
          replacement.replace
        )
      })
      expect(result).toBe(expected[index])
    })
  })

  it('should replace all specified symbols with "-" using a single pattern', () => {
    const branches = [
      'DEV-1346_create/page$for{refund}.form,',
      'DEV-1238_frontend,articles$api.integration{',
      'DEV-26_create$funnel{v5}.flow}'
    ]

    // Combine symbols into a single pattern
    const findPattern = '\\/|\\$|\\{|\\}|\\.|\\,'
    const replacePattern = '-'

    const expected = [
      'DEV-1346_create-page-for-refund-form-',
      'DEV-1238_frontend-articles-api-integration-',
      'DEV-26_create-funnel-v5-flow-'
    ]

    branches.forEach((branch, index) => {
      const result = replaceOccurrences(branch, findPattern, replacePattern)
      expect(result).toBe(expected[index])
    })
  })
})
