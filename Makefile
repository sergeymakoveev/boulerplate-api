SHELL = /bin/bash
.PHONY: start mock-server

PORT="8080"

start: mock-server

mock-server:
	@json-server --port ${PORT} --watch server.db.js --routes server.routes.json
