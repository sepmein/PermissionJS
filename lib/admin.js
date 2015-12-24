/**
 * Created by Spencer on 15/12/23.
 */
/**
 * Permission Administrator */
const Permission = require('./index');
class PermissionAdmin {
    constructor(collection) {
        this.collection = collection;
    }

    /**
     * store permission into database
     * @method store
     * @param {Permission} permission
     * */
    async store(permission) {
        if (!(permission instanceof Permission)) {
            throw new Error('[app]PermissionAdmin # store - could only store instance of Permission Class');
        }
        let findResults = await collection.find(Permission).toArrary();
        let isRepeat = findResults.length;
        if (isRepeat) {
            throw new Error('[user]PermissionAdmin # store - could not store two same permission');
        }
        let saveResult = await collection.save(Permission);
        let isSaved = saveResult.result.ok();
        if (isSaved) {
            return true;
        } else {
            throw new Error('[app]PermissionAdmin # store - could not store');
        }
    }

    check() {

    }

    find() {

    }

    modify() {

    }

    remote() {

    }
}

module.exports = PermissionAdmin;