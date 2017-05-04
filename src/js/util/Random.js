/**
 * The MIT License (MIT)
 *
 * Igor Zinken 2017 - http://www.igorski.nl
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
"use strict";

/**
 * convenience helper for all things associated
 * with chance and randomizing values :)
 */
const Random = module.exports = {

    /**
     * random value from given range
     * @param {number} min
     * @param {number} max
     * @return {number}
     */
    range( min, max ) {
        return Math.floor( Math.random() * ( max - min + 1 )) + min;
    },

    /**
     * random value from given Array
     * @param {Array.<*>} array
     * @return {*}
     */
    from( array ) {
        return array[ Random.range( 0, array.length  -1 )];
    },

    /**
     * random boolean true/false
     * @return {boolean}
     */
    bool() {
        return Math.random() > .5;
    }
};
