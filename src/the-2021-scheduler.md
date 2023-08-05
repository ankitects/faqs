# 2021 Scheduler

The 2021 scheduler ("v3") is an update to the [Anki 2.1
scheduler](./the-anki-2.1-scheduler.md) ("v2").

## Compatibility

The v2 and v3 schedulers are compatible. You can switch between them without
a full sync, and it will not cause scheduling issues if you use v3 on one
device and sync with another device that is using v2.

Client support:

- Anki: 2.1.45+
- AnkiMobile: 2.0.75+
- AnkiWeb: yes
- AnkiDroid: 2.16.2+ includes support for the v3 scheduler when the experimental "new backend" option is enabled in the advanced preferences. Support for custom scheduling (for things like FSRS) is not yet implemented.

Because the v3 scheduler uses a different approach to gathering and sorting
cards, a v2 and v3 client may show a different number of due cards on a given
day. While this will not cause scheduling problems, please bear it in mind if
you're switching back and forth.

## Changes

### Undo

The v3 scheduler uses Anki's new undo infrastructure - you can answer a card,
bury a different card, and answer another card, then undo each one in turn if
you wish. Previous schedulers handled undo separately, so a non-review action
would clear the review history, and vice versa.

### Daily limits

The new count is now capped by the review count. If you have limits of 200
reviews and 20 new cards, and 190 reviews are due, only 10 new cards will be
introduced.

In Anki 2.1.50+/AnkiMobile 2.0.84+, each deck's limit affects the number of
cards that will be drawn from that deck and its subdecks. Limits are applied
from the deck you select, so if you select a child deck, its parents' limits
will not apply. For example, with the following limits:

- Parent: 100
- Parent::Child: 30
- Parent::Child::Grandchild1: 50
- Parent::Child::Grandchild2: 5
- Parent::Child::Grandchild3: 200

Then:

- If you click on Grandchild3, you'll get up to 200 cards.
- If you click on Grandchild2, you'll get up to 5 cards.
- If you click on Grandchild1, you'll get up to 50 cards.
- If you click on Child, you'll get up to 30 cards from the Child deck and its
  subdecks. No more than 5 cards will be taken from Grandchild2.
- If you click on Parent, you'll get up to 100 cards, with a maximum of 30
  coming from Child and its subdecks.

In the v3 scheduler in earlier Anki releases, intermediate limits were not
respected, so when clicking on Parent, the limits of Child did not influence how
many cards were taken from the grandchildren.

### Sorting

Additional deck options have been added to control the order new cards and
reviews are presented in. New cards can be mixed from multiple decks, and
reviews can optionally be ordered by interval or subdeck.

When burying is disabled, it is now possible to control whether siblings are
shown together or not, by adjusting the display order.

The options controlling the mixing of new cards and interday learning cards have
been moved from the Preferences screen into the deck options. The options will
be used from the deck you select to study.

### Burying

When burying is enabled, cards are now excluded from the queues at the start of
a study session. Previously if you had 10 forward and 10 reverse cards, the
counts would start at 20 and jump down as you review, but now they'll start directly
at 10. The actual burying still happens as you review cards.

Because exclusion is done when you click on a deck, the counts you see on the deck
list will differ from the ones you see when you click on a deck. The overview screen
will point out the number of cards that will be buried.

Learning cards that cross a day boundary can now be buried like reviews and new
cards, and there is a new option available that controls whether they should be buried
or not.

### Fuzz

The small random delay added to reviews is now reflected on the answer buttons,
instead of only being applied when answering.

The way the delay is calculated has also been improved - cards with intervals under
a week now receive a more equally-weighted delay, and the delay amount increases more
smoothly as intervals increase.

### Interday learning

Interday (1+ day) learning cards are now subject to the review limit. When
determining what fits within the limit, Anki fetches interday learning cards
first, then reviews, and finally new cards.

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

The code you enter applies to the entire collection, and not just decks using
the preset.

Here's an example. Please note that it uses modern JavaScript that will need
to be transpiled if you want to use it with the Qt5 version of Anki.

For example:

```javascript
// print the existing states
console.log(
  JSON.stringify(states.$type.toObject(states, { defaults: true }), null, 4)
);

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

The various scheduling states are described in SchedulingStates [here](https://github.com/ankitects/anki/blob/main/proto/anki/scheduler.proto).

## Enabling

As of Anki 2.1.45 and AnkiMobile 2.0.75, the scheduler can be enabled and
disabled in the Preferences screen.
