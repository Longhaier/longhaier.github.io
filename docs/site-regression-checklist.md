# TaoBuilds site regression checklist

This repository is a Jekyll GitHub Pages site. Visual redesigns **must not change**
legacy article URLs or depend on a backend.

## Navigation smoke test
- Homepage -> Archive / Category / Tags / Collections / About
- Archive and Category/Tag article preview -> original post permalink
- Post category/tag chips -> matching section id in taxonomy index
- Backlinks from About and Collections
- Breadcrumb links, previous/next and related posts

## Search interaction
- On `/archive/` search a post title; confirm only matching cards remain.
- On `/category/` search a category name; all items within that category should match.
- On `/tag/` search a tag label; all matching tag-group articles should match.
- Search a nonexistent term: empty state appears; clear search restores cards.
- Reload with JavaScript disabled: full article listings remain available.

## Article readability
- Open an article with headings and legacy Kramdown table of contents.
- Ensure the source article content remains, one visible TOC is rendered in the sidebar,
  and the previous/next and tags links work.
- Check wide code blocks, wide tables, images and long headings do not overflow.

## Devices and accessibility
- Check 375 px, 768 px and desktop widths.
- Keyboard tab through navigation, article cards, forms and TOC.
- Check reduced-motion preference and that the sticky sidebar does not cover content.

## Build
The `Validate Jekyll site` workflow builds the repository without publishing,
and verifies the home/archive/category/tag/About/Collections output routes.
Do not merge a redesign with a failed build.
