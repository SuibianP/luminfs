const luminfs = require('../').default;
let fs = new luminfs("/home/hujialun/test");
it("Trying to login", function () {
	return fs.login("", "");
});
it("Trying to mount", () => fs.mount());
