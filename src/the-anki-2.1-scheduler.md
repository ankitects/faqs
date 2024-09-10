# Old scheduler versions

Anki 2.1 comes with a new scheduler that fixes a number of issues that previous
Anki versions had.

## Compatibility

The 2.1 scheduler was introduced in Aug 2018. Support was added to AnkiMobile
and AnkiWeb around the same time, and AnkiDroid has supported it in releases
since Oct 2019.

It is not supported by the older Anki 2.0.

Anki 2.1.50+/AnkiMobile 2.0.84+ require an update to the 2.1 scheduler.

## Updating

If you are syncing with AnkiWeb, updating requires a one-way upload to AnkiWeb.
Please ensure all of your devices are in sync before you update, as otherwise
you may accidentally overwrite changes made on your other devices.

Before updating, it is recommended you export a backup. Using the computer version,
you can use the File>Export menu item to create a .colpkg file containing all
decks and scheduling. Using AnkiMobile, you can use the Add/Export option to export
a colpkg file. In the unlikely case that you run into problems, you will
be able to restore from the backup.

Once you have updated, please sync and choose "Upload" to send the upgraded
collection to AnkiWeb. Then please sync any other devices you use, choosing
"Download" on each of them, to bring things back into sync.

### Anki 2.1.41+/AnkiMobile 2.0.75+.

To update, click the Update message shown in the deck list.

Unlike older Anki versions, cards in learning will not be reset, and cards in
filtered decks will remain filtered. The new scheduler handles filtered decks
differently, so custom steps you may have set will no longer apply, but filtered
decks with rescheduling enabled will not reset learning cards.

You may be asked if you use AnkiDroid 2.14 when updating. It is safe to choose
"no" here, as AnkiDroid 2.15 has since been released. If you make a mistake when
prompted, you can adjust the timezone handling in Anki's Preferences screen.

Once you've updated, there is no option to switch back to the old scheduler. While
it is possible to switch back to an older version of Anki on your computer and then
change the scheduler in the preferences, please bear in mind that it will
require your learning cards and filtered decks to be reset.

If you have updated to AnkiMobile 2.0.84+, it will not be possible to return to the
old scheduler, as Apple do not allow app downgrades.

### Older Anki versions

Older Anki versions reset all cards in learning prior to updating, and move all
cards in filtered decks back to their original decks. This is problematic for
people with longer learning steps. If you're in that situation, it is recommended
you update with 2.1.41 or later.

Older versions have an option in the preferences screen to toggle the scheduler
version.
