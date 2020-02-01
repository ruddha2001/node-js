# NOTES-APP

This is basic CLI application for taking notes!

The application has following four functionalities:
* Add a note
* Remove a note
* Read a note
* List all notes

Instead of using a databse, this app uses a simple JSON file on the file system of the user to store and retrieve notes.

#### Packages used
- chalk: This app uses [chalk](https://www.npmjs.com/package/chalk) to beautify the terminal output.

- yargs: This app uses [yargs](https://www.npmjs.com/package/yargs) to parse the commands from the CLI.