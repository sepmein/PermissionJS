/**
 * Created by Spencer on 15/12/22.
 */
require('babel-require');
/**
 * PermissionJs. NodeJs CRUD权限管理.
 * 权限条款数据来源: 通过webApp的http api获得数据
 * 获得后,将条款存入数据库,形式为:
 *  {
 *      role: {
 *          type: user | group | anonymous | regexp
 *          value: {string}
 *      },
 *      target: {
 *          type: collection,
 *          value: {string} value
 *      },
 *      permission: ['create','read']
 *  }
 *
 * */
const Role = require('./role');
const Target = require('./target');
const Restriction = require('./restriction');

class Permission {
    constructor(options) {
        let opts = options || {};
        this.role = new Role(opts.role);
        this.target = new Target(opts.target);
        this.restriction = new Restriction(opts.permission);
    }

    json() {
        return {
            role: this.role.json,
            target: this.target.json,
            permission: this.restriction.code
        };
    }
}
module.exports = Permission;