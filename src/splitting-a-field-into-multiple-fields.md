# Splitting a field into multiple fields

## Recent Anki versions

With recent Anki versions, there is no need to export+import. An example is provided [in this forum post](https://forums.ankiweb.net/t/cloze-type-to-basic-type/23305/2).

## Older Anki versions

Sometimes you may create a deck, or download a shared deck, with several things in one field, such as text and audio, but then later decide that you would rather have the information in two fields so that you can have more precise control over what displays on each card. One option is to add a new field and then manually cut and paste the content between fields; this may be the fastest if you have less than a hundred cards or so, but otherwise it will be very tedious and slow. Here is a method you can use based on exporting to a text file and doing a search and replace; as an example, we'll focus on

1. If the field you want to split is the first field, make a different field the first field by using the **Reposition** button in the Fields dialog. This field needs to be unique, so that no two cards have the same content in that field. If you don't have any unique fields except the one you're trying to split, you can use the [add note ID](https://ankiweb.net/shared/info/8897764) add-on to add a unique field to the notes.
2. Export the entire deck to a text file, using the **Notes in plain text** choice.
3. Add a new field to your note type. The new field should come immediately after the one that you're trying to split, so if you had a "Word and Audio" field, you could rename it to "Word" and then add an "Audio" field and reposition it to go after the "Word" field.
4. Open the text file and do the search and replace. If your text editor supports a certain form of regular expressions, this might work for the expression: `s/\[sound/\t\[sound/`. Otherwise, if you're not sure how to form the expression, you can ask on the Community section or look for regular expression help on the Internet.
5. Import the text file back into your collection, making sure to use the correct note type and deck. Your notes will be updated with the newly split field.

If you run into problems, please ask on the Community category, as this is outside the scope of the official support we can provide for Anki.
