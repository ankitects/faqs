# Customizing MathJax

Anki's bundled MathJax support is loaded before your card content, so if you wish to customize MathJax, you will need to do so in a specific way.

For recent Anki versions, please see [this post](https://forums.ankiweb.net/t/configure-mathjax-macros-on-macos/6535/2).

For older Anki versions:

```html
<script>
  MathJax.Hub.Config({
  ...
  });
  MathJax.Hub.Configured();
</script>
```

Notes:

- Please avoid changing the standard open/close tags (`\(` and `\[`), to something like `$` and `$$`, as Anki has special logic for cloze deletions, which will not work if you change the delimiter.
