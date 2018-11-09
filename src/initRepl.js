import blessed from 'blessed';
import Editor from 'editor-widget';
import debounce from 'debounce';
import execute from './execute';

export default function({indent, pipeline, data}) {
    const screen = blessed.screen({terminal: 'xterm-256color', smartCSR: true, title: 'unson', forceUnicode: true});
    screen.key(['escape', 'C-c'], (ch, key) => process.exit(1))
    screen.key(['escape', 'C-q'], (ch, key) => process.exit(0))
    const editor = new Editor({
        parent: screen,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        gutter: {width: 0, hidden: true}
    });

    const tick = debounce(() => {
        //console.log('tick');
    });

    // screen.on('keypress', () => process.nextTick(tick));
    // setTimeout(tick, 20);

    editor.language('js');

    if(pipeline.length > 1) {
        editor.textBuf.setText(pipeline.slice(1).join(',\n'));
    }

    screen.render();
}