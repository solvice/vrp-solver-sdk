// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VrpAPI from './vrp';
import * as JobsAPI from './jobs';
import { JobExplanationResponse, Jobs, OnRouteResponse, OnrouteConstraint, Unresolved, Visit } from './jobs';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Vrp extends APIResource {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);

  /**
   * Demo of random generated VRP instance
   *
   * @example
   * ```ts
   * const onRouteRequest = await client.vrp.demo();
   * ```
   */
  demo(query: VrpDemoParams | null | undefined = {}, options?: RequestOptions): APIPromise<OnRouteRequest> {
    return this._client.get('/v2/vrp/demo', { query, ...options });
  }

  /**
   * Will trigger the evaluation run asynchronously.
   *
   * @example
   * ```ts
   * const solviceStatusJob = await client.vrp.evaluate({
   *   jobs: [{ name: '1' }, { name: '2' }],
   *   resources: [
   *     {
   *       name: '1',
   *       shifts: [
   *         {
   *           from: '2023-01-13 08:00:00+00:00',
   *           to: '2023-01-13 17:00:00+00:00',
   *         },
   *       ],
   *     },
   *   ],
   * });
   * ```
   */
  evaluate(body: VrpEvaluateParams, options?: RequestOptions): APIPromise<SolviceStatusJob> {
    return this._client.post('/v2/vrp/evaluate', { body, ...options });
  }

  /**
   * Will trigger the solver run asynchronously.
   *
   * @example
   * ```ts
   * const solviceStatusJob = await client.vrp.solve({
   *   jobs: [{ name: '1' }, { name: '2' }],
   *   resources: [
   *     {
   *       name: '1',
   *       shifts: [
   *         {
   *           from: '2023-01-13 08:00:00+00:00',
   *           to: '2023-01-13 17:00:00+00:00',
   *         },
   *       ],
   *     },
   *   ],
   * });
   * ```
   */
  solve(params: VrpSolveParams, options?: RequestOptions): APIPromise<SolviceStatusJob> {
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
   *   jobs: [{ name: '1' }, { name: '2' }],
   *   resources: [
   *     {
   *       name: '1',
   *       shifts: [
   *         {
   *           from: '2023-01-13 08:00:00+00:00',
   *           to: '2023-01-13 17:00:00+00:00',
   *         },
   *       ],
   *     },
   *   ],
   * });
   * ```
   */
  suggest(params: VrpSuggestParams, options?: RequestOptions): APIPromise<SolviceStatusJob> {
    const { millis, ...body } = params;
    return this._client.post('/v2/vrp/suggest', { query: { millis }, body, ...options });
  }

  /**
   * Synchronous (solve, evaluate, suggest) operation for low latency results
   *
   * @example
   * ```ts
   * const onRouteResponse = await client.vrp.sync('SOLVE', {
   *   jobs: [{ name: '1' }, { name: '2' }],
   *   resources: [
   *     {
   *       name: '1',
   *       shifts: [
   *         {
   *           from: '2023-01-13 08:00:00+00:00',
   *           to: '2023-01-13 17:00:00+00:00',
   *         },
   *       ],
   *     },
   *   ],
   * });
   * ```
   */
  sync(
    operation: 'SOLVE' | 'SUGGEST' | 'EVALUATE',
    params: VrpSyncParams,
    options?: RequestOptions,
  ): APIPromise<JobsAPI.OnRouteResponse> {
    const { millis, ...body } = params;
    return this._client.post(path`/v2/vrp/sync/${operation}`, { query: { millis }, body, ...options });
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
   * When a job is performed at the same location as another job, `durationSquash`
   * ensures that the 2nd job' service time is reduced to this value. Example:
   * `duration=600` and `durationSquash=30` means that the 2nd job will only take 30
   * seconds to perform.
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
   * Planned arrival time The second of day at which the order is planned to
   * complete. The difference with the actual arrival time is scaled in the score
   * with plannedWeight.
   */
  plannedArrival?: string | null;

  /**
   * Fixed date on which this order is already planned and should hence be taken into
   * account in the planning.
   */
  plannedDate?: string | null;

  /**
   * Name of the resource to which this order is already planned and should hence be
   * taken into account in the next planning.
   */
  plannedResource?: string | null;

  /**
   * Priority of the job will ensure that it is included in the planning over other
   * lower priority jobs. We evaluate the priority multiplied with the duration of
   * the job. The higher the priority, the more likely it is that the job will be
   * included in the planning. Defaults to 1.
   */
  priority?: number | null;

  /**
   * Rankings define resource preferences for this job, where lower values indicate
   * stronger preference for specific resources.
   */
  rankings?: Array<Job.Ranking> | null;

  /**
   * Enables job interruption by resource unavailability breaks. When true, the job
   * can start before a break, pause during the break, and resume afterward. Default:
   * false.
   */
  resumable?: boolean | null;

  /**
   * A tag is a string that can be used to link jobs to resources.
   */
  tags?: Array<Job.Tag> | null;

  /**
   * Urgency of the job will ensure that it is likely to be scheduled before jobs
   * with a lower urgency.
   */
  urgency?: number | null;

  /**
   * List of start/end date/time combinations.
   */
  windows?: Array<Job.Window> | null;
}

export namespace Job {
  /**
   * A ranking is a measure of the affinity of a `Resource` towards a `Job`.
   */
  export interface Ranking {
    /**
     * The name of the Resource
     */
    name: string;

    /**
     * Resource ranking for this tag (1-100). Lower ranking means more preferred
     * resource. When a job is assigned to a resource, the score is penalised based on
     * the ranking.
     */
    ranking?: number | null;
  }

  /**
   * A tag is a match between a `Job` and a `Resource`.
   */
  export interface Tag {
    /**
     * Tag restriction name which can force some Jobs to be scheduled by Resources with
     * the same tag
     */
    name: string;

    /**
     * Hard or soft constraint.
     */
    hard?: boolean | null;

    /**
     * Value of the weight. This will be on the same level as travel time in the case
     * of soft constraint.
     */
    weight?: number | null;
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
 * OnRoute Request for solving, evaluating
 */
export interface OnRouteRequest {
  /**
   * List of Jobs
   */
  jobs: Array<Job>;

  /**
   * List of Resources
   */
  resources: Array<Resource>;

  /**
   * Webhook endpoint to receive POST request with the id.
   */
  hook?: string | null;

  label?: string | null;

  /**
   * Options to tweak the routing engine
   */
  options?: Options | null;

  relations?: Array<OnRouteRequest.Relation> | null;

  /**
   * OnRoute Weights
   */
  weights?: Weights | null;
}

export namespace OnRouteRequest {
  /**
   * Relation between two jobs.
   */
  export interface Relation {
    /**
     * List of job names. This can be sequence dependent.
     */
    jobs: Array<string>;

    /**
     * Determines if the time interval between jobs should be measured from arrival or
     * departure
     */
    timeInterval: 'FROM_ARRIVAL' | 'FROM_DEPARTURE';

    /**
     * Type of relation between jobs
     */
    type:
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
     * Maximum seconds between two jobs in a SEQUENCE relation.
     */
    maxTimeInterval?: number | null;

    /**
     * In case of a `SAME_TIME` relation, the maximum waiting time in seconds between
     * the jobs. Defaults to `1200` seconds or `20` minutes.
     */
    maxWaitingTime?: number | null;

    /**
     * Minimum seconds between two jobs in a SEQUENCE relation.
     */
    minTimeInterval?: number | null;

    /**
     * Allows the solver to plan a subset of the jobs in the job relation when
     * overconstrained
     */
    partialPlanning?: boolean;

    /**
     * Optional resource
     */
    resource?: string | null;

    /**
     * When using the GROUP_SEQUENCE relation it is used to define the job groups by
     * inserting the tags that differentiate them
     */
    tags?: Array<string> | null;
  }
}

/**
 * Options to tweak the routing engine
 */
export interface Options {
  /**
   * Use euclidian distance for travel time. Default false.
   */
  euclidian?: boolean | null;

  /**
   * Options to manage the explanation of the solution
   */
  explanation?: ExplanationOptions | null;

  fairComplexityPerResource?: boolean | null;

  fairComplexityPerTrip?: boolean | null;

  /**
   * If true, the workload (service time) will be spread over all days of one
   * resource. (interacts with `Weights.workloadSpreadWeight` and
   * `options.workloadSensitivity`)
   */
  fairWorkloadPerResource?: boolean | null;

  /**
   * If true, the workload (service time) will be spread over all resources and all
   * days. (interacts with `Weights.workloadSpreadWeight` and
   * `options.workloadSensitivity`)
   */
  fairWorkloadPerTrip?: boolean | null;

  /**
   * If the request is submitted to the suggestion end point it indicates the maximum
   * number of suggestions the solver should return (default is 0 which means return
   * all)
   */
  maxSuggestions?: number | null;

  /**
   * Minimise the vehicle useage or minimise total travel time. Two different
   * objective functions.
   */
  minimizeResources?: boolean | null;

  /**
   * If the request is a suggestion then if the initial plan is feasible the solver
   * will return only feasible suggestions otherwise it will return only suggestions
   * that do not worsen the infeasibility (default is true)
   */
  onlyFeasibleSuggestions?: boolean | null;

  /**
   * We will try to assign as many jobs as possible and create a partial schedule
   * unless `partial` is set to `false`. Default set to true.
   */
  partialPlanning?: boolean | null;

  /**
   * Let our map server calculate the actual polylines for connecting the visits.
   * Processing will take longer.
   */
  polylines?: boolean | null;

  /**
   * The routing engine to use for distance and travel time calculations
   */
  routingEngine?: 'OSM' | 'TOMTOM' | 'GOOGLE' | 'ANYMAP' | null;

  /**
   * The smallest steps in arrival time to which results will be snapped. The
   * snapping policy is round-up and is used at runtime, implying it influences the
   * score calculation. Unless a post-calculation feature such as order padding is
   * used, any calculated arrival time in `[391, 395]` with a `snapUnit` of `5` will
   * yield `395`. Fallback value for `Options.use_snapUnit_for_waitRange`.
   */
  snapUnit?: number | null;

  /**
   * Modifier to travel time for traffic. If you want actual traffic information, use
   * HERE or TomTom map integration.
   */
  traffic?: number | null;

  workloadSensitivity?: number | null;
}

/**
 * Resource (vehicle, employee)
 */
export interface Resource {
  /**
   * Unique name
   */
  name: string;

  /**
   * Shift definition of a Resource over course of planning period
   */
  shifts: Array<Resource.Shift> | null;

  /**
   * Capacity
   */
  capacity?: Array<number> | null;

  /**
   * Transportation type for the resource
   */
  category?: 'CAR' | 'BIKE' | 'TRUCK' | null;

  /**
   * @deprecated Geographical Location in WGS-84
   */
  end?: Location | null;

  /**
   * Financial cost per hour per resource. Only calculated when working (driving,
   * servicing or waiting)
   */
  hourlyCost?: number | null;

  maxDriveTime?: number | null;

  /**
   * Maximum drive time in seconds
   */
  maxDriveTimeInSeconds?: unknown;

  maxDriveTimeJob?: number | null;

  /**
   * Geographical Location in WGS-84
   */
  region?: Location | null;

  /**
   * Periodic Rules
   */
  rules?: Array<Resource.Rule> | null;

  /**
   * @deprecated Geographical Location in WGS-84
   */
  start?: Location | null;

  /**
   * Tag requirements
   */
  tags?: Array<string> | null;
}

export namespace Resource {
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
    end?: VrpAPI.Location | null;

    /**
     * Ignore the travel time from the last order to the optional end location
     */
    ignoreTravelTimeFromLastJob?: boolean | null;

    /**
     * Ignore the travel time from the start location to the first order
     */
    ignoreTravelTimeToFirstJob?: boolean | null;

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
    start?: VrpAPI.Location | null;

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
   * Periodic time rule for a resource
   */
  export interface Rule {
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
    period?: Rule.Period;
  }

  export namespace Rule {
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
  }
}

/**
 * Status of a solve job
 */
export interface SolviceStatusJob {
  /**
   * Job ID
   */
  id: string;

  /**
   * List of errors
   */
  errors?: Array<Message> | null;

  /**
   * Duration of the solve in seconds
   */
  solveDuration?: number | null;

  /**
   * Status of the solve.
   */
  status?: 'QUEUED' | 'SOLVING' | 'SOLVED' | 'ERROR' | null;

  /**
   * List of warnings
   */
  warnings?: Array<Message> | null;
}

/**
 * OnRoute Weights
 */
export interface Weights {
  /**
   * Weight modifier for the resources allowed constraint.
   */
  allowedResourcesWeight?: number | null;

  /**
   * Weight modifier scheduling jobs as soon (on day basis) as possible.
   */
  asapWeight?: number | null;

  /**
   * Weight modifier for the drive time constraint.
   */
  driveTimeWeight?: number | null;

  /**
   * Weight modifier for minimizing activating another resource on a day trip. The
   * weight is put on the same balance as travel time. So setting this weight to 3600
   * (1hour) will make sure that the solver will try to minimize the number of
   * resources used on a day trip compared to 1 extra hour of travel time.
   */
  minimizeResourcesWeight?: number | null;

  /**
   * Weight modifier for planned vehicle and planned date requirement.
   */
  plannedWeight?: number | null;

  /**
   * Weight modifier for `job.priority` that ensures that priority orders are
   * scheduled. Note that this does not make sure that they are scheduled sooner.
   */
  priorityWeight?: number | null;

  /**
   * Weight modifier for tag ranking preference. Higher weight increases the
   * importance of assigning jobs to higher-ranked resources.
   */
  rankingWeight?: number | null;

  /**
   * Weight modifier for travel time.
   */
  travelTimeWeight?: number | null;

  /**
   * Weight modifier for the urgency constraint.
   */
  urgencyWeight?: number | null;

  /**
   * Weight modifier for wait time constraint.
   */
  waitTimeWeight?: number | null;

  /**
   * Weight modifier for service time per vehicle day.
   */
  workloadSpreadWeight?: number | null;
}

export interface VrpDemoParams {
  geolocation?: string | null;

  jobs?: number | null;

  radius?: number | null;
}

export interface VrpEvaluateParams {
  /**
   * List of Jobs
   */
  jobs: Array<Job>;

  /**
   * List of Resources
   */
  resources: Array<Resource>;

  /**
   * Webhook endpoint to receive POST request with the id.
   */
  hook?: string | null;

  label?: string | null;

  /**
   * Options to tweak the routing engine
   */
  options?: Options | null;

  relations?: Array<VrpEvaluateParams.Relation> | null;

  /**
   * OnRoute Weights
   */
  weights?: Weights | null;
}

export namespace VrpEvaluateParams {
  /**
   * Relation between two jobs.
   */
  export interface Relation {
    /**
     * List of job names. This can be sequence dependent.
     */
    jobs: Array<string>;

    /**
     * Determines if the time interval between jobs should be measured from arrival or
     * departure
     */
    timeInterval: 'FROM_ARRIVAL' | 'FROM_DEPARTURE';

    /**
     * Type of relation between jobs
     */
    type:
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
     * Maximum seconds between two jobs in a SEQUENCE relation.
     */
    maxTimeInterval?: number | null;

    /**
     * In case of a `SAME_TIME` relation, the maximum waiting time in seconds between
     * the jobs. Defaults to `1200` seconds or `20` minutes.
     */
    maxWaitingTime?: number | null;

    /**
     * Minimum seconds between two jobs in a SEQUENCE relation.
     */
    minTimeInterval?: number | null;

    /**
     * Allows the solver to plan a subset of the jobs in the job relation when
     * overconstrained
     */
    partialPlanning?: boolean;

    /**
     * Optional resource
     */
    resource?: string | null;

    /**
     * When using the GROUP_SEQUENCE relation it is used to define the job groups by
     * inserting the tags that differentiate them
     */
    tags?: Array<string> | null;
  }
}

export interface VrpSolveParams {
  /**
   * Body param: List of Jobs
   */
  jobs: Array<Job>;

  /**
   * Body param: List of Resources
   */
  resources: Array<Resource>;

  /**
   * Query param:
   */
  millis?: string | null;

  /**
   * Body param: Webhook endpoint to receive POST request with the id.
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
  relations?: Array<VrpSolveParams.Relation> | null;

  /**
   * Body param: OnRoute Weights
   */
  weights?: Weights | null;

  /**
   * Header param:
   */
  instance?: string;
}

export namespace VrpSolveParams {
  /**
   * Relation between two jobs.
   */
  export interface Relation {
    /**
     * List of job names. This can be sequence dependent.
     */
    jobs: Array<string>;

    /**
     * Determines if the time interval between jobs should be measured from arrival or
     * departure
     */
    timeInterval: 'FROM_ARRIVAL' | 'FROM_DEPARTURE';

    /**
     * Type of relation between jobs
     */
    type:
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
     * Maximum seconds between two jobs in a SEQUENCE relation.
     */
    maxTimeInterval?: number | null;

    /**
     * In case of a `SAME_TIME` relation, the maximum waiting time in seconds between
     * the jobs. Defaults to `1200` seconds or `20` minutes.
     */
    maxWaitingTime?: number | null;

    /**
     * Minimum seconds between two jobs in a SEQUENCE relation.
     */
    minTimeInterval?: number | null;

    /**
     * Allows the solver to plan a subset of the jobs in the job relation when
     * overconstrained
     */
    partialPlanning?: boolean;

    /**
     * Optional resource
     */
    resource?: string | null;

    /**
     * When using the GROUP_SEQUENCE relation it is used to define the job groups by
     * inserting the tags that differentiate them
     */
    tags?: Array<string> | null;
  }
}

export interface VrpSuggestParams {
  /**
   * Body param: List of Jobs
   */
  jobs: Array<Job>;

  /**
   * Body param: List of Resources
   */
  resources: Array<Resource>;

  /**
   * Query param:
   */
  millis?: string | null;

  /**
   * Body param: Webhook endpoint to receive POST request with the id.
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
  relations?: Array<VrpSuggestParams.Relation> | null;

  /**
   * Body param: OnRoute Weights
   */
  weights?: Weights | null;
}

export namespace VrpSuggestParams {
  /**
   * Relation between two jobs.
   */
  export interface Relation {
    /**
     * List of job names. This can be sequence dependent.
     */
    jobs: Array<string>;

    /**
     * Determines if the time interval between jobs should be measured from arrival or
     * departure
     */
    timeInterval: 'FROM_ARRIVAL' | 'FROM_DEPARTURE';

    /**
     * Type of relation between jobs
     */
    type:
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
     * Maximum seconds between two jobs in a SEQUENCE relation.
     */
    maxTimeInterval?: number | null;

    /**
     * In case of a `SAME_TIME` relation, the maximum waiting time in seconds between
     * the jobs. Defaults to `1200` seconds or `20` minutes.
     */
    maxWaitingTime?: number | null;

    /**
     * Minimum seconds between two jobs in a SEQUENCE relation.
     */
    minTimeInterval?: number | null;

    /**
     * Allows the solver to plan a subset of the jobs in the job relation when
     * overconstrained
     */
    partialPlanning?: boolean;

    /**
     * Optional resource
     */
    resource?: string | null;

    /**
     * When using the GROUP_SEQUENCE relation it is used to define the job groups by
     * inserting the tags that differentiate them
     */
    tags?: Array<string> | null;
  }
}

export interface VrpSyncParams {
  /**
   * Body param: List of Jobs
   */
  jobs: Array<Job>;

  /**
   * Body param: List of Resources
   */
  resources: Array<Resource>;

  /**
   * Query param:
   */
  millis?: string | null;

  /**
   * Body param: Webhook endpoint to receive POST request with the id.
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
  relations?: Array<VrpSyncParams.Relation> | null;

  /**
   * Body param: OnRoute Weights
   */
  weights?: Weights | null;
}

export namespace VrpSyncParams {
  /**
   * Relation between two jobs.
   */
  export interface Relation {
    /**
     * List of job names. This can be sequence dependent.
     */
    jobs: Array<string>;

    /**
     * Determines if the time interval between jobs should be measured from arrival or
     * departure
     */
    timeInterval: 'FROM_ARRIVAL' | 'FROM_DEPARTURE';

    /**
     * Type of relation between jobs
     */
    type:
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
     * Maximum seconds between two jobs in a SEQUENCE relation.
     */
    maxTimeInterval?: number | null;

    /**
     * In case of a `SAME_TIME` relation, the maximum waiting time in seconds between
     * the jobs. Defaults to `1200` seconds or `20` minutes.
     */
    maxWaitingTime?: number | null;

    /**
     * Minimum seconds between two jobs in a SEQUENCE relation.
     */
    minTimeInterval?: number | null;

    /**
     * Allows the solver to plan a subset of the jobs in the job relation when
     * overconstrained
     */
    partialPlanning?: boolean;

    /**
     * Optional resource
     */
    resource?: string | null;

    /**
     * When using the GROUP_SEQUENCE relation it is used to define the job groups by
     * inserting the tags that differentiate them
     */
    tags?: Array<string> | null;
  }
}

Vrp.Jobs = Jobs;

export declare namespace Vrp {
  export {
    type ExplanationOptions as ExplanationOptions,
    type Job as Job,
    type Location as Location,
    type Message as Message,
    type OnRouteRequest as OnRouteRequest,
    type Options as Options,
    type Resource as Resource,
    type SolviceStatusJob as SolviceStatusJob,
    type Weights as Weights,
    type VrpDemoParams as VrpDemoParams,
    type VrpEvaluateParams as VrpEvaluateParams,
    type VrpSolveParams as VrpSolveParams,
    type VrpSuggestParams as VrpSuggestParams,
    type VrpSyncParams as VrpSyncParams,
  };

  export {
    Jobs as Jobs,
    type OnRouteResponse as OnRouteResponse,
    type OnrouteConstraint as OnrouteConstraint,
    type Unresolved as Unresolved,
    type Visit as Visit,
    type JobExplanationResponse as JobExplanationResponse,
  };
}
