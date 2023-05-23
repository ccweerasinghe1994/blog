---
title: Two Forms of Pre-rendering
date: '2020-01-01'
---


Next has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then **reused** on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.