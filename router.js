function router(path) {
	if(path.pathname == '/favicon.ico'){
		return
	}else{
		console.log(path.pathname)
	}
}
exports.router = router