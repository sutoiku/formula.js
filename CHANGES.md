0.0.26
------

* Add grunt support from João Jerónimo (joaojeronimo)  
* POWER function with negative base now works from João Jerónimo (joaojeronimo)  
* SUM supports multi-dimensional arrays from João Jerónimo (joaojeronimo)  

0.0.25
------

* Integrate a really old but useful pull request to add database functions (https://github.com/sutoiku/formula.js/pull/9)
* Thanks a heap to Sam Dao (grasscrm) for all the database features
* Cleared all but 1 outstanding issue on github 

0.0.19
------

* Added full match support to REGEXMATCH

0.0.18
------

* Removed CONCAT and INITIALS functions

0.0.17
------

* Added support for FROMNOW

0.0.16
------

* Added support for NUMERAL function

0.0.15
------

* Improved our bower support
* Upgraded some of our dependencies

0.0.14
------

* Added support for MD5 and some test cases

0.0.13
------

* Problem with computing weekdays with NETWORKDAYS #62319048
* Fixed issue wih DATEVALUE #62514386

0.0.12
------

* Added support for the SWITCH function (#60883740)

0.0.11
------

* Add some defensive coding around the LOWER function and add associated test cases

0.0.10
------

* Add pull request to fix DATEVALUE and add some test cases
* Add the begining support for bower package management
* Removed dependency on financial.js as this is now in the expression parser

0.0.9
-----

* Fixed issue with CONCATENATE function (#59947518)

0.0.8
-----

* Added HTML2TEXT and associated test cases
* Added HUMANIZE and associated test cases (#59192844)
* Added JSON2TEXT and associated test cases (#59604642)

0.0.7
-----

* Moved the lodash functions to expression parser
* Moved the callback registration functions to expression parser module

0.0.6
-----

* Fixed the way jStat uses formula's arguments
* Dates returned as string instead of JavaScript Date object

0.0.5
-----

* Replaced sugar with lodash


0.0.4
-----

* Placed a work around for some functions in lodash that do not work well with the expression parser
* Switched across from using underscore to lodash

0.0.3
-----

* Merged in the changes in stoic.io
* Added more test coverage (we're up to about 55%)
* Added support for the financial package (https://github.com/mfreilich/financial.js)
* Did some refactoring to better support running in browser and nodejs
* Upgraded to moment v2.0.0
* Added support for requirejs
* Added support for function
