SHELL = /bin/bash
.PHONY: start mock-server

PORT="8888"

start: mock-server

mock-server:
	@json-server --watch server.db.js --routes server.routes.json
