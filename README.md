formula.js
==========

[![Build Status](https://drone.io/github.com/sutoiku/formula.js/status.png)](https://drone.io/github.com/sutoiku/formula.js/latest)

JavaScript implementation of most Microsoft Excel formula functions

USAGE
-----

## Node context

Install the library:

    npm install formulajs

And import it the usual way into your application:

    formulajs = require('formulajs');

## Browser usage

Formulas depends on the following Open source Javascript libraries: Numeric, NumeralJs and jStats.

Include them as follow to use formula.js in your browser:

    <!-- Numeric -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/numeric/1.2.6/numeric.min.js"></script>
    <!-- Numeral.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/numeral.js/1.4.5/numeral.min.js"></script>
    <!-- jStat -->
    <script src="https://cdn.jsdelivr.net/jstat/latest/jstat.min.js"></script>
    <!-- Mandatory jStat compatibility trick -->
    <script>
        jStat = jStat.jStat
    </script>
    <!-- Finally add formula.js -->
    <script src="local-formula-path/formula.js"></script>


Formulajs is as well available on CDNJS. Grad the last version here: [https://cdnjs.com/libraries/formulajs](https://cdnjs.com/libraries/formulajs)

LICENSE
-------

formula.js is freely distributable under the terms of the MIT license.
Copyright (c) 2014 Sutoiku, Inc.
