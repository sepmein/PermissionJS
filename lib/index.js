/**
 * Created by Spencer on 15/12/22.
 */
require('babel-require');
/**
 * PermissionJs. Nodejs CRUD权限管理.
 * 权限条款数据来源: 通过webapp的http api获得数据
 * 获得后,将条款存入数据库,形式为:
 *  {
 *      role: {
 *          type: user | group | anonymous | regexp
 *          value: the string value
 *      },
 *      target: {
 *          type: collection,
 *          value: id
 *      },
 *      permission: {
 *          value: n
 *      }
 *  }
 *
 * */

class Permission {
    constructor() {

    }

    /**
     * Permission Storage
     * */
    store() {

    }

    /**
     *
     * */

}
module.exports = Permission;