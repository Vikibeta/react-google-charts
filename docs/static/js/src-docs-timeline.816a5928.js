(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
  {
    "./src/docs/Timeline.mdx": function(e, n, a) {
      "use strict";
      a.r(n);
      var t = a("./node_modules/react/index.js"),
        o = a.n(t),
        i = a("./node_modules/@mdx-js/tag/dist/index.js"),
        r = a("./node_modules/docz/dist/index.m.js"),
        d = a("./src/index.tsx");
      n.default = function(e) {
        var n = e.components;
        return o.a.createElement(
          i.MDXTag,
          { name: "wrapper", components: n },
          o.a.createElement(
            i.MDXTag,
            { name: "h1", components: n, props: { id: "usage" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#usage" }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Usage"
          ),
          o.a.createElement(
            i.MDXTag,
            { name: "h2", components: n, props: { id: "simple-example" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#simple-example" }
              },
              o.a.createElement(
                i.MDXTag,
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
          o.a.createElement(
            r.d,
            {
              __position: 0,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"Timeline\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      { type: 'string', id: 'President' },\n      { type: 'date', id: 'Start' },\n      { type: 'date', id: 'End' },\n    ],\n    ['Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],\n    ['Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],\n    ['Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)],\n  ]}\n  options={{\n    showRowNumber: true,\n  }}\n/>"
            },
            o.a.createElement(d.a, {
              width: "500px",
              height: "300px",
              chartType: "Timeline",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "string", id: "President" },
                  { type: "date", id: "Start" },
                  { type: "date", id: "End" }
                ],
                ["Washington", new Date(1789, 3, 30), new Date(1797, 2, 4)],
                ["Adams", new Date(1797, 2, 4), new Date(1801, 2, 4)],
                ["Jefferson", new Date(1801, 2, 4), new Date(1809, 2, 4)]
              ],
              options: { showRowNumber: !0 }
            })
          ),
          o.a.createElement(
            i.MDXTag,
            { name: "h2", components: n, props: { id: "labeling-the-bars" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#labeling-the-bars" }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Labeling the bars"
          ),
          o.a.createElement(
            r.d,
            {
              __position: 1,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"Timeline\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      { type: 'string', id: 'Term' },\n      { type: 'string', id: 'Name' },\n      { type: 'date', id: 'Start' },\n      { type: 'date', id: 'End' },\n    ],\n    ['1', 'George Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],\n    ['2', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],\n    ['3', 'Thomas Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)],\n  ]}\n  options={{}}\n/>"
            },
            o.a.createElement(d.a, {
              width: "500px",
              height: "300px",
              chartType: "Timeline",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "string", id: "Term" },
                  { type: "string", id: "Name" },
                  { type: "date", id: "Start" },
                  { type: "date", id: "End" }
                ],
                [
                  "1",
                  "George Washington",
                  new Date(1789, 3, 30),
                  new Date(1797, 2, 4)
                ],
                ["2", "John Adams", new Date(1797, 2, 4), new Date(1801, 2, 4)],
                [
                  "3",
                  "Thomas Jefferson",
                  new Date(1801, 2, 4),
                  new Date(1809, 2, 4)
                ]
              ],
              options: {}
            })
          ),
          o.a.createElement(
            i.MDXTag,
            { name: "h2", components: n, props: { id: "an-advanced-example" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#an-advanced-example" }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "An Advanced Example"
          ),
          o.a.createElement(
            r.d,
            {
              __position: 2,
              __code:
                "<Chart\n  width={'100%'}\n  height={'200px'}\n  chartType=\"Timeline\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      { type: 'string', id: 'Position' },\n      { type: 'string', id: 'Name' },\n      { type: 'date', id: 'Start' },\n      { type: 'date', id: 'End' },\n    ],\n    [\n      'President',\n      'George Washington',\n      new Date(1789, 3, 30),\n      new Date(1797, 2, 4),\n    ],\n    ['President', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],\n    [\n      'President',\n      'Thomas Jefferson',\n      new Date(1801, 2, 4),\n      new Date(1809, 2, 4),\n    ],\n    [\n      'Vice President',\n      'John Adams',\n      new Date(1789, 3, 21),\n      new Date(1797, 2, 4),\n    ],\n    [\n      'Vice President',\n      'Thomas Jefferson',\n      new Date(1797, 2, 4),\n      new Date(1801, 2, 4),\n    ],\n    [\n      'Vice President',\n      'Aaron Burr',\n      new Date(1801, 2, 4),\n      new Date(1805, 2, 4),\n    ],\n    [\n      'Vice President',\n      'George Clinton',\n      new Date(1805, 2, 4),\n      new Date(1812, 3, 20),\n    ],\n    [\n      'Secretary of State',\n      'John Jay',\n      new Date(1789, 8, 25),\n      new Date(1790, 2, 22),\n    ],\n    [\n      'Secretary of State',\n      'Thomas Jefferson',\n      new Date(1790, 2, 22),\n      new Date(1793, 11, 31),\n    ],\n    [\n      'Secretary of State',\n      'Edmund Randolph',\n      new Date(1794, 0, 2),\n      new Date(1795, 7, 20),\n    ],\n    [\n      'Secretary of State',\n      'Timothy Pickering',\n      new Date(1795, 7, 20),\n      new Date(1800, 4, 12),\n    ],\n    [\n      'Secretary of State',\n      'Charles Lee',\n      new Date(1800, 4, 13),\n      new Date(1800, 5, 5),\n    ],\n    [\n      'Secretary of State',\n      'John Marshall',\n      new Date(1800, 5, 13),\n      new Date(1801, 2, 4),\n    ],\n    [\n      'Secretary of State',\n      'Levi Lincoln',\n      new Date(1801, 2, 5),\n      new Date(1801, 4, 1),\n    ],\n    [\n      'Secretary of State',\n      'James Madison',\n      new Date(1801, 4, 2),\n      new Date(1809, 2, 3),\n    ],\n  ]}\n  options={{}}\n/>"
            },
            o.a.createElement(d.a, {
              width: "100%",
              height: "200px",
              chartType: "Timeline",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "string", id: "Position" },
                  { type: "string", id: "Name" },
                  { type: "date", id: "Start" },
                  { type: "date", id: "End" }
                ],
                [
                  "President",
                  "George Washington",
                  new Date(1789, 3, 30),
                  new Date(1797, 2, 4)
                ],
                [
                  "President",
                  "John Adams",
                  new Date(1797, 2, 4),
                  new Date(1801, 2, 4)
                ],
                [
                  "President",
                  "Thomas Jefferson",
                  new Date(1801, 2, 4),
                  new Date(1809, 2, 4)
                ],
                [
                  "Vice President",
                  "John Adams",
                  new Date(1789, 3, 21),
                  new Date(1797, 2, 4)
                ],
                [
                  "Vice President",
                  "Thomas Jefferson",
                  new Date(1797, 2, 4),
                  new Date(1801, 2, 4)
                ],
                [
                  "Vice President",
                  "Aaron Burr",
                  new Date(1801, 2, 4),
                  new Date(1805, 2, 4)
                ],
                [
                  "Vice President",
                  "George Clinton",
                  new Date(1805, 2, 4),
                  new Date(1812, 3, 20)
                ],
                [
                  "Secretary of State",
                  "John Jay",
                  new Date(1789, 8, 25),
                  new Date(1790, 2, 22)
                ],
                [
                  "Secretary of State",
                  "Thomas Jefferson",
                  new Date(1790, 2, 22),
                  new Date(1793, 11, 31)
                ],
                [
                  "Secretary of State",
                  "Edmund Randolph",
                  new Date(1794, 0, 2),
                  new Date(1795, 7, 20)
                ],
                [
                  "Secretary of State",
                  "Timothy Pickering",
                  new Date(1795, 7, 20),
                  new Date(1800, 4, 12)
                ],
                [
                  "Secretary of State",
                  "Charles Lee",
                  new Date(1800, 4, 13),
                  new Date(1800, 5, 5)
                ],
                [
                  "Secretary of State",
                  "John Marshall",
                  new Date(1800, 5, 13),
                  new Date(1801, 2, 4)
                ],
                [
                  "Secretary of State",
                  "Levi Lincoln",
                  new Date(1801, 2, 5),
                  new Date(1801, 4, 1)
                ],
                [
                  "Secretary of State",
                  "James Madison",
                  new Date(1801, 4, 2),
                  new Date(1809, 2, 3)
                ]
              ],
              options: {}
            })
          ),
          o.a.createElement(
            i.MDXTag,
            {
              name: "h2",
              components: n,
              props: { id: "putting-bars-on-one-row" }
            },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#putting-bars-on-one-row" }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Putting bars on one row"
          ),
          o.a.createElement(
            r.d,
            {
              __position: 3,
              __code:
                "<Chart\n  width={'100%'}\n  height={'200px'}\n  chartType=\"Timeline\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      { type: 'string', id: 'Position' },\n      { type: 'string', id: 'Name' },\n      { type: 'date', id: 'Start' },\n      { type: 'date', id: 'End' },\n    ],\n    [\n      'President',\n      'George Washington',\n      new Date(1789, 3, 30),\n      new Date(1797, 2, 4),\n    ],\n    ['President', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],\n    [\n      'President',\n      'Thomas Jefferson',\n      new Date(1801, 2, 4),\n      new Date(1809, 2, 4),\n    ],\n  ]}\n  options={{\n    timeline: {\n      groupByRowLabel: false,\n    },\n  }}\n/>"
            },
            o.a.createElement(d.a, {
              width: "100%",
              height: "200px",
              chartType: "Timeline",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "string", id: "Position" },
                  { type: "string", id: "Name" },
                  { type: "date", id: "Start" },
                  { type: "date", id: "End" }
                ],
                [
                  "President",
                  "George Washington",
                  new Date(1789, 3, 30),
                  new Date(1797, 2, 4)
                ],
                [
                  "President",
                  "John Adams",
                  new Date(1797, 2, 4),
                  new Date(1801, 2, 4)
                ],
                [
                  "President",
                  "Thomas Jefferson",
                  new Date(1801, 2, 4),
                  new Date(1809, 2, 4)
                ]
              ],
              options: { timeline: { groupByRowLabel: !1 } }
            })
          ),
          o.a.createElement(
            i.MDXTag,
            {
              name: "h2",
              components: n,
              props: { id: "controlling-the-colors" }
            },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#controlling-the-colors" }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Controlling The Colors"
          ),
          o.a.createElement(
            i.MDXTag,
            { name: "h3", components: n, props: { id: "color-by-row-label" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h3",
                props: { "aria-hidden": !0, href: "#color-by-row-label" }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Color By Row Label"
          ),
          o.a.createElement(
            r.d,
            {
              __position: 4,
              __code:
                "<Chart\n  width={'100%'}\n  height={'200px'}\n  chartType=\"Timeline\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      { type: 'string', id: 'Room' },\n      { type: 'string', id: 'Name' },\n      { type: 'date', id: 'Start' },\n      { type: 'date', id: 'End' },\n    ],\n    [\n      'Magnolia Room',\n      'Beginning JavaScript',\n      new Date(0, 0, 0, 12, 0, 0),\n      new Date(0, 0, 0, 13, 30, 0),\n    ],\n    [\n      'Magnolia Room',\n      'Intermediate JavaScript',\n      new Date(0, 0, 0, 14, 0, 0),\n      new Date(0, 0, 0, 15, 30, 0),\n    ],\n    [\n      'Magnolia Room',\n      'Advanced JavaScript',\n      new Date(0, 0, 0, 16, 0, 0),\n      new Date(0, 0, 0, 17, 30, 0),\n    ],\n    [\n      'Willow Room',\n      'Beginning Google Charts',\n      new Date(0, 0, 0, 12, 30, 0),\n      new Date(0, 0, 0, 14, 0, 0),\n    ],\n    [\n      'Willow Room',\n      'Intermediate Google Charts',\n      new Date(0, 0, 0, 14, 30, 0),\n      new Date(0, 0, 0, 16, 0, 0),\n    ],\n    [\n      'Willow Room',\n      'Advanced Google Charts',\n      new Date(0, 0, 0, 16, 30, 0),\n      new Date(0, 0, 0, 18, 0, 0),\n    ],\n  ]}\n  options={{\n    timeline: {\n      colorByRowLabel: true,\n    },\n  }}\n/>"
            },
            o.a.createElement(d.a, {
              width: "100%",
              height: "200px",
              chartType: "Timeline",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "string", id: "Room" },
                  { type: "string", id: "Name" },
                  { type: "date", id: "Start" },
                  { type: "date", id: "End" }
                ],
                [
                  "Magnolia Room",
                  "Beginning JavaScript",
                  new Date(0, 0, 0, 12, 0, 0),
                  new Date(0, 0, 0, 13, 30, 0)
                ],
                [
                  "Magnolia Room",
                  "Intermediate JavaScript",
                  new Date(0, 0, 0, 14, 0, 0),
                  new Date(0, 0, 0, 15, 30, 0)
                ],
                [
                  "Magnolia Room",
                  "Advanced JavaScript",
                  new Date(0, 0, 0, 16, 0, 0),
                  new Date(0, 0, 0, 17, 30, 0)
                ],
                [
                  "Willow Room",
                  "Beginning Google Charts",
                  new Date(0, 0, 0, 12, 30, 0),
                  new Date(0, 0, 0, 14, 0, 0)
                ],
                [
                  "Willow Room",
                  "Intermediate Google Charts",
                  new Date(0, 0, 0, 14, 30, 0),
                  new Date(0, 0, 0, 16, 0, 0)
                ],
                [
                  "Willow Room",
                  "Advanced Google Charts",
                  new Date(0, 0, 0, 16, 30, 0),
                  new Date(0, 0, 0, 18, 0, 0)
                ]
              ],
              options: { timeline: { colorByRowLabel: !0 } }
            })
          ),
          o.a.createElement(
            i.MDXTag,
            {
              name: "h3",
              components: n,
              props: { id: "same-colors-for-all-bars" }
            },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h3",
                props: { "aria-hidden": !0, href: "#same-colors-for-all-bars" }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Same Colors for all bars"
          ),
          o.a.createElement(
            r.d,
            {
              __position: 5,
              __code:
                "<Chart\n  width={'100%'}\n  height={'200px'}\n  chartType=\"Timeline\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      { type: 'string', id: 'Room' },\n      { type: 'string', id: 'Name' },\n      { type: 'date', id: 'Start' },\n      { type: 'date', id: 'End' },\n    ],\n    [\n      'Magnolia Room',\n      'Beginning JavaScript',\n      new Date(0, 0, 0, 12, 0, 0),\n      new Date(0, 0, 0, 13, 30, 0),\n    ],\n    [\n      'Magnolia Room',\n      'Intermediate JavaScript',\n      new Date(0, 0, 0, 14, 0, 0),\n      new Date(0, 0, 0, 15, 30, 0),\n    ],\n    [\n      'Magnolia Room',\n      'Advanced JavaScript',\n      new Date(0, 0, 0, 16, 0, 0),\n      new Date(0, 0, 0, 17, 30, 0),\n    ],\n    [\n      'Willow Room',\n      'Beginning Google Charts',\n      new Date(0, 0, 0, 12, 30, 0),\n      new Date(0, 0, 0, 14, 0, 0),\n    ],\n    [\n      'Willow Room',\n      'Intermediate Google Charts',\n      new Date(0, 0, 0, 14, 30, 0),\n      new Date(0, 0, 0, 16, 0, 0),\n    ],\n    [\n      'Willow Room',\n      'Advanced Google Charts',\n      new Date(0, 0, 0, 16, 30, 0),\n      new Date(0, 0, 0, 18, 0, 0),\n    ],\n  ]}\n  options={{\n    timeline: {\n      singleColor: '#8d8',\n    },\n  }}\n/>"
            },
            o.a.createElement(d.a, {
              width: "100%",
              height: "200px",
              chartType: "Timeline",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "string", id: "Room" },
                  { type: "string", id: "Name" },
                  { type: "date", id: "Start" },
                  { type: "date", id: "End" }
                ],
                [
                  "Magnolia Room",
                  "Beginning JavaScript",
                  new Date(0, 0, 0, 12, 0, 0),
                  new Date(0, 0, 0, 13, 30, 0)
                ],
                [
                  "Magnolia Room",
                  "Intermediate JavaScript",
                  new Date(0, 0, 0, 14, 0, 0),
                  new Date(0, 0, 0, 15, 30, 0)
                ],
                [
                  "Magnolia Room",
                  "Advanced JavaScript",
                  new Date(0, 0, 0, 16, 0, 0),
                  new Date(0, 0, 0, 17, 30, 0)
                ],
                [
                  "Willow Room",
                  "Beginning Google Charts",
                  new Date(0, 0, 0, 12, 30, 0),
                  new Date(0, 0, 0, 14, 0, 0)
                ],
                [
                  "Willow Room",
                  "Intermediate Google Charts",
                  new Date(0, 0, 0, 14, 30, 0),
                  new Date(0, 0, 0, 16, 0, 0)
                ],
                [
                  "Willow Room",
                  "Advanced Google Charts",
                  new Date(0, 0, 0, 16, 30, 0),
                  new Date(0, 0, 0, 18, 0, 0)
                ]
              ],
              options: { timeline: { singleColor: "#8d8" } }
            })
          ),
          o.a.createElement(
            i.MDXTag,
            {
              name: "h3",
              components: n,
              props: { id: "setting-background-color" }
            },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h3",
                props: { "aria-hidden": !0, href: "#setting-background-color" }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Setting Background Color"
          ),
          o.a.createElement(
            r.d,
            {
              __position: 6,
              __code:
                "<Chart\n  width={'100%'}\n  height={'200px'}\n  chartType=\"Timeline\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      { type: 'string', id: 'Room' },\n      { type: 'string', id: 'Name' },\n      { type: 'date', id: 'Start' },\n      { type: 'date', id: 'End' },\n    ],\n    [\n      'Magnolia Room',\n      'Beginning JavaScript',\n      new Date(0, 0, 0, 12, 0, 0),\n      new Date(0, 0, 0, 13, 30, 0),\n    ],\n    [\n      'Magnolia Room',\n      'Intermediate JavaScript',\n      new Date(0, 0, 0, 14, 0, 0),\n      new Date(0, 0, 0, 15, 30, 0),\n    ],\n    [\n      'Magnolia Room',\n      'Advanced JavaScript',\n      new Date(0, 0, 0, 16, 0, 0),\n      new Date(0, 0, 0, 17, 30, 0),\n    ],\n    [\n      'Willow Room',\n      'Beginning Google Charts',\n      new Date(0, 0, 0, 12, 30, 0),\n      new Date(0, 0, 0, 14, 0, 0),\n    ],\n    [\n      'Willow Room',\n      'Intermediate Google Charts',\n      new Date(0, 0, 0, 14, 30, 0),\n      new Date(0, 0, 0, 16, 0, 0),\n    ],\n    [\n      'Willow Room',\n      'Advanced Google Charts',\n      new Date(0, 0, 0, 16, 30, 0),\n      new Date(0, 0, 0, 18, 0, 0),\n    ],\n  ]}\n  options={{\n    timeline: { colorByRowLabel: true },\n    backgroundColor: '#ffd',\n  }}\n/>"
            },
            o.a.createElement(d.a, {
              width: "100%",
              height: "200px",
              chartType: "Timeline",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "string", id: "Room" },
                  { type: "string", id: "Name" },
                  { type: "date", id: "Start" },
                  { type: "date", id: "End" }
                ],
                [
                  "Magnolia Room",
                  "Beginning JavaScript",
                  new Date(0, 0, 0, 12, 0, 0),
                  new Date(0, 0, 0, 13, 30, 0)
                ],
                [
                  "Magnolia Room",
                  "Intermediate JavaScript",
                  new Date(0, 0, 0, 14, 0, 0),
                  new Date(0, 0, 0, 15, 30, 0)
                ],
                [
                  "Magnolia Room",
                  "Advanced JavaScript",
                  new Date(0, 0, 0, 16, 0, 0),
                  new Date(0, 0, 0, 17, 30, 0)
                ],
                [
                  "Willow Room",
                  "Beginning Google Charts",
                  new Date(0, 0, 0, 12, 30, 0),
                  new Date(0, 0, 0, 14, 0, 0)
                ],
                [
                  "Willow Room",
                  "Intermediate Google Charts",
                  new Date(0, 0, 0, 14, 30, 0),
                  new Date(0, 0, 0, 16, 0, 0)
                ],
                [
                  "Willow Room",
                  "Advanced Google Charts",
                  new Date(0, 0, 0, 16, 30, 0),
                  new Date(0, 0, 0, 18, 0, 0)
                ]
              ],
              options: {
                timeline: { colorByRowLabel: !0 },
                backgroundColor: "#ffd"
              }
            })
          ),
          o.a.createElement(
            i.MDXTag,
            {
              name: "h3",
              components: n,
              props: { id: "setting-individual-bar-colors" }
            },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h3",
                props: {
                  "aria-hidden": !0,
                  href: "#setting-individual-bar-colors"
                }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Setting Individual Bar Colors"
          ),
          o.a.createElement(
            r.d,
            {
              __position: 7,
              __code:
                "<Chart\n  width={'100%'}\n  height={'200px'}\n  chartType=\"Timeline\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      { type: 'string', id: 'Room' },\n      { type: 'string', id: 'Name' },\n      { type: 'date', id: 'Start' },\n      { type: 'date', id: 'End' },\n    ],\n    [\n      'Magnolia Room',\n      'Beginning JavaScript',\n      new Date(0, 0, 0, 12, 0, 0),\n      new Date(0, 0, 0, 13, 30, 0),\n    ],\n    [\n      'Magnolia Room',\n      'Intermediate JavaScript',\n      new Date(0, 0, 0, 14, 0, 0),\n      new Date(0, 0, 0, 15, 30, 0),\n    ],\n    [\n      'Magnolia Room',\n      'Advanced JavaScript',\n      new Date(0, 0, 0, 16, 0, 0),\n      new Date(0, 0, 0, 17, 30, 0),\n    ],\n    [\n      'Willow Room',\n      'Beginning Google Charts',\n      new Date(0, 0, 0, 12, 30, 0),\n      new Date(0, 0, 0, 14, 0, 0),\n    ],\n    [\n      'Willow Room',\n      'Intermediate Google Charts',\n      new Date(0, 0, 0, 14, 30, 0),\n      new Date(0, 0, 0, 16, 0, 0),\n    ],\n    [\n      'Willow Room',\n      'Advanced Google Charts',\n      new Date(0, 0, 0, 16, 30, 0),\n      new Date(0, 0, 0, 18, 0, 0),\n    ],\n  ]}\n  options={{\n    colors: ['#cbb69d', '#603913', '#c69c6e'],\n  }}\n/>"
            },
            o.a.createElement(d.a, {
              width: "100%",
              height: "200px",
              chartType: "Timeline",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "string", id: "Room" },
                  { type: "string", id: "Name" },
                  { type: "date", id: "Start" },
                  { type: "date", id: "End" }
                ],
                [
                  "Magnolia Room",
                  "Beginning JavaScript",
                  new Date(0, 0, 0, 12, 0, 0),
                  new Date(0, 0, 0, 13, 30, 0)
                ],
                [
                  "Magnolia Room",
                  "Intermediate JavaScript",
                  new Date(0, 0, 0, 14, 0, 0),
                  new Date(0, 0, 0, 15, 30, 0)
                ],
                [
                  "Magnolia Room",
                  "Advanced JavaScript",
                  new Date(0, 0, 0, 16, 0, 0),
                  new Date(0, 0, 0, 17, 30, 0)
                ],
                [
                  "Willow Room",
                  "Beginning Google Charts",
                  new Date(0, 0, 0, 12, 30, 0),
                  new Date(0, 0, 0, 14, 0, 0)
                ],
                [
                  "Willow Room",
                  "Intermediate Google Charts",
                  new Date(0, 0, 0, 14, 30, 0),
                  new Date(0, 0, 0, 16, 0, 0)
                ],
                [
                  "Willow Room",
                  "Advanced Google Charts",
                  new Date(0, 0, 0, 16, 30, 0),
                  new Date(0, 0, 0, 18, 0, 0)
                ]
              ],
              options: { colors: ["#cbb69d", "#603913", "#c69c6e"] }
            })
          ),
          o.a.createElement(
            i.MDXTag,
            { name: "h3", components: n, props: { id: "changing-the-fonts" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h3",
                props: { "aria-hidden": !0, href: "#changing-the-fonts" }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Changing the fonts"
          ),
          o.a.createElement(
            r.d,
            {
              __position: 8,
              __code:
                "<Chart\n  width={'100%'}\n  height={'200px'}\n  chartType=\"Timeline\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      { type: 'string', id: 'Role' },\n      { type: 'string', id: 'Name' },\n      { type: 'date', id: 'Start' },\n      { type: 'date', id: 'End' },\n    ],\n    [\n      'Washington',\n      'George Washington',\n      new Date(1789, 3, 30),\n      new Date(1797, 2, 4),\n    ],\n    ['Adams', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],\n    [\n      'Jefferson',\n      'Thomas Jefferson',\n      new Date(1801, 2, 4),\n      new Date(1809, 2, 4),\n    ],\n  ]}\n  options={{\n    colors: ['#cbb69d', '#603913', '#c69c6e'],\n    timeline: {\n      rowLabelStyle: {\n        fontName: 'Helvetica',\n        fontSize: 24,\n        color: '#603913',\n      },\n      barLabelStyle: { fontName: 'Garamond', fontSize: 14 },\n    },\n  }}\n/>"
            },
            o.a.createElement(d.a, {
              width: "100%",
              height: "200px",
              chartType: "Timeline",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "string", id: "Role" },
                  { type: "string", id: "Name" },
                  { type: "date", id: "Start" },
                  { type: "date", id: "End" }
                ],
                [
                  "Washington",
                  "George Washington",
                  new Date(1789, 3, 30),
                  new Date(1797, 2, 4)
                ],
                [
                  "Adams",
                  "John Adams",
                  new Date(1797, 2, 4),
                  new Date(1801, 2, 4)
                ],
                [
                  "Jefferson",
                  "Thomas Jefferson",
                  new Date(1801, 2, 4),
                  new Date(1809, 2, 4)
                ]
              ],
              options: {
                colors: ["#cbb69d", "#603913", "#c69c6e"],
                timeline: {
                  rowLabelStyle: {
                    fontName: "Helvetica",
                    fontSize: 24,
                    color: "#603913"
                  },
                  barLabelStyle: { fontName: "Garamond", fontSize: 14 }
                }
              }
            })
          ),
          o.a.createElement(
            i.MDXTag,
            {
              name: "h2",
              components: n,
              props: { id: "overlapping-gridlines" }
            },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#overlapping-gridlines" }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Overlapping GridLines"
          ),
          o.a.createElement(
            r.d,
            {
              __position: 9,
              __code:
                "<Chart\n  width={'100%'}\n  height={'200px'}\n  chartType=\"Timeline\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      { type: 'string', id: 'Room' },\n      { type: 'string', id: 'Name' },\n      { type: 'date', id: 'Start' },\n      { type: 'date', id: 'End' },\n    ],\n    [\n      'Magnolia Room',\n      'Google Charts',\n      new Date(0, 0, 0, 14, 0, 0),\n      new Date(0, 0, 0, 15, 0, 0),\n    ],\n    [\n      'Magnolia Room',\n      'App Engine',\n      new Date(0, 0, 0, 15, 0, 0),\n      new Date(0, 0, 0, 16, 0, 0),\n    ],\n  ]}\n  options={{\n    timeline: { showRowLabels: false },\n    avoidOverlappingGridLines: false,\n  }}\n/>"
            },
            o.a.createElement(d.a, {
              width: "100%",
              height: "200px",
              chartType: "Timeline",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "string", id: "Room" },
                  { type: "string", id: "Name" },
                  { type: "date", id: "Start" },
                  { type: "date", id: "End" }
                ],
                [
                  "Magnolia Room",
                  "Google Charts",
                  new Date(0, 0, 0, 14, 0, 0),
                  new Date(0, 0, 0, 15, 0, 0)
                ],
                [
                  "Magnolia Room",
                  "App Engine",
                  new Date(0, 0, 0, 15, 0, 0),
                  new Date(0, 0, 0, 16, 0, 0)
                ]
              ],
              options: {
                timeline: { showRowLabels: !1 },
                avoidOverlappingGridLines: !1
              }
            })
          ),
          o.a.createElement(
            i.MDXTag,
            {
              name: "h2",
              components: n,
              props: { id: "customizing-tooltips" }
            },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#customizing-tooltips" }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Customizing Tooltips"
          ),
          o.a.createElement(
            r.d,
            {
              __position: 10,
              __code:
                "<Chart\n  width={'100%'}\n  height={'200px'}\n  chartType=\"Timeline\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      { type: 'string', id: 'President' },\n      { type: 'string', id: 'dummy bar label' },\n      { type: 'string', role: 'tooltip' },\n      { type: 'date', id: 'Start' },\n      { type: 'date', id: 'End' },\n    ],\n    [\n      'Washington',\n      null,\n      'George',\n      new Date(1789, 3, 29),\n      new Date(1797, 2, 3),\n    ],\n    ['Adams', null, 'John', new Date(1797, 2, 3), new Date(1801, 2, 3)],\n    ['Jefferson', null, 'Thomas', new Date(1801, 2, 3), new Date(1809, 2, 3)],\n  ]}\n  options={{\n    allowHtml: true,\n  }}\n/>"
            },
            o.a.createElement(d.a, {
              width: "100%",
              height: "200px",
              chartType: "Timeline",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "string", id: "President" },
                  { type: "string", id: "dummy bar label" },
                  { type: "string", role: "tooltip" },
                  { type: "date", id: "Start" },
                  { type: "date", id: "End" }
                ],
                [
                  "Washington",
                  null,
                  "George",
                  new Date(1789, 3, 29),
                  new Date(1797, 2, 3)
                ],
                [
                  "Adams",
                  null,
                  "John",
                  new Date(1797, 2, 3),
                  new Date(1801, 2, 3)
                ],
                [
                  "Jefferson",
                  null,
                  "Thomas",
                  new Date(1801, 2, 3),
                  new Date(1809, 2, 3)
                ]
              ],
              options: { allowHtml: !0 }
            })
          ),
          o.a.createElement(
            i.MDXTag,
            { name: "h2", components: n, props: { id: "data-format" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#data-format" }
              },
              o.a.createElement(
                i.MDXTag,
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
          o.a.createElement(
            i.MDXTag,
            { name: "p", components: n },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/timeline#data-format"
                }
              },
              "Complete Data Format Reference"
            )
          ),
          o.a.createElement(
            i.MDXTag,
            { name: "h2", components: n, props: { id: "reference" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#reference" }
              },
              o.a.createElement(
                i.MDXTag,
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
          o.a.createElement(
            i.MDXTag,
            { name: "p", components: n },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/timeline"
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
