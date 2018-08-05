(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    "./src/docs/Formatters.mdx": function(e, n, a) {
      "use strict";
      a.r(n);
      var t = a("./node_modules/react/index.js"),
        o = a.n(t),
        r = a("./node_modules/@mdx-js/tag/dist/index.js"),
        m = a("./node_modules/docz/dist/index.m.js"),
        p = a("./src/index.tsx");
      n.default = function(e) {
        var n = e.components;
        return o.a.createElement(
          r.MDXTag,
          { name: "wrapper", components: n },
          o.a.createElement(
            r.MDXTag,
            { name: "h1", components: n, props: { id: "usage" } },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#usage" }
              },
              o.a.createElement(
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
            "Usage"
          ),
          o.a.createElement(
            r.MDXTag,
            { name: "h2", components: n, props: { id: "arrowformat" } },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#arrowformat" }
              },
              o.a.createElement(
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
            "ArrowFormat"
          ),
          o.a.createElement(
            m.d,
            {
              __position: 0,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"Table\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Department', 'Revenues Change'],\n    ['Shoes', { v: 12, f: '12.0%' }],\n    ['Sports', { v: -7.3, f: '-7.3%' }],\n    ['Toys', { v: 0, f: '0%' }],\n    ['Electronics', { v: -2.1, f: '-2.1%' }],\n    ['Food', { v: 22, f: '22.0%' }],\n  ]}\n  formatters={[\n    {\n      type: 'ArrowFormat',\n      column: 1,\n    },\n  ]}\n  options={{\n    allowHtml: true,\n    showRowNumber: true,\n  }}\n/>"
            },
            o.a.createElement(p.a, {
              width: "500px",
              height: "300px",
              chartType: "Table",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Department", "Revenues Change"],
                ["Shoes", { v: 12, f: "12.0%" }],
                ["Sports", { v: -7.3, f: "-7.3%" }],
                ["Toys", { v: 0, f: "0%" }],
                ["Electronics", { v: -2.1, f: "-2.1%" }],
                ["Food", { v: 22, f: "22.0%" }]
              ],
              formatters: [{ type: "ArrowFormat", column: 1 }],
              options: { allowHtml: !0, showRowNumber: !0 }
            })
          ),
          o.a.createElement(
            r.MDXTag,
            { name: "h2", components: n, props: { id: "barformat" } },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#barformat" }
              },
              o.a.createElement(
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
            "BarFormat"
          ),
          o.a.createElement(
            m.d,
            {
              __position: 1,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"Table\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Department', 'Revenues Change'],\n    ['Shoes', 10700],\n    ['Sports', -15400],\n    ['Toys', 12500],\n    ['Electronics', -2100],\n    ['Food', 22600],\n    ['Art', 1100],\n  ]}\n  formatters={[\n    {\n      type: 'BarFormat',\n      column: 1,\n      options: {\n        width: 120,\n      },\n    },\n  ]}\n  options={{\n    allowHtml: true,\n    showRowNumber: true,\n    width: '100%',\n    height: '100%',\n  }}\n/>"
            },
            o.a.createElement(p.a, {
              width: "500px",
              height: "300px",
              chartType: "Table",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Department", "Revenues Change"],
                ["Shoes", 10700],
                ["Sports", -15400],
                ["Toys", 12500],
                ["Electronics", -2100],
                ["Food", 22600],
                ["Art", 1100]
              ],
              formatters: [
                { type: "BarFormat", column: 1, options: { width: 120 } }
              ],
              options: {
                allowHtml: !0,
                showRowNumber: !0,
                width: "100%",
                height: "100%"
              }
            })
          ),
          o.a.createElement(
            r.MDXTag,
            { name: "h2", components: n, props: { id: "colorformat" } },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#colorformat" }
              },
              o.a.createElement(
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
            "ColorFormat"
          ),
          o.a.createElement(
            m.d,
            {
              __position: 2,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"Table\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Department', 'Revenues Change'],\n    ['Shoes', 10700],\n    ['Sports', -15400],\n    ['Toys', 12500],\n    ['Electronics', -2100],\n    ['Food', 22600],\n    ['Art', 1100],\n  ]}\n  formatters={[\n    {\n      type: 'ColorFormat',\n      column: 1,\n      options: {\n        width: 120,\n      },\n      ranges: [\n        [-20000, 0, 'white', 'orange'],\n        [20000, null, 'red', '#33ff33'],\n      ],\n    },\n  ]}\n  options={{\n    allowHtml: true,\n    showRowNumber: true,\n    width: '100%',\n    height: '100%',\n  }}\n/>"
            },
            o.a.createElement(p.a, {
              width: "500px",
              height: "300px",
              chartType: "Table",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Department", "Revenues Change"],
                ["Shoes", 10700],
                ["Sports", -15400],
                ["Toys", 12500],
                ["Electronics", -2100],
                ["Food", 22600],
                ["Art", 1100]
              ],
              formatters: [
                {
                  type: "ColorFormat",
                  column: 1,
                  options: { width: 120 },
                  ranges: [
                    [-2e4, 0, "white", "orange"],
                    [2e4, null, "red", "#33ff33"]
                  ]
                }
              ],
              options: {
                allowHtml: !0,
                showRowNumber: !0,
                width: "100%",
                height: "100%"
              }
            })
          ),
          o.a.createElement(
            r.MDXTag,
            { name: "h2", components: n, props: { id: "dateformat" } },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#dateformat" }
              },
              o.a.createElement(
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
            "DateFormat"
          ),
          o.a.createElement(
            m.d,
            {
              __position: 3,
              __code:
                "<Chart\n  width={'100%'}\n  height={'100%'}\n  chartType=\"Table\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      'Employee Name',\n      { type: 'date', label: 'Start Date (Long)' },\n      { type: 'date', label: 'Start Date (Medium)' },\n      { type: 'date', label: 'Start Date (Short)' },\n    ],\n    [\n      'Mike',\n      new Date(2008, 1, 28, 0, 31, 26),\n      new Date(2008, 1, 28, 0, 31, 26),\n      new Date(2008, 1, 28, 0, 31, 26),\n    ],\n    [\n      'Bob',\n      new Date(2007, 5, 1, 0),\n      new Date(2007, 5, 1, 0),\n      new Date(2007, 5, 1, 0),\n    ],\n    [\n      'Alice',\n      new Date(2006, 7, 16),\n      new Date(2006, 7, 16),\n      new Date(2006, 7, 16),\n    ],\n  ]}\n  formatters={[\n    {\n      type: 'DateFormat',\n      column: 1,\n      options: {\n        formatType: 'long',\n      },\n    },\n    {\n      type: 'DateFormat',\n      column: 2,\n      options: {\n        formatType: 'medium',\n      },\n    },\n    {\n      type: 'DateFormat',\n      column: 3,\n      options: {\n        formatType: 'short',\n      },\n    },\n  ]}\n  options={{\n    showRowNumber: true,\n  }}\n/>"
            },
            o.a.createElement(p.a, {
              width: "100%",
              height: "100%",
              chartType: "Table",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  "Employee Name",
                  { type: "date", label: "Start Date (Long)" },
                  { type: "date", label: "Start Date (Medium)" },
                  { type: "date", label: "Start Date (Short)" }
                ],
                [
                  "Mike",
                  new Date(2008, 1, 28, 0, 31, 26),
                  new Date(2008, 1, 28, 0, 31, 26),
                  new Date(2008, 1, 28, 0, 31, 26)
                ],
                [
                  "Bob",
                  new Date(2007, 5, 1, 0),
                  new Date(2007, 5, 1, 0),
                  new Date(2007, 5, 1, 0)
                ],
                [
                  "Alice",
                  new Date(2006, 7, 16),
                  new Date(2006, 7, 16),
                  new Date(2006, 7, 16)
                ]
              ],
              formatters: [
                {
                  type: "DateFormat",
                  column: 1,
                  options: { formatType: "long" }
                },
                {
                  type: "DateFormat",
                  column: 2,
                  options: { formatType: "medium" }
                },
                {
                  type: "DateFormat",
                  column: 3,
                  options: { formatType: "short" }
                }
              ],
              options: { showRowNumber: !0 }
            })
          ),
          o.a.createElement(
            r.MDXTag,
            { name: "h2", components: n, props: { id: "numberformat" } },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#numberformat" }
              },
              o.a.createElement(
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
            "NumberFormat"
          ),
          o.a.createElement(
            m.d,
            {
              __position: 4,
              __code:
                "<Chart\n  width={'100%'}\n  height={'100%'}\n  chartType=\"Table\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Department', 'Revenues Change'],\n    ['Shoes', 10700],\n    ['Sports', -15400],\n    ['Toys', 12500],\n    ['Electronics', -2100],\n    ['Food', 22600],\n    ['Art', 1100],\n  ]}\n  formatters={[\n    {\n      type: 'NumberFormat',\n      column: 1,\n      options: {\n        prefix: '>\n  <Chart \n    width={\"100%\"}\n    height={\"100%\"}\n    chartType=\"Table\"\n    loader={<div>Loading Chart</div>}\n    data={[\n      ['Department', 'Revenues Change'],\n      ['Shoes', 10700],\n      ['Sports', -15400],\n      ['Toys', 12500],\n      ['Electronics', -2100],\n      ['Food', 22600],\n      ['Art', 1100]\n    ]}\n    formatters={[\n      {\n        type: \"NumberFormat\",\n        column:1,\n        options: {\n          prefix: '$', negativeColor: 'red', negativeParens: true\n        }\n      }\n    ]}\n    options={{\n      allowHtml: true,\n      showRowNumber: true\n    }}\n  />\n</Playground>,\n        negativeColor: 'red',\n        negativeParens: true,\n      },\n    },\n  ]}\n  options={{\n    allowHtml: true,\n    showRowNumber: true,\n  }}\n/>"
            },
            o.a.createElement(p.a, {
              width: "100%",
              height: "100%",
              chartType: "Table",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Department", "Revenues Change"],
                ["Shoes", 10700],
                ["Sports", -15400],
                ["Toys", 12500],
                ["Electronics", -2100],
                ["Food", 22600],
                ["Art", 1100]
              ],
              formatters: [
                {
                  type: "NumberFormat",
                  column: 1,
                  options: {
                    prefix: "$",
                    negativeColor: "red",
                    negativeParens: !0
                  }
                }
              ],
              options: { allowHtml: !0, showRowNumber: !0 }
            })
          ),
          o.a.createElement(
            r.MDXTag,
            { name: "h2", components: n, props: { id: "patternformat" } },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#patternformat" }
              },
              o.a.createElement(
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
            "PatternFormat"
          ),
          o.a.createElement(
            m.d,
            {
              __position: 5,
              __code:
                "<Chart\n  width={'100%'}\n  height={'100%'}\n  chartType=\"Table\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Name', 'Email'],\n    ['John Lennon', 'john@beatles.co.uk'],\n    ['Paul McCartney', 'paul@beatles.co.uk'],\n    ['George Harrison', 'george@beatles.co.uk'],\n    ['Ringo Starr', 'ringo@beatles.co.uk'],\n  ]}\n  formatters={[\n    {\n      type: 'PatternFormat',\n      column: [0, 1],\n      options: '<a href=\"mailto:{1}\">{0}</a>',\n    },\n  ]}\n  options={{\n    allowHtml: true,\n    showRowNumber: true,\n  }}\n/>"
            },
            o.a.createElement(p.a, {
              width: "100%",
              height: "100%",
              chartType: "Table",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Name", "Email"],
                ["John Lennon", "john@beatles.co.uk"],
                ["Paul McCartney", "paul@beatles.co.uk"],
                ["George Harrison", "george@beatles.co.uk"],
                ["Ringo Starr", "ringo@beatles.co.uk"]
              ],
              formatters: [
                {
                  type: "PatternFormat",
                  column: [0, 1],
                  options: '<a href="mailto:{1}">{0}</a>'
                }
              ],
              options: { allowHtml: !0, showRowNumber: !0 }
            })
          ),
          o.a.createElement(
            r.MDXTag,
            { name: "h1", components: n, props: { id: "reference" } },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#reference" }
              },
              o.a.createElement(
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
          o.a.createElement(
            r.MDXTag,
            { name: "p", components: n },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/reference#formatters"
                }
              },
              "Formatters Reference"
            )
          )
        );
      };
    }
  }
]);
