/**
 * Created by Spencer on 15/12/22.
 */
'use strict';
const expect = require('chai').expect;

describe('permission', function () {
    let P = require('../lib/permission');
    describe('set permission', function () {
        it('should be able to set an Integer as permission', function () {
            let p = new P();
            p.permission = 15;
            expect(p.permission).to.have.length(4);
        });
        it('should be able to set an Array as permission', function () {
            let p = new P();
            p.permission = ['create'];
            expect(p.permission).to.have.length(1);
        });
    });
});