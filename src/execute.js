import vm from 'vm';
import unmutableFns from './unmutableFns';

export default function({data, pipeline}) {

    const sandbox = {
        ...unmutableFns,
        __data: data,
        __result: null
    };

    vm.createContext(sandbox);
    const code = `
        __result = pipeWith(
            __data,
            ${pipeline.join(', ')}
        );
    `;

    vm.runInContext(code, sandbox);

    return sandbox.__result;
}