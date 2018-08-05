(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    "./src/docs/ScatterChart.mdx": function(n, e, a) {
      "use strict";
      a.r(e);
      var t = a("./node_modules/react/index.js"),
        i = a.n(t),
        o = a("./node_modules/@mdx-js/tag/dist/index.js"),
        r = a("./node_modules/docz/dist/index.m.js"),
        s = a("./node_modules/react-component-component/es/index.js"),
        d = a("./src/index.tsx");
      e.default = function(n) {
        var e = n.components;
        return i.a.createElement(
          o.MDXTag,
          { name: "wrapper", components: e },
          i.a.createElement(
            o.MDXTag,
            { name: "h2", components: e, props: { id: "simple-example" } },
            i.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: e,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#simple-example" }
              },
              i.a.createElement(
                o.MDXTag,
                {
                  name: "span",
                  components: e,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Simple Example"
          ),
          i.a.createElement(
            r.d,
            {
              __position: 0,
              __code:
                "<Chart\n  width={'600px'}\n  height={'400px'}\n  chartType=\"ScatterChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Age', 'Weight'],\n    [8, 12],\n    [4, 5.5],\n    [11, 14],\n    [4, 5],\n    [3, 3.5],\n    [6.5, 7],\n  ]}\n  options={{\n    title: 'Age vs. Weight comparison',\n    hAxis: { title: 'Age', minValue: 0, maxValue: 15 },\n    vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },\n    legend: 'none',\n  }}\n/>"
            },
            i.a.createElement(d.a, {
              width: "600px",
              height: "400px",
              chartType: "ScatterChart",
              loader: i.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Age", "Weight"],
                [8, 12],
                [4, 5.5],
                [11, 14],
                [4, 5],
                [3, 3.5],
                [6.5, 7]
              ],
              options: {
                title: "Age vs. Weight comparison",
                hAxis: { title: "Age", minValue: 0, maxValue: 15 },
                vAxis: { title: "Weight", minValue: 0, maxValue: 15 },
                legend: "none"
              }
            })
          ),
          i.a.createElement(
            o.MDXTag,
            {
              name: "h2",
              components: e,
              props: { id: "changing-shapes-and-animating-points" }
            },
            i.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: e,
                parentName: "h2",
                props: {
                  "aria-hidden": !0,
                  href: "#changing-shapes-and-animating-points"
                }
              },
              i.a.createElement(
                o.MDXTag,
                {
                  name: "span",
                  components: e,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Changing Shapes And Animating Points"
          ),
          i.a.createElement(
            r.d,
            {
              __position: 1,
              __code:
                "<Component\n  initialState={{ animatedPoint: [0, 0] }}\n  didMount={component => {\n    // This is a demo, in your code make sure to clearInterval on unmount\n    setInterval(() => {\n      component.setState({ animatedPoint: [Math.random(), Math.random()] })\n    }, 1500)\n  }}\n>\n  {component => {\n    return (\n      <Chart\n        width={'600px'}\n        height={'400px'}\n        chartType=\"ScatterChart\"\n        loader={<div>Loading Chart</div>}\n        data={[\n          ['x', 'y'],\n          component.state.animatedPoint,\n          [4, 0],\n          [3.510330247561491, 1.917702154416812],\n          [2.161209223472559, 3.365883939231586],\n          [0.2829488066708116, 3.989979946416218],\n          [-1.6645873461885696, 3.637189707302727],\n          [-3.204574462187735, 2.3938885764158258],\n          [-3.9599699864017817, 0.5644800322394689],\n          [-3.7458267491631854, -1.4031329107584793],\n          [-2.6145744834544478, -3.027209981231713],\n          [-0.8431831977231188, -3.910120470660388],\n          [1.134648741852905, -3.835697098652554],\n          [2.83467909716504, -2.8221613022815677],\n          [3.8406811466014643, -1.1176619927957034],\n        ]}\n        options={{\n          legend: 'none',\n          // Changing shape and color\n          colors: ['#087037'],\n          pointShape: 'star',\n          pointSize: 18,\n          // Animation\n          animation: {\n            duration: 1000,\n            easing: 'inAndOut',\n          },\n        }}\n      />\n    )\n  }}\n</Component>"
            },
            i.a.createElement(
              s.a,
              {
                initialState: { animatedPoint: [0, 0] },
                didMount: function(n) {
                  setInterval(function() {
                    n.setState({
                      animatedPoint: [Math.random(), Math.random()]
                    });
                  }, 1500);
                }
              },
              function(n) {
                return i.a.createElement(d.a, {
                  width: "600px",
                  height: "400px",
                  chartType: "ScatterChart",
                  loader: i.a.createElement("div", null, "Loading Chart"),
                  data: [
                    ["x", "y"],
                    n.state.animatedPoint,
                    [4, 0],
                    [3.510330247561491, 1.917702154416812],
                    [2.161209223472559, 3.365883939231586],
                    [0.2829488066708116, 3.989979946416218],
                    [-1.6645873461885696, 3.637189707302727],
                    [-3.204574462187735, 2.3938885764158258],
                    [-3.9599699864017817, 0.5644800322394689],
                    [-3.7458267491631854, -1.4031329107584793],
                    [-2.6145744834544478, -3.027209981231713],
                    [-0.8431831977231188, -3.910120470660388],
                    [1.134648741852905, -3.835697098652554],
                    [2.83467909716504, -2.8221613022815677],
                    [3.8406811466014643, -1.1176619927957034]
                  ],
                  options: {
                    legend: "none",
                    colors: ["#087037"],
                    pointShape: "star",
                    pointSize: 18,
                    animation: { duration: 1e3, easing: "inAndOut" }
                  }
                });
              }
            )
          ),
          i.a.createElement(
            o.MDXTag,
            {
              name: "h2",
              components: e,
              props: { id: "material-design-scatter-chart" }
            },
            i.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: e,
                parentName: "h2",
                props: {
                  "aria-hidden": !0,
                  href: "#material-design-scatter-chart"
                }
              },
              i.a.createElement(
                o.MDXTag,
                {
                  name: "span",
                  components: e,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Material Design Scatter Chart"
          ),
          i.a.createElement(
            r.d,
            {
              __position: 2,
              __code:
                "<Chart\n  width={'600px'}\n  height={'400px'}\n  chartType=\"Scatter\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Hours Studied', 'Final'],\n    [0, 67],\n    [1, 88],\n    [2, 77],\n    [3, 93],\n    [4, 85],\n    [5, 91],\n    [6, 71],\n    [7, 78],\n    [8, 93],\n    [9, 80],\n    [10, 82],\n    [0, 75],\n    [5, 80],\n    [3, 90],\n    [1, 72],\n    [5, 75],\n    [6, 68],\n    [7, 98],\n    [3, 82],\n    [9, 94],\n    [2, 79],\n    [2, 95],\n    [2, 86],\n    [3, 67],\n    [4, 60],\n    [2, 80],\n    [6, 92],\n    [2, 81],\n    [8, 79],\n    [9, 83],\n    [3, 75],\n    [1, 80],\n    [3, 71],\n    [3, 89],\n    [4, 92],\n    [5, 85],\n    [6, 92],\n    [7, 78],\n    [6, 95],\n    [3, 81],\n    [0, 64],\n    [4, 85],\n    [2, 83],\n    [3, 96],\n    [4, 77],\n    [5, 89],\n    [4, 89],\n    [7, 84],\n    [4, 92],\n    [9, 98],\n  ]}\n  options={{\n    // Material design options\n    chart: {\n      title: \"Students' Final Grades\",\n      subtitle: 'based on hours studied',\n    },\n    hAxis: { title: 'Hours Studied' },\n    vAxis: { title: 'Grade' },\n  }}\n/>"
            },
            i.a.createElement(d.a, {
              width: "600px",
              height: "400px",
              chartType: "Scatter",
              loader: i.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Hours Studied", "Final"],
                [0, 67],
                [1, 88],
                [2, 77],
                [3, 93],
                [4, 85],
                [5, 91],
                [6, 71],
                [7, 78],
                [8, 93],
                [9, 80],
                [10, 82],
                [0, 75],
                [5, 80],
                [3, 90],
                [1, 72],
                [5, 75],
                [6, 68],
                [7, 98],
                [3, 82],
                [9, 94],
                [2, 79],
                [2, 95],
                [2, 86],
                [3, 67],
                [4, 60],
                [2, 80],
                [6, 92],
                [2, 81],
                [8, 79],
                [9, 83],
                [3, 75],
                [1, 80],
                [3, 71],
                [3, 89],
                [4, 92],
                [5, 85],
                [6, 92],
                [7, 78],
                [6, 95],
                [3, 81],
                [0, 64],
                [4, 85],
                [2, 83],
                [3, 96],
                [4, 77],
                [5, 89],
                [4, 89],
                [7, 84],
                [4, 92],
                [9, 98]
              ],
              options: {
                chart: {
                  title: "Students' Final Grades",
                  subtitle: "based on hours studied"
                },
                hAxis: { title: "Hours Studied" },
                vAxis: { title: "Grade" }
              }
            })
          ),
          i.a.createElement(
            o.MDXTag,
            {
              name: "h2",
              components: e,
              props: { id: "dual-y-material-design-scatterchart" }
            },
            i.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: e,
                parentName: "h2",
                props: {
                  "aria-hidden": !0,
                  href: "#dual-y-material-design-scatterchart"
                }
              },
              i.a.createElement(
                o.MDXTag,
                {
                  name: "span",
                  components: e,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Dual Y Material Design ScatterChart"
          ),
          i.a.createElement(
            r.d,
            {
              __position: 3,
              __code:
                "<Chart\n  width={'600px'}\n  height={'400px'}\n  chartType=\"Scatter\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Student ID', 'Hours Studied', 'Final'],\n    [0, 0, 67],\n    [1, 1, 88],\n    [2, 2, 77],\n    [3, 3, 93],\n    [4, 4, 85],\n    [5, 5, 91],\n    [6, 6, 71],\n    [7, 7, 78],\n    [8, 8, 93],\n    [9, 9, 80],\n    [10, 10, 82],\n    [11, 0, 75],\n    [12, 5, 80],\n    [13, 3, 90],\n    [14, 1, 72],\n    [15, 5, 75],\n    [16, 6, 68],\n    [17, 7, 98],\n    [18, 3, 82],\n    [19, 9, 94],\n    [20, 2, 79],\n    [21, 2, 95],\n    [22, 2, 86],\n    [23, 3, 67],\n    [24, 4, 60],\n    [25, 2, 80],\n    [26, 6, 92],\n    [27, 2, 81],\n    [28, 8, 79],\n    [29, 9, 83],\n  ]}\n  options={{\n    // Material design options\n    chart: {\n      title: \"Students' Final Grades\",\n      subtitle: 'based on hours studied',\n    },\n    width: 800,\n    height: 500,\n    series: {\n      0: { axis: 'hours studied' },\n      1: { axis: 'final grade' },\n    },\n    axes: {\n      y: {\n        'hours studied': { label: 'Hours Studied' },\n        'final grade': { label: 'Final Exam Grade' },\n      },\n    },\n  }}\n  legendToggle\n/>"
            },
            i.a.createElement(d.a, {
              width: "600px",
              height: "400px",
              chartType: "Scatter",
              loader: i.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Student ID", "Hours Studied", "Final"],
                [0, 0, 67],
                [1, 1, 88],
                [2, 2, 77],
                [3, 3, 93],
                [4, 4, 85],
                [5, 5, 91],
                [6, 6, 71],
                [7, 7, 78],
                [8, 8, 93],
                [9, 9, 80],
                [10, 10, 82],
                [11, 0, 75],
                [12, 5, 80],
                [13, 3, 90],
                [14, 1, 72],
                [15, 5, 75],
                [16, 6, 68],
                [17, 7, 98],
                [18, 3, 82],
                [19, 9, 94],
                [20, 2, 79],
                [21, 2, 95],
                [22, 2, 86],
                [23, 3, 67],
                [24, 4, 60],
                [25, 2, 80],
                [26, 6, 92],
                [27, 2, 81],
                [28, 8, 79],
                [29, 9, 83]
              ],
              options: {
                chart: {
                  title: "Students' Final Grades",
                  subtitle: "based on hours studied"
                },
                width: 800,
                height: 500,
                series: {
                  0: { axis: "hours studied" },
                  1: { axis: "final grade" }
                },
                axes: {
                  y: {
                    "hours studied": { label: "Hours Studied" },
                    "final grade": { label: "Final Exam Grade" }
                  }
                }
              },
              legendToggle: !0
            })
          ),
          i.a.createElement(
            o.MDXTag,
            { name: "h2", components: e, props: { id: "top-x-chart" } },
            i.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: e,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#top-x-chart" }
              },
              i.a.createElement(
                o.MDXTag,
                {
                  name: "span",
                  components: e,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Top-X Chart"
          ),
          i.a.createElement(
            r.d,
            {
              __position: 4,
              __code:
                "<Chart\n  width={'600px'}\n  height={'400px'}\n  chartType=\"Scatter\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Hours Studied', 'Final'],\n    [0, 67],\n    [1, 88],\n    [2, 77],\n    [3, 93],\n    [4, 85],\n    [5, 91],\n    [6, 71],\n    [7, 78],\n    [8, 93],\n    [9, 80],\n    [10, 82],\n    [0, 75],\n    [5, 80],\n    [3, 90],\n    [1, 72],\n    [5, 75],\n    [6, 68],\n    [7, 98],\n    [3, 82],\n    [9, 94],\n    [2, 79],\n    [2, 95],\n    [2, 86],\n    [3, 67],\n    [4, 60],\n    [2, 80],\n    [6, 92],\n    [2, 81],\n    [8, 79],\n    [9, 83],\n    [3, 75],\n    [1, 80],\n    [3, 71],\n    [3, 89],\n    [4, 92],\n    [5, 85],\n    [6, 92],\n    [7, 78],\n    [6, 95],\n    [3, 81],\n    [0, 64],\n    [4, 85],\n    [2, 83],\n    [3, 96],\n    [4, 77],\n    [5, 89],\n    [4, 89],\n    [7, 84],\n    [4, 92],\n    [9, 98],\n  ]}\n  options={{\n    // Material design options\n    chart: {\n      title: \"Students' Final Grades\",\n      subtitle: 'based on hours studied',\n    },\n    axes: {\n      x: {\n        0: { side: 'top' },\n      },\n    },\n  }}\n/>"
            },
            i.a.createElement(d.a, {
              width: "600px",
              height: "400px",
              chartType: "Scatter",
              loader: i.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Hours Studied", "Final"],
                [0, 67],
                [1, 88],
                [2, 77],
                [3, 93],
                [4, 85],
                [5, 91],
                [6, 71],
                [7, 78],
                [8, 93],
                [9, 80],
                [10, 82],
                [0, 75],
                [5, 80],
                [3, 90],
                [1, 72],
                [5, 75],
                [6, 68],
                [7, 98],
                [3, 82],
                [9, 94],
                [2, 79],
                [2, 95],
                [2, 86],
                [3, 67],
                [4, 60],
                [2, 80],
                [6, 92],
                [2, 81],
                [8, 79],
                [9, 83],
                [3, 75],
                [1, 80],
                [3, 71],
                [3, 89],
                [4, 92],
                [5, 85],
                [6, 92],
                [7, 78],
                [6, 95],
                [3, 81],
                [0, 64],
                [4, 85],
                [2, 83],
                [3, 96],
                [4, 77],
                [5, 89],
                [4, 89],
                [7, 84],
                [4, 92],
                [9, 98]
              ],
              options: {
                chart: {
                  title: "Students' Final Grades",
                  subtitle: "based on hours studied"
                },
                axes: { x: { 0: { side: "top" } } }
              }
            })
          ),
          i.a.createElement(
            o.MDXTag,
            { name: "h2", components: e, props: { id: "data-format" } },
            i.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: e,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#data-format" }
              },
              i.a.createElement(
                o.MDXTag,
                {
                  name: "span",
                  components: e,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Data Format"
          ),
          i.a.createElement(
            o.MDXTag,
            { name: "p", components: e },
            i.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: e,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/scatterchart#data-format"
                }
              },
              "Complete Data Format Reference"
            )
          ),
          i.a.createElement(
            o.MDXTag,
            { name: "h2", components: e, props: { id: "reference" } },
            i.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: e,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#reference" }
              },
              i.a.createElement(
                o.MDXTag,
                {
                  name: "span",
                  components: e,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Reference"
          ),
          i.a.createElement(
            o.MDXTag,
            { name: "p", components: e },
            i.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: e,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/scatterchart"
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
