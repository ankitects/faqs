# The Anki 2.1 scheduler

Anki 2.1 comes with a new scheduler that fixes a number of issues that previous Anki versions had. 

<h2>Changes</h2>

Filtered decks:

- Filtered decks no longer reset (re)learning cards when they are built or emptied, and reviews and learning cards will show up in the correct queue instead of the new queue.
- Filtered decks support a second search term, so you can include 100 cards to review and 20 new cards for example.
- Scheduling of cards that aren't yet due has been improved, and will show 4 buttons instead of 3.
- Filtered decks no longer support custom steps, and there is now a simple "preview mode" instead of the old option to disable scheduling changes. The new card order does not get forgotten when previewing.
- Cards can be buried or suspended while remaining in the filtered deck.

Other scheduling changes:

- Suspending/burying cards does not reset a card's learning steps.
- When a deck has children, reviews are taken from all children decks at once, instead of showing each deck's review cards one by one. The review limit of the child decks is ignored - only the limit of the deck you clicked on applies.
- Learning cards have 4 buttons instead of 3 - Hard repeats the current step after the first step, and is the average of Again and Good on the first step.
- "Next day starts at" is now relative to the current timezone.
- Lapsed reviews have their next due date updated on the last relearning step, instead of the first step.
- Anki now distinguishes between manually and automatically buried cards, and you can unbury one set without the other.
- There is a new option in the preferences screen to show day learning cards before reviews.
- The learn count is now the number of cards, instead of the number of steps required to complete.
- When cards are in relearning, the Easy button boosts the interval by 1 day.

<h2>Compatibility</h2>

The new scheduler is supported by recent Anki 2.1.x versions, AnkiWeb, and recent versions of the mobile clients.

Anki 2.0 does not support the new scheduler. If you are switching between Anki 2.0 and 2.1, please do not enable the new scheduler, as you risk corrupting your collection.

<h2>Enabling the new scheduler</h2>

Switching the scheduler will empty all filtered decks, and reset any cards that are in learning. It will also force the next sync to be a full sync.

To try the new scheduler:

- Open your profile
- Use File>Export to create a full backup of your collection to a colpkg
- Enable the new scheduler in the preferences screen

<h2>Disabling the new scheduler</h2>

After finishing any cards in learning and clearing filtered decks, you can turn the new scheduler off in the preferences screen.