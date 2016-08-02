"use client";
"use mocha";

define(function(require, exports, module) {
    main.consumes = ["plugin.test", "panels50"];
    main.provides = [];
    return main;

    function main(options, imports, register) {
        const test = imports["plugin.test"];
        const panels50 = imports.panels50;

        const describe = test.describe;
        const it = test.it;
        const before = test.before;
        const after = test.after;
        const beforeEach = test.beforeEach;
        const afterEach = test.afterEach;
        const assert = test.assert;
        const expect = test.expect;

        /***** Initialization *****/

        describe("panels50", function(){
            this.timeout(2000);

            beforeEach(function() {
            });

            afterEach(function () {
            });

            it("has a sync test", function() {
            });

            it("has a async test", function(done) {
                done();
            });

            it("has a failing test", function() {
                assert.equal(10, 11);
            });
        });

        register(null, {});
    }
});
