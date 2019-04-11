deploy:
	git push heroku-api master && \
	git push heroku-client master

deploy-client:
	git push heroku-client master

deploy-api:
	git push heroku-api master