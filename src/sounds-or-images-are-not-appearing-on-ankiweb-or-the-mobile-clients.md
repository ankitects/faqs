# Sounds/images are not appearing on AnkiWeb or the mobile clients

If you created your deck by importing from a text file, or you downloaded a shared deck that was created in that way, it's possible the filenames in Anki do not match the filenames on the computer. Some computers treat "file.jpg", "file.JPG" and "FILE.JPG" all as the same file, but other computers do not. This means that if the deck contains a reference to "dog.jpg" but the file on disk is "dog.JPG", some devices (including AnkiWeb) will not be able to display the image.

You can confirm this is a problem by editing a card that's not showing up correctly using the computer version. If audio isn't working, you'll see a link like `[sound:hello.mp3]`. If you see a broken image link, click on that field, then press the down arrow on the top right, choose "Edit HTML", and locate text that looks like:

```html
<img src="cat.jpg">
```

Note down the name of the file.

Then open your collection's media folder (<https://docs.ankiweb.net/files.html#file-locations>) and locate the file that is referenced. If the file does not use exactly the same combination of lowercase or uppercase letters, you've found the problem.

If it was a shared deck, please report the issue to the shared deck author. If the differences in case are regular, you can try fix the problem using Anki's find&replace feature in the browser. For example, if the link is for "dog.JPG" but the file on disk is "dog.jpg", you can click browse, select all cards, and use find&replace to replace JPG with jpg.

If the filename is too long, the file will fail to sync even if the filename is correct in Anki. In that case, renaming the file (both in your file explorer and in Anki) so that it has a shorter name will fix this problem.

If that doesn't explain your issue, please check that the computer you're on is not using a vfat/fat32 file system. Anki currently is unable to detect changes to the media folder when it's on such a filesystem, so media syncing will not work in this case. A workaround is planned for a future release.
