// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JobsAPI from './jobs';
import * as VrpAPI from './vrp';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Jobs extends APIResource {
  /**
   * Return original request
   *
   * @example
   * ```ts
   * const request = await client.vrp.jobs.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<VrpAPI.Request> {
    return this._client.get(path`/v2/vrp/jobs/${id}`, options);
  }

  /**
   * Contains the explanation, once solved.
   *
   * @example
   * ```ts
   * const response = await client.vrp.jobs.explanation('id');
   * ```
   */
  explanation(id: string, options?: RequestOptions): APIPromise<JobExplanationResponse> {
    return this._client.get(path`/v2/vrp/jobs/${id}/explanation`, options);
  }

  /**
   * Contains the actual solution, once solved.
   *
   * @example
   * ```ts
   * const onRouteResponse = await client.vrp.jobs.solution(
   *   'id',
   * );
   * ```
   */
  solution(id: string, options?: RequestOptions): APIPromise<OnRouteResponse> {
    return this._client.get(path`/v2/vrp/jobs/${id}/solution`, options);
  }

  /**
   * Check whether the job is solved or not.
   *
   * @example
   * ```ts
   * const solviceStatusJob = await client.vrp.jobs.status('id');
   * ```
   */
  status(id: string, options?: RequestOptions): APIPromise<SolviceStatusJob> {
    return this._client.get(path`/v2/vrp/jobs/${id}/status`, options);
  }
}

/**
 * OnRoute response from solve
 */
export interface OnRouteResponse {
  /**
   * Actual solution: trips per shift/day and per resource
   */
  trips: Array<OnRouteResponse.Trip>;

  /**
   * Id of the solve job
   */
  id?: string | null;

  /**
   * Events and warnings generated during the solver execution
   */
  messages?: Array<string> | null;

  /**
   * How full this schedule is in terms of work time (incl travel) over capacity. Eg
   * 80%
   */
  occupancy?: number | null;

  /**
   * Score tells you how good a solution is.
   */
  score?: OnRouteResponse.Score | null;

  /**
   * Status of the solve job.
   */
  status?: 'ERROR' | 'QUEUED' | 'SOLVING' | 'SOLVED' | null;

  /**
   * List of suggested assignments returned by suggest api call
   */
  suggestions?: Array<OnRouteResponse.Suggestion> | null;

  /**
   * Service time for all resources
   */
  totalServiceTimeInSeconds?: number | null;

  /**
   * Travel distance for all resources in meters
   */
  totalTravelDistanceInMeters?: number | null;

  /**
   * Travel time for all resources
   */
  totalTravelTimeInSeconds?: number | null;

  /**
   * Wait time for all resources
   */
  totalWaitTimeInSeconds?: number | null;

  /**
   * Constraints that are violated
   */
  unresolved?: unknown;

  /**
   * Unserved jobs
   */
  unserved?: Array<string> | null;

  /**
   * Reasons why jobs could not be served, mapped by job name
   */
  unservedReasons?: { [key: string]: unknown } | null;

  violations?: Array<OnRouteResponse.Violation> | null;

  workloadFairness?: number | null;
}

export namespace OnRouteResponse {
  /**
   * Trip for a resource. Holds a list of visits for a resource and a date.
   */
  export interface Trip {
    /**
     * List of visits for a resource and a date.
     */
    visits: Array<JobsAPI.Visit>;

    /**
     * Date
     */
    date?: string | null;

    /**
     * Departure date-time
     */
    departureTime?: string | null;

    distance?: number | null;

    /**
     * Single visit for a resource. Holds information of the actual arrival time, the
     * job, the location and the latlng.
     */
    end?: JobsAPI.Visit | null;

    /**
     * How full this trip is in terms of work time over capacity. Eg 80%
     */
    occupancy?: number | null;

    /**
     * Polyline of the trip
     */
    polyline?: string | null;

    /**
     * Resource
     */
    resource?: string | null;

    /**
     * Service time in seconds
     */
    serviceTime?: number | null;

    /**
     * Single visit for a resource. Holds information of the actual arrival time, the
     * job, the location and the latlng.
     */
    start?: JobsAPI.Visit | null;

    /**
     * Travel time in seconds
     */
    travelTime?: number | null;

    /**
     * Wait time in seconds
     */
    waitTime?: number | null;

    /**
     * Work time in seconds
     */
    workTime?: number | null;
  }

  /**
   * Score tells you how good a solution is.
   */
  export interface Score {
    feasible?: boolean | null;

    /**
     * The score of the constraints that are hard. This should be 0 in order to be
     * feasible.
     */
    hardScore?: number | null;

    /**
     * The score of the constraints that are medium.
     */
    mediumScore?: number | null;

    /**
     * The score of the constraints that are soft.
     */
    softScore?: number | null;
  }

  export interface Suggestion {
    assignments: Array<Suggestion.Assignment>;

    /**
     * The score of a solution shows how good this solution is w.r.t all the
     * constraints. All solvers try to maximize the score.
     */
    score: Suggestion.Score;
  }

  export namespace Suggestion {
    /**
     * Assignment for a job to a resource. Holds information of the actual arrival
     * time, the job, the resource and the suggested arrival time.
     */
    export interface Assignment {
      /**
       * Executed after date-time
       */
      executedAfter: string;

      /**
       * Job
       */
      job: string;

      /**
       * Resource
       */
      resource: string;

      /**
       * Latest arrival date-time
       */
      latestArrival?: string | null;

      /**
       * Score of the assignment
       */
      score?: Assignment.Score | null;

      /**
       * Unresolved constraints in this alternative solution
       */
      scoreExplanation?: Assignment.ScoreExplanation | null;

      /**
       * Suggested arrival date-time
       */
      suggestedArrival?: string | null;

      suggestedInitialArrival?: string | null;

      violations?: Array<JobsAPI.Unresolved | null> | null;
    }

    export namespace Assignment {
      /**
       * Score of the assignment
       */
      export interface Score {
        feasible?: boolean | null;

        /**
         * The score of the constraints that are hard. This should be 0 in order to be
         * feasible.
         */
        hardScore?: number | null;

        /**
         * The score of the constraints that are medium.
         */
        mediumScore?: number | null;

        /**
         * The score of the constraints that are soft.
         */
        softScore?: number | null;
      }

      /**
       * Unresolved constraints in this alternative solution
       */
      export interface ScoreExplanation {
        /**
         * Types of constraints that can be violated in a routing solution
         */
        constraint: JobsAPI.OnrouteConstraint;

        /**
         * Score impact of this conflict.
         */
        score: string;
      }
    }

    /**
     * The score of a solution shows how good this solution is w.r.t all the
     * constraints. All solvers try to maximize the score.
     */
    export interface Score {
      feasible?: boolean | null;

      /**
       * The score of the constraints that are hard. This should be 0 in order to be
       * feasible.
       */
      hardScore?: number | null;

      /**
       * The score of the constraints that are medium.
       */
      mediumScore?: number | null;

      /**
       * The score of the constraints that are soft.
       */
      softScore?: number | null;
    }
  }

  /**
   * A constraint that is broken in the current solution with a certain value
   * (penalty) and a certain level (hard, soft, medium).
   */
  export interface Violation {
    /**
     * Level of unresolved constraint.
     */
    level: 'HARD' | 'SOFT' | 'MEDIUM' | null;

    /**
     * Name of the constraint.
     */
    name: string | null;

    /**
     * Value of the unresolved constraint. The higher, the more deviation from
     * perfection this constraint has.
     */
    value: number | null;
  }
}

/**
 * Types of constraints that can be violated in a routing solution
 */
export type OnrouteConstraint =
  | 'TRIP_CAPACITY'
  | 'RESOURCE_CAPACITY'
  | 'RESOURCE_CAPACITY2'
  | 'TRAVEL_TIME'
  | 'TYPE_REQUIREMENT'
  | 'TAG_SOFT'
  | 'TAG_HARD'
  | 'TYPE_REQUIREMENT_SOFT'
  | 'END_LOCATION_TRAVEL_TIME'
  | 'TIME_WINDOW_CONFLICT'
  | 'SHIFT_END_CONFLICT'
  | 'OVERTIME_END_CONFLICT'
  | 'RESOURCE_USAGE'
  | 'URGENCY'
  | 'PREFERRED_RESOURCE_CONFLICT'
  | 'ALLOWED_RESOURCES'
  | 'DISALLOWED_RESOURCES'
  | 'REGION_TIME'
  | 'FAIR_WORK'
  | 'UNSERVED_JOBS'
  | 'RESOURCE_ACTIVATION'
  | 'OPEN_DAYS'
  | 'JOB_PRECEDENCE'
  | 'JOB_DAY_INDEX'
  | 'DATE_TIME_WINDOW_CONFLICT'
  | 'DATE_TIME_WINDOW_CONFLICT_SOFT'
  | 'LINKED_JOB_CONFLICT'
  | 'PLANNED_RESOURCE'
  | 'PLANNED_ARRIVAL'
  | 'PLANNED_DATE'
  | 'WORKING_TIME'
  | 'HARD_JOBS'
  | 'MAX_DRIVE_TIME'
  | 'MAX_DRIVE_TIME_JOB'
  | 'FAIR_TOTAL_WORK'
  | 'RESOURCE_PERIOD_MAX_SERVICE_TIME'
  | 'RESOURCE_PERIOD_MAX_DRIVE_TIME'
  | 'RESOURCE_PERIOD_MAX_WORK_TIME'
  | 'RESOURCE_PERIOD_MIN_SERVICE_TIME'
  | 'RESOURCE_PERIOD_MIN_DRIVE_TIME'
  | 'RESOURCE_PERIOD_MIN_WORK_TIME'
  | 'MINIMISE_TRIP_USAGE'
  | 'DELIVERY_NOT_ON_SAME_VEHICLE'
  | 'DELIVERY_BEFORE_PICKUP'
  | 'SAME_TRIP'
  | 'SEQUENCE'
  | 'SAME_TIME'
  | 'NEIGHBOR'
  | 'DIRECT_SEQUENCE'
  | 'SAME_RESOURCE'
  | 'WAIT_TIME'
  | 'DRIVE_TIME'
  | 'HOURLY_COST'
  | 'RANKING_SOFT'
  | 'FAIR_COMPLEXITY_PER_TRIP'
  | 'FAIR_COMPLEXITY_PER_RESOURCE'
  | 'RESOURCE_PERIOD_MIN_COMPLEXITY'
  | 'RESOURCE_PERIOD_MAX_COMPLEXITY';

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
  errors?: Array<VrpAPI.Message> | null;

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
  warnings?: Array<VrpAPI.Message> | null;
}

/**
 * Unresolved constraints in the solution
 */
export interface Unresolved {
  /**
   * Types of constraints that can be violated in a routing solution
   */
  constraint: OnrouteConstraint;

  /**
   * Score impact of this conflict.
   */
  score: string;
}

/**
 * Single visit for a resource. Holds information of the actual arrival time, the
 * job, the location and the latlng.
 */
export interface Visit {
  /**
   * The activity to
   */
  activity?: string | null;

  /**
   * Actual arrival date-time
   */
  arrival?: string | null;

  /**
   * Break time in seconds
   */
  breakTime?: number | null;

  /**
   * Total travel distance to that job in meters
   */
  distance?: number | null;

  /**
   * Job
   */
  job?: string | null;

  /**
   * Snapped Latlng. When we get your lat/lon in input, we snap it on our map to a
   * valid point in the graph. We return all snapped points.
   */
  latlon?: Array<number> | null;

  /**
   * Geographical Location in WGS-84
   */
  location?: VrpAPI.Location | null;

  /**
   * Total service time of that job in seconds
   */
  serviceTime?: number | null;

  /**
   * Geographical Location in WGS-84
   */
  snappedLocation?: VrpAPI.Location | null;

  /**
   * Total travel time to that job in seconds
   */
  travelTime?: number | null;

  /**
   * Wait time in seconds
   */
  waitTime?: number | null;
}

/**
 * Explains the conflicts of a certain routing solution and the unresolved
 * constraints.
 */
export interface JobExplanationResponse {
  /**
   * Score of the solution.
   */
  score: JobExplanationResponse.Score | null;

  /**
   * When `options.explanation.enabled` is set to `true`, this field will contain the
   * alternatives for the solution.The key is the job name and the value is the list
   * of assignments. Each assignment contains the resource, the date, and the score.
   * In this way, you can check the impact of the alternative on the score.
   */
  alternatives?: { [key: string]: unknown } | null;

  /**
   * Conflicts in the solution
   */
  conflicts?: JobExplanationResponse.Conflicts | null;

  /**
   * Unresolved constraints in the solution
   */
  unresolved?: JobExplanationResponse.Unresolved | null;
}

export namespace JobExplanationResponse {
  /**
   * Score of the solution.
   */
  export interface Score {
    feasible?: boolean | null;

    /**
     * The score of the constraints that are hard. This should be 0 in order to be
     * feasible.
     */
    hardScore?: number | null;

    /**
     * The score of the constraints that are medium.
     */
    mediumScore?: number | null;

    /**
     * The score of the constraints that are soft.
     */
    softScore?: number | null;
  }

  /**
   * Conflicts in the solution
   */
  export interface Conflicts {
    /**
     * Constraint type.
     */
    constraint: string;

    /**
     * Score impact of this conflict.
     */
    score: string;

    /**
     * Job id.
     */
    job?: string | null;

    relation?: string | null;

    /**
     * Resource id.
     */
    resource?: string | null;

    /**
     * Tag id.
     */
    tag?: string | null;
  }

  /**
   * Unresolved constraints in the solution
   */
  export interface Unresolved {
    /**
     * Types of constraints that can be violated in a routing solution
     */
    constraint: JobsAPI.OnrouteConstraint;

    /**
     * Score impact of this conflict.
     */
    score: string;
  }
}

export declare namespace Jobs {
  export {
    type OnRouteResponse as OnRouteResponse,
    type OnrouteConstraint as OnrouteConstraint,
    type SolviceStatusJob as SolviceStatusJob,
    type Unresolved as Unresolved,
    type Visit as Visit,
    type JobExplanationResponse as JobExplanationResponse,
  };
}
