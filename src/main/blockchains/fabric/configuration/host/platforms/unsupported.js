const Platform = require('./platform');
const OS = require('os');

class Linux extends Platform {
    constructor() {
        super('unsupported');
    }

    getVirtualBoxSharedFolder() {
        throw new Error(`Cannot get virtual-box shared folder for unsupported platform: ${OS.platform()}`);
    }

    name() {
        throw new Error(`Cannot get name for unsupported platform: ${OS.platform()}`);
    }

    isHostArchitectureSupported() {
        throw new Error(`Unsupported platform has no supported architectures: ${OS.platform()}`);
    }
}

module.exports = Linux;