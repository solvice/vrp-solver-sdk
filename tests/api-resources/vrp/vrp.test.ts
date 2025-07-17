// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SolviceVrpSolver from 'solvice-vrp-solver';

const client = new SolviceVrpSolver({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource vrp', () => {
  // skipped: tests are disabled for the time being
  test.skip('demo', async () => {
    const responsePromise = client.vrp.demo();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('demo: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.vrp.demo(
        { geolocation: 'geolocation', jobs: 0, radius: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SolviceVrpSolver.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('evaluate: only required params', async () => {
    const responsePromise = client.vrp.evaluate({
      jobs: [{ name: '1' }, { name: '2' }],
      resources: [{ name: '1', shifts: [{ from: '2023-01-13T08:00:00Z', to: '2023-01-13T17:00:00Z' }] }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('evaluate: required and optional params', async () => {
    const response = await client.vrp.evaluate({
      jobs: [
        {
          name: '1',
          allowedResources: ['string'],
          complexity: 1,
          disallowedResources: ['string'],
          duration: 3600,
          durationSquash: 30,
          hard: true,
          hardWeight: 1,
          initialArrival: '2023-01-13T09:00',
          initialResource: 'initialResource',
          load: [5, 10],
          location: { latitude: 50.0987624, longitude: 4.93849204 },
          padding: 300,
          plannedArrival: '2023-01-13T09:00:00Z',
          plannedDate: '2022-03-10',
          plannedResource: 'plannedResource',
          priority: 100,
          rankings: [{ name: 'certified-technician', ranking: 5 }],
          resumable: true,
          tags: [{ name: 'certified-technician', hard: false, weight: 300 }],
          urgency: 100,
          windows: [{ from: '2024-01-15T09:00:00Z', to: '2024-01-15T17:00:00Z', hard: true, weight: 1 }],
        },
        {
          name: '2',
          allowedResources: ['string'],
          complexity: 1,
          disallowedResources: ['string'],
          duration: 3600,
          durationSquash: 30,
          hard: true,
          hardWeight: 1,
          initialArrival: '2023-01-13T09:00',
          initialResource: 'initialResource',
          load: [5, 10],
          location: { latitude: 50.0987624, longitude: 4.93849204 },
          padding: 300,
          plannedArrival: '2023-01-13T09:00:00Z',
          plannedDate: '2022-03-10',
          plannedResource: 'plannedResource',
          priority: 100,
          rankings: [{ name: 'certified-technician', ranking: 5 }],
          resumable: true,
          tags: [{ name: 'certified-technician', hard: false, weight: 300 }],
          urgency: 100,
          windows: [{ from: '2024-01-15T09:00:00Z', to: '2024-01-15T17:00:00Z', hard: true, weight: 1 }],
        },
      ],
      resources: [
        {
          name: '1',
          shifts: [
            {
              from: '2023-01-13T08:00:00Z',
              to: '2023-01-13T17:00:00Z',
              breaks: [{ type: 'WINDOWED' }],
              end: { latitude: 51.05, longitude: 3.72 },
              ignoreTravelTimeFromLastJob: false,
              ignoreTravelTimeToFirstJob: false,
              overtime: {},
              overtimeEnd: '2023-01-13T19:00:00Z',
              start: { latitude: 51.0543, longitude: 3.7174 },
              tags: ['delivery', 'installation'],
            },
          ],
          capacity: [500, 200],
          category: 'CAR',
          end: { latitude: 50.0987624, longitude: 4.93849204 },
          hourlyCost: 60,
          maxDriveTime: 0,
          maxDriveTimeInSeconds: {},
          maxDriveTimeJob: 0,
          region: { latitude: 50.0987624, longitude: 4.93849204 },
          rules: [
            {
              maxDriveTime: 10800,
              maxJobComplexity: 0,
              maxServiceTime: 21600,
              maxWorkTime: 28800,
              minDriveTime: 3600,
              minJobComplexity: 0,
              minServiceTime: 7200,
              minWorkTime: 14400,
              period: {
                end: '2007-12-31T17:00:00',
                from: '2024-01-01T08:00:00Z',
                to: '2024-01-07T17:00:00Z',
              },
            },
          ],
          start: { latitude: 50.0987624, longitude: 4.93849204 },
          tags: ['string'],
        },
      ],
      hook: 'https://example.com',
      label: 'label',
      options: {
        euclidian: false,
        explanation: { enabled: true, filterHardConstraints: true, onlyUnassigned: true },
        fairComplexityPerResource: true,
        fairComplexityPerTrip: true,
        fairWorkloadPerResource: false,
        fairWorkloadPerTrip: false,
        maxSuggestions: 3,
        minimizeResources: true,
        onlyFeasibleSuggestions: true,
        partialPlanning: true,
        polylines: true,
        routingEngine: 'OSM',
        snapUnit: 300,
        traffic: 1.1,
        workloadSensitivity: 0.1,
      },
      relations: [
        {
          jobs: ['Job-1', 'Job-2'],
          timeInterval: 'FROM_ARRIVAL',
          type: 'SEQUENCE',
          maxTimeInterval: 3600,
          maxWaitingTime: 1200,
          minTimeInterval: 0,
          partialPlanning: false,
          resource: 'vehicle-1',
          tags: ['urgent'],
        },
      ],
      weights: {
        allowedResourcesWeight: 500,
        asapWeight: 5,
        driveTimeWeight: 1,
        minimizeResourcesWeight: 0,
        plannedWeight: 1000,
        priorityWeight: 100,
        rankingWeight: 10,
        travelTimeWeight: 1,
        urgencyWeight: 50,
        waitTimeWeight: 1,
        workloadSpreadWeight: 10,
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('solve: only required params', async () => {
    const responsePromise = client.vrp.solve({
      jobs: [{ name: '1' }, { name: '2' }],
      resources: [{ name: '1', shifts: [{ from: '2023-01-13T08:00:00Z', to: '2023-01-13T17:00:00Z' }] }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('solve: required and optional params', async () => {
    const response = await client.vrp.solve({
      jobs: [
        {
          name: '1',
          allowedResources: ['string'],
          complexity: 1,
          disallowedResources: ['string'],
          duration: 3600,
          durationSquash: 30,
          hard: true,
          hardWeight: 1,
          initialArrival: '2023-01-13T09:00',
          initialResource: 'initialResource',
          load: [5, 10],
          location: { latitude: 50.0987624, longitude: 4.93849204 },
          padding: 300,
          plannedArrival: '2023-01-13T09:00:00Z',
          plannedDate: '2022-03-10',
          plannedResource: 'plannedResource',
          priority: 100,
          rankings: [{ name: 'certified-technician', ranking: 5 }],
          resumable: true,
          tags: [{ name: 'certified-technician', hard: false, weight: 300 }],
          urgency: 100,
          windows: [{ from: '2024-01-15T09:00:00Z', to: '2024-01-15T17:00:00Z', hard: true, weight: 1 }],
        },
        {
          name: '2',
          allowedResources: ['string'],
          complexity: 1,
          disallowedResources: ['string'],
          duration: 3600,
          durationSquash: 30,
          hard: true,
          hardWeight: 1,
          initialArrival: '2023-01-13T09:00',
          initialResource: 'initialResource',
          load: [5, 10],
          location: { latitude: 50.0987624, longitude: 4.93849204 },
          padding: 300,
          plannedArrival: '2023-01-13T09:00:00Z',
          plannedDate: '2022-03-10',
          plannedResource: 'plannedResource',
          priority: 100,
          rankings: [{ name: 'certified-technician', ranking: 5 }],
          resumable: true,
          tags: [{ name: 'certified-technician', hard: false, weight: 300 }],
          urgency: 100,
          windows: [{ from: '2024-01-15T09:00:00Z', to: '2024-01-15T17:00:00Z', hard: true, weight: 1 }],
        },
      ],
      resources: [
        {
          name: '1',
          shifts: [
            {
              from: '2023-01-13T08:00:00Z',
              to: '2023-01-13T17:00:00Z',
              breaks: [{ type: 'WINDOWED' }],
              end: { latitude: 51.05, longitude: 3.72 },
              ignoreTravelTimeFromLastJob: false,
              ignoreTravelTimeToFirstJob: false,
              overtime: {},
              overtimeEnd: '2023-01-13T19:00:00Z',
              start: { latitude: 51.0543, longitude: 3.7174 },
              tags: ['delivery', 'installation'],
            },
          ],
          capacity: [500, 200],
          category: 'CAR',
          end: { latitude: 50.0987624, longitude: 4.93849204 },
          hourlyCost: 60,
          maxDriveTime: 0,
          maxDriveTimeInSeconds: {},
          maxDriveTimeJob: 0,
          region: { latitude: 50.0987624, longitude: 4.93849204 },
          rules: [
            {
              maxDriveTime: 10800,
              maxJobComplexity: 0,
              maxServiceTime: 21600,
              maxWorkTime: 28800,
              minDriveTime: 3600,
              minJobComplexity: 0,
              minServiceTime: 7200,
              minWorkTime: 14400,
              period: {
                end: '2007-12-31T17:00:00',
                from: '2024-01-01T08:00:00Z',
                to: '2024-01-07T17:00:00Z',
              },
            },
          ],
          start: { latitude: 50.0987624, longitude: 4.93849204 },
          tags: ['string'],
        },
      ],
      millis: 'millis',
      hook: 'https://example.com',
      label: 'label',
      options: {
        euclidian: false,
        explanation: { enabled: true, filterHardConstraints: true, onlyUnassigned: true },
        fairComplexityPerResource: true,
        fairComplexityPerTrip: true,
        fairWorkloadPerResource: false,
        fairWorkloadPerTrip: false,
        maxSuggestions: 3,
        minimizeResources: true,
        onlyFeasibleSuggestions: true,
        partialPlanning: true,
        polylines: true,
        routingEngine: 'OSM',
        snapUnit: 300,
        traffic: 1.1,
        workloadSensitivity: 0.1,
      },
      relations: [
        {
          jobs: ['Job-1', 'Job-2'],
          timeInterval: 'FROM_ARRIVAL',
          type: 'SEQUENCE',
          maxTimeInterval: 3600,
          maxWaitingTime: 1200,
          minTimeInterval: 0,
          partialPlanning: false,
          resource: 'vehicle-1',
          tags: ['urgent'],
        },
      ],
      weights: {
        allowedResourcesWeight: 500,
        asapWeight: 5,
        driveTimeWeight: 1,
        minimizeResourcesWeight: 0,
        plannedWeight: 1000,
        priorityWeight: 100,
        rankingWeight: 10,
        travelTimeWeight: 1,
        urgencyWeight: 50,
        waitTimeWeight: 1,
        workloadSpreadWeight: 10,
      },
      instance: 'instance',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('suggest: only required params', async () => {
    const responsePromise = client.vrp.suggest({
      jobs: [{ name: '1' }, { name: '2' }],
      resources: [{ name: '1', shifts: [{ from: '2023-01-13T08:00:00Z', to: '2023-01-13T17:00:00Z' }] }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('suggest: required and optional params', async () => {
    const response = await client.vrp.suggest({
      jobs: [
        {
          name: '1',
          allowedResources: ['string'],
          complexity: 1,
          disallowedResources: ['string'],
          duration: 3600,
          durationSquash: 30,
          hard: true,
          hardWeight: 1,
          initialArrival: '2023-01-13T09:00',
          initialResource: 'initialResource',
          load: [5, 10],
          location: { latitude: 50.0987624, longitude: 4.93849204 },
          padding: 300,
          plannedArrival: '2023-01-13T09:00:00Z',
          plannedDate: '2022-03-10',
          plannedResource: 'plannedResource',
          priority: 100,
          rankings: [{ name: 'certified-technician', ranking: 5 }],
          resumable: true,
          tags: [{ name: 'certified-technician', hard: false, weight: 300 }],
          urgency: 100,
          windows: [{ from: '2024-01-15T09:00:00Z', to: '2024-01-15T17:00:00Z', hard: true, weight: 1 }],
        },
        {
          name: '2',
          allowedResources: ['string'],
          complexity: 1,
          disallowedResources: ['string'],
          duration: 3600,
          durationSquash: 30,
          hard: true,
          hardWeight: 1,
          initialArrival: '2023-01-13T09:00',
          initialResource: 'initialResource',
          load: [5, 10],
          location: { latitude: 50.0987624, longitude: 4.93849204 },
          padding: 300,
          plannedArrival: '2023-01-13T09:00:00Z',
          plannedDate: '2022-03-10',
          plannedResource: 'plannedResource',
          priority: 100,
          rankings: [{ name: 'certified-technician', ranking: 5 }],
          resumable: true,
          tags: [{ name: 'certified-technician', hard: false, weight: 300 }],
          urgency: 100,
          windows: [{ from: '2024-01-15T09:00:00Z', to: '2024-01-15T17:00:00Z', hard: true, weight: 1 }],
        },
      ],
      resources: [
        {
          name: '1',
          shifts: [
            {
              from: '2023-01-13T08:00:00Z',
              to: '2023-01-13T17:00:00Z',
              breaks: [{ type: 'WINDOWED' }],
              end: { latitude: 51.05, longitude: 3.72 },
              ignoreTravelTimeFromLastJob: false,
              ignoreTravelTimeToFirstJob: false,
              overtime: {},
              overtimeEnd: '2023-01-13T19:00:00Z',
              start: { latitude: 51.0543, longitude: 3.7174 },
              tags: ['delivery', 'installation'],
            },
          ],
          capacity: [500, 200],
          category: 'CAR',
          end: { latitude: 50.0987624, longitude: 4.93849204 },
          hourlyCost: 60,
          maxDriveTime: 0,
          maxDriveTimeInSeconds: {},
          maxDriveTimeJob: 0,
          region: { latitude: 50.0987624, longitude: 4.93849204 },
          rules: [
            {
              maxDriveTime: 10800,
              maxJobComplexity: 0,
              maxServiceTime: 21600,
              maxWorkTime: 28800,
              minDriveTime: 3600,
              minJobComplexity: 0,
              minServiceTime: 7200,
              minWorkTime: 14400,
              period: {
                end: '2007-12-31T17:00:00',
                from: '2024-01-01T08:00:00Z',
                to: '2024-01-07T17:00:00Z',
              },
            },
          ],
          start: { latitude: 50.0987624, longitude: 4.93849204 },
          tags: ['string'],
        },
      ],
      millis: 'millis',
      hook: 'https://example.com',
      label: 'label',
      options: {
        euclidian: false,
        explanation: { enabled: true, filterHardConstraints: true, onlyUnassigned: true },
        fairComplexityPerResource: true,
        fairComplexityPerTrip: true,
        fairWorkloadPerResource: false,
        fairWorkloadPerTrip: false,
        maxSuggestions: 3,
        minimizeResources: true,
        onlyFeasibleSuggestions: true,
        partialPlanning: true,
        polylines: true,
        routingEngine: 'OSM',
        snapUnit: 300,
        traffic: 1.1,
        workloadSensitivity: 0.1,
      },
      relations: [
        {
          jobs: ['Job-1', 'Job-2'],
          timeInterval: 'FROM_ARRIVAL',
          type: 'SEQUENCE',
          maxTimeInterval: 3600,
          maxWaitingTime: 1200,
          minTimeInterval: 0,
          partialPlanning: false,
          resource: 'vehicle-1',
          tags: ['urgent'],
        },
      ],
      weights: {
        allowedResourcesWeight: 500,
        asapWeight: 5,
        driveTimeWeight: 1,
        minimizeResourcesWeight: 0,
        plannedWeight: 1000,
        priorityWeight: 100,
        rankingWeight: 10,
        travelTimeWeight: 1,
        urgencyWeight: 50,
        waitTimeWeight: 1,
        workloadSpreadWeight: 10,
      },
    });
  });
});
