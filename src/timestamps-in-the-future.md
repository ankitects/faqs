# Importing/exporting fails due to timestamps in the future

Some shared decks include cards/notes with invalidate creation dates, eg
they say cards were created in the year 40000 instead of the year 2023.
This causes a variety of problems, and causes any cards created after
importing such a deck to end up with similarly-invalid timestamps.

To prevent this problem spreading, recent Anki versions will refuse to import or
export decks that have invalid dates. In an ideal world Anki would fix the problem
automatically for you, but doing so breaks the connection between cards, preventing
updates from working when importing again in the future. For this reason, this is
an issue that shared deck authors should ideally address.

## When exporting

If you receive this message when exporting, please install the following add-on:

<https://ankiweb.net/shared/info/196231552>

After restarting Anki (and waiting a while if loading is slow), the problem should
be fixed, and you should be able to export the deck.

## When importing

Please try contacting the deck author to notify them of the problem, and point
them to this page. If they use the add-on mentioned in the above section and
export the deck again, it will be importable.

If the deck author is not responsive, you can try to fix the problem yourself.
To do so, you'll need access to a computer - this can not be resolved with the
mobile clients.

- Ensure you're on Anki 2.1.60+.
- Go into the Preferences screen, and in the Editing section, enable legacy
  import/export handling.
- Import the deck(s).
- Return to the preferences, and disable legacy handling again.
- Follow the instructions in the 'when exporting' section above to fix the
  problematic cards you've imported.
