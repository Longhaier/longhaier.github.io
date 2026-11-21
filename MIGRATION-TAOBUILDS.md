# TaoBuilds GitHub identity migration

This PR is intentionally **not merged** until the account and repository have been renamed in the GitHub UI. Site branding is already updated in the default branch.

## 1. Check availability
Confirm the name `TaoBuilds` is available in GitHub account settings. Public search is not authoritative.

## 2. Rename your GitHub account
1. Sign in to the existing `Longhaier` account.
2. Go to **Settings → Account → Change username**.
3. Enter `TaoBuilds`, review GitHub's warning, and confirm.
4. Confirm `https://github.com/TaoBuilds` displays your existing account.

**Impact:** This changes the owner namespace of every repository owned by the account, not just the website. Review external integrations, clones, and OAuth Apps. Old GitHub profile URLs do not redirect; repository URLs generally do. Do not assume old GitHub Pages URLs redirect.

## 3. Rename the Pages repository
1. Open the existing personal-site repository in its new account location.
2. Choose **Settings → General → Repository name**.
3. Change `longhaier.github.io` to `TaoBuilds.github.io`.
4. Ensure GitHub Pages publishes from the expected branch/build method under **Settings → Pages**.

If GitHub has already automatically changed the repository name, verify it instead of renaming twice.

## 4. Apply this PR
After the account and repository renames, merge this PR to update Jekyll's absolute URL, RSS/canonical metadata and profile links.

Verify `https://taobuilds.github.io/` and representative post URLs, archive, category, tag and About pages; test both desktop and mobile.

## 5. Aftercare
- Refresh local Git remotes: `git remote set-url origin https://github.com/TaoBuilds/TaoBuilds.github.io.git`
- Update pinned links on X/social bios and other profiles.
- Review services with account-specific OAuth integrations.
- Revoke the Gitalk OAuth secret historically committed in this public repository.
- Do not expect `https://longhaier.github.io/` to automatically redirect to the new Pages domain.
