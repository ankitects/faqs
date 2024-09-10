# Old scheduler versions

This section includes information about the currently outdated scheduler versions.

## v1 scheduler

### Review cards

- When a deck has subdecks, the cards appear from each deck in turn.
- The v1 scheduler applies parent limits to subdecks, regardless of which deck you click on to study.


### (Re)learning cards

- The **Easy** button is not shown if the card is in relearning state. In learning state,  both **Easy** and **Hard** isn't shown.
- The card count shows reviews needed to finish all the cards in a queue, not the number of cards. Thus, one (re)learning card can be counted multiple times in the count.
- Suspending or burying (re)learning cards move them back to the new card queue or review queue.

### New cards

- The v1 scheduler applies parent limits to subdecks, regardless of which deck you click on to study.

### Filtered decks

- Cards are presented more similarly to how they normally are, but studying cards have side effects, and the original position of new cards is lost when you study them.

- The custom steps option allows you to override the home deck’s steps and provide your own steps instead. The provided steps apply to both cards being learnt, lapsed
reviews, and reviews ahead of time. 

- If you create, rebuild, empty, or delete a filtered deck while cards are still in learning, they are turned into new cards. In the case of failed reviews in relearning, any remaining relearning steps are skipped.

- Cards cannot be buried or suspended while remaining in filtered deck.

- Filtered decks only have a single filter.

- Filtered decks cannot pull in cards in (re)learning state.

- Filtered decks don't show all 4 answer buttons when rescheduling is turned off.

### Fuzz factor

- Fuzz factor isn't included in next review time shown above answer buttons. If you’re noticing a slight discrepancy between what you select and the intervals your cards actually get, this is probably the cause.


## v2 scheduler

### Review cards

- When a deck has subdecks, review cards are gathered from all subdecks at once.

- The review limit is taken from the deck you click to study. If you have a deck tree Parent::Child::Grandchild and you select Child, the limits you have set on Parent and Grandchild are ignored.


### New cards

- The v2 scheduler applies parent limits to subdecks, regardless of which deck you click on to study.

### Filtered decks

- Filtered decks don't show all 4 answer buttons when rescheduling is turned off. 

### Fuzz factor

- Fuzz factor isn't included in next review time shown above answer buttons. If you’re noticing a slight discrepancy between what you select and the intervals your cards actually get, this is probably the cause.

## Updating to v2 from v1

If you are syncing with AnkiWeb, updating requires a one-way upload to AnkiWeb.
Please ensure all of your devices are in sync before you update, as otherwise
you may accidentally overwrite changes made on your other devices.

Before updating, it is recommended you export a backup. Using the computer version,
you can use the **File > Export** menu item to create a `.colpkg` file containing all
decks and scheduling. Using AnkiMobile, you can use the **Add/Export** option to export
a `.colpkg` file. In the unlikely case that you run into problems, you will
be able to restore from the backup.

Once you have updated, please sync and choose **Upload** to send the upgraded
collection to AnkiWeb. Then please sync any other devices you use, choosing
**Download** on each of them, to bring things back into sync.

### Anki 2.1.41+/AnkiMobile 2.0.75+

To update, click the Update message shown in the deck list.

Unlike previous Anki versions, cards in learning will not be reset, and cards in
filtered decks will remain filtered. The new scheduler handles filtered decks
differently, so custom steps you may have set will no longer apply, but filtered
decks with rescheduling enabled will not reset learning cards.

Once you've updated, there is no option to switch back to the old scheduler. While
it is possible to switch back to an older version of Anki on your computer and then
change the scheduler in the preferences, please bear in mind that it will
require your learning cards and filtered decks to be reset.

### Earlier Anki versions

Anki versions earlier than 2.1.41 reset all cards in learning prior to updating, and move all
cards in filtered decks back to their original decks. This is problematic for
people with longer learning steps. If you're in that situation, it is recommended
you update with 2.1.41 or later.
