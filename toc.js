// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="getting-help.html">Getting help</a></li><li class="chapter-item expanded affix "><a href="when-problems-occur.html">When problems occur</a></li><li class="chapter-item expanded affix "><a href="restoring-an-automatic-backup-recovering-from-data-loss.html">Restoring an Automatic Backup (Recovering from Data Loss)</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Cards and Notes</li><li class="chapter-item expanded "><a href="linking-cards-together.html">Can I link cards together?</a></li><li class="chapter-item expanded "><a href="can-i-reveal-parts-of-a-card-one-at-a-time.html">Can I reveal parts of a card one at a time?</a></li><li class="chapter-item expanded "><a href="card-template-has-a-problem.html">Card template has a problem</a></li><li class="chapter-item expanded "><a href="cards-are-reversed-appearing-twice.html">Cards are reversed / appearing twice</a></li><li class="chapter-item expanded "><a href="characters-are-cut-off.html">Characters are cut off</a></li><li class="chapter-item expanded "><a href="customizing-mathjax.html">Customizing MathJax</a></li><li class="chapter-item expanded "><a href="errors-when-recording.html">Errors when recording</a></li><li class="chapter-item expanded "><a href="extra-characters-appearing-on-cards.html">Extra characters appearing on cards</a></li><li class="chapter-item expanded "><a href="multiple-choice-questions.html">Multiple choice questions</a></li><li class="chapter-item expanded "><a href="no-cloze-found-on-card.html">No cloze found on card</a></li><li class="chapter-item expanded "><a href="printing-cards-in-your-collection.html">Printing cards in your collection</a></li><li class="chapter-item expanded "><a href="removing-duplicate-note-types.html">Removing duplicate note types</a></li><li class="chapter-item expanded "><a href="some-updates-were-ignored-because-the-note-type-has-changed.html">Some updates were ignored because note type has changed</a></li><li class="chapter-item expanded "><a href="sounds-or-images-have-gone-missing.html">Sound/image media files have gone missing!</a></li><li class="chapter-item expanded "><a href="splitting-a-field-into-multiple-fields.html">Splitting a field into multiple fields</a></li><li class="chapter-item expanded "><a href="text-to-speech-support.html">Text to speech support</a></li><li class="chapter-item expanded "><a href="sticky-fields.html">When adding a new card, some fields do not reset!</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Decks</li><li class="chapter-item expanded "><a href="a-deck-i-want-has-disappeared-from-ankiweb.html">A deck I want has disappeared from AnkiWeb</a></li><li class="chapter-item expanded "><a href="a-shared-deck-is-not-showing-images-or-playing-audio.html">A shared deck is not showing images/playing audio</a></li><li class="chapter-item expanded "><a href="cards-are-being-placed-in-the-default-deck.html">Cards are being placed in the &quot;Default&quot; deck</a></li><li class="chapter-item expanded "><a href="hiding-decks.html">Hiding Decks</a></li><li class="chapter-item expanded "><a href="how-can-i-work-with-someone-else-to-create-a-deck.html">How can I work with someone else to create a deck?</a></li><li class="chapter-item expanded "><a href="how-do-i-move-cards-between-decks.html">How do I move cards between decks?</a></li><li class="chapter-item expanded "><a href="merging-or-combining-two-decks.html">Merging/combining two decks</a></li><li class="chapter-item expanded "><a href="shared-decks-with-broken-javascript.html">Shared decks with broken Javascript</a></li><li class="chapter-item expanded "><a href="timestamps-in-the-future.html">Importing/exporting fails due to timestamps in the future</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Scheduling</li><li class="chapter-item expanded "><a href="anki-is-not-showing-me-all-my-cards.html">Anki&#39;s not showing me all my cards!</a></li><li class="chapter-item expanded "><a href="study-in-a-particular-order.html">Can I study my cards in a particular order?</a></li><li class="chapter-item expanded "><a href="due-times-after-a-break.html">Due times after a break</a></li><li class="chapter-item expanded "><a href="extra-copies-of-a-card-are-coming-up.html">Extra copies of a card are coming up</a></li><li class="chapter-item expanded "><a href="hard-good-interval-longer-than-good-easy.html">Hard/good interval is longer than good/easy</a></li><li class="chapter-item expanded "><a href="i-am-going-on-vacation-can-i-pause-the-scheduler.html">I&#39;m going on vacation. Can I pause the scheduler?</a></li><li class="chapter-item expanded "><a href="learning-steps-skipped-or-repeated.html">Learning steps are skipped or repeated</a></li><li class="chapter-item expanded "><a href="resetting-progress-in-a-deck.html">Resetting progress in a deck</a></li><li class="chapter-item expanded "><a href="settings-for-using-anki-to-prepare-for-a-large-exam.html">Settings for using Anki to prepare for a large exam</a></li><li class="chapter-item expanded "><a href="the-anki-2.1-scheduler.html">The Anki 2.1 scheduler</a></li><li class="chapter-item expanded "><a href="the-2021-scheduler.html">The Anki v3 scheduler</a></li><li class="chapter-item expanded "><a href="timezone-handling-changes.html">Timezone handling changes</a></li><li class="chapter-item expanded "><a href="what-spaced-repetition-algorithm.html">What spaced repetition algorithm does Anki use?</a></li><li class="chapter-item expanded "><a href="frequently-asked-questions-about-fsrs.html">Frequently asked questions about FSRS</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Synchronising and AnkiWeb</li><li class="chapter-item expanded "><a href="ankiweb-account-removal.html">AnkiWeb account removal</a></li><li class="chapter-item expanded "><a href="are-there-limits-on-file-sizes-on-ankiweb.html">Are there limits on file sizes on AnkiWeb?</a></li><li class="chapter-item expanded "><a href="can-i-sync-only-some-of-my-decks.html">Can I sync only some of my decks?</a></li><li class="chapter-item expanded "><a href="email-verification.html">Email verification</a></li><li class="chapter-item expanded "><a href="emails-not-being-received.html">Emails not being received</a></li><li class="chapter-item expanded "><a href="error-establishing-a-secure-connection-when-syncing.html">Error establishing a secure connection when syncing</a></li><li class="chapter-item expanded "><a href="media-files-may-take-time-to-sync.html">Media files may take time to sync</a></li><li class="chapter-item expanded "><a href="outlook-silently-discards-email.html">Outlook.com silently discards email</a></li><li class="chapter-item expanded "><a href="synchronizing-multiple-profiles.html">Synchronizing multiple profiles</a></li><li class="chapter-item expanded "><a href="syncing-failed-connection-timed-out-errors-when-syncing.html">Syncing failed: Connection timed out errors when syncing</a></li><li class="chapter-item expanded "><a href="sounds-or-images-are-not-appearing-on-ankiweb-or-the-mobile-clients.html">Sounds/images are not appearing on AnkiWeb or the mobile clients</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Anki Desktop</li><li class="chapter-item expanded "><a href="shortcut-not-working.html">A shortcut key is not working</a></li><li class="chapter-item expanded "><a href="anki-must-be-able-to-connect-to-a-local-port.html">Anki must be able to connect to a local port</a></li><li class="chapter-item expanded "><a href="anki-says-my-clock-is-wrong.html">Anki says my clock is wrong</a></li><li class="chapter-item expanded "><a href="changing-the-font.html">Changing the font</a></li><li class="chapter-item expanded "><a href="changing-the-interface-language.html">Changing the interface language</a></li><li class="chapter-item expanded "><a href="my-antivirus-program-says-anki-is-infected.html">My antivirus program says Anki is infected!</a></li><li class="chapter-item expanded "><a href="running-from-python.html">Running from Python</a></li><li class="chapter-item expanded "><a href="screenshots-large-and-blurry-on-retina-displays.html">Screenshots large and blurry on retina displays</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">AnkiMobile</li><li class="chapter-item expanded "><a href="requesting-a-refund-for-ankimobile.html">Requesting a refund for AnkiMobile</a></li><li class="chapter-item expanded "><a href="retrieving-ankimobile-crash-logs.html">Retrieving AnkiMobile crash logs</a></li><li class="chapter-item expanded "><a href="why-does-ankimobile-cost-more-than-a-typical-mobile-app.html">Why does AnkiMobile cost more than a typical mobile app?</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Other Apps</li><li class="chapter-item expanded "><a href="anki-knockoffs.html">Anki knockoffs</a></li><li class="chapter-item expanded "><a href="ankiapp-is-not-part-of-the-anki-ecosystem.html">AnkiApp is not part of the Anki ecosystem</a></li><li class="chapter-item expanded "><a href="ankidroid-has-a-separate-support-site.html">AnkiDroid has a separate support site</a></li><li class="chapter-item expanded "><a href="ankiuniversal-is-not-supported-here.html">AnkiUniversal is not supported here</a></li><li class="chapter-item expanded "><a href="we-do-not-make-robots.html">We do not make robots</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Miscellaneous</li><li class="chapter-item expanded "><a href="anki-2.0-support-has-ended.html">Anki 2.0 support has ended</a></li><li class="chapter-item expanded "><a href="anki-2.0-add-ons.html">Anki 2.0 add-ons</a></li><li class="chapter-item expanded "><a href="can-i-use-anki-in-a-company-or-school.html">Can I use Anki in a company or school?</a></li><li class="chapter-item expanded "><a href="how-can-i-donate.html">How can I donate?</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
