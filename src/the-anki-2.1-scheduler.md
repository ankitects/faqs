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

## Changes

Reviews:

- When a deck has children, reviews are taken from all children decks at once,
  instead of showing one deck at a time.
- The daily review limit is taken from the deck you click on. If you have a deck
  tree of the form "grandparent::parent::child" and you click on "parent", the
  limits you have set on "grandparent" and "child" are ignored.

(Re)learning:

- Learning cards have 4 buttons instead of 3 - Hard repeats the current step
  after the first step, and is the average of Again and Good on the first step.
- The learn count is now the number of cards, instead of the number of steps
  required to complete.
- Suspending/burying cards does not reset a card's learning steps.
- Lapsed reviews have their next due date updated on the last relearning step,
  instead of the first step.
- There is a new option in the preferences screen to show day learning cards
  before reviews.
- When cards are in relearning, the Easy button boosts the interval by 1 day.

Filtered decks:

- Filtered decks no longer reset (re)learning cards when they are built or
  emptied, and reviews and learning cards will show up in the correct queue
  instead of the new queue.
- Filtered decks support a second search term, so you can include 100 cards to
  review and 20 new cards for example.
- Scheduling of cards that aren't yet due has been improved, and will show 4
  buttons instead of 3.
- Filtered decks no longer support custom steps, and there is now a simple
  "preview mode" instead of the old option to disable scheduling changes. The
  new card order does not get forgotten when previewing.
- Cards can be buried or suspended while remaining in the filtered deck.

Other changes:

- "Next day starts at" is now relative to the current timezone.
- Anki now distinguishes between manually and automatically buried cards, and
  you can unbury one set without the other.

## 2021 updates

Updates to the V2 scheduler are currently in [beta testing](./the-2021-scheduler.md).
