'use strict';

const luminus = require('../luminus').default;
const Fuse = require('fuse-native');

class LumiNFS {
	protected readonly client = new luminus();
	protected fuse;
	readonly ops = {
		readdir: (path: string, cb: Function) => {
			const uuid = this.client.pathToUuid(path);
			let list = this.client.getChildrenByUuid(uuid).data.map((p: any) => p.name);
        	cb(0, list);
		}
	};
	async login(username: string, password: string) {
		await this.client.login(username, password).then(() => console.log("Login complete."));
	}
	mount() {
		this.fuse.mount();
	}

	constructor(mnt: string, opts={ debug: true, force: true, mkdir: true }) {
		this.fuse = new Fuse(mnt, this.ops, opts);
	}
}
export default LumiNFS;
