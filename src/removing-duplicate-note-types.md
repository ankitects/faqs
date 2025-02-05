# Removing duplicate note types

After you've used Anki for a while, you may end up with several note types of the same name followed by different characters, like `Basic-908e4`, `Cloze-37a28`, or `Image Occlusion++++`. This can happen when you import a shared deck that uses a note type with the same name as one that is already in your collection, or if you create a note type with a duplicate name. Anki adds characters to the name to avoid merging or overwriting the existing note type.

While this is generally harmless, it can be somewhat confusing if you can't tell which note type you are using. If you would like to clean that up, you can do the following:

1. Compare the fields, card templates, and styling of each of the note types by clicking <kbd>Fields</kbd> and <kbd>Cards</kbd> in the Manage Note Types window (Notes → Manage Note Types). If they are the same, decide which one you are deleting and click <kbd>Rename</kbd> to rename it so you will know which one it is (e.g., add `-delete` to the name). If they aren't the same, rename one to something more descriptive, and keep them both. 
2. In the Browse window, select the note type that you want to delete in the left sidebar, then choose Edit → Select All.
3. Choose Notes → Change Note Type and select the note type that you are keeping on the right side of the screen. \[This step will require a one-way sync with AnkiWeb the next time you sync, so if you have unsynced progress on other devices, you should stop here and get your devices in sync. Anki will give you a warning about this.\] Verify that the fields and templates are mapping as you expect. Click Save. 
4. Repeat steps 2 & 3 for any other note types you want to delete. 
5. Open the Manage Note Types window again and delete the now-unused note types (each will say it is used by "\[0 notes\]"). 
