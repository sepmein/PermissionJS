/**
 * Created by Spencer on 15/12/22.
 */
'use strict';
const types = ['db', 'collection', 'query'];
class Target {
    constructor(opts) {
        this.checkType(opts.type);
        this.checkValue(opts.value);
    }

    checkType(optsType) {
        for (let type of types) {
            if (optsType === type) {
                this.type = type;
            }
        }
        if (!this.type) {
            throw new Error('PermissionJS # new Target - type of target should be one of db, collection or query');
        }
    }

    checkValue(optsValue) {
        if (this.type === 'db' || this.type === 'collection') {
            if (String.isString(optsValue)) {
                this.value = optsValue;
            } else {
                throw new Error('PermissionJS # new Target - if target\'s type is db or collections, value of it should be a string');
            }
        } else {
            //TODO 考虑下如何构造查询语句,要根据实际的需求构造
            this.value = {
                collection: optsValue.collection,
                query: optsValue.query
            };
        }
    }

    get json() {
        return {
            type: this.type,
            value: this.value
        };
    }
}

module.exports = Target;