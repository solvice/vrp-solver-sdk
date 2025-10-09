// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JobsAPI from './jobs';
import {
  JobExplanationResponse,
  Jobs,
  OnRouteResponse,
  OnrouteConstraint,
  SolviceStatusJob,
  Unresolved,
  Visit,
} from './jobs';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Vrp extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);

  /**
   * Demo of random generated VRP instance
   *
   * @example
   * ```ts
   * const request = await client.vrp.demo();
   * ```
   */
  demo(query: VrpDemoParams | null | undefined = {}, options?: RequestOptions): APIPromise<Request> {
    return this._client.get('/v2/vrp/demo', { query, ...options });
  }

  /**
   * Will trigger the evaluation run asynchronously.
   *
   * @example
   * ```ts
   * const solviceStatusJob = await client.vrp.evaluate({
   *   jobs: [{ name: 'Job-1' }],
   *   resources: [
   *     {
   *       name: 'vehicle-1',
   *       shifts: [
   *         {
   *           from: '2023-01-13T08:00:00Z',
   *           to: '2023-01-13T17:00:00Z',
   *         },
   *       ],
   *     },
   *   ],
   * });
   * ```
   */
  evaluate(body: VrpEvaluateParams, options?: RequestOptions): APIPromise<JobsAPI.SolviceStatusJob> {
    return this._client.post('/v2/vrp/evaluate', { body, ...options });
  }

  /**
   * Will trigger the solver run asynchronously.
   *
   * @example
   * ```ts
   * const solviceStatusJob = await client.vrp.solve({
   *   jobs: [{ name: 'Job-1' }],
   *   resources: [
   *     {
   *       name: 'vehicle-1',
   *       shifts: [
   *         {
   *           from: '2023-01-13T08:00:00Z',
   *           to: '2023-01-13T17:00:00Z',
   *         },
   *       ],
   *     },
   *   ],
   * });
   * ```
   */
  solve(params: VrpSolveParams, options?: RequestOptions): APIPromise<JobsAPI.SolviceStatusJob> {
    const { millis, instance, ...body } = params;
    return this._client.post('/v2/vrp/solve', {
      query: { millis },
      body,
      ...options,
      headers: buildHeaders([
        { ...(instance != null ? { instance: instance } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Will return the suggest moves for an unassigned job.
   *
   * @example
   * ```ts
   * const solviceStatusJob = await client.vrp.suggest({
   *   jobs: [{ name: 'Job-1' }],
   *   resources: [
   *     {
   *       name: 'vehicle-1',
   *       shifts: [
   *         {
   *           from: '2023-01-13T08:00:00Z',
   *           to: '2023-01-13T17:00:00Z',
   *         },
   *       ],
   *     },
   *   ],
   * });
   * ```
   */
  suggest(params: VrpSuggestParams, options?: RequestOptions): APIPromise<JobsAPI.SolviceStatusJob> {
    const { millis, ...body } = params;
    return this._client.post('/v2/vrp/suggest', { query: { millis }, body, ...options });
  }

  /**
   * Synchronous evaluate operation for low latency results
   *
   * @example
   * ```ts
   * const onRouteResponse = await client.vrp.syncEvaluate({
   *   jobs: [{ name: 'Job-1' }],
   *   resources: [
   *     {
   *       name: 'vehicle-1',
   *       shifts: [
   *         {
   *           from: '2023-01-13T08:00:00Z',
   *           to: '2023-01-13T17:00:00Z',
   *         },
   *       ],
   *     },
   *   ],
   * });
   * ```
   */
  syncEvaluate(body: VrpSyncEvaluateParams, options?: RequestOptions): APIPromise<JobsAPI.OnRouteResponse> {
    return this._client.post('/v2/vrp/sync/evaluate', { body, ...options });
  }

  /**
   * Synchronous solve operation for low latency results
   *
   * @example
   * ```ts
   * const onRouteResponse = await client.vrp.syncSolve({
   *   jobs: [{ name: 'Job-1' }],
   *   resources: [
   *     {
   *       name: 'vehicle-1',
   *       shifts: [
   *         {
   *           from: '2023-01-13T08:00:00Z',
   *           to: '2023-01-13T17:00:00Z',
   *         },
   *       ],
   *     },
   *   ],
   * });
   * ```
   */
  syncSolve(params: VrpSyncSolveParams, options?: RequestOptions): APIPromise<JobsAPI.OnRouteResponse> {
    const { millis, ...body } = params;
    return this._client.post('/v2/vrp/sync/solve', { query: { millis }, body, ...options });
  }

  /**
   * Synchronous suggest operation for low latency results
   *
   * @example
   * ```ts
   * const onRouteResponse = await client.vrp.syncSuggest({
   *   jobs: [{ name: 'Job-1' }],
   *   resources: [
   *     {
   *       name: 'vehicle-1',
   *       shifts: [
   *         {
   *           from: '2023-01-13T08:00:00Z',
   *           to: '2023-01-13T17:00:00Z',
   *         },
   *       ],
   *     },
   *   ],
   * });
   * ```
   */
  syncSuggest(params: VrpSyncSuggestParams, options?: RequestOptions): APIPromise<JobsAPI.OnRouteResponse> {
    const { millis, ...body } = params;
    return this._client.post('/v2/vrp/sync/suggest', { query: { millis }, body, ...options });
  }
}

/**
 * Options to manage the explanation of the solution
 */
export interface ExplanationOptions {
  /**
   * When enabled the explanation will contain a map of all the alternative positions
   * for each job
   */
  enabled?: boolean | null;

  /**
   * When true the map of alternative positions will contain only feasible
   * alternatives
   */
  filterHardConstraints?: boolean | null;

  onlyUnassigned?: boolean | null;
}

/**
 * A job to be performed by a resource.
 */
export interface Job {
  /**
   * Unique description
   */
  name: string;

  /**
   * @deprecated List of vehicle names that are allowed to be assigned to this order.
   */
  allowedResources?: Array<string> | null;

  /**
   * Complexity of the job
   */
  complexity?: number | null;

  /**
   * List of vehicle names that are allowed to be assigned to this order.
   */
  disallowedResources?: Array<string> | null;

  /**
   * Service duration of the job
   */
  duration?: number | null;

  /**
   * Reduced service duration when this job is performed at the same location
   * immediately after another job. This optimization recognizes that setup time,
   * travel within a building, or equipment preparation may be shared between
   * consecutive jobs at the same location. For example, if duration=600 and
   * durationSquash=30, the second job at the same location takes only 30 seconds
   * instead of 600.
   */
  durationSquash?: number | null;

  /**
   * In the case of partialPlanning planning, this indicates whether this order
   * should be integrated into the planning or not.
   */
  hard?: boolean | null;

  /**
   * In the case of partialPlanning planning, this indicates the weight of this
   * order.
   */
  hardWeight?: number | null;

  /**
   * Warm start for the arrival time. Use this to speed up the solver and to start
   * from an initial solution.
   */
  initialArrival?: string | null;

  /**
   * Warm start for the assigned resource: name of the vehicle to which this job is
   * planned. Use this to speed up the solver and to start from an initial solution.
   */
  initialResource?: string | null;

  /**
   * List of job types that this job represents. Used to enforce job type limitations
   * per resource per timeframe.
   */
  jobTypes?: Array<string> | null;

  /**
   * Load
   */
  load?: Array<number> | null;

  /**
   * Geographical Location in WGS-84
   */
  location?: Location | null;

  /**
   * Padding time before and after the job. In seconds
   */
  padding?: number | null;

  /**
   * Fixed arrival time for this job that creates a soft constraint during
   * optimization. The solver will try to schedule the job as close as possible to
   * this time, with deviations penalized in the score according to the
   * plannedWeight. This allows for customer appointment times or preferred
   * scheduling while maintaining optimization flexibility.
   */
  plannedArrival?: string | null;

  /**
   * Fixed date assignment for this job that must be respected during optimization.
   * When specified, the job can only be scheduled on this specific date, creating a
   * hard constraint that the solver must honor. Useful for jobs that are already
   * committed to customers or have date-specific requirements.
   */
  plannedDate?: string | null;

  /**
   * Fixed resource assignment for this job that must be respected during
   * optimization. When specified, only the named resource can be assigned to this
   * job, creating a hard constraint. Combined with plannedArrival, this allows for
   * pre-committed assignments that the solver must work around when optimizing other
   * jobs.
   */
  plannedResource?: string | null;

  /**
   * Priority level that influences job selection during optimization. Higher
   * priority jobs are more likely to be included in the final solution when not all
   * jobs can be assigned due to resource or time constraints. The priority is
   * multiplied by job duration to calculate the selection weight. Particularly
   * important when partialPlanning is enabled. Default value is 1.
   */
  priority?: number | null;

  /**
   * List of resource preference rankings for this job. Each ranking specifies a
   * resource name and a preference score (1-100), where lower values indicate
   * stronger preference. This allows jobs to have preferred resources while still
   * allowing assignment to other resources if needed, with the preference reflected
   * in the optimization score.
   */
  rankings?: Array<Job.Ranking> | null;

  /**
   * Enables job interruption by resource unavailability breaks. When true, the job
   * can start before a break, pause during the break, and resume afterward. Default:
   * false.
   */
  resumable?: boolean | null;

  /**
   * List of skill or capability tags that define resource requirements for this job.
   * Tags create hard or soft constraints linking jobs to resources with matching
   * capabilities. For example, a 'plumbing' tag ensures only resources with plumbing
   * skills can be assigned to plumbing jobs.
   */
  tags?: Array<Job.Tag> | null;

  /**
   * Urgency level that influences the scheduling order of jobs. Higher urgency jobs
   * are preferentially scheduled earlier in the day and earlier in the planning
   * period, helping ensure time-critical tasks are completed first. This affects the
   * sequence of job execution rather than job selection.
   */
  urgency?: number | null;

  /**
   * List of time windows during which this job can be started or executed. Each
   * window defines a start and end time, creating temporal constraints for job
   * scheduling. Multiple windows allow for flexible scheduling across different time
   * periods. Jobs can only be assigned within these time boundaries.
   */
  windows?: Array<Window> | null;
}

export namespace Job {
  /**
   * A ranking is a measure of the affinity of a `Resource` towards a `Job`.
   */
  export interface Ranking {
    /**
     * Name of the resource being ranked for this job. Must exactly match a resource
     * name defined in the request's resources list. This creates a preference
     * relationship between the job and the specified resource.
     */
    name: string;

    /**
     * Preference ranking score for this resource (1-100). Lower values indicate
     * stronger preference - rank 1 is most preferred, rank 100 is least preferred. The
     * solver will try to assign jobs to higher-ranked (lower-numbered) resources when
     * possible, with the preference strength controlled by the rankingWeight in the
     * weights configuration.
     */
    ranking?: number | null;
  }

  /**
   * A tag is a match between a `Job` and a `Resource`.
   */
  export interface Tag {
    /**
     * Tag name that defines a skill, capability, or requirement. This creates a
     * matching constraint between jobs and resources - only resources with this tag
     * can be assigned to jobs that require it. Common examples include 'plumbing',
     * 'electrical', 'certified-technician', or 'heavy-lifting'.
     */
    name: string;

    /**
     * Constraint type for this tag requirement. When true (default), creates a hard
     * constraint - jobs can only be assigned to resources with matching tags. When
     * false, creates a soft constraint - jobs prefer resources with matching tags but
     * can be assigned to others if needed, with a score penalty.
     */
    hard?: boolean | null;

    /**
     * Penalty weight applied when this tag constraint is violated (soft constraints
     * only). The weight is measured in the same units as travel time - a weight of
     * 3600 means violating this tag constraint is equivalent to 1 hour of additional
     * travel time. Higher weights make the constraint more important.
     */
    weight?: number | null;
  }
}

/**
 * Geographical Location in WGS-84
 */
export interface Location {
  /**
   * Latitude
   */
  latitude?: number;

  /**
   * Longitude
   */
  longitude?: number;
}

/**
 * Error or warning message
 */
export interface Message {
  /**
   * Error message
   */
  message: string;

  /**
   * Error code
   */
  code?: number;
}

/**
 * Options to tweak the routing engine
 */
export interface Options {
  /**
   * Clustering threshold in meters defining the buffer zone around each route's
   * bounding box. Routes whose expanded bounding boxes (including buffer) overlap
   * will be penalized based on their actual overlap area. This threshold acts as a
   * proximity trigger - routes should ideally stay at least this distance apart.
   * Default: 10000 meters (10km).
   */
  clusteringThresholdMeters?: number;

  /**
   * Enable geographic clustering constraint to discourage route overlap. When
   * enabled, routes are penalized if their bounding boxes overlap, encouraging
   * visually distinct geographic territories for each route. This is a soft
   * constraint that promotes clearer route separation without strictly enforcing
   * non-overlapping regions. Default: false.
   */
  enableClustering?: boolean;

  /**
   * Use euclidean distance calculations for travel time and distance instead of real
   * road networks. When true, straight-line distances are used which is faster but
   * less accurate. When false (default), routing engines like OSM, TomTom, or Google
   * provide real road distances and travel times.
   */
  euclidian?: boolean | null;

  /**
   * Options to manage the explanation of the solution
   */
  explanation?: ExplanationOptions | null;

  fairComplexityPerResource?: boolean | null;

  fairComplexityPerTrip?: boolean | null;

  /**
   * Enable workload balancing across different days for each individual resource.
   * When true, the solver ensures that each resource's workload is distributed
   * evenly across their available days, preventing some days from being overloaded
   * while others are underutilized. Works in conjunction with
   * `Weights.workloadSpreadWeight` and `options.workloadSensitivity`.
   */
  fairWorkloadPerResource?: boolean | null;

  /**
   * Enable workload balancing across all resources and all days/trips. When true,
   * the solver attempts to distribute service time evenly across all resources and
   * time periods, preventing overloading of specific resources or days. The
   * effectiveness is controlled by `Weights.workloadSpreadWeight` and
   * `options.workloadSensitivity`.
   */
  fairWorkloadPerTrip?: boolean | null;

  /**
   * The type of distance calculation to use for job proximity calculations
   */
  jobProximityDistanceType?: 'REAL' | 'HAVERSINE' | null;

  /**
   * Proximity radius in meters for grouping jobs as neighbors. Jobs within this
   * distance of each other are considered neighbors for proximity-based constraints
   * and optimizations. When set, the solver can leverage geographic proximity
   * patterns to optimize routing decisions.
   */
  jobProximityRadius?: number | null;

  /**
   * Maximum number of alternative assignment suggestions to return when using the
   * suggestion endpoint. The solver generates multiple assignment options for
   * unassigned jobs, ranked by quality. A value of 0 (default) returns all possible
   * suggestions, while values 1-5 limit the results to the best alternatives. Higher
   * values increase response time but provide more options.
   */
  maxSuggestions?: number | null;

  /**
   * Primary optimization objective. When true, the solver prioritizes using fewer
   * resources (vehicles/drivers) even if it increases total travel time. When false,
   * the solver prioritizes minimizing total travel time even if it requires more
   * resources. This fundamentally changes the optimization strategy.
   */
  minimizeResources?: boolean | null;

  /**
   * Filter suggestions based on feasibility. When true (default), only suggestions
   * that don't violate hard constraints are returned if the initial plan is
   * feasible. If the initial plan is infeasible, only suggestions that don't worsen
   * the infeasibility are returned. When false, all suggestions are returned
   * regardless of feasibility, which may include constraint violations.
   */
  onlyFeasibleSuggestions?: boolean | null;

  /**
   * Allow the solver to create solutions where not all jobs are assigned to
   * resources. When true (default), the solver will assign as many jobs as possible
   * while respecting constraints. When false, the solver will only accept solutions
   * where all jobs are assigned, which may result in infeasible solutions.
   */
  partialPlanning?: boolean | null;

  /**
   * Generate detailed route polylines (encoded route geometries) for each trip
   * segment. When true, the response includes polyline data that can be used to draw
   * routes on maps. This increases processing time and response size but provides
   * visual route information for mapping applications.
   */
  polylines?: boolean | null;

  /**
   * The routing engine to use for distance and travel time calculations
   */
  routingEngine?: 'OSM' | 'TOMTOM' | 'GOOGLE' | 'ANYMAP' | null;

  /**
   * Time granularity in seconds for arrival time snapping. All calculated arrival
   * times are rounded up to the nearest multiple of this value. For example, with
   * snapUnit=300 (5 minutes), an arrival time of 08:32 becomes 08:35. This helps
   * create more practical schedules by avoiding precise timings that are difficult
   * to follow in real operations. The snapping affects score calculation during
   * optimization.
   */
  snapUnit?: number | null;

  /**
   * Global traffic multiplier applied to all travel times. A value of 1.1 increases
   * travel times by 10% to account for traffic congestion. For real-time traffic
   * data, use TomTom or Google routing engines. This is a simple approximation for
   * scenarios where precise traffic data is unavailable.
   */
  traffic?: number | null;

  workloadSensitivity?: number | null;
}

/**
 * Subset of the planning period
 */
export interface Period {
  /**
   * End date-time
   */
  end: unknown;

  /**
   * Start date-time
   */
  from: string;

  to: string;
}

/**
 * Relation between two jobs.
 */
export interface Relation {
  /**
   * List of job names involved in this relation. For sequence-based relations, the
   * order matters - jobs will be executed in the order specified. For other
   * relations, order may be irrelevant. All job names must exist in the request's
   * jobs list.
   */
  jobs: Array<string>;

  /**
   * Reference point for measuring time intervals between jobs in sequence relations.
   * FROM_ARRIVAL (default) measures from when the first job's service begins to when
   * the second job's service begins. FROM_DEPARTURE measures from when the first
   * job's service ends to when the second job's service begins.
   */
  timeInterval: 'FROM_ARRIVAL' | 'FROM_DEPARTURE';

  /**
   * Type of relationship constraint between jobs. SAME_TRIP: jobs must be on the
   * same vehicle/day. SEQUENCE: jobs must be done in order with optional time
   * intervals. DIRECT_SEQUENCE: jobs must be consecutive with no other jobs between
   * them. NEIGHBOR: jobs must be geographically close. SAME_TIME: jobs must be done
   * simultaneously. PICKUP_AND_DELIVERY: first job is pickup, second is delivery.
   * SAME_RESOURCE: jobs must use the same resource. SAME_DAY: jobs must be on the
   * same day. GROUP_SEQUENCE: jobs with matching tags must be in sequence.
   */
  type: RelationType;

  /**
   * When true, enforces resource compatibility checking for SAME_TIME relations.
   * Only compatible resources can work together on linked jobs.
   */
  enforceCompatibility?: boolean;

  /**
   * When true (default), the minimum time interval constraint is enforced as a hard
   * constraint. When false, it becomes a soft constraint that can be violated with
   * penalty. Useful for SEQUENCE and SAME_TIME relations where timing flexibility is
   * acceptable.
   */
  hardMinWait?: boolean;

  /**
   * Maximum time interval in seconds allowed between consecutive jobs in sequence
   * relations. This prevents excessive delays between related jobs and ensures
   * timely completion of job sequences. Only applies to SEQUENCE, DIRECT_SEQUENCE,
   * and SAME_TIME relations.
   */
  maxTimeInterval?: number | null;

  /**
   * Maximum waiting time in seconds between jobs in a SAME_TIME relation. This
   * defines how much time synchronization tolerance is allowed - jobs can start
   * within this time window of each other. Defaults to 1200 seconds (20 minutes) if
   * not specified.
   */
  maxWaitingTime?: number | null;

  /**
   * Minimum time interval in seconds that must pass between consecutive jobs in
   * sequence relations. This ensures adequate time for travel, setup, or processing
   * between related jobs. Only applies to SEQUENCE, DIRECT_SEQUENCE, and SAME_TIME
   * relations.
   */
  minTimeInterval?: number | null;

  /**
   * Allows the solver to include only some jobs from this relation in the final
   * solution when the full relation cannot be satisfied due to constraints. When
   * false, either all jobs in the relation are assigned or none are, maintaining the
   * relation's integrity.
   */
  partialPlanning?: boolean;

  /**
   * Optional resource constraint for this relation. When specified, all jobs in the
   * relation must be assigned to this specific resource. This creates a hard
   * constraint that can help enforce resource-specific workflows or capabilities.
   */
  resource?: string | null;

  /**
   * List of tag names used to define job groups in GROUP_SEQUENCE relations. Jobs
   * with matching tags form groups that must be executed in sequence. This allows
   * for complex sequencing rules based on job characteristics rather than explicit
   * job names.
   */
  tags?: Array<string> | null;

  /**
   * Weight modifier for this relation. This can be used to modify the weight of a
   * relation to make it more or less important than other relations.
   */
  weight?: number | null;
}

/**
 * Type of relation between jobs
 */
export type RelationType =
  | 'SAME_TRIP'
  | 'SEQUENCE'
  | 'DIRECT_SEQUENCE'
  | 'SAME_TIME'
  | 'NEIGHBOR'
  | 'PICKUP_AND_DELIVERY'
  | 'SAME_RESOURCE'
  | 'SAME_DAY'
  | 'GROUP_SEQUENCE';

/**
 * OnRoute Request for solving, evaluating
 */
export interface Request {
  /**
   * List of jobs/tasks to be assigned to resources. Each job specifies service
   * requirements, location, time constraints, duration, and resource preferences.
   * Jobs represent the work that needs to be scheduled and optimized. At least one
   * job is required, with a maximum of 10,000 jobs per request.
   */
  jobs: Array<Job>;

  /**
   * List of available resources (vehicles, drivers, workers) that can be assigned to
   * perform jobs. Each resource defines their working schedules, location
   * constraints, capacity limits, and capabilities. At least one resource is
   * required, with a maximum of 2000 resources per request.
   */
  resources: Array<Resource>;

  /**
   * Custom distance matrix configuration for multi-profile and multi-slice scenarios
   */
  customDistanceMatrices?: Request.CustomDistanceMatrices | null;

  /**
   * Optional webhook URL that will receive a POST request with the job ID when the
   * optimization is complete. This enables asynchronous processing where you can
   * submit a request and be notified when results are ready, rather than waiting for
   * the synchronous response.
   */
  hook?: string | null;

  label?: string | null;

  /**
   * Options to tweak the routing engine
   */
  options?: Options | null;

  relations?: Array<Relation> | null;

  /**
   * OnRoute Weights
   */
  weights?: Weights | null;
}

export namespace Request {
  /**
   * Custom distance matrix configuration for multi-profile and multi-slice scenarios
   */
  export interface CustomDistanceMatrices {
    /**
     * Optional URL for external distance matrix service endpoint. If not provided,
     * uses the default system service.
     */
    matrixServiceUrl?: string | null;

    /**
     * Map of vehicle profile names (CAR, BIKE, TRUCK) to time slice hour mappings.
     * Each time slice hour maps to a matrix ID that should be fetched from the
     * distance matrix service. Time slice hours correspond to: 6=MORNING_RUSH,
     * 9=MORNING, 12=MIDDAY, 14=AFTERNOON, 16=EVENING_RUSH, 20=NIGHT.
     */
    profileMatrices?: { [key: string]: { [key: string]: string } } | null;
  }
}

/**
 * Resource (vehicle, employee)
 */
export interface Resource {
  /**
   * Unique identifier for this resource. Used to reference the resource in job
   * assignments, relations, and results. Must be unique within the request.
   */
  name: string;

  /**
   * List of work shifts defining when this resource is available for job
   * assignments. Each shift specifies working hours, start/end locations, breaks,
   * and other constraints. Multiple shifts allow for multi-day planning or
   * split-shift schedules. At least one shift is required.
   */
  shifts: Array<Shift> | null;

  /**
   * Multi-dimensional capacity limits for this resource, such as weight, volume, or
   * item count. Each dimension corresponds to job load requirements. For example,
   * [500, 200] might represent 500 kg weight capacity and 200 cubic meters volume
   * capacity. Maximum 5 dimensions supported.
   */
  capacity?: Array<number> | null;

  /**
   * Transportation type for the resource
   */
  category?: 'CAR' | 'BIKE' | 'TRUCK' | null;

  /**
   * List of resource names that this resource is compatible to work with on linked
   * jobs requiring cooperation
   */
  compatibleResources?: Array<string> | null;

  /**
   * @deprecated Geographical Location in WGS-84
   */
  end?: Location | null;

  /**
   * Hourly cost rate for this resource in your currency units. Used to calculate
   * total labor costs for solutions. Only counts active time (driving, servicing, or
   * waiting), not idle time. This enables cost-based optimization and financial
   * analysis of routing solutions.
   */
  hourlyCost?: number | null;

  maxDriveTime?: number | null;

  /**
   * Maximum total driving time allowed for this resource per shift or planning
   * period. This constraint prevents excessive driving and ensures compliance with
   * regulations or operational policies. Measured in seconds and includes all travel
   * between jobs but excludes service time.
   */
  maxDriveTimeInSeconds?: unknown;

  maxDriveTimeJob?: number | null;

  /**
   * Geographical Location in WGS-84
   */
  region?: Location | null;

  /**
   * List of periodic constraints that apply to this resource over specified time
   * periods. Rules can enforce minimum/maximum work time, service time, drive time,
   * or job complexity limits. These constraints ensure compliance with labor
   * regulations, operational policies, or capacity limitations.
   */
  rules?: Array<Rule> | null;

  /**
   * @deprecated Geographical Location in WGS-84
   */
  start?: Location | null;

  /**
   * List of capability tags that define what types of jobs this resource can
   * perform. Tags create matching constraints between jobs and resources - only
   * resources with matching tags can be assigned to jobs that require those
   * capabilities. For example, 'plumbing' or 'electrical' tags.
   */
  tags?: Array<string> | null;
}

/**
 * Periodic time rule for a resource
 */
export interface Rule {
  /**
   * Map of job type to maximum count allowed per period. Null means no limitations.
   */
  jobTypeLimitations?: { [key: string]: number } | null;

  /**
   * Maximum drive time in seconds
   */
  maxDriveTime?: number | null;

  /**
   * Sum of the complexity of the jobs completed by this resource should not go over
   * this value
   */
  maxJobComplexity?: number | null;

  /**
   * Maximum service time in seconds
   */
  maxServiceTime?: number | null;

  /**
   * Maximum work time in seconds. Work time is service time + drive/travel time.
   */
  maxWorkTime?: number | null;

  /**
   * Minimum drive time in seconds
   */
  minDriveTime?: number | null;

  /**
   * Sum of the complexity of the jobs completed by this resource should reach this
   * value
   */
  minJobComplexity?: number | null;

  /**
   * Minimum service time in seconds
   */
  minServiceTime?: number | null;

  /**
   * Minimum work time in seconds. Work time is service time + drive/travel time.
   */
  minWorkTime?: number | null;

  /**
   * Subset of the planning period
   */
  period?: Period | null;
}

/**
 * Shift definition. Every potential shift of a resource should be defined here.
 * Every shift can be a trip.
 */
export interface Shift {
  /**
   * Start of the shift datetime
   */
  from: string;

  /**
   * End of the shift datetime
   */
  to: string;

  /**
   * Windowed breaks definitions.
   */
  breaks?: Array<Shift.Break> | null;

  /**
   * Geographical Location in WGS-84
   */
  end?: Location | null;

  /**
   * Ignore the travel time from the last order to the optional end location
   */
  ignoreTravelTimeFromLastJob?: boolean | null;

  /**
   * Ignore the travel time from the start location to the first order
   */
  ignoreTravelTimeToFirstJob?: boolean | null;

  /**
   * Map of job type to maximum count allowed per shift. Null means no limitations.
   */
  jobTypeLimitations?: { [key: string]: number } | null;

  /**
   * @deprecated Can go into overtime.
   */
  overtime?: unknown;

  /**
   * Maximum overtime time.
   */
  overtimeEnd?: string | null;

  /**
   * Geographical Location in WGS-84
   */
  start?: Location | null;

  /**
   * Shift tags will ensure that this resource can only do Jobs of this tag during
   * this shift. This allows for tag based availability.
   */
  tags?: Array<string> | null;
}

export namespace Shift {
  export interface Break {
    /**
     * Type of break that can be defined for a resource
     */
    type: 'WINDOWED' | 'DRIVE' | 'UNAVAILABILITY';
  }
}

/**
 * OnRoute Weights
 */
export interface Weights {
  /**
   * Weight modifier for soft violations of resource assignment constraints. When
   * jobs have allowedResources restrictions and they cannot be satisfied as hard
   * constraints, this weight determines the penalty for assigning jobs to
   * non-allowed resources.
   */
  allowedResourcesWeight?: number | null;

  /**
   * Weight modifier for scheduling jobs as early as possible within their time
   * windows and resource availability. Higher values push jobs toward the beginning
   * of shifts and planning periods, useful for front-loading work or maximizing
   * completion rates.
   */
  asapWeight?: number | null;

  /**
   * Weight modifier for geographic clustering constraint. Controls the penalty for
   * route bounding box overlaps when clustering is enabled. Higher values more
   * strongly discourage routes from overlapping in geographic space, promoting
   * clearer territorial separation. The penalty is multiplied by this weight before
   * being applied to the score.
   */
  clusteringWeight?: number | null;

  /**
   * Weight modifier for total driving time across all resources. Similar to
   * travelTimeWeight but focuses specifically on driving time violations or
   * constraints. Higher values make the solver more concerned with minimizing
   * driving time, useful for fuel efficiency or driver fatigue management.
   */
  driveTimeWeight?: number | null;

  /**
   * Weight modifier for separating jobs that are geographically close to each other.
   * When jobProximityRadius is set in options, this weight penalizes consecutive
   * scheduling of jobs within that radius to different resources or non-consecutive
   * scheduling. Higher values encourage grouping nearby jobs together in the same
   * route segment.
   */
  jobProximityWeight?: number | null;

  /**
   * Weight modifier for minimizing the number of active resources per day/trip. The
   * weight is measured in the same units as travel time - a weight of 3600 means
   * using an additional resource is equivalent to 1 hour of travel time. Higher
   * values encourage consolidation of jobs onto fewer resources.
   */
  minimizeResourcesWeight?: number | null;

  /**
   * Weight modifier for deviations from planned arrivals and resource assignments.
   * Higher values make the solver more reluctant to deviate from plannedArrival
   * times and plannedResource assignments. This is crucial for maintaining customer
   * appointments and commitments.
   */
  plannedWeight?: number | null;

  /**
   * Weight modifier for job priority constraints. Higher values make the solver more
   * likely to include high-priority jobs in the solution when not all jobs can be
   * assigned. This affects job selection probability but not scheduling order. The
   * weight is multiplied by the job's priority value and duration.
   */
  priorityWeight?: number | null;

  /**
   * Weight modifier for resource ranking preferences defined in job rankings. Higher
   * values make the solver more aggressive about assigning jobs to their preferred
   * (lower-ranked) resources, even if it increases travel time or other costs. This
   * helps maintain service quality by using optimal resource assignments.
   */
  rankingWeight?: number | null;

  /**
   * Weight modifier for total travel time optimization. This is the baseline weight
   * (typically 1) against which all other weights are compared. Higher values make
   * the solver more aggressive about minimizing travel time, potentially at the
   * expense of other objectives.
   */
  travelTimeWeight?: number | null;

  /**
   * Weight modifier for job urgency constraints. Higher values make the solver more
   * aggressive about scheduling urgent jobs earlier in the day and planning period.
   * This affects the sequence and timing of job execution based on their urgency
   * values.
   */
  urgencyWeight?: number | null;

  /**
   * Weight modifier for total waiting time across all resources. Waiting time occurs
   * when resources arrive at jobs before their time windows open or when they have
   * idle time between jobs. Higher values make the solver more aggressive about
   * minimizing idle time.
   */
  waitTimeWeight?: number | null;

  /**
   * Weight modifier for workload balancing across resources and time periods. Higher
   * values make the solver more aggressive about equalizing service time
   * distribution. Works with fairWorkloadPerTrip and fairWorkloadPerResource
   * options, and is sensitive to the workloadSensitivity parameter.
   */
  workloadSpreadWeight?: number | null;
}

/**
 * Window in which the job can be executed
 */
export interface Window {
  /**
   * Date time start of window
   */
  from: string;

  /**
   * Date time end of window
   */
  to: string;

  /**
   * Hard constraint violation of DateWindow
   */
  hard?: boolean | null;

  /**
   * Weight constraint modifier
   */
  weight?: number | null;
}

export interface VrpDemoParams {
  geolocation?: string | null;

  jobs?: number | null;

  radius?: number | null;
}

export interface VrpEvaluateParams {
  /**
   * List of jobs/tasks to be assigned to resources. Each job specifies service
   * requirements, location, time constraints, duration, and resource preferences.
   * Jobs represent the work that needs to be scheduled and optimized. At least one
   * job is required, with a maximum of 10,000 jobs per request.
   */
  jobs: Array<Job>;

  /**
   * List of available resources (vehicles, drivers, workers) that can be assigned to
   * perform jobs. Each resource defines their working schedules, location
   * constraints, capacity limits, and capabilities. At least one resource is
   * required, with a maximum of 2000 resources per request.
   */
  resources: Array<Resource>;

  /**
   * Custom distance matrix configuration for multi-profile and multi-slice scenarios
   */
  customDistanceMatrices?: VrpEvaluateParams.CustomDistanceMatrices | null;

  /**
   * Optional webhook URL that will receive a POST request with the job ID when the
   * optimization is complete. This enables asynchronous processing where you can
   * submit a request and be notified when results are ready, rather than waiting for
   * the synchronous response.
   */
  hook?: string | null;

  label?: string | null;

  /**
   * Options to tweak the routing engine
   */
  options?: Options | null;

  relations?: Array<Relation> | null;

  /**
   * OnRoute Weights
   */
  weights?: Weights | null;
}

export namespace VrpEvaluateParams {
  /**
   * Custom distance matrix configuration for multi-profile and multi-slice scenarios
   */
  export interface CustomDistanceMatrices {
    /**
     * Optional URL for external distance matrix service endpoint. If not provided,
     * uses the default system service.
     */
    matrixServiceUrl?: string | null;

    /**
     * Map of vehicle profile names (CAR, BIKE, TRUCK) to time slice hour mappings.
     * Each time slice hour maps to a matrix ID that should be fetched from the
     * distance matrix service. Time slice hours correspond to: 6=MORNING_RUSH,
     * 9=MORNING, 12=MIDDAY, 14=AFTERNOON, 16=EVENING_RUSH, 20=NIGHT.
     */
    profileMatrices?: { [key: string]: { [key: string]: string } } | null;
  }
}

export interface VrpSolveParams {
  /**
   * Body param: List of jobs/tasks to be assigned to resources. Each job specifies
   * service requirements, location, time constraints, duration, and resource
   * preferences. Jobs represent the work that needs to be scheduled and optimized.
   * At least one job is required, with a maximum of 10,000 jobs per request.
   */
  jobs: Array<Job>;

  /**
   * Body param: List of available resources (vehicles, drivers, workers) that can be
   * assigned to perform jobs. Each resource defines their working schedules,
   * location constraints, capacity limits, and capabilities. At least one resource
   * is required, with a maximum of 2000 resources per request.
   */
  resources: Array<Resource>;

  /**
   * Query param:
   */
  millis?: string | null;

  /**
   * Body param: Custom distance matrix configuration for multi-profile and
   * multi-slice scenarios
   */
  customDistanceMatrices?: VrpSolveParams.CustomDistanceMatrices | null;

  /**
   * Body param: Optional webhook URL that will receive a POST request with the job
   * ID when the optimization is complete. This enables asynchronous processing where
   * you can submit a request and be notified when results are ready, rather than
   * waiting for the synchronous response.
   */
  hook?: string | null;

  /**
   * Body param:
   */
  label?: string | null;

  /**
   * Body param: Options to tweak the routing engine
   */
  options?: Options | null;

  /**
   * Body param:
   */
  relations?: Array<Relation> | null;

  /**
   * Body param: OnRoute Weights
   */
  weights?: Weights | null;

  /**
   * Header param:
   */
  instance?: string | null;
}

export namespace VrpSolveParams {
  /**
   * Custom distance matrix configuration for multi-profile and multi-slice scenarios
   */
  export interface CustomDistanceMatrices {
    /**
     * Optional URL for external distance matrix service endpoint. If not provided,
     * uses the default system service.
     */
    matrixServiceUrl?: string | null;

    /**
     * Map of vehicle profile names (CAR, BIKE, TRUCK) to time slice hour mappings.
     * Each time slice hour maps to a matrix ID that should be fetched from the
     * distance matrix service. Time slice hours correspond to: 6=MORNING_RUSH,
     * 9=MORNING, 12=MIDDAY, 14=AFTERNOON, 16=EVENING_RUSH, 20=NIGHT.
     */
    profileMatrices?: { [key: string]: { [key: string]: string } } | null;
  }
}

export interface VrpSuggestParams {
  /**
   * Body param: List of jobs/tasks to be assigned to resources. Each job specifies
   * service requirements, location, time constraints, duration, and resource
   * preferences. Jobs represent the work that needs to be scheduled and optimized.
   * At least one job is required, with a maximum of 10,000 jobs per request.
   */
  jobs: Array<Job>;

  /**
   * Body param: List of available resources (vehicles, drivers, workers) that can be
   * assigned to perform jobs. Each resource defines their working schedules,
   * location constraints, capacity limits, and capabilities. At least one resource
   * is required, with a maximum of 2000 resources per request.
   */
  resources: Array<Resource>;

  /**
   * Query param:
   */
  millis?: string | null;

  /**
   * Body param: Custom distance matrix configuration for multi-profile and
   * multi-slice scenarios
   */
  customDistanceMatrices?: VrpSuggestParams.CustomDistanceMatrices | null;

  /**
   * Body param: Optional webhook URL that will receive a POST request with the job
   * ID when the optimization is complete. This enables asynchronous processing where
   * you can submit a request and be notified when results are ready, rather than
   * waiting for the synchronous response.
   */
  hook?: string | null;

  /**
   * Body param:
   */
  label?: string | null;

  /**
   * Body param: Options to tweak the routing engine
   */
  options?: Options | null;

  /**
   * Body param:
   */
  relations?: Array<Relation> | null;

  /**
   * Body param: OnRoute Weights
   */
  weights?: Weights | null;
}

export namespace VrpSuggestParams {
  /**
   * Custom distance matrix configuration for multi-profile and multi-slice scenarios
   */
  export interface CustomDistanceMatrices {
    /**
     * Optional URL for external distance matrix service endpoint. If not provided,
     * uses the default system service.
     */
    matrixServiceUrl?: string | null;

    /**
     * Map of vehicle profile names (CAR, BIKE, TRUCK) to time slice hour mappings.
     * Each time slice hour maps to a matrix ID that should be fetched from the
     * distance matrix service. Time slice hours correspond to: 6=MORNING_RUSH,
     * 9=MORNING, 12=MIDDAY, 14=AFTERNOON, 16=EVENING_RUSH, 20=NIGHT.
     */
    profileMatrices?: { [key: string]: { [key: string]: string } } | null;
  }
}

export interface VrpSyncEvaluateParams {
  /**
   * List of jobs/tasks to be assigned to resources. Each job specifies service
   * requirements, location, time constraints, duration, and resource preferences.
   * Jobs represent the work that needs to be scheduled and optimized. At least one
   * job is required, with a maximum of 10,000 jobs per request.
   */
  jobs: Array<Job>;

  /**
   * List of available resources (vehicles, drivers, workers) that can be assigned to
   * perform jobs. Each resource defines their working schedules, location
   * constraints, capacity limits, and capabilities. At least one resource is
   * required, with a maximum of 2000 resources per request.
   */
  resources: Array<Resource>;

  /**
   * Custom distance matrix configuration for multi-profile and multi-slice scenarios
   */
  customDistanceMatrices?: VrpSyncEvaluateParams.CustomDistanceMatrices | null;

  /**
   * Optional webhook URL that will receive a POST request with the job ID when the
   * optimization is complete. This enables asynchronous processing where you can
   * submit a request and be notified when results are ready, rather than waiting for
   * the synchronous response.
   */
  hook?: string | null;

  label?: string | null;

  /**
   * Options to tweak the routing engine
   */
  options?: Options | null;

  relations?: Array<Relation> | null;

  /**
   * OnRoute Weights
   */
  weights?: Weights | null;
}

export namespace VrpSyncEvaluateParams {
  /**
   * Custom distance matrix configuration for multi-profile and multi-slice scenarios
   */
  export interface CustomDistanceMatrices {
    /**
     * Optional URL for external distance matrix service endpoint. If not provided,
     * uses the default system service.
     */
    matrixServiceUrl?: string | null;

    /**
     * Map of vehicle profile names (CAR, BIKE, TRUCK) to time slice hour mappings.
     * Each time slice hour maps to a matrix ID that should be fetched from the
     * distance matrix service. Time slice hours correspond to: 6=MORNING_RUSH,
     * 9=MORNING, 12=MIDDAY, 14=AFTERNOON, 16=EVENING_RUSH, 20=NIGHT.
     */
    profileMatrices?: { [key: string]: { [key: string]: string } } | null;
  }
}

export interface VrpSyncSolveParams {
  /**
   * Body param: List of jobs/tasks to be assigned to resources. Each job specifies
   * service requirements, location, time constraints, duration, and resource
   * preferences. Jobs represent the work that needs to be scheduled and optimized.
   * At least one job is required, with a maximum of 10,000 jobs per request.
   */
  jobs: Array<Job>;

  /**
   * Body param: List of available resources (vehicles, drivers, workers) that can be
   * assigned to perform jobs. Each resource defines their working schedules,
   * location constraints, capacity limits, and capabilities. At least one resource
   * is required, with a maximum of 2000 resources per request.
   */
  resources: Array<Resource>;

  /**
   * Query param:
   */
  millis?: string | null;

  /**
   * Body param: Custom distance matrix configuration for multi-profile and
   * multi-slice scenarios
   */
  customDistanceMatrices?: VrpSyncSolveParams.CustomDistanceMatrices | null;

  /**
   * Body param: Optional webhook URL that will receive a POST request with the job
   * ID when the optimization is complete. This enables asynchronous processing where
   * you can submit a request and be notified when results are ready, rather than
   * waiting for the synchronous response.
   */
  hook?: string | null;

  /**
   * Body param:
   */
  label?: string | null;

  /**
   * Body param: Options to tweak the routing engine
   */
  options?: Options | null;

  /**
   * Body param:
   */
  relations?: Array<Relation> | null;

  /**
   * Body param: OnRoute Weights
   */
  weights?: Weights | null;
}

export namespace VrpSyncSolveParams {
  /**
   * Custom distance matrix configuration for multi-profile and multi-slice scenarios
   */
  export interface CustomDistanceMatrices {
    /**
     * Optional URL for external distance matrix service endpoint. If not provided,
     * uses the default system service.
     */
    matrixServiceUrl?: string | null;

    /**
     * Map of vehicle profile names (CAR, BIKE, TRUCK) to time slice hour mappings.
     * Each time slice hour maps to a matrix ID that should be fetched from the
     * distance matrix service. Time slice hours correspond to: 6=MORNING_RUSH,
     * 9=MORNING, 12=MIDDAY, 14=AFTERNOON, 16=EVENING_RUSH, 20=NIGHT.
     */
    profileMatrices?: { [key: string]: { [key: string]: string } } | null;
  }
}

export interface VrpSyncSuggestParams {
  /**
   * Body param: List of jobs/tasks to be assigned to resources. Each job specifies
   * service requirements, location, time constraints, duration, and resource
   * preferences. Jobs represent the work that needs to be scheduled and optimized.
   * At least one job is required, with a maximum of 10,000 jobs per request.
   */
  jobs: Array<Job>;

  /**
   * Body param: List of available resources (vehicles, drivers, workers) that can be
   * assigned to perform jobs. Each resource defines their working schedules,
   * location constraints, capacity limits, and capabilities. At least one resource
   * is required, with a maximum of 2000 resources per request.
   */
  resources: Array<Resource>;

  /**
   * Query param:
   */
  millis?: string | null;

  /**
   * Body param: Custom distance matrix configuration for multi-profile and
   * multi-slice scenarios
   */
  customDistanceMatrices?: VrpSyncSuggestParams.CustomDistanceMatrices | null;

  /**
   * Body param: Optional webhook URL that will receive a POST request with the job
   * ID when the optimization is complete. This enables asynchronous processing where
   * you can submit a request and be notified when results are ready, rather than
   * waiting for the synchronous response.
   */
  hook?: string | null;

  /**
   * Body param:
   */
  label?: string | null;

  /**
   * Body param: Options to tweak the routing engine
   */
  options?: Options | null;

  /**
   * Body param:
   */
  relations?: Array<Relation> | null;

  /**
   * Body param: OnRoute Weights
   */
  weights?: Weights | null;
}

export namespace VrpSyncSuggestParams {
  /**
   * Custom distance matrix configuration for multi-profile and multi-slice scenarios
   */
  export interface CustomDistanceMatrices {
    /**
     * Optional URL for external distance matrix service endpoint. If not provided,
     * uses the default system service.
     */
    matrixServiceUrl?: string | null;

    /**
     * Map of vehicle profile names (CAR, BIKE, TRUCK) to time slice hour mappings.
     * Each time slice hour maps to a matrix ID that should be fetched from the
     * distance matrix service. Time slice hours correspond to: 6=MORNING_RUSH,
     * 9=MORNING, 12=MIDDAY, 14=AFTERNOON, 16=EVENING_RUSH, 20=NIGHT.
     */
    profileMatrices?: { [key: string]: { [key: string]: string } } | null;
  }
}

Vrp.Jobs = Jobs;

export declare namespace Vrp {
  export {
    type ExplanationOptions as ExplanationOptions,
    type Job as Job,
    type Location as Location,
    type Message as Message,
    type Options as Options,
    type Period as Period,
    type Relation as Relation,
    type RelationType as RelationType,
    type Request as Request,
    type Resource as Resource,
    type Rule as Rule,
    type Shift as Shift,
    type Weights as Weights,
    type Window as Window,
    type VrpDemoParams as VrpDemoParams,
    type VrpEvaluateParams as VrpEvaluateParams,
    type VrpSolveParams as VrpSolveParams,
    type VrpSuggestParams as VrpSuggestParams,
    type VrpSyncEvaluateParams as VrpSyncEvaluateParams,
    type VrpSyncSolveParams as VrpSyncSolveParams,
    type VrpSyncSuggestParams as VrpSyncSuggestParams,
  };

  export {
    Jobs as Jobs,
    type OnRouteResponse as OnRouteResponse,
    type OnrouteConstraint as OnrouteConstraint,
    type SolviceStatusJob as SolviceStatusJob,
    type Unresolved as Unresolved,
    type Visit as Visit,
    type JobExplanationResponse as JobExplanationResponse,
  };
}
