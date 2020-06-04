# Adding a New Language to Ardublockly

_(Work in Progress: This page should describe how to add new languages to Ardublockly)_

While Blockly has been translated to a large number of languages using TranslateWiki (more info [here](https://developers.google.com/blockly/hacking/translating)), only a small subset of these translations have been expanded to cover the text for Ardublockly. Ardublockly itself does not use TranslateWiki and to add a new language the JavaScript and JSON files have to be manually edited.


## Files to be edited/created

In total there are 3 files that have to be edited or created to add a new language to Ardublockly. One file is for the text contained within the Blockly blocks, one for the GUI text, and one small change required to add the new language to the settings menu.

Within the Blockly source code there are 3 files relevant to any translation, all within the `blockly/msg/` directory, but only one has to be updated to add a new language (the `blockly/msg/json/<language>.json`, which is second in this list):

* `blockly/msg/messages.js`: This file defines all the strings (in English) used by the Ardublockly blocks. If you are only adding a new language, then everything required will already be present, and so **THIS FILE SHOULD NOT BE EDITED**.

  Every time Blockly is built, the strings defined here are included in the `blockly/msg/<language>.js` JavaScript files, translated by the entries from their respective JSON files if they have been defined.

* `blockly/msg/json/<language>.json`: An existing file for your language should already exists in this directory. This JSON file contains an entry for each string item and its translation. For a new languages it will only contain the original Blockly strings, so it will have to be expanded with new Ardublockly-specific entries.

  The best way to identify the new entries required is to compare it with the English version (`blockly/msg/json/en.json`). All the Ardublockly entries should be at the end of the `blockly/msg/json/en.json` file.

* `blockly/msg/<language>.js`: An existing file for your language should already exists in this directory. This file will be automatically generated and updated from both the `blockly/msg/messages.js` and `blockly/msg/json/<language>.json` data when building Blockly, so **THIS FILE SHOULD NOT BE MANUALLY EDITED** either.

For the Ardublockly GUI two files have to be edited:

* `ardublockly/msg/<language>.js`: A new file will have to created, the best approach is to copy the English version (`ardublockly/msg/en.js`) and translate it. For the new filename follow the same abbreviation convention from Blockly (so for Spanish it would be `es.js`, French `fr.js`, etc)

* `ardublockly/ardublockly/ardublockly_lang.js`: At the top of the file there is a JavaScript object that will need a new entry as shown below:

  ```javascript
  Ardublockly.LANGUAGE_NAME = {
    'fr': 'Français',
    'en': 'English',
    'es': 'Español'
  };
  ```



## Generating/Updating the language files

Once the translated entries have been added to the JSON file, Blockly needs to be built to convert them into strings in the respective JavaScript file. To do this, from the Ardublockly project folder on a terminal (make sure you are using Python 2):

```
cd blockly
python build.py
```

_(Mention that Blockly doesn't necessarily have to be built and that just sending a PR with those two files should be fine)_

_(Mention that the front end js file can be updated to include the new language on the settings menu.)_

_(Indicate how to send a PR)_