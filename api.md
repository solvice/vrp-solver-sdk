# Vrp

Types:

- <code><a href="./src/resources/vrp/vrp.ts">ExplanationOptions</a></code>
- <code><a href="./src/resources/vrp/vrp.ts">Job</a></code>
- <code><a href="./src/resources/vrp/vrp.ts">Location</a></code>
- <code><a href="./src/resources/vrp/vrp.ts">Message</a></code>
- <code><a href="./src/resources/vrp/vrp.ts">OnRouteRequest</a></code>
- <code><a href="./src/resources/vrp/vrp.ts">Options</a></code>
- <code><a href="./src/resources/vrp/vrp.ts">Resource</a></code>
- <code><a href="./src/resources/vrp/vrp.ts">Shifts</a></code>
- <code><a href="./src/resources/vrp/vrp.ts">SolviceStatusJob</a></code>
- <code><a href="./src/resources/vrp/vrp.ts">Weights</a></code>

Methods:

- <code title="get /v2/vrp/demo">client.vrp.<a href="./src/resources/vrp/vrp.ts">demo</a>({ ...params }) -> OnRouteRequest</code>
- <code title="post /v2/vrp/evaluate">client.vrp.<a href="./src/resources/vrp/vrp.ts">evaluate</a>({ ...params }) -> SolviceStatusJob</code>
- <code title="post /v2/vrp/solve">client.vrp.<a href="./src/resources/vrp/vrp.ts">solve</a>({ ...params }) -> SolviceStatusJob</code>
- <code title="post /v2/vrp/suggest">client.vrp.<a href="./src/resources/vrp/vrp.ts">suggest</a>({ ...params }) -> SolviceStatusJob</code>
- <code title="post /v2/vrp/sync/{operation}">client.vrp.<a href="./src/resources/vrp/vrp.ts">sync</a>(operation, { ...params }) -> OnRouteResponse</code>

## Jobs

Types:

- <code><a href="./src/resources/vrp/jobs.ts">OnRouteResponse</a></code>
- <code><a href="./src/resources/vrp/jobs.ts">OnrouteConstraint</a></code>
- <code><a href="./src/resources/vrp/jobs.ts">Unresolved</a></code>
- <code><a href="./src/resources/vrp/jobs.ts">Visit</a></code>
- <code><a href="./src/resources/vrp/jobs.ts">JobExplanationResponse</a></code>

Methods:

- <code title="get /v2/vrp/jobs/{id}">client.vrp.jobs.<a href="./src/resources/vrp/jobs.ts">retrieve</a>(id) -> OnRouteRequest</code>
- <code title="get /v2/vrp/jobs/{id}/explanation">client.vrp.jobs.<a href="./src/resources/vrp/jobs.ts">explanation</a>(id) -> JobExplanationResponse</code>
- <code title="get /v2/vrp/jobs/{id}/solution">client.vrp.jobs.<a href="./src/resources/vrp/jobs.ts">solution</a>(id) -> OnRouteResponse</code>
- <code title="get /v2/vrp/jobs/{id}/status">client.vrp.jobs.<a href="./src/resources/vrp/jobs.ts">status</a>(id) -> SolviceStatusJob</code>
