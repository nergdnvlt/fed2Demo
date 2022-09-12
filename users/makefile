publish:
	APOLLO_KEY= \
  		rover subgraph publish fed2Demo@current \
  		--name users --schema ./users.graphql \
  		--routing-url http://localhost:4002

check:
	APOLLO_KEY= \
  		rover subgraph check fed2Demo@current \
  		--schema=users.graphql \
		--name=users --validation-period=2w\
