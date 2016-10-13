'use babel';

import Provider from './provider.js';
import Malou from './malou.js';

export default {
    provide() {
        const Provider = require('./provider');
        this.malou = new Malou;
        this.provider = new Provider(this.malou);
        return this.provider;
    }
};
