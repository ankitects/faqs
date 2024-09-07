# The Anki v3 Scheduler

The 2021 scheduler ("v3") is an update to the [Anki 2.1
scheduler](./the-anki-2.1-scheduler.md) ("v2").

## Enabling

As of Anki/AnkiMobile 23.10, and AnkiDroid 2.17, the v3 scheduler is the default and only option.

On earlier versions, the scheduler can be changed from the preferences screen.

## Compatibility

The v2 and v3 schedulers are compatible. You can switch between them without
a full sync, and it will not cause scheduling issues if you use v3 on one
device and sync with another device that is using v2.

Client support:

- Anki: 2.1.45+
- AnkiMobile: 2.0.75+
- AnkiWeb: yes
- AnkiDroid: 2.17.0+

Because the v3 scheduler uses a different approach to gathering and sorting
cards, a v2 and v3 client may show a different number of due cards on a given
day, and may show them in a different order.

## Changes

### Undo

The v3 scheduler uses Anki's new undo infrastructure: you can answer a card,
bury another card, answer a different card, then undo each action in turn. Previous schedulers handled undo for review and non-review actions separately, so performing an action for one would clear the undo history for the other.

### Daily limits

By default, the review limit in the v3 scheduler also applies to new cards, so that new card introduction
is reduced/paused when you have a backlog of reviews. For example, if you have limits of
200 review cards and 20 new cards, and 190 review cards are due, only 10 new
cards will be introduced. This prevents the backlog from getting
worse.

If you find this happening, the recommended solution is to increase your review limit, and work through
the backlog before you add more new cards. If you're sure you want to add more new cards
even though you have a backlog, you can enable the "New cards ignore review limit" option
in deck options.

The limits of each deck will control the number of cards that are gathered from that deck
and its subdecks. Limits are applied from the deck you select, so if you select
a child deck, its parents' limits will not apply. For example, if the
following limits are set:

- Parent: 100
- Parent::Child: 30
- Parent::Child::Grandchild1: 50
- Parent::Child::Grandchild2: 5
- Parent::Child::Grandchild3: 200

Then:

- If you select Grandchild3, you'll get up to 200 cards.
- If you select Grandchild2, you'll get up to 5 cards.
- If you select Grandchild1, you'll get up to 50 cards.
- If you select Child, you'll get up to 30 cards from the Child deck and its
  subdecks. No more than 5 cards will be taken from Grandchild2.
- If you select Parent, you'll get up to 100 cards, with a maximum of 30
  coming from Child and its subdecks.

In earlier Anki releases, the v3 scheduler did not respect intermediate limits, so when clicking on parent, the limits of child did not influence how
many cards were taken from the grandchild decks.

### Sorting

Additional deck options have been added to control the order new cards and
review cards are presented in. New cards can be mixed from multiple decks, and
review cards can optionally be ordered by interval or subdeck.

When burying is disabled, with the v3 scheduler it's possible to control whether siblings are
shown together or not, by adjusting the display order.

The options controlling the mixing of new cards and interday learning cards have
been moved from the Preferences screen into the deck options. The options will
be used from the deck you select to study.

### Burying

When burying is enabled, cards are now excluded from the card counts at the start of
a study session. Previously if you had 10 forward and 10 reversed cards, the
counts would start at 20 and jump down as you review, but with v3 they'll start directly
at 10.

Because siblings are skipped when you click on a deck, the counts you see on the deck
list will differ from the ones you see when you click on a deck. The overview screen
will point out the number of cards that were waiting but have been skipped.

Learning cards that cross a day boundary ("interday learning cards") can be buried like review and new
cards.

### Fuzz

The small random delay added to intervals is reflected on the answer buttons,
instead of only being applied when answering.

The way the delay is calculated has also been improved - cards with intervals under
a week receive a more equally-weighted delay, and the delay amount increases more
smoothly as intervals increase.

### Interday learning

Interday learning cards are now subject to the review limit. When
determining what fits within the limit, Anki gathers interday learning cards
first, then review cards, and finally new cards.

### Filtered decks

Filtered decks with rescheduling disabled show 4 answer buttons. You can configure a time delay for each button. Setting this delay to 0 for an answer button means that button will return the card to its home deck.

In earlier releases, a delay could be configured for "Again". "Hard" used 1.5x that delay, whereas "Good" used 2x that delay, and "Easy" returned the card to its home deck.

## Add-ons and custom scheduling

The v3 scheduler is a ground-up rewrite, so add-ons that modified the previous scheduler's card-gathering or answering routines will not work with it. It is no
longer possible to selectively replace parts of the scheduler's code ("monkey
patching"), so some add-ons may not be practical to port without significant
effort.

However, the v3 scheduler does provide more control over the scheduling. As each
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
  JSON.stringify(states, null, 4)
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
version. AnkiMobile and AnkiDroid both support it as well, and AnkiWeb may also
support it in the future. This will allow advanced users to make 
adjustments to the standard scheduling behaviour, that apply on all platforms.

The various scheduling states are described in [SchedulingStates](https://github.com/ankitects/anki/blob/main/proto/anki/scheduler.proto).
