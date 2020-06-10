# Note types with strange names

After you've used Anki for a while and downloaded some shared decks, you may end up with some note types with names like ```Basic-908e4``` or ```Cloze-37a28```. These note types are created when you download a shared deck that uses a note type with the same name as one that's already in your collection. (If Anki didn't do this, then it might merge two different note types that happened to have the same name.)

Having these note types in your collection is normal and will not cause any problems, but if you would like to clean up, you can use the following procedure:

1. Compare the fields and card templates of each of the note types using the *Fields...* and *Cards...* buttons in the Manage Note Types dialog (Tools → Manage Note Types in the main window). If they're not the same, then you should just rename one to something more descriptive. If they are the same, then you can continue with these instructions to merge them.
2. Open the browser and select the note type that you want to get rid of in the left pane. (You can pick either one as long as you're consistent.)
3. Click in the right pane and choose Edit → Select All.
4. Choose Edit → Change Note Type and change all of the cards to the note type that you're keeping. (Note that this step will require a full sync to AnkiWeb the next time you sync, so if you have unsynced progress on other devices, you should get everything in sync first. Anki will give you a warning about this.)
5. Close the browser, return to the Manage Note Types dialog, and delete the old note type.
6. Repeat these steps for any other pairs of note types you'd like to combine.