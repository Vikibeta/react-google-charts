(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    "./src/docs/LineChart.mdx": function(e, n, a) {
      "use strict";
      a.r(n);
      var t = a("./node_modules/react/index.js"),
        i = a.n(t),
        r = a("./node_modules/@mdx-js/tag/dist/index.js"),
        o = a("./node_modules/docz/dist/index.m.js"),
        s = (a("./node_modules/react-component-component/es/index.js"),
        a("./src/index.tsx"));
      n.default = function(e) {
        var n = e.components;
        return i.a.createElement(
          r.MDXTag,
          { name: "wrapper", components: n },
          i.a.createElement(
            r.MDXTag,
            {
              name: "h2",
              components: n,
              props: { id: "basic-line-chart-with-default-styling" }
            },
            i.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: {
                  "aria-hidden": !0,
                  href: "#basic-line-chart-with-default-styling"
                }
              },
              i.a.createElement(
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
            "Basic line chart with default styling"
          ),
          i.a.createElement(
            o.d,
            {
              __position: 0,
              __code:
                "<Chart\n  width={'600px'}\n  height={'400px'}\n  chartType=\"LineChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['x', 'dogs'],\n    [0, 0],\n    [1, 10],\n    [2, 23],\n    [3, 17],\n    [4, 18],\n    [5, 9],\n    [6, 11],\n    [7, 27],\n    [8, 33],\n    [9, 40],\n    [10, 32],\n    [11, 35],\n  ]}\n  options={{\n    hAxis: {\n      title: 'Time',\n    },\n    vAxis: {\n      title: 'Popularity',\n    },\n  }}\n/>"
            },
            i.a.createElement(s.a, {
              width: "600px",
              height: "400px",
              chartType: "LineChart",
              loader: i.a.createElement("div", null, "Loading Chart"),
              data: [
                ["x", "dogs"],
                [0, 0],
                [1, 10],
                [2, 23],
                [3, 17],
                [4, 18],
                [5, 9],
                [6, 11],
                [7, 27],
                [8, 33],
                [9, 40],
                [10, 32],
                [11, 35]
              ],
              options: {
                hAxis: { title: "Time" },
                vAxis: { title: "Popularity" }
              }
            })
          ),
          i.a.createElement(
            r.MDXTag,
            { name: "h2", components: n, props: { id: "multiple-line-types" } },
            i.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#multiple-line-types" }
              },
              i.a.createElement(
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
            "Multiple line types"
          ),
          i.a.createElement(
            o.d,
            {
              __position: 1,
              __code:
                "<Chart\n  width={'600px'}\n  height={'400px'}\n  chartType=\"LineChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['x', 'dogs', 'cats'],\n    [0, 0, 0],\n    [1, 10, 5],\n    [2, 23, 15],\n    [3, 17, 9],\n    [4, 18, 10],\n    [5, 9, 5],\n    [6, 11, 3],\n    [7, 27, 19],\n  ]}\n  options={{\n    hAxis: {\n      title: 'Time',\n    },\n    vAxis: {\n      title: 'Popularity',\n    },\n    series: {\n      1: { curveType: 'function' },\n    },\n  }}\n/>"
            },
            i.a.createElement(s.a, {
              width: "600px",
              height: "400px",
              chartType: "LineChart",
              loader: i.a.createElement("div", null, "Loading Chart"),
              data: [
                ["x", "dogs", "cats"],
                [0, 0, 0],
                [1, 10, 5],
                [2, 23, 15],
                [3, 17, 9],
                [4, 18, 10],
                [5, 9, 5],
                [6, 11, 3],
                [7, 27, 19]
              ],
              options: {
                hAxis: { title: "Time" },
                vAxis: { title: "Popularity" },
                series: { 1: { curveType: "function" } }
              }
            })
          ),
          i.a.createElement(
            r.MDXTag,
            {
              name: "h2",
              components: n,
              props: { id: "material-design-linechart" }
            },
            i.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#material-design-linechart" }
              },
              i.a.createElement(
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
            "Material Design LineChart"
          ),
          i.a.createElement(
            o.d,
            {
              __position: 2,
              __code:
                "<Chart\n  width={'600px'}\n  height={'400px'}\n  chartType=\"Line\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      'Day',\n      'Guardians of the Galaxy',\n      'The Avengers',\n      'Transformers: Age of Extinction',\n    ],\n    [1, 37.8, 80.8, 41.8],\n    [2, 30.9, 69.5, 32.4],\n    [3, 25.4, 57, 25.7],\n    [4, 11.7, 18.8, 10.5],\n    [5, 11.9, 17.6, 10.4],\n    [6, 8.8, 13.6, 7.7],\n    [7, 7.6, 12.3, 9.6],\n    [8, 12.3, 29.2, 10.6],\n    [9, 16.9, 42.9, 14.8],\n    [10, 12.8, 30.9, 11.6],\n    [11, 5.3, 7.9, 4.7],\n    [12, 6.6, 8.4, 5.2],\n    [13, 4.8, 6.3, 3.6],\n    [14, 4.2, 6.2, 3.4],\n  ]}\n  options={{\n    chart: {\n      title: 'Box Office Earnings in First Two Weeks of Opening',\n      subtitle: 'in millions of dollars (USD)',\n    },\n  }}\n/>"
            },
            i.a.createElement(s.a, {
              width: "600px",
              height: "400px",
              chartType: "Line",
              loader: i.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  "Day",
                  "Guardians of the Galaxy",
                  "The Avengers",
                  "Transformers: Age of Extinction"
                ],
                [1, 37.8, 80.8, 41.8],
                [2, 30.9, 69.5, 32.4],
                [3, 25.4, 57, 25.7],
                [4, 11.7, 18.8, 10.5],
                [5, 11.9, 17.6, 10.4],
                [6, 8.8, 13.6, 7.7],
                [7, 7.6, 12.3, 9.6],
                [8, 12.3, 29.2, 10.6],
                [9, 16.9, 42.9, 14.8],
                [10, 12.8, 30.9, 11.6],
                [11, 5.3, 7.9, 4.7],
                [12, 6.6, 8.4, 5.2],
                [13, 4.8, 6.3, 3.6],
                [14, 4.2, 6.2, 3.4]
              ],
              options: {
                chart: {
                  title: "Box Office Earnings in First Two Weeks of Opening",
                  subtitle: "in millions of dollars (USD)"
                }
              }
            })
          ),
          i.a.createElement(
            r.MDXTag,
            {
              name: "h2",
              components: n,
              props: { id: "material-design-dual-y-charts" }
            },
            i.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: {
                  "aria-hidden": !0,
                  href: "#material-design-dual-y-charts"
                }
              },
              i.a.createElement(
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
            "Material Design Dual Y Charts"
          ),
          i.a.createElement(
            o.d,
            {
              __position: 3,
              __code:
                "<Chart\n  width={'100%'}\n  height={'500'}\n  chartType=\"Line\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      { type: 'date', label: 'Day' },\n      'Average temperature',\n      'Average hours of daylight',\n    ],\n    [new Date(2014, 0), -0.5, 5.7],\n    [new Date(2014, 1), 0.4, 8.7],\n    [new Date(2014, 2), 0.5, 12],\n    [new Date(2014, 3), 2.9, 15.3],\n    [new Date(2014, 4), 6.3, 18.6],\n    [new Date(2014, 5), 9, 20.9],\n    [new Date(2014, 6), 10.6, 19.8],\n    [new Date(2014, 7), 10.3, 16.6],\n    [new Date(2014, 8), 7.4, 13.3],\n    [new Date(2014, 9), 4.4, 9.9],\n    [new Date(2014, 10), 1.1, 6.6],\n    [new Date(2014, 11), -0.2, 4.5],\n  ]}\n  options={{\n    chart: {\n      title:\n        'Average Temperatures and Daylight in Iceland Throughout the Year',\n    },\n    width: 900,\n    height: 500,\n    series: {\n      // Gives each series an axis name that matches the Y-axis below.\n      0: { axis: 'Temps' },\n      1: { axis: 'Daylight' },\n    },\n    axes: {\n      // Adds labels to each axis; they don't have to match the axis names.\n      y: {\n        Temps: { label: 'Temps (Celsius)' },\n        Daylight: { label: 'Daylight' },\n      },\n    },\n  }}\n/>"
            },
            i.a.createElement(s.a, {
              width: "100%",
              height: "500",
              chartType: "Line",
              loader: i.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "date", label: "Day" },
                  "Average temperature",
                  "Average hours of daylight"
                ],
                [new Date(2014, 0), -0.5, 5.7],
                [new Date(2014, 1), 0.4, 8.7],
                [new Date(2014, 2), 0.5, 12],
                [new Date(2014, 3), 2.9, 15.3],
                [new Date(2014, 4), 6.3, 18.6],
                [new Date(2014, 5), 9, 20.9],
                [new Date(2014, 6), 10.6, 19.8],
                [new Date(2014, 7), 10.3, 16.6],
                [new Date(2014, 8), 7.4, 13.3],
                [new Date(2014, 9), 4.4, 9.9],
                [new Date(2014, 10), 1.1, 6.6],
                [new Date(2014, 11), -0.2, 4.5]
              ],
              options: {
                chart: {
                  title:
                    "Average Temperatures and Daylight in Iceland Throughout the Year"
                },
                width: 900,
                height: 500,
                series: { 0: { axis: "Temps" }, 1: { axis: "Daylight" } },
                axes: {
                  y: {
                    Temps: { label: "Temps (Celsius)" },
                    Daylight: { label: "Daylight" }
                  }
                }
              }
            })
          ),
          i.a.createElement(
            r.MDXTag,
            { name: "h2", components: n, props: { id: "data-format" } },
            i.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#data-format" }
              },
              i.a.createElement(
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
          i.a.createElement(
            r.MDXTag,
            { name: "p", components: n },
            i.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/linechart#data-format"
                }
              },
              "Complete Data Format Reference"
            )
          ),
          i.a.createElement(
            r.MDXTag,
            { name: "h2", components: n, props: { id: "reference" } },
            i.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#reference" }
              },
              i.a.createElement(
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
          i.a.createElement(
            r.MDXTag,
            { name: "p", components: n },
            i.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/linechart"
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
