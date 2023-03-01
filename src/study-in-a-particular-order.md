# Can I study my cards in a particular order?

## New cards

By default, new cards are introduced by their due number. If you open the
Browse screen and look at the due column, you'll see new cards have numbers
like Due #1, Due #2, and so on. Anki will show the card with the smallest
due number first.

When you have multiple cards for a note (for example, both forward->backward
and backward->forward cards, or multiple cloze deletions on a note), you may
want those cards to be shown on different days, or spaced apart, or shown
one after the other depending on your preferences.

- To have the cards shown on different days, enable burying in the deck options.
- Sibling cards are spaced apart by default.
- To have the cards shown next to each other, enable the [v3 scheduler](./the-2021-scheduler.md), 
and then change the sort order in the deck options, in the display order section.

## Reviews

Because Anki is [designed to show you cards again when you're about to forget them](./anki-is-not-showing-me-all-my-cards.md),
it is not possible to preserve the original order when cards come up again for review,
as the cards may have been scheduled on different days. For this reason, you should
design your cards so that they do not rely on context or certain other cards having been
seen first, or you'll find it difficult to review them.

If you have a backlog of reviews, there is some flexibility in the order review cards
are presented. After enabling the [v3 scheduler](./the-2021-scheduler.md), please see
the display options in the deck's options.

While the regular review process will not show cards in order, you can use the
[Browse screen](https://docs.ankiweb.net/browsing.html) to sort your cards in a
particular order, and then use the Preview button to go through the cards in that order.
This bypasses Anki's usual learning process, and will not alter the scheduling of the
cards or their review history.
