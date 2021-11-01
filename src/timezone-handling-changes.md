# Timezone handling changes

Anki 2.1.22+, AnkiMobile 2.0.57+, and AnkiDroid 2.15+ contain an optional change to the way Anki calculates the elapsed number of days. This change addresses some corner cases where timezone changes (including daylight savings) could cause Anki to move back or forward a day, and addresses cards being unburied / daily counts being reset for some users when syncing with AnkiWeb.

For most users, the new calculation should produce the same number of elapsed days as the old calculation. For some users, enabling this code may move Anki forward or back by one day, but this will only happen once, and Anki should be more robust against timezone changes afterwards.

**Please make sure you are running the above-mentioned versions prior to enabling the new code.** If any of your Anki clients have not been updated yet, you won't be able to sync them while this feature is enabled. 

To enable the new calculation, please make sure:

- your devices are in sync
- you're running Anki 2.1.22+
- 2.1 scheduler or higher is enabled in the preferences screen

Then to enable the new timezone code, please check the 'new timezone' checkbox.

Please close the window and sync, then sync your other devices to complete the process.

If you notice any problems with the new handling, please let us know.
