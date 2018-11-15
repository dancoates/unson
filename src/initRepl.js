import blessed from 'blessed';
import Editor from 'editor-widget';
import debounce from 'debounce';
import execute from './execute';
import tty from 'tty';
import fs from 'fs';
import {highlight} from 'cli-highlight';

export default function({indent, pipeline, data}) {
    const ttyFd = fs.openSync('/dev/tty', 'r+');

    const program = blessed.program({
        input: tty.ReadStream(ttyFd),
        output: tty.WriteStream(ttyFd)
    });

    const screen = blessed.screen({
        smartCSR: true,
        title: 'unson',
        forceUnicode: true,
        fullUnicode: true,
        program: program
    });
    screen.key(['escape', 'C-c'], (ch, key) => process.exit(1));
    screen.key(['escape', 'C-q'], (ch, key) => process.exit(0));

    const editor = new Editor({
        parent: screen,
        top: 0,
        left: 0,
        width: '50%',
        height: '100%',
        gutter: {width: 0, hidden: true}
    });

    const output = blessed.box({
        parent: screen,
        tags: false,
        left: '50%',
        top: 0,
        width: '50%',
        height: '100%',
        keys: true,
        vi: true,
        alwaysScroll: true,
        scrollable: true
    });

    const tick = debounce(() => {
        try {
            const text = editor.textBuf.getText();
            const result = execute({data, pipeline: [text]});
            const highlightedOutput = highlight(
                JSON.stringify(result, null, indent),
                {language: 'json'}
            );
            output.setContent(highlightedOutput);
            screen.render();
        } catch(err) {
            output.setContent(err.stack);
            screen.render();
        }

    });

    screen.on('keypress', () => process.nextTick(tick));
    setTimeout(tick, 20);

    editor.language('js');

    if(pipeline.length > 1) {
        editor.textBuf.setText(pipeline.slice(1).join(',\n'));
    }

    screen.render();
}