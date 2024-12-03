# Due times after a break

When you use Anki every day, each time a card is answered correctly, it
gets a bigger interval. Let’s assume that 'good' about doubles the
interval. Thus you have a 5 day wait, then a 10 day wait, 20 days, 40
days, and so on.

When people return to their deck after weeks or months of no study,
they’re often surprised by the length intervals have grown to. This is
because Anki considers the actual time the card was unseen, not just the
time it was scheduled for. Thus if the card was scheduled for 5 days but
you didn’t study for a month, the next interval will be closer to 60
days than 10 days.

This is a good thing. If you have successfully remembered a card after a
one month wait, chances are you’ll remember it again after a longer
wait, too. The same principles which make SRS effective in normal use
apply when you’re studying after a delay, too. It also makes little
sense to schedule a card for 10 days in the future if you were able to
easily answer it after a whole month’s wait - you’d be going backwards.

Resetting the deck is an even worse solution. When returning to a deck
after a long absence, you may have forgotten many of your cards, but
chances are you haven’t forgotten them all. Resetting the entire deck
means you have to waste time studying material you already know.

Now you may find overdue cards that you were able to recall, but not
comfortably, since they were not reviewed when they should have been. To
counter this, Anki treats the delay differently depending on your
answer. If you find a card easy, the last interval plus the full delay
are added together, and then used to calculate the next interval. When
you answer good, only half the delay is used. And when you answer hard,
none of the extra delay is used. So if a card was due in 5 days, and it’s
answered 20 days late, the next times you’d end up with are
approximately:

- Hard: 5 \* 1.2 = 6 days

- Good: (5 + 20/2) \* 2.5 = 37.5 days

- Easy: (5 + 20) \* 3.25 = 81.25 days

The exact numbers will depend on your past performance with the card,
and your deck settings.

If you find a card hard, the next interval is conservative and any extra delay
is discarded. If you find it good, the next interval is only about 50% higher.
And easy increases the interval aggressively as usual.

So it is recommended that you study as normal when you return to Anki
after a period of absence. But if you absolutely must reset the deck,
you can select the cards to reset in the browser, and use
**Cards**->**Reset** (or **Cards**->**Forget** in older versions).
