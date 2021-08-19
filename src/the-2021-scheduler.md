# 2021 Scheduler

The 2021 scheduler ("v3") is an update to the [Anki 2.1
scheduler](./the-anki-2.1-scheduler.md) ("v2"). It is
currently in beta testing.

## Compatibility

The v2 and v3 schedulers are compatible. You can switch between them without
a full sync, and it will not cause scheduling issues if you use v3 on one
device and sync with another device that is using v2.

Client support:

- Anki: 2.1.45+
- AnkiMobile: 2.0.75+
- AnkiWeb: yes
- AnkiDroid: not yet

It will likely be some time until AnkiDroid supports the v3 scheduler
directly. In the mean time, it will continue to show cards using the v2 scheduler, regardless of the setting you have chosen.

Because the v3 scheduler uses a different approach to gathering and sorting
cards, a v2 and v3 client may show a different number of due cards on a
given day. While this will not cause scheduling problems, please bear it in mind if you're switching back and forth.

## Changes

### Undo

The v3 scheduler uses Anki's new undo infrastructure - you can answer a card,
bury a different card, and answer another card, then undo each one in turn if
you wish. Previous schedulers handled undo separately, so a non-review action
would clear the review history, and vice versa.

### Daily limits

Previously each deck's limit was limited by its parent limits, grandparent
limits, and so on. This has been simplified to the following:

- Each deck's limit controls how many cards from that specific deck can be used.
- The deck you select controls the maximum number of cards that will be shown in
  the study session.

For example, imagine you have a parent deck with a limit of 100, with 2 child
decks. The first one has a limit of 20, and the second has a limit of 200.

- If you click on the parent deck, you will get a maximum of 100 cards.
- If you click on the first child, you'll get a maximum of 20 cards.
- If you click on the second child, you'll get a maximum of 200 cards.

This may sound similar to the way reviews are handled in the v2 scheduler. The
difference is that each child deck's limit is also enforced. When you click on
the parent deck, you will not get more than 20 cards from the first child. You
do not need to see the cards in deck order either - see the Sorting section
below for more.

Another change is that the new count is now capped by the review count. If you
have limits of 200 reviews and 20 new cards, and 190 reviews are due, only 10
new cards will be introduced.

### Sorting

Additional deck options have been added to control the order new cards and
reviews are presented in. New cards can be mixed from multiple decks, and
reviews can optionally be ordered by interval or subdeck.

When burying is disabled, it is now possible to control whether siblings are
shown together or not.

The options controlling the mixing of new cards and interday learning cards have
been moved from the Preferences screen into the deck options. The options will
be used from the deck you select to study.

### Burying

When burying is enabled, cards are now excluded from the queues at the start of
a study session. Previously if you had 10 forward and 10 reverse cards, the
counts would start at 20 and jump down as you review, but now they'll start directly
at 10. The actual burying still happens as you review cards.

Because exclusion is done when you click on a deck, the counts you see on the deck
list will differ from the ones you see when you click on a deck. If you press the
Unbury button at the end of reviews, you'll get the other cards that were excluded
at the start.

Learning cards that cross a day boundary can now be buried like reviews and new
cards.

### Fuzz

The small random delay added to reviews is now reflected on the answer buttons, instead of
only being applied when answering.

### Interday learning

Learning cards that cross a day boundary are now included in the review count, instead
of the learning count. They will now be affected by the daily review limit.

In Anki 2.1.47+ / AnkiMobile 2.0.79+, the plan is to revert this change - interday
learning cards will be in the learning count again, and not subject to review
limits.

### Filtered decks

Filtered decks with rescheduling disabled now show 4 buttons - the provided
delay applies to the Again button, and Hard/Good will use 1.5x and 2x the
provided delay. Easy will remove the card.

## Add-ons and custom scheduling

The new scheduler is a ground-up rewrite, so add-ons that modified the old
scheduler's card gathering or answering routines will no longer work. It is no
longer possible to selectively replace parts of the scheduler's code ("monkey
patching"), so some add-ons may not be practical to port without significant
effort.

The new scheduler does provide some control over the scheduling however. As each
card is presented, the times and states associated with each answer button are
calculated in advance, and it is possible to modify the calculated scheduling
with some JavaScript code entered into the bottom of the deck options screen.

For example:

```javascript
// print the existing states
console.log(JSON.stringify(states, null, 4));

// load the debugger if the web inspector is open
debugger;

// if the hard button is a learning step, make it
// a 123 minute delay
if (states.hard.normal?.learning) {
  states.hard.normal.learning.scheduledSecs = 123 * 60;
}

// apply the same change in a rescheduling filtered deck
if (states.hard.filtered?.rescheduling?.originalState?.learning) {
  states.hard.filtered.rescheduling.originalState.learning.scheduledSecs =
    123 * 60;
}

// increase ease factor by 0.2 when Easy used on a review
if (states.good.normal?.review) {
  states.easy.normal.review.easeFactor =
    states.good.normal.review.easeFactor + 0.2;
}
```

Because this is implemented in JavaScript, it is not limited to the computer
version. AnkiMobile supports it as well, and AnkiWeb and AnkiDroid may support
it in the future too. This will allow advanced users to make adjustments to the
standard scheduling behaviour, that apply on all platforms.

The various scheduling states are described [here](https://github.com/ankitects/anki/blob/9edac805adfe285cc92ed04dfeeffc1d1813c4d0/rslib/backend.proto#L1454).

## Stability

The new scheduler passes most of the tests used to test the previous schedulers
(the ones where behaviour is the same), and appears to have been well received
so far, but it's possible there are corner-cases that have not been discovered
yet. If you notice anything unexpected, please let us know.

## Trying it out

As of Anki 2.1.45 and AnkiMobile 2.0.75, the scheduler can be enabled and
disabled in the Preferences screen.
