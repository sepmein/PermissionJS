/**
 * Created by Spencer on 15/12/22.
 */
'use strict';
const types = ['user', 'group', 'regexp', 'anonymous'];
/**
 * Roles: Specific User / Group / Anonymous
 * */
class Role {
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
            throw new Error('PermissionJS # new Role - type of role should be one of user, group, regexp or anonymous');
        }
    }

    checkValue(optsValue) {
        switch (optsValue) {
            case 'anonymous':
                this.value = 0;
                break;
            case 'group':
                if (!String.isString(this.value)) {
                    throw new Error('PermissionJS # new Role - role is group, value should be string');
                }
            case 'user':
                if (!String.isString(this.value)) {
                    throw new Error('PermissionJS # new Role - role is user, value should be string');
                }
            case 'regexp':
                if (!RegExp.isRegExp(this.value)) {
                    throw new Error('PermissionJS # new Role - role is value should be regexp');
                }
        }
    }

    get json() {
        let json = {};
        if (this.type !== 'anonymous') {
            json.type = this.type;
            json.value = this.value;
        } else {
            json.type = this.type;
        }
        return json;
    }
}

module.exports = Role;