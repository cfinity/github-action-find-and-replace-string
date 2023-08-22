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
uses: cfinity/github-action-find-and-replace-string@v1.0
with:
    input: ${{ github.ref }} # this translates to ref/heads/main on the main branch, but can be any arbitrary string 
    replace: |               # we want to find all occurence of ';' or '$' in input string
        \;|\$                  
    with: ''                 # and replace it with a blank string (ie. removing it)

run: echo ${{ steps.replaced.outputs.value }} 
```

# Updating

Refer to: https://github.com/actions/toolkit/blob/master/docs/action-versioning.md

```
git tag -fa v1 -m "Update v1 tag"
git push origin v1 --force
```
