import butLast from 'unmutable/lib/butLast';
import chunkBy from 'unmutable/lib/chunkBy';
import chunk from 'unmutable/lib/chunk';
import clear from 'unmutable/lib/clear';
import clone from 'unmutable/lib/clone';
import concat from 'unmutable/lib/concat';
import count from 'unmutable/lib/count';
import deal from 'unmutable/lib/deal';
import defaults from 'unmutable/lib/defaults';
import deleteAll from 'unmutable/lib/deleteAll';
import deleteIn from 'unmutable/lib/deleteIn';
import doIf from 'unmutable/lib/doIf';
import entries from 'unmutable/lib/entries';
import entriesReverse from 'unmutable/lib/entriesReverse';
import entryArray from 'unmutable/lib/entryArray';
import equals from 'unmutable/lib/equals';
import every from 'unmutable/lib/every';
import filter from 'unmutable/lib/filter';
import filterNot from 'unmutable/lib/filterNot';
import findEntry from 'unmutable/lib/findEntry';
import findIndex from 'unmutable/lib/findIndex';
import find from 'unmutable/lib/find';
import findKey from 'unmutable/lib/findKey';
import findLastEntry from 'unmutable/lib/findLastEntry';
import findLastIndex from 'unmutable/lib/findLastIndex';
import findLast from 'unmutable/lib/findLast';
import findLastKey from 'unmutable/lib/findLastKey';
import first from 'unmutable/lib/first';
import flatMap from 'unmutable/lib/flatMap';
import flatten from 'unmutable/lib/flatten';
import forEach from 'unmutable/lib/forEach';
import getIn from 'unmutable/lib/getIn';
import get from 'unmutable/lib/get';
import groupBy from 'unmutable/lib/groupBy';
import hashCode from 'unmutable/lib/hashCode';
import hasIn from 'unmutable/lib/hasIn';
import has from 'unmutable/lib/has';
import identity from 'unmutable/lib/identity';
import includes from 'unmutable/lib/includes';
import indexOf from 'unmutable/lib/indexOf';
import insert from 'unmutable/lib/insert';
import interpose from 'unmutable/lib/interpose';
import isEmpty from 'unmutable/lib/isEmpty';
import isNotEmpty from 'unmutable/lib/isNotEmpty';
import join from 'unmutable/lib/join';
import keyArray from 'unmutable/lib/keyArray';
import keyBy from 'unmutable/lib/keyBy';
import keyOf from 'unmutable/lib/keyOf';
import keys from 'unmutable/lib/keys';
import lastIndexOf from 'unmutable/lib/lastIndexOf';
import last from 'unmutable/lib/last';
import lastKeyOf from 'unmutable/lib/lastKeyOf';
import log from 'unmutable/lib/log';
import map from 'unmutable/lib/map';
import maxBy from 'unmutable/lib/maxBy';
import max from 'unmutable/lib/max';
import mergeDeepIn from 'unmutable/lib/mergeDeepIn';
import mergeDeep from 'unmutable/lib/mergeDeep';
import mergeDeepWith from 'unmutable/lib/mergeDeepWith';
import mergeIn from 'unmutable/lib/mergeIn';
import merge from 'unmutable/lib/merge';
import mergeWith from 'unmutable/lib/mergeWith';
import minBy from 'unmutable/lib/minBy';
import min from 'unmutable/lib/min';
import move from 'unmutable/lib/move';
import notEquals from 'unmutable/lib/notEquals';
import omit from 'unmutable/lib/omit';
import pick from 'unmutable/lib/pick';
import pivot from 'unmutable/lib/pivot';
import pop from 'unmutable/lib/pop';
import push from 'unmutable/lib/push';
import reduce from 'unmutable/lib/reduce';
import reduceRight from 'unmutable/lib/reduceRight';
import rename from 'unmutable/lib/rename';
import rest from 'unmutable/lib/rest';
import reverse from 'unmutable/lib/reverse';
import rotate from 'unmutable/lib/rotate';
import setIn from 'unmutable/lib/setIn';
import set from 'unmutable/lib/set';
import setSize from 'unmutable/lib/setSize';
import shallowEquals from 'unmutable/lib/shallowEquals';
import shallowToJS from 'unmutable/lib/shallowToJS';
import shift from 'unmutable/lib/shift';
import size from 'unmutable/lib/size';
import skip from 'unmutable/lib/skip';
import skipLast from 'unmutable/lib/skipLast';
import skipUntil from 'unmutable/lib/skipUntil';
import skipWhile from 'unmutable/lib/skipWhile';
import slice from 'unmutable/lib/slice';
import some from 'unmutable/lib/some';
import sortBy from 'unmutable/lib/sortBy';
import sort from 'unmutable/lib/sort';
import splice from 'unmutable/lib/splice';
import strictEquals from 'unmutable/lib/strictEquals';
import swap from 'unmutable/lib/swap';
import take from 'unmutable/lib/take';
import takeLast from 'unmutable/lib/takeLast';
import takeUntil from 'unmutable/lib/takeUntil';
import takeWhile from 'unmutable/lib/takeWhile';
import toArray from 'unmutable/lib/toArray';
import toIndexed from 'unmutable/lib/toIndexed';
import toJS from 'unmutable/lib/toJS';
import toJSON from 'unmutable/lib/toJSON';
import toKeyed from 'unmutable/lib/toKeyed';
import toObject from 'unmutable/lib/toObject';
import uniqueBy from 'unmutable/lib/uniqueBy';
import unique from 'unmutable/lib/unique';
import unit from 'unmutable/lib/unit';
import unshift from 'unmutable/lib/unshift';
import updateIn from 'unmutable/lib/updateIn';
import updateInto from 'unmutable/lib/updateInto';
import update from 'unmutable/lib/update';
import valueArray from 'unmutable/lib/valueArray';
import values from 'unmutable/lib/values';
import zipAll from 'unmutable/lib/zipAll';
import zip from 'unmutable/lib/zip';
import zipWith from 'unmutable/lib/zipWith';
import compose from 'unmutable/lib/util/compose';
import composeWith from 'unmutable/lib/util/composeWith';
import isAssociative from 'unmutable/lib/util/isAssociative';
import isCollection from 'unmutable/lib/util/isCollection';
import isImmutable from 'unmutable/lib/util/isImmutable';
import isIndexed from 'unmutable/lib/util/isIndexed';
import isKeyed from 'unmutable/lib/util/isKeyed';
import isObject from 'unmutable/lib/util/isObject';
import isOrdered from 'unmutable/lib/util/isOrdered';
import isPlainObject from 'unmutable/lib/util/isPlainObject';
import isRecord from 'unmutable/lib/util/isRecord';
import isValueObject from 'unmutable/lib/util/isValueObject';
import isWriteable from 'unmutable/lib/util/isWriteable';
import method from 'unmutable/lib/util/method';
import overload from 'unmutable/lib/util/overload';
import pipeIf from 'unmutable/lib/util/pipeIf';
import pipe from 'unmutable/lib/util/pipe';
import pipeWith from 'unmutable/lib/util/pipeWith';
import range from 'unmutable/lib/util/range';
import recordAsObject from 'unmutable/lib/util/recordAsObject';
import vm from 'vm';
import util from 'util';

const args = process.argv;
const [,, processor] = args;

process.stdin.setEncoding('utf8');

let rawData = '';

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        rawData += chunk;
    }
});

process.stdin.on('end', () => {
    const data = JSON.parse(rawData);

    const sandbox = {
        butLast,
        chunkBy,
        chunk,
        clear,
        clone,
        concat,
        count,
        deal,
        defaults,
        deleteAll,
        deleteIn,
        doIf,
        entries,
        entriesReverse,
        entryArray,
        equals,
        every,
        filter,
        filterNot,
        findEntry,
        findIndex,
        find,
        findKey,
        findLastEntry,
        findLastIndex,
        findLast,
        findLastKey,
        first,
        flatMap,
        flatten,
        forEach,
        getIn,
        get,
        groupBy,
        hashCode,
        hasIn,
        has,
        identity,
        includes,
        indexOf,
        insert,
        interpose,
        isEmpty,
        isNotEmpty,
        join,
        keyArray,
        keyBy,
        keyOf,
        keys,
        lastIndexOf,
        last,
        lastKeyOf,
        log,
        map,
        maxBy,
        max,
        mergeDeepIn,
        mergeDeep,
        mergeDeepWith,
        mergeIn,
        merge,
        mergeWith,
        minBy,
        min,
        move,
        notEquals,
        omit,
        pick,
        pivot,
        pop,
        push,
        reduce,
        reduceRight,
        rename,
        rest,
        reverse,
        rotate,
        setIn,
        set,
        setSize,
        shallowEquals,
        shallowToJS,
        shift,
        size,
        skip,
        skipLast,
        skipUntil,
        skipWhile,
        slice,
        some,
        sortBy,
        sort,
        splice,
        strictEquals,
        swap,
        take,
        takeLast,
        takeUntil,
        takeWhile,
        toArray,
        toIndexed,
        toJS,
        toJSON,
        toKeyed,
        toObject,
        uniqueBy,
        unique,
        unit,
        unshift,
        updateIn,
        updateInto,
        update,
        valueArray,
        values,
        zipAll,
        zip,
        zipWith,
        compose,
        composeWith,
        isAssociative,
        isCollection,
        isImmutable,
        isIndexed,
        isKeyed,
        isObject,
        isOrdered,
        isPlainObject,
        isRecord,
        isValueObject,
        isWriteable,
        method,
        overload,
        pipeIf,
        pipe,
        pipeWith,
        range,
        recordAsObject,
        data,
        __result: null
    };

    vm.createContext(sandbox);
    const code = `
        __result = pipeWith(
            data,
            ${processor}
        );
    `;


    vm.runInContext(code, sandbox);

    console.log(sandbox.__result);


});