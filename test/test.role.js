/**
 * Created by Spencer on 15/12/22.
 */
'use strict';
const expect = require('chai').expect;

describe('role', function () {
    const Role = require('../lib/role');
    beforeEach(function () {

    });
    describe('instantiate', function () {
        it('should be able to instantiate in instance', function () {
            let role = new Role();
            expect(role).to.be.instanceof(Role);
        });
    });
});