(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    "./src/docs/GanttChart.mdx": function(e, n, t) {
      "use strict";
      t.r(n);
      var a = t("./node_modules/react/index.js"),
        l = t.n(a),
        r = t("./node_modules/@mdx-js/tag/dist/index.js"),
        i = t("./node_modules/docz/dist/index.m.js"),
        p = (t("./node_modules/react-component-component/es/index.js"),
        t("./src/index.tsx"));
      n.default = function(e) {
        var n = e.components;
        return l.a.createElement(
          r.MDXTag,
          { name: "wrapper", components: n },
          l.a.createElement(
            r.MDXTag,
            { name: "h2", components: n, props: { id: "simple-example" } },
            l.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#simple-example" }
              },
              l.a.createElement(
                r.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Simple Example"
          ),
          l.a.createElement(
            i.d,
            {
              __position: 0,
              __code:
                "<Chart\n  width={'100%'}\n  height={'400px'}\n  chartType=\"Gantt\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      { type: 'string', label: 'Task ID' },\n      { type: 'string', label: 'Task Name' },\n      { type: 'date', label: 'Start Date' },\n      { type: 'date', label: 'End Date' },\n      { type: 'number', label: 'Duration' },\n      { type: 'number', label: 'Percent Complete' },\n      { type: 'string', label: 'Dependencies' },\n    ],\n    [\n      'Research',\n      'Find sources',\n      new Date(2015, 0, 1),\n      new Date(2015, 0, 5),\n      null,\n      100,\n      null,\n    ],\n    [\n      'Write',\n      'Write paper',\n      null,\n      new Date(2015, 0, 9),\n      3 * 24 * 60 * 60 * 1000,\n      25,\n      'Research,Outline',\n    ],\n    [\n      'Cite',\n      'Create bibliography',\n      null,\n      new Date(2015, 0, 7),\n      1 * 24 * 60 * 60 * 1000,\n      20,\n      'Research',\n    ],\n    [\n      'Complete',\n      'Hand in paper',\n      null,\n      new Date(2015, 0, 10),\n      1 * 24 * 60 * 60 * 1000,\n      0,\n      'Cite,Write',\n    ],\n    [\n      'Outline',\n      'Outline paper',\n      null,\n      new Date(2015, 0, 6),\n      1 * 24 * 60 * 60 * 1000,\n      100,\n      'Research',\n    ],\n  ]}\n/>"
            },
            l.a.createElement(p.a, {
              width: "100%",
              height: "400px",
              chartType: "Gantt",
              loader: l.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "string", label: "Task ID" },
                  { type: "string", label: "Task Name" },
                  { type: "date", label: "Start Date" },
                  { type: "date", label: "End Date" },
                  { type: "number", label: "Duration" },
                  { type: "number", label: "Percent Complete" },
                  { type: "string", label: "Dependencies" }
                ],
                [
                  "Research",
                  "Find sources",
                  new Date(2015, 0, 1),
                  new Date(2015, 0, 5),
                  null,
                  100,
                  null
                ],
                [
                  "Write",
                  "Write paper",
                  null,
                  new Date(2015, 0, 9),
                  2592e5,
                  25,
                  "Research,Outline"
                ],
                [
                  "Cite",
                  "Create bibliography",
                  null,
                  new Date(2015, 0, 7),
                  864e5,
                  20,
                  "Research"
                ],
                [
                  "Complete",
                  "Hand in paper",
                  null,
                  new Date(2015, 0, 10),
                  864e5,
                  0,
                  "Cite,Write"
                ],
                [
                  "Outline",
                  "Outline paper",
                  null,
                  new Date(2015, 0, 6),
                  864e5,
                  100,
                  "Research"
                ]
              ]
            })
          ),
          l.a.createElement(
            r.MDXTag,
            { name: "h2", components: n, props: { id: "no-dependencies" } },
            l.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#no-dependencies" }
              },
              l.a.createElement(
                r.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "No Dependencies"
          ),
          l.a.createElement(
            i.d,
            {
              __position: 1,
              __code:
                "<Chart\n  width={'100%'}\n  height={'400px'}\n  chartType=\"Gantt\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      { type: 'string', label: 'Task ID' },\n      { type: 'string', label: 'Task Name' },\n      { type: 'string', label: 'Resource' },\n      { type: 'date', label: 'Start Date' },\n      { type: 'date', label: 'End Date' },\n      { type: 'number', label: 'Duration' },\n      { type: 'number', label: 'Percent Complete' },\n      { type: 'string', label: 'Dependencies' },\n    ],\n    [\n      '2014Spring',\n      'Spring 2014',\n      'spring',\n      new Date(2014, 2, 22),\n      new Date(2014, 5, 20),\n      null,\n      100,\n      null,\n    ],\n    [\n      '2014Summer',\n      'Summer 2014',\n      'summer',\n      new Date(2014, 5, 21),\n      new Date(2014, 8, 20),\n      null,\n      100,\n      null,\n    ],\n    [\n      '2014Autumn',\n      'Autumn 2014',\n      'autumn',\n      new Date(2014, 8, 21),\n      new Date(2014, 11, 20),\n      null,\n      100,\n      null,\n    ],\n    [\n      '2014Winter',\n      'Winter 2014',\n      'winter',\n      new Date(2014, 11, 21),\n      new Date(2015, 2, 21),\n      null,\n      100,\n      null,\n    ],\n    [\n      '2015Spring',\n      'Spring 2015',\n      'spring',\n      new Date(2015, 2, 22),\n      new Date(2015, 5, 20),\n      null,\n      50,\n      null,\n    ],\n    [\n      '2015Summer',\n      'Summer 2015',\n      'summer',\n      new Date(2015, 5, 21),\n      new Date(2015, 8, 20),\n      null,\n      0,\n      null,\n    ],\n    [\n      '2015Autumn',\n      'Autumn 2015',\n      'autumn',\n      new Date(2015, 8, 21),\n      new Date(2015, 11, 20),\n      null,\n      0,\n      null,\n    ],\n    [\n      '2015Winter',\n      'Winter 2015',\n      'winter',\n      new Date(2015, 11, 21),\n      new Date(2016, 2, 21),\n      null,\n      0,\n      null,\n    ],\n    [\n      'Football',\n      'Football Season',\n      'sports',\n      new Date(2014, 8, 4),\n      new Date(2015, 1, 1),\n      null,\n      100,\n      null,\n    ],\n    [\n      'Baseball',\n      'Baseball Season',\n      'sports',\n      new Date(2015, 2, 31),\n      new Date(2015, 9, 20),\n      null,\n      14,\n      null,\n    ],\n    [\n      'Basketball',\n      'Basketball Season',\n      'sports',\n      new Date(2014, 9, 28),\n      new Date(2015, 5, 20),\n      null,\n      86,\n      null,\n    ],\n    [\n      'Hockey',\n      'Hockey Season',\n      'sports',\n      new Date(2014, 9, 8),\n      new Date(2015, 5, 21),\n      null,\n      89,\n      null,\n    ],\n  ]}\n  options={{\n    height: 400,\n    gantt: {\n      trackHeight: 30,\n    },\n  }}\n/>"
            },
            l.a.createElement(p.a, {
              width: "100%",
              height: "400px",
              chartType: "Gantt",
              loader: l.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "string", label: "Task ID" },
                  { type: "string", label: "Task Name" },
                  { type: "string", label: "Resource" },
                  { type: "date", label: "Start Date" },
                  { type: "date", label: "End Date" },
                  { type: "number", label: "Duration" },
                  { type: "number", label: "Percent Complete" },
                  { type: "string", label: "Dependencies" }
                ],
                [
                  "2014Spring",
                  "Spring 2014",
                  "spring",
                  new Date(2014, 2, 22),
                  new Date(2014, 5, 20),
                  null,
                  100,
                  null
                ],
                [
                  "2014Summer",
                  "Summer 2014",
                  "summer",
                  new Date(2014, 5, 21),
                  new Date(2014, 8, 20),
                  null,
                  100,
                  null
                ],
                [
                  "2014Autumn",
                  "Autumn 2014",
                  "autumn",
                  new Date(2014, 8, 21),
                  new Date(2014, 11, 20),
                  null,
                  100,
                  null
                ],
                [
                  "2014Winter",
                  "Winter 2014",
                  "winter",
                  new Date(2014, 11, 21),
                  new Date(2015, 2, 21),
                  null,
                  100,
                  null
                ],
                [
                  "2015Spring",
                  "Spring 2015",
                  "spring",
                  new Date(2015, 2, 22),
                  new Date(2015, 5, 20),
                  null,
                  50,
                  null
                ],
                [
                  "2015Summer",
                  "Summer 2015",
                  "summer",
                  new Date(2015, 5, 21),
                  new Date(2015, 8, 20),
                  null,
                  0,
                  null
                ],
                [
                  "2015Autumn",
                  "Autumn 2015",
                  "autumn",
                  new Date(2015, 8, 21),
                  new Date(2015, 11, 20),
                  null,
                  0,
                  null
                ],
                [
                  "2015Winter",
                  "Winter 2015",
                  "winter",
                  new Date(2015, 11, 21),
                  new Date(2016, 2, 21),
                  null,
                  0,
                  null
                ],
                [
                  "Football",
                  "Football Season",
                  "sports",
                  new Date(2014, 8, 4),
                  new Date(2015, 1, 1),
                  null,
                  100,
                  null
                ],
                [
                  "Baseball",
                  "Baseball Season",
                  "sports",
                  new Date(2015, 2, 31),
                  new Date(2015, 9, 20),
                  null,
                  14,
                  null
                ],
                [
                  "Basketball",
                  "Basketball Season",
                  "sports",
                  new Date(2014, 9, 28),
                  new Date(2015, 5, 20),
                  null,
                  86,
                  null
                ],
                [
                  "Hockey",
                  "Hockey Season",
                  "sports",
                  new Date(2014, 9, 8),
                  new Date(2015, 5, 21),
                  null,
                  89,
                  null
                ]
              ],
              options: { height: 400, gantt: { trackHeight: 30 } }
            })
          ),
          l.a.createElement(
            r.MDXTag,
            { name: "h2", components: n, props: { id: "grouping-resources" } },
            l.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#grouping-resources" }
              },
              l.a.createElement(
                r.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Grouping Resources"
          ),
          l.a.createElement(
            i.d,
            {
              __position: 2,
              __code:
                "<Chart\n  width={'100%'}\n  height={'400px'}\n  chartType=\"Gantt\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      { type: 'string', label: 'Task ID' },\n      { type: 'string', label: 'Task Name' },\n      { type: 'string', label: 'Resource' },\n      { type: 'date', label: 'Start Date' },\n      { type: 'date', label: 'End Date' },\n      { type: 'number', label: 'Duration' },\n      { type: 'number', label: 'Percent Complete' },\n      { type: 'string', label: 'Dependencies' },\n    ],\n    [\n      'Research',\n      'Find sources',\n      null,\n      new Date(2015, 0, 1),\n      new Date(2015, 0, 5),\n      null,\n      100,\n      null,\n    ],\n    [\n      'Write',\n      'Write paper',\n      'write',\n      null,\n      new Date(2015, 0, 9),\n      3 * 24 * 60 * 60 * 1000,\n      25,\n      'Research,Outline',\n    ],\n    [\n      'Cite',\n      'Create bibliography',\n      'write',\n      null,\n      new Date(2015, 0, 7),\n      1 * 24 * 60 * 60 * 1000,\n      20,\n      'Research',\n    ],\n    [\n      'Complete',\n      'Hand in paper',\n      'complete',\n      null,\n      new Date(2015, 0, 10),\n      1 * 24 * 60 * 60 * 1000,\n      0,\n      'Cite,Write',\n    ],\n    [\n      'Outline',\n      'Outline paper',\n      'write',\n      null,\n      new Date(2015, 0, 6),\n      1 * 24 * 60 * 60 * 1000,\n      100,\n      'Research',\n    ],\n  ]}\n/>"
            },
            l.a.createElement(p.a, {
              width: "100%",
              height: "400px",
              chartType: "Gantt",
              loader: l.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "string", label: "Task ID" },
                  { type: "string", label: "Task Name" },
                  { type: "string", label: "Resource" },
                  { type: "date", label: "Start Date" },
                  { type: "date", label: "End Date" },
                  { type: "number", label: "Duration" },
                  { type: "number", label: "Percent Complete" },
                  { type: "string", label: "Dependencies" }
                ],
                [
                  "Research",
                  "Find sources",
                  null,
                  new Date(2015, 0, 1),
                  new Date(2015, 0, 5),
                  null,
                  100,
                  null
                ],
                [
                  "Write",
                  "Write paper",
                  "write",
                  null,
                  new Date(2015, 0, 9),
                  2592e5,
                  25,
                  "Research,Outline"
                ],
                [
                  "Cite",
                  "Create bibliography",
                  "write",
                  null,
                  new Date(2015, 0, 7),
                  864e5,
                  20,
                  "Research"
                ],
                [
                  "Complete",
                  "Hand in paper",
                  "complete",
                  null,
                  new Date(2015, 0, 10),
                  864e5,
                  0,
                  "Cite,Write"
                ],
                [
                  "Outline",
                  "Outline paper",
                  "write",
                  null,
                  new Date(2015, 0, 6),
                  864e5,
                  100,
                  "Research"
                ]
              ]
            })
          ),
          l.a.createElement(
            r.MDXTag,
            {
              name: "h2",
              components: n,
              props: { id: "computed-start-end-from-duration" }
            },
            l.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: {
                  "aria-hidden": !0,
                  href: "#computed-start-end-from-duration"
                }
              },
              l.a.createElement(
                r.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Computed Start End From Duration"
          ),
          l.a.createElement(
            i.d,
            {
              __position: 3,
              __code:
                "<Chart\n  width={'100%'}\n  height={'400px'}\n  chartType=\"Gantt\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      { type: 'string', label: 'Task ID' },\n      { type: 'string', label: 'Task Name' },\n      { type: 'string', label: 'Resource' },\n      { type: 'date', label: 'Start Date' },\n      { type: 'date', label: 'End Date' },\n      { type: 'number', label: 'Duration' },\n      { type: 'number', label: 'Percent Complete' },\n      { type: 'string', label: 'Dependencies' },\n    ],\n    [\n      'toTrain',\n      'Walk to train stop',\n      'walk',\n      null,\n      null,\n      5 * 60 * 1000,\n      100,\n      null,\n    ],\n    [\n      'music',\n      'Listen to music',\n      'music',\n      null,\n      null,\n      70 * 60 * 1000,\n      100,\n      null,\n    ],\n    [\n      'wait',\n      'Wait for train',\n      'wait',\n      null,\n      null,\n      10 * 60 * 1000,\n      100,\n      'toTrain',\n    ],\n    ['train', 'Train ride', 'train', null, null, 45 * 60 * 1000, 75, 'wait'],\n    [\n      'toWork',\n      'Walk to work',\n      'walk',\n      null,\n      null,\n      10 * 60 * 1000,\n      0,\n      'train',\n    ],\n    [\n      'work',\n      'Sit down at desk',\n      null,\n      null,\n      null,\n      2 * 60 * 1000,\n      0,\n      'toWork',\n    ],\n  ]}\n  options={{\n    height: 275,\n    gantt: {\n      defaultStartDateMillis: new Date(2015, 3, 28),\n    },\n  }}\n/>"
            },
            l.a.createElement(p.a, {
              width: "100%",
              height: "400px",
              chartType: "Gantt",
              loader: l.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "string", label: "Task ID" },
                  { type: "string", label: "Task Name" },
                  { type: "string", label: "Resource" },
                  { type: "date", label: "Start Date" },
                  { type: "date", label: "End Date" },
                  { type: "number", label: "Duration" },
                  { type: "number", label: "Percent Complete" },
                  { type: "string", label: "Dependencies" }
                ],
                [
                  "toTrain",
                  "Walk to train stop",
                  "walk",
                  null,
                  null,
                  3e5,
                  100,
                  null
                ],
                [
                  "music",
                  "Listen to music",
                  "music",
                  null,
                  null,
                  42e5,
                  100,
                  null
                ],
                [
                  "wait",
                  "Wait for train",
                  "wait",
                  null,
                  null,
                  6e5,
                  100,
                  "toTrain"
                ],
                ["train", "Train ride", "train", null, null, 27e5, 75, "wait"],
                ["toWork", "Walk to work", "walk", null, null, 6e5, 0, "train"],
                [
                  "work",
                  "Sit down at desk",
                  null,
                  null,
                  null,
                  12e4,
                  0,
                  "toWork"
                ]
              ],
              options: {
                height: 275,
                gantt: { defaultStartDateMillis: new Date(2015, 3, 28) }
              }
            })
          ),
          l.a.createElement(
            r.MDXTag,
            { name: "h2", components: n, props: { id: "critical-path" } },
            l.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#critical-path" }
              },
              l.a.createElement(
                r.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Critical Path"
          ),
          l.a.createElement(
            i.d,
            {
              __position: 4,
              __code:
                "<Chart\n  width={'100%'}\n  height={'275'}\n  chartType=\"Gantt\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      { type: 'string', label: 'Task ID' },\n      { type: 'string', label: 'Task Name' },\n      { type: 'string', label: 'Resource' },\n      { type: 'date', label: 'Start Date' },\n      { type: 'date', label: 'End Date' },\n      { type: 'number', label: 'Duration' },\n      { type: 'number', label: 'Percent Complete' },\n      { type: 'string', label: 'Dependencies' },\n    ],\n    [\n      'Research',\n      'Find sources',\n      null,\n      new Date(2015, 0, 1),\n      new Date(2015, 0, 5),\n      null,\n      100,\n      null,\n    ],\n    [\n      'Write',\n      'Write paper',\n      'write',\n      null,\n      new Date(2015, 0, 9),\n      3 * 24 * 60 * 60 * 1000,\n      25,\n      'Research,Outline',\n    ],\n    [\n      'Cite',\n      'Create bibliography',\n      'write',\n      null,\n      new Date(2015, 0, 7),\n      1 * 24 * 60 * 60 * 1000,\n      20,\n      'Research',\n    ],\n    [\n      'Complete',\n      'Hand in paper',\n      'complete',\n      null,\n      new Date(2015, 0, 10),\n      1 * 24 * 60 * 60 * 1000,\n      0,\n      'Cite,Write',\n    ],\n    [\n      'Outline',\n      'Outline paper',\n      'write',\n      null,\n      new Date(2015, 0, 6),\n      1 * 24 * 60 * 60 * 1000,\n      100,\n      'Research',\n    ],\n  ]}\n  options={{\n    gantt: {\n      criticalPathEnabled: true,\n      criticalPathStyle: {\n        stroke: '#e64a19',\n        strokeWidth: 5,\n      },\n    },\n  }}\n/>"
            },
            l.a.createElement(p.a, {
              width: "100%",
              height: "275",
              chartType: "Gantt",
              loader: l.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "string", label: "Task ID" },
                  { type: "string", label: "Task Name" },
                  { type: "string", label: "Resource" },
                  { type: "date", label: "Start Date" },
                  { type: "date", label: "End Date" },
                  { type: "number", label: "Duration" },
                  { type: "number", label: "Percent Complete" },
                  { type: "string", label: "Dependencies" }
                ],
                [
                  "Research",
                  "Find sources",
                  null,
                  new Date(2015, 0, 1),
                  new Date(2015, 0, 5),
                  null,
                  100,
                  null
                ],
                [
                  "Write",
                  "Write paper",
                  "write",
                  null,
                  new Date(2015, 0, 9),
                  2592e5,
                  25,
                  "Research,Outline"
                ],
                [
                  "Cite",
                  "Create bibliography",
                  "write",
                  null,
                  new Date(2015, 0, 7),
                  864e5,
                  20,
                  "Research"
                ],
                [
                  "Complete",
                  "Hand in paper",
                  "complete",
                  null,
                  new Date(2015, 0, 10),
                  864e5,
                  0,
                  "Cite,Write"
                ],
                [
                  "Outline",
                  "Outline paper",
                  "write",
                  null,
                  new Date(2015, 0, 6),
                  864e5,
                  100,
                  "Research"
                ]
              ],
              options: {
                gantt: {
                  criticalPathEnabled: !0,
                  criticalPathStyle: { stroke: "#e64a19", strokeWidth: 5 }
                }
              }
            })
          ),
          l.a.createElement(
            r.MDXTag,
            { name: "h2", components: n, props: { id: "styling-arrows" } },
            l.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#styling-arrows" }
              },
              l.a.createElement(
                r.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Styling Arrows"
          ),
          l.a.createElement(
            i.d,
            {
              __position: 5,
              __code:
                "<Chart\n  width={'100%'}\n  height={'400px'}\n  chartType=\"Gantt\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      { type: 'string', label: 'Task ID' },\n      { type: 'string', label: 'Task Name' },\n      { type: 'string', label: 'Resource' },\n      { type: 'date', label: 'Start Date' },\n      { type: 'date', label: 'End Date' },\n      { type: 'number', label: 'Duration' },\n      { type: 'number', label: 'Percent Complete' },\n      { type: 'string', label: 'Dependencies' },\n    ],\n    [\n      'Research',\n      'Find sources',\n      null,\n      new Date(2015, 0, 1),\n      new Date(2015, 0, 5),\n      null,\n      100,\n      null,\n    ],\n    [\n      'Write',\n      'Write paper',\n      'write',\n      null,\n      new Date(2015, 0, 9),\n      3 * 24 * 60 * 60 * 1000,\n      25,\n      'Research,Outline',\n    ],\n    [\n      'Cite',\n      'Create bibliography',\n      'write',\n      null,\n      new Date(2015, 0, 7),\n      1 * 24 * 60 * 60 * 1000,\n      20,\n      'Research',\n    ],\n    [\n      'Complete',\n      'Hand in paper',\n      'complete',\n      null,\n      new Date(2015, 0, 10),\n      1 * 24 * 60 * 60 * 1000,\n      0,\n      'Cite,Write',\n    ],\n    [\n      'Outline',\n      'Outline paper',\n      'write',\n      null,\n      new Date(2015, 0, 6),\n      1 * 24 * 60 * 60 * 1000,\n      100,\n      'Research',\n    ],\n  ]}\n  options={{\n    gantt: {\n      criticalPathEnabled: false, // Critical path arrows will be the same as other arrows.\n      arrow: {\n        angle: 100,\n        width: 5,\n        color: 'green',\n        radius: 0,\n      },\n    },\n  }}\n/>"
            },
            l.a.createElement(p.a, {
              width: "100%",
              height: "400px",
              chartType: "Gantt",
              loader: l.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "string", label: "Task ID" },
                  { type: "string", label: "Task Name" },
                  { type: "string", label: "Resource" },
                  { type: "date", label: "Start Date" },
                  { type: "date", label: "End Date" },
                  { type: "number", label: "Duration" },
                  { type: "number", label: "Percent Complete" },
                  { type: "string", label: "Dependencies" }
                ],
                [
                  "Research",
                  "Find sources",
                  null,
                  new Date(2015, 0, 1),
                  new Date(2015, 0, 5),
                  null,
                  100,
                  null
                ],
                [
                  "Write",
                  "Write paper",
                  "write",
                  null,
                  new Date(2015, 0, 9),
                  2592e5,
                  25,
                  "Research,Outline"
                ],
                [
                  "Cite",
                  "Create bibliography",
                  "write",
                  null,
                  new Date(2015, 0, 7),
                  864e5,
                  20,
                  "Research"
                ],
                [
                  "Complete",
                  "Hand in paper",
                  "complete",
                  null,
                  new Date(2015, 0, 10),
                  864e5,
                  0,
                  "Cite,Write"
                ],
                [
                  "Outline",
                  "Outline paper",
                  "write",
                  null,
                  new Date(2015, 0, 6),
                  864e5,
                  100,
                  "Research"
                ]
              ],
              options: {
                gantt: {
                  criticalPathEnabled: !1,
                  arrow: { angle: 100, width: 5, color: "green", radius: 0 }
                }
              }
            })
          ),
          l.a.createElement(
            r.MDXTag,
            { name: "h2", components: n, props: { id: "styling-tracks" } },
            l.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#styling-tracks" }
              },
              l.a.createElement(
                r.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Styling Tracks"
          ),
          l.a.createElement(
            i.d,
            {
              __position: 6,
              __code:
                "<Chart\n  width={'100%'}\n  height={'400px'}\n  chartType=\"Gantt\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      { type: 'string', label: 'Task ID' },\n      { type: 'string', label: 'Task Name' },\n      { type: 'string', label: 'Resource' },\n      { type: 'date', label: 'Start Date' },\n      { type: 'date', label: 'End Date' },\n      { type: 'number', label: 'Duration' },\n      { type: 'number', label: 'Percent Complete' },\n      { type: 'string', label: 'Dependencies' },\n    ],\n    [\n      'Research',\n      'Find sources',\n      null,\n      new Date(2015, 0, 1),\n      new Date(2015, 0, 5),\n      null,\n      100,\n      null,\n    ],\n    [\n      'Write',\n      'Write paper',\n      'write',\n      null,\n      new Date(2015, 0, 9),\n      3 * 24 * 60 * 60 * 1000,\n      25,\n      'Research,Outline',\n    ],\n    [\n      'Cite',\n      'Create bibliography',\n      'write',\n      null,\n      new Date(2015, 0, 7),\n      1 * 24 * 60 * 60 * 1000,\n      20,\n      'Research',\n    ],\n    [\n      'Complete',\n      'Hand in paper',\n      'complete',\n      null,\n      new Date(2015, 0, 10),\n      1 * 24 * 60 * 60 * 1000,\n      0,\n      'Cite,Write',\n    ],\n    [\n      'Outline',\n      'Outline paper',\n      'write',\n      null,\n      new Date(2015, 0, 6),\n      1 * 24 * 60 * 60 * 1000,\n      100,\n      'Research',\n    ],\n  ]}\n  options={{\n    gantt: {\n      criticalPathEnabled: false,\n      innerGridHorizLine: {\n        stroke: '#ffe0b2',\n        strokeWidth: 2,\n      },\n      innerGridTrack: { fill: '#fff3e0' },\n      innerGridDarkTrack: { fill: '#ffcc80' },\n    },\n  }}\n/>"
            },
            l.a.createElement(p.a, {
              width: "100%",
              height: "400px",
              chartType: "Gantt",
              loader: l.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "string", label: "Task ID" },
                  { type: "string", label: "Task Name" },
                  { type: "string", label: "Resource" },
                  { type: "date", label: "Start Date" },
                  { type: "date", label: "End Date" },
                  { type: "number", label: "Duration" },
                  { type: "number", label: "Percent Complete" },
                  { type: "string", label: "Dependencies" }
                ],
                [
                  "Research",
                  "Find sources",
                  null,
                  new Date(2015, 0, 1),
                  new Date(2015, 0, 5),
                  null,
                  100,
                  null
                ],
                [
                  "Write",
                  "Write paper",
                  "write",
                  null,
                  new Date(2015, 0, 9),
                  2592e5,
                  25,
                  "Research,Outline"
                ],
                [
                  "Cite",
                  "Create bibliography",
                  "write",
                  null,
                  new Date(2015, 0, 7),
                  864e5,
                  20,
                  "Research"
                ],
                [
                  "Complete",
                  "Hand in paper",
                  "complete",
                  null,
                  new Date(2015, 0, 10),
                  864e5,
                  0,
                  "Cite,Write"
                ],
                [
                  "Outline",
                  "Outline paper",
                  "write",
                  null,
                  new Date(2015, 0, 6),
                  864e5,
                  100,
                  "Research"
                ]
              ],
              options: {
                gantt: {
                  criticalPathEnabled: !1,
                  innerGridHorizLine: { stroke: "#ffe0b2", strokeWidth: 2 },
                  innerGridTrack: { fill: "#fff3e0" },
                  innerGridDarkTrack: { fill: "#ffcc80" }
                }
              }
            })
          ),
          l.a.createElement(
            r.MDXTag,
            { name: "h1", components: n, props: { id: "data-format" } },
            l.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#data-format" }
              },
              l.a.createElement(
                r.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Data Format"
          ),
          l.a.createElement(
            r.MDXTag,
            { name: "p", components: n },
            l.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/ganttchart#data-format"
                }
              },
              "Complete Data Format Reference"
            )
          ),
          l.a.createElement(
            r.MDXTag,
            { name: "h1", components: n, props: { id: "reference" } },
            l.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#reference" }
              },
              l.a.createElement(
                r.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Reference"
          ),
          l.a.createElement(
            r.MDXTag,
            { name: "p", components: n },
            l.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/ganttchart"
                }
              },
              "Original Google Charts Docs"
            )
          )
        );
      };
    }
  }
]);
