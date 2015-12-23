/**
 * Created by Spencer on 15/12/22.
 */
'use strict';
/**
 * set permission code
 * */
class Permission {
    constructor(n) {
        this.dictionary = {
            '1': 'create',
            '2': 'read',
            '4': 'update',
            '8': 'delete'
        };
        if (n > 0 && n < 16) {
            this.code = n;
        }
        else if (Array.isArray(n)) {
            this.code = this.encodePermission(n);
        } else {
            throw(new Error('permissionJs#setPermission - permission should between 1 - 15 and should be an Integer \n or Permission should be an Array'));
        }
    }

    /**
     * get permission
     * @method get permission
     * @return {array | undefined} permission return an array of permissions, example: ['create','read']. If not set, return undefined instead.
     * */
    get permission() {
        if (this.code > 0 && this.code < 16) {
            return this.decodePermission(this.code);
        } else {
            return undefined;
        }
    }

    /**
     * calculate permission, return an array of permissions by the number
     * */
    decodePermission(n) {
        //console.log('decode permission');
        let lists = [];
        let i = n;
        while (i >= 1) {
            //console.log('while called', i);
            if (i >= 8) {
                lists.unshift(this.dictionary['8']);
                i -= 8;
            } else if (i >= 4) {
                lists.unshift(this.dictionary['4']);
                i -= 4;
            } else if (i >= 2) {
                lists.unshift(this.dictionary['2']);
                i -= 2;
            } else if (i >= 1) {
                lists.unshift(this.dictionary['1']);
                i -= 1;
            }
        }
        return lists;
    }

    /**
     * encode permission
     * */
    encodePermission(lists) {
        let code = 0;
        for (let n of lists) {
            switch (n) {
                case this.dictionary['1']:
                    code += 1;
                    break;
                case this.dictionary['2']:
                    code += 2;
                    break;
                case this.dictionary['4']:
                    code += 4;
                    break;
                case this.dictionary['8']:
                    code += 8;
                    break;
                default:
                    throw (new Error('permissionJs # encodePermission - permission list should be one of create,read,update or delete string'));
            }
        }
        return code;
    }
}

module.exports = Permission;