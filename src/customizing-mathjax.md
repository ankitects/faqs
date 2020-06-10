# Customizing MathJax

Anki's bundled MathJax support is loaded before your card content, so if you wish to customize MathJax, you will need to do so in the following way in your card template:

```html
<script>
  MathJax.Hub.Config({
  ...
  });
  MathJax.Hub.Configured();
</script>
```

Notes:

- Please avoid changing the standard open/close tags (`\(` and `\[`), as Anki expects them to look like that.
