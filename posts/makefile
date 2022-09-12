publish:
	APOLLO_KEY= \
  		rover subgraph publish fed2Demo@current \
  		--name posts --schema ./posts.graphql \
  		--routing-url http://localhost:4001

check:
	APOLLO_KEY= \
  		rover subgraph check fed2Demo@current \
  		--schema=posts.graphql \
		--name=posts --validation-period=2w\