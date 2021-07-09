# What spaced repetition algorithm does Anki use?

Anki’s algorithm is based on the SuperMemo 2 algorithm. For info on
SM-2, please see <http://www.supermemo.com/english/ol/sm2.htm>

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
  one 'fail' choice, not 3. The reason for this is that failure
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

- 'Remembered easily' not only increments the ease factor, but adds an
  extra bonus to the current interval calculation. Thus, answering
  'remembered easily' is a little more aggressive than the standard
  SM-2 algorithm.

- Successive failures while cards are in learning do not result in
  further decreases to the card’s ease. A common complaint with the
  standard SM-2 algorithm is that repeated failings of a card cause
  the card to get stuck in "low interval hell". In Anki, the initial
  acquisition process does not influence a card’s ease.

You can also check out `sched.py` and `schedv2.py` in Anki’s source code for the
scheduling code. Here is a summary (see the [deck options](https://docs.ankiweb.net/deck-options.html)
section of the manual for the options that are mentioned in 'italics').

If you press…​

Again  
The card is placed into relearning mode, the ease is decreased by 20
percentage points (that is, 20 is subtracted from the 'ease' value,
which is in units of percentage points), and the current interval is
multiplied by the value of 'new interval' (this interval will be used
when the card exits relearning mode).

Hard  
The card’s ease is decreased by 15 percentage points and the current
interval is multiplied by 1.2.

Good  
The current interval is multiplied by the current ease. The ease is
unchanged.

Easy  
The current interval is multiplied by the current ease times the 'easy
bonus' and the ease is increased by 15 percentage points.

For Hard, Good, and Easy, the next interval is additionally multiplied
by the 'interval modifier'. If the card is being reviewed late,
additional days will be added to the current interval, as described
in a previous FAQ.

There are a few limitations on the scheduling values that cards can
take. Eases will never be decreased below 130%; SuperMemo’s research has
shown that eases below 130% tend to result in cards becoming due more
often than is useful and annoying users. Intervals will never be
increased beyond the value of 'maximum interval'. Finally, all new
intervals (except Again) will always be at least one day longer than the
previous interval.

After you select an ease button, Anki also applies a small amount of
random “fuzz” to prevent cards that were introduced at the same time and
given the same ratings from sticking together and always coming up for
review on the same day. This fuzz does not appear on the interval
buttons, so if you’re noticing a slight discrepancy between what you
select and the intervals your cards actually get, this is probably the
cause.

## Why doesn’t Anki use SuperMemo’s latest algorithm?

The simple answer is that SuperMemo’s latest algorithm is proprietary,
and requires licensing. As Anki is an open source application, it can
only make use of algorithms that have been made freely available.

We’re inclined to believe SuperMemo when they say their newer algorithms
are more efficient, but feel that to a certain extent, it is a case of
diminishing returns. The gains achieved by moving from a traditional
study routine to SM-2 are already great, and by sticking with an open
algorithm, your learning data is not locked into a single product.

Ultimately it’s up to you to decide - if access to the latest and
greatest scheduler is a higher priority than the things that Anki brings
to the table, you may want to check out SuperMemo to see if it is a good
fit for you.

## What about SM-5?

Anki’s scheduler was originally based on
[SM-5](https://www.supermemo.com/english/ol/sm5.htm). Anki’s default of
showing the next interval above each ease button revealed problems with
the implementation - harder cards could end up with greater interval
increases than easy ones, and the ease factors sometimes grew to the
point where a single review could result in a 20-30x increase in
interval.

An attempt was made at the time to correct this by smoothing the optimal
factors matrix - applying a cap on the maximum factor and enforcing a
minimum difference between adjacent ease factors. This addressed the
above problems, but resulted in an optimal factors matrix that had very
little room to move, and the conclusion drawn at the time was that SM-5
was not an improvement over SM-2.

While SM-5 clearly wasn’t working for Anki, in hindsight, it may not
have been fair to assume the issues we encountered were due to
fundamental problems with the algorithm. SuperMemo have subsequently
stated that the description of the SM-5 algorithm listed on their
website is incomplete, so it is possible the problems we encountered do
not exist in SuperMemo’s proprietary implementation.
