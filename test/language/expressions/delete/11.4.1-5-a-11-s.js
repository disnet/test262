// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.4.1-5-a-11-s
description: >
    Strict Mode - SyntaxError is thrown when deleting a variable of
    type String
flags: [onlyStrict]
---*/

        var strObj = new String("abc");
assert.throws(SyntaxError, function() {
            eval("delete strObj;");
});
