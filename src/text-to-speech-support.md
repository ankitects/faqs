# Text to speech support

<h1>For Anki 2.1.20+</h1>

Please see <https://docs.ankiweb.net/templates/fields.html#text-to-speech-for-individual-fields>

<h1>For AnkiMobile 2.0.56+</h1>

Please see <https://docs.ankimobile.net/tts.html>

<h1>For AnkiDroid</h1>

Please search for TTS in the AnkiDroid manual.

<h1>For older Anki versions</h1>

There is a popular add-on called AwesomeTTS that supports a number of text to speech programs and services. You can read more about it here:

<https://ankiweb.net/shared/info/814349176>

It works by downloading the audio into your collection, so that when you sync with AnkiWeb, your other devices will gain access to the audio as well.

If you want to use the generated files outside the computer version, make sure you use the stored files mode and not 'on the fly'.

While AnkiMobile <2.0.56 has no official support for on-device TTS, Apple introduced TTS support in iOS7, and it is possible to gain access to it. The following is based on a user-contributed solution.

```html
<span id="word">{{Word}}</span>

<script>
  var w = document.getElementById("word");
  window.setTimeout("speak(w.innerHTML)", 500);

  function speak(word) {
    var speech = new SpeechSynthesisUtterance();
    speech.text = word;
    speech.volume = 1; // 0 to 1
    speech.rate = 1; // 0.1 to 9
    speech.pitch = 1; // 0 to 2, 1=normal
    speech.voice = window.speechSynthesis
      .getVoices()
      .filter((v) => v.lang == "en-GB")[0];
    speechSynthesis.cancel();
    speechSynthesis.speak(speech);
  }
</script>
```

You can change en-GB to other languages like en-US, de-DE, ja-JP, zh-HK, etc. You can use the example section on the following page to see all the different languages. <https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices>

You may need to install the Enhanced audio files for the language you want to play, which you can do so via the Settings app, then General, Accessibility, Speech and Voices.
