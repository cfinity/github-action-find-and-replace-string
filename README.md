# github-action-find-and-replace-string
Find and replace strings

## Inputs

### `input`

**Required** The string you want to run this action on

### `regex`

**Required** A regex, that will be matched against to find a string to be replaced within the branch name (eg. `ref/heads/`)

### `replace`

**Required** The string to be replaced with (eg. `head-`, ``, `root_`)

## Outputs

### `result`

The new value containing the found-and-replaced string.

### Example usage

```yaml
uses: cfinity/github-action-find-and-replace-string@1
with:
    input: ${{ github.ref }} # this translates to ref/heads/main on the main branch, but can be any arbitrary string 
    regex: '\\;'              # we want to find all occurence of ';' in string
    replace: ''               # and replace it with a blank string (ie. removing it)
```
