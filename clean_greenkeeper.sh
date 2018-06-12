#!/bin/bash
# gh-pages cleanup script: Switches to gh-pages branch, and removes all
# directories that aren't listed as remote branches

function deslash () {
    # Recursively build a string of a directory's parents. E.g.,
    # deslashed "feature/test/branch" returns feature/test feature
    deslashed=$(dirname $1)
    if [[ $deslashed =~ .*/.* ]]
    then
        echo $deslashed $(deslash $deslashed)
    else
        echo $deslashed
    fi
}

# Cache current branch
current=$(git rev-parse --abbrev-ref HEAD)

# Checkout most recent gh-pages
git fetch upstream
git fetch origin
git checkout -f gh-pages-empty-history
git reset --hard origin/gh-pages-empty-history

# Make an array of directories to not delete, from the list of remote branches
branches=$(git branch -r --list upstream/*)

# Strip off the remote name prefix
branches="${branches[@]//upstream\//}"

# Add parent directories of branches to the exclusion list (e.g. greenkeeper/)
for branch in $branches; do
    if [[ $branch =~ .*/.* ]]; then
        branches+=" $(deslash $branch)"
    fi
done

# Dedupe all the greenkeepers
branches=$(echo "${branches[@]}" | tr ' ' '\n' | sort -u | tr '\n' ' ')

# Remove all directories that don't have corresponding branches
find . -type d \( -path ./.git $(printf " -o -path ./%s" $branches) \) -prune -o -type d -mindepth 1 -exec rm -rfv {} \;

# Push
git add -u
git commit -m "Remove stale directories"
# git push origin gh-pages

# Return to where we were
git checkout -f $current
exit
