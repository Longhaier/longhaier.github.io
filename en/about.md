---
layout: page
lang: en
title: About
description: Meet TaoBuilds, a facilities engineer writing about AI, automation, and practical tools.
permalink: /en/about/
translation: /about/
---

## Hi, I’m TaoBuilds

I’m an engineer who enjoys solving practical problems. Outside of work, I experiment with AI tools and automation and build small software projects around everyday engineering tasks.

This blog is where I write down what I tried, what I learned, and what I’d do differently next time.

## What I work on

- **Facilities engineering** — HVAC, water treatment, energy efficiency, and equipment reliability.
- **AI and automation** — AI-assisted coding, agents, and workflows that solve real problems.
- **Practical tools** — calculators and utilities for engineering, data cleanup, and routine work.
- **Learning** — notes on reading, programming, and building new skills.

## Projects

{% for project in site.data.projects %}
### {{ project.en.name }}

{{ project.en.description }}

[Visit {{ project.en.name }}]({{ project.url }}) · [Source on GitHub]({{ project.repository }})

{% endfor %}

## Get in touch

- [Follow TaoBuilds on X](https://x.com/{{ site.twitter_username }}) for updates in English.
- [Find me on GitHub](https://github.com/{{ site.github_username }}).
- [Email me](mailto:{{ site.email }}).
