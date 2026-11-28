---
layout: page
title: 关于
description: 一个工程实践者的技术笔记、AI 实验和小产品构建记录。
permalink: /about/
translation: /en/about/
icon: heart
type: page
---

## 你好，我是 TaoBuilds

我是一名喜欢动手解决问题的工程师。工作之余，我持续尝试 AI 工具、自动化流程和小型软件产品，把学到的知识转化为真正能使用的工具。

这里不是一份完美履历，而是一份持续更新的**实践日志**：哪些问题值得解决、用了什么方法、踩过哪些坑，以及下一次怎样做得更好。

## 我在关注什么

- **工程与厂务**：动力系统、暖通、水处理、能源效率和设备可靠性。
- **AI 与自动化**：探索 AI 辅助编程、工作流、Agent，以及工具在真实场景中的价值。
- **实用小产品**：把常见工程计算、数据整理和日常效率问题做成可复用工具。
- **持续学习**：记录读书、编程和长期成长中的经验。

## 代表项目

{% for project in site.data.projects %}
### {{ project.name }} · {{ project.subtitle }}

{{ project.description }}

[访问 {{ project.name }}]({{ project.url }}) · [GitHub 仓库]({{ project.repository }})

{% endfor %}

## 联系与交流

- **GitHub**：[github.com/TaoBuilds](https://github.com/TaoBuilds)
- **X**：[TaoBuilds 的动态](https://x.com/{{ site.twitter_username }})
- **邮件**：[{{ site.email }}](mailto:{{ site.email }})

> 保持好奇，持续创造。学习、动手、记录，然后再来一次。
