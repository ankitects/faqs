# AnkiApp is not part of the Anki ecosystem

The program called AnkiApp was developed by a separate group of people, and is not related to the rest of the Anki ecosystem. It was released years after Anki was already established in the marketplace, and we suspect the name was deliberately chosen to take advantage of the brand recognition we have built up. Using Anki in the name implies that it will function with the other Anki clients, which it does not.

If you have downloaded AnkiApp in error, please consider leaving a review on the app store alerting people to the fact that AnkiApp is not connected to Anki. 

The Anki ecosystem is made up of Anki, AnkiMobile, AnkiDroid, and AnkiWeb, all of which are linked from our official website: <https://apps.ankiweb.net>

**Importing from AnkiApp - New Approach**

Abdo has kindly published [an add-on](https://ankiweb.net/shared/info/2072125761
) to help you import your AnkiApp decks into Anki. This is the recommended method, as it
doesn't require you to pay the AnkiApp developers money to access your data. As an added
bonus, it's easier than the old approach.

**Importing from AnkiApp - Old Approach**

The approach below relies on the export feature of AnkiApp. The AnkiApp developers have recently
taken that feature away from free users, requiring users to pay for a subscription before they
can export their data. For that reason, the add-on approach above is recommended instead. But for posterity, the old instructions are below:

If you have accidentally added content to AnkiApp, you may be able to move it over to Anki. Study progress can't be imported, but basic text and images can be:

1. Export from AnkiApp, which gives you a .zip file
2. Unzip the file somewhere - you will get a fields.csv file and any media files.
3. Use File>Import in Anki to import the fields.csv file. In the Import window, ensure the "Allow HTML in fields" checkbox is enabled.

If the file contained images, those image references need to be changed to a format Anki understands. Select all the cards you imported in the Browse window of Anki, and use the Edit>Find&Replace menu item. Then replace:

```html
{{
```

with

```html
<img src="
```

Then do another Find&Replace, replacing

```html
}}
```

with

```html
">
```

Finally, you'll need to move the image files that you extracted from the zip file into the User 1/collection.media folder:

<https://docs.ankiweb.net/files.html#file-locations>
