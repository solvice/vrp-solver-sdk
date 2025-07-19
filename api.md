# Vrp

Types:

- <code><a href="./src/resources/vrp/vrp.ts">ExplanationOptions</a></code>
- <code><a href="./src/resources/vrp/vrp.ts">Job</a></code>
- <code><a href="./src/resources/vrp/vrp.ts">Location</a></code>
- <code><a href="./src/resources/vrp/vrp.ts">Message</a></code>
- <code><a href="./src/resources/vrp/vrp.ts">Options</a></code>
- <code><a href="./src/resources/vrp/vrp.ts">Period</a></code>
- <code><a href="./src/resources/vrp/vrp.ts">Relation</a></code>
- <code><a href="./src/resources/vrp/vrp.ts">RelationType</a></code>
- <code><a href="./src/resources/vrp/vrp.ts">Request</a></code>
- <code><a href="./src/resources/vrp/vrp.ts">Resource</a></code>
- <code><a href="./src/resources/vrp/vrp.ts">Rule</a></code>
- <code><a href="./src/resources/vrp/vrp.ts">Shift</a></code>
- <code><a href="./src/resources/vrp/vrp.ts">Weights</a></code>
- <code><a href="./src/resources/vrp/vrp.ts">Window</a></code>

Methods:

- <code title="get /v2/vrp/demo">client.vrp.<a href="./src/resources/vrp/vrp.ts">demo</a>({ ...params }) -> Request</code>
- <code title="post /v2/vrp/evaluate">client.vrp.<a href="./src/resources/vrp/vrp.ts">evaluate</a>({ ...params }) -> SolviceStatusJob</code>
- <code title="post /v2/vrp/solve">client.vrp.<a href="./src/resources/vrp/vrp.ts">solve</a>({ ...params }) -> SolviceStatusJob</code>
- <code title="post /v2/vrp/suggest">client.vrp.<a href="./src/resources/vrp/vrp.ts">suggest</a>({ ...params }) -> SolviceStatusJob</code>
- <code title="post /v2/vrp/sync/evaluate">client.vrp.<a href="./src/resources/vrp/vrp.ts">syncEvaluate</a>({ ...params }) -> OnRouteResponse</code>
- <code title="post /v2/vrp/sync/solve">client.vrp.<a href="./src/resources/vrp/vrp.ts">syncSolve</a>({ ...params }) -> OnRouteResponse</code>
- <code title="post /v2/vrp/sync/suggest">client.vrp.<a href="./src/resources/vrp/vrp.ts">syncSuggest</a>({ ...params }) -> OnRouteResponse</code>

## Jobs

Types:

- <code><a href="./src/resources/vrp/jobs.ts">OnRouteResponse</a></code>
- <code><a href="./src/resources/vrp/jobs.ts">OnrouteConstraint</a></code>
- <code><a href="./src/resources/vrp/jobs.ts">SolviceStatusJob</a></code>
- <code><a href="./src/resources/vrp/jobs.ts">Unresolved</a></code>
- <code><a href="./src/resources/vrp/jobs.ts">Visit</a></code>
- <code><a href="./src/resources/vrp/jobs.ts">JobExplanationResponse</a></code>

Methods:

- <code title="get /v2/vrp/jobs/{id}">client.vrp.jobs.<a href="./src/resources/vrp/jobs.ts">retrieve</a>(id) -> Request</code>
- <code title="get /v2/vrp/jobs/{id}/explanation">client.vrp.jobs.<a href="./src/resources/vrp/jobs.ts">explanation</a>(id) -> JobExplanationResponse</code>
- <code title="get /v2/vrp/jobs/{id}/solution">client.vrp.jobs.<a href="./src/resources/vrp/jobs.ts">solution</a>(id) -> OnRouteResponse</code>
- <code title="get /v2/vrp/jobs/{id}/status">client.vrp.jobs.<a href="./src/resources/vrp/jobs.ts">status</a>(id) -> SolviceStatusJob</code>
