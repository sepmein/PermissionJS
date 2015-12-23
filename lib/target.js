/**
 * Created by Spencer on 15/12/22.
 */

class Target {
    constructor(opts) {
        this.types = ['collection'];
        this.value = opts.value;
        this.type = opts.type;
    }

    get json() {
        return {
            type: this.type,
            value: this.value
        };
    }
}

module.exports = Target;