# What spaced repetition algorithm does Anki use?

As of Anki 23.10, Anki has two available algorithms. The first one is based on
the [SuperMemo 2 algorithm](http://www.supermemo.com/english/ol/sm2.htm), and
the second one is called [FSRS](https://github.com/open-spaced-repetition).

Anki’s algorithm differs from SM-2 in some respects. Notably:

- SM-2 defines an initial interval of 1 day then 6 days. With Anki,
  you have full control over the length of the initial learning steps.
  Anki understands that it can be necessary to see a new card a number
  of times before you’re able to memorize it, and those initial
  "failures" don’t mean you need to be punished by being shown the
  failed card many times over the course of a few days. Performance
  during the learning stage does not reflect performance in the
  retaining stage.

- Anki uses 4 choices for answering review cards, not 6. There is only
  one _fail_ choice, not 3. The reason for this is that failure
  comprises a small amount of total reviews, and thus adjusting a
  card’s ease can be sufficiently done by simply varying the positive
  answers.

- Answering cards later than scheduled will be factored into the next
  interval calculation, so you receive a boost to cards that you were
  late in answering but still remembered.

- Like SM-2, Anki’s failure button resets the card interval by
  default. But the user can choose to have the card’s interval reduced
  instead of being reset completely. Also, you can elect to review
  failed mature cards on a different day, instead of the same day.

- _Remembered easily_ not only increments the ease factor, but adds an
  extra bonus to the current interval calculation. Thus, answering
  _remembered easily_ is a little more aggressive than the standard
  SM-2 algorithm.

- Successive failures while cards are in learning do not result in
  further decreases to the card’s ease. A common complaint with the
  standard SM-2 algorithm is that repeated failings of a card cause
  the card to get stuck in "low interval hell". In Anki, the initial
  acquisition process does not influence a card’s ease.

You can also check out `sched.py` and `schedv2.py` in Anki’s source code for the
scheduling code. Here is a summary (see the [deck options](https://docs.ankiweb.net/deck-options.html)
section of the manual for the options that are mentioned in _italics_).

## Learning/Relearning Cards

If you press…​

- Again  
  Moves the card back to the first step setted in [Learning/Relearning Steps.](https://docs.ankiweb.net/deck-options.html?#learning-steps)

- Hard  
  Repeats the current step after the first step, and is the average of
  Again and Good.

- Good  
  Moves the card to the [next step](https://docs.ankiweb.net/deck-options.html?#learning-steps).
  If the card was on the final step, the card is converted into a
  review card (it 'graduates').

- Easy
  Immediately converts the card into a review card.

New cards have no ease, so no matter how many times you press
'Again' or 'Hard', the future ease factor of the card won't be affected.
The same can be said about relearning cards: pressing 'Again'
or 'Hard' won't have any effect over the card's ease.

## Review Cards

Once a card is graduated, it gets an ease factor. By default is 2.5, but you
can set another value using the [Deck Options](https://docs.ankiweb.net/deck-options.html?#starting-ease).

If you press…​

- Again  
  The card is placed into relearning mode, the ease is decreased by 20
  percentage points (that is, 20 is subtracted from the _ease_ value,
  which is in units of percentage points), and the current interval is
  multiplied by the value of _new interval_ (this interval will be used
  when the card exits relearning mode).

- Hard  
  The card’s ease is decreased by 15 percentage points and the current
  interval is multiplied by the value of _hard interval_ (1.2 by default)

- Good  
  The current interval is multiplied by the current ease. The ease is
  unchanged.

- Easy  
  The current interval is multiplied by the current ease times the _easy
  bonus_ and the ease is increased by 15 percentage points.

For Hard, Good, and Easy, the next interval is additionally multiplied
by the _interval modifier_. If the card is being reviewed late,
additional days will be added to the current interval, as described
in a [previous FAQ.](https://faqs.ankiweb.net/due-times-after-a-break.html)

## Limitations

There are a few limitations on the scheduling values that cards can
take. Eases will never be decreased below 130%; SuperMemo’s research has
shown that eases below 130% tend to result in cards becoming due more
often than is useful and annoying users. Intervals will never be
increased beyond the value of _maximum interval_. Finally, all new
intervals (except Again) will always be at least one day longer than the
previous interval.

## Why doesn’t Anki use SuperMemo’s latest algorithm?

The simple answer is that SuperMemo’s latest algorithm is proprietary,
and requires licensing. As Anki is an open source application, it can
only make use of algorithms that have been made freely available, such as
FSRS. [Preliminary tests](https://github.com/open-spaced-repetition/fsrs-vs-sm17)
seem to indicate FSRS is roughly on par with SM17.
