const yargs = require('yargs');
const getNote = require("./note.js");

yargs.command({
    command: 'add',
    describe: 'add a command',
    builder: {
        title: {
            describe: "add title",
            require: true,
            type: 'string'
        },
        body: {
            describe: "add body",
            require: true,
            type: 'string'
        }
    },
    handler: argv => {
        getNote.addNote(argv.title, argv.body);
    }
})
yargs.command({
    command: 'remove',
    describe: 'remove a command',
    builder: {
        title: {
            describe: "remove title",
            // require: true,
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => {
        getNote.removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'add a list',
    handler: () => {
        getNote.noteList();
    }
})

yargs.command({
    command: 'read',
    describe: 'read a command',
    builder: {
        title: {
            describe: 'read a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        getNote.readNote(argv.title);
    }
})

yargs.parse();









