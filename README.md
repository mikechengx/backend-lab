# Backend Lab

[English](README.md) | [简体中文](README.zh-CN.md)

A browser-based learning lab for understanding backend development through guided experiments. Start with business rules, follow a request through the application, and inspect how operations change data.

## Start learning

Open **`index.html`** in a modern browser. No installation, account, API key, server, database, or build step is required.

You can also serve the directory locally:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

The learning interface is currently in Simplified Chinese. This repository includes English and Chinese documentation.

## What you can learn

- **Backend responsibilities:** business rules, input contracts, identity, authorization, data ownership, and reliable outcomes.
- **Request lifecycle:** step through eight stages and compare six success and failure scenarios.
- **Code and data structure:** explore API entry points, schemas, authentication, services, repositories, and tests.
- **API practice:** six guided steps and five challenges using a simulated Todo API.
- **Troubleshooting:** ten cases covering validation, expired credentials, routing, permissions, database connectivity, exceptions, timeouts, duplicate requests, concurrency, and stale caches.
- **Deeper concepts:** eight topics covering contracts, authorization, transactions, observability, query performance, idempotency, concurrency, and caching.

The **Developer Toolbox** is a separate area for Linux, Shell, and Git practice. It contains 44 foundational tasks plus 74 steps across ten practical scenarios:

1. Explore an unfamiliar project.
2. Filter, count, and save error logs.
3. Back up, change, load, and roll back configuration.
4. Diagnose script permission errors.
5. Start, inspect, and stop a service.
6. Diagnose port mismatches and distinguish connection failures from HTTP errors.
7. Create, inspect, extract, and verify file archives.
8. Automate checks with a script and save a report.
9. Identify a large offline log and verify space changes.
10. Sort, group, and count repeated events.

## Guided learning

The first pass displays the complete command and fills it into the simulated terminal. Use **Run this example**, inspect the result, and advance after the task passes. A second mode keeps the example visible while you type it yourself.

For example, to print a message, enter the command:

```sh
echo "hello backend"
```

The words `hello backend` are the output, not a command on their own. Do not type the terminal prompt or `$`.

Troubleshooting follows a repeatable process: reproduce, inspect evidence, propose a cause, change one factor, rerun, and verify both positive and negative cases. An apparent fix such as disabling authorization fails the relevant regression checks.

## Simulation boundaries

All terminal commands, services, API calls, database state, query plans, timings, locks, archives, and caches are educational models inside the browser. They do not execute commands on your computer or contact a real service. Supported commands form a documented subset, not a complete Linux or Bash environment.

Each troubleshooting rerun starts from the same case snapshot. Command-line exercises reset their virtual workspace when a course is restarted or changed. Completion records and troubleshooting notes use browser `localStorage`; clearing browser data removes them. The basic Todo API resets its in-memory data on reload.

The diagrams and pseudocode explain design choices. They are not a production-ready backend implementation, and model checks do not prove real-world security, performance, or concurrency guarantees.

## Project structure

```text
backend-lab/
├── index.html             Complete standalone learning app
├── README.md              English documentation
├── README.zh-CN.md        Chinese documentation
├── LICENSE                MIT license
├── scripts/               Validation and test runner
└── tests/                 Browser interaction checks
```

The standalone HTML intentionally bundles its styles, curriculum, and simulators so it can be opened offline. Changes should preserve the separation between the backend learning path and the optional toolbox.

## Validate

Use Node.js 22 or newer and an installed Chrome or Chromium browser:

```sh
node scripts/check.cjs
node scripts/test.cjs
```

Set `CHROME_BIN` if the browser executable is not discoverable. The browser checks cover the API, guided lessons, 74 workflow steps, request lifecycle scenarios, troubleshooting fixes, and mobile layouts. No npm packages are required.

## Learning references

The app links to primary documentation, including [MDN HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP), [FastAPI](https://fastapi.tiangolo.com/tutorial/), [PostgreSQL](https://www.postgresql.org/docs/current/tutorial.html), [GNU Bash](https://www.gnu.org/software/bash/manual/), [GNU tar](https://www.gnu.org/software/tar/manual/), and [Pro Git](https://git-scm.com/book/en/v2).

## License

Released under the [MIT License](LICENSE).
