/**
 * Created by Spencer on 15/12/22.
 */
'use strict';
/**
 * Roles: Specific User / Group / Anonymous
 * */
class Role {
    constructor() {
        this.types = ['user', 'group', 'regexp', 'anonymous'];
    }
}

module.exports = Role;