const dns = require('dns');

dns.lookup('admin.xiangzongliang.com', (err, address, family) => {
	console.log('IP 地址: %j 地址族: IPv%s', address, family);
});