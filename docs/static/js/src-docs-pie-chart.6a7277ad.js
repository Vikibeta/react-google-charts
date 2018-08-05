(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
  {
    "./src/docs/PieChart.mdx": function(e, a, n) {
      "use strict";
      n.r(a);
      var t = n("./node_modules/react/index.js"),
        i = n.n(t),
        o = n("./node_modules/@mdx-js/tag/dist/index.js"),
        r = n("./node_modules/docz/dist/index.m.js"),
        p = n("./src/index.tsx");
      a.default = function(e) {
        var a = e.components;
        return i.a.createElement(
          o.MDXTag,
          { name: "wrapper", components: a },
          i.a.createElement(
            o.MDXTag,
            { name: "h2", components: a, props: { id: "simple-example" } },
            i.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#simple-example" }
              },
              i.a.createElement(
                o.MDXTag,
                {
                  name: "span",
                  components: a,
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
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"PieChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Task', 'Hours per Day'],\n    ['Work', 11],\n    ['Eat', 2],\n    ['Commute', 2],\n    ['Watch TV', 2],\n    ['Sleep', 7],\n  ]}\n  options={{\n    title: 'My Daily Activities',\n  }}\n/>"
            },
            i.a.createElement(p.a, {
              width: "500px",
              height: "300px",
              chartType: "PieChart",
              loader: i.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Task", "Hours per Day"],
                ["Work", 11],
                ["Eat", 2],
                ["Commute", 2],
                ["Watch TV", 2],
                ["Sleep", 7]
              ],
              options: { title: "My Daily Activities" }
            })
          ),
          i.a.createElement(
            o.MDXTag,
            { name: "h2", components: a, props: { id: "3d-pie-chart" } },
            i.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#3d-pie-chart" }
              },
              i.a.createElement(
                o.MDXTag,
                {
                  name: "span",
                  components: a,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "3D Pie Chart"
          ),
          i.a.createElement(
            r.d,
            {
              __position: 1,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"PieChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Task', 'Hours per Day'],\n    ['Work', 11],\n    ['Eat', 2],\n    ['Commute', 2],\n    ['Watch TV', 2],\n    ['Sleep', 7],\n  ]}\n  options={{\n    title: 'My Daily Activities',\n    // Just add this option\n    is3D: true,\n  }}\n/>"
            },
            i.a.createElement(p.a, {
              width: "500px",
              height: "300px",
              chartType: "PieChart",
              loader: i.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Task", "Hours per Day"],
                ["Work", 11],
                ["Eat", 2],
                ["Commute", 2],
                ["Watch TV", 2],
                ["Sleep", 7]
              ],
              options: { title: "My Daily Activities", is3D: !0 }
            })
          ),
          i.a.createElement(
            o.MDXTag,
            { name: "h2", components: a, props: { id: "donut-chart" } },
            i.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#donut-chart" }
              },
              i.a.createElement(
                o.MDXTag,
                {
                  name: "span",
                  components: a,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Donut Chart"
          ),
          i.a.createElement(
            r.d,
            {
              __position: 2,
              __code:
                "<Chart\n  width={'300px'}\n  height={'300px'}\n  chartType=\"PieChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Task', 'Hours per Day'],\n    ['Work', 11],\n    ['Eat', 2],\n    ['Commute', 2],\n    ['Watch TV', 2],\n    ['Sleep', 7],\n  ]}\n  options={{\n    title: 'My Daily Activities',\n    // Just add this option\n    pieHole: 0.4,\n  }}\n/>"
            },
            i.a.createElement(p.a, {
              width: "300px",
              height: "300px",
              chartType: "PieChart",
              loader: i.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Task", "Hours per Day"],
                ["Work", 11],
                ["Eat", 2],
                ["Commute", 2],
                ["Watch TV", 2],
                ["Sleep", 7]
              ],
              options: { title: "My Daily Activities", pieHole: 0.4 }
            })
          ),
          i.a.createElement(
            o.MDXTag,
            {
              name: "h2",
              components: a,
              props: { id: "rotating-a-pie-chart" }
            },
            i.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#rotating-a-pie-chart" }
              },
              i.a.createElement(
                o.MDXTag,
                {
                  name: "span",
                  components: a,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Rotating A Pie Chart"
          ),
          i.a.createElement(
            r.d,
            {
              __position: 3,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"PieChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Language', 'Speakers (in millions)'],\n    ['German', 5.85],\n    ['French', 1.66],\n    ['Italian', 0.316],\n    ['Romansh', 0.0791],\n  ]}\n  options={{\n    legend: 'none',\n    pieSliceText: 'label',\n    title: 'Swiss Language Use (100 degree rotation)',\n    pieStartAngle: 100,\n  }}\n/>"
            },
            i.a.createElement(p.a, {
              width: "500px",
              height: "300px",
              chartType: "PieChart",
              loader: i.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Language", "Speakers (in millions)"],
                ["German", 5.85],
                ["French", 1.66],
                ["Italian", 0.316],
                ["Romansh", 0.0791]
              ],
              options: {
                legend: "none",
                pieSliceText: "label",
                title: "Swiss Language Use (100 degree rotation)",
                pieStartAngle: 100
              }
            })
          ),
          i.a.createElement(
            o.MDXTag,
            { name: "h2", components: a, props: { id: "exploding-a-slice" } },
            i.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#exploding-a-slice" }
              },
              i.a.createElement(
                o.MDXTag,
                {
                  name: "span",
                  components: a,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Exploding a slice"
          ),
          i.a.createElement(
            r.d,
            {
              __position: 4,
              __code:
                "<Chart\n  width={'800px'}\n  height={'400px'}\n  chartType=\"PieChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Language', 'Speakers (in millions)'],\n    ['Assamese', 13],\n    ['Bengali', 83],\n    ['Bodo', 1.4],\n    ['Dogri', 2.3],\n    ['Gujarati', 46],\n    ['Hindi', 300],\n    ['Kannada', 38],\n    ['Kashmiri', 5.5],\n    ['Konkani', 5],\n    ['Maithili', 20],\n    ['Malayalam', 33],\n    ['Manipuri', 1.5],\n    ['Marathi', 72],\n    ['Nepali', 2.9],\n    ['Oriya', 33],\n    ['Punjabi', 29],\n    ['Sanskrit', 0.01],\n    ['Santhali', 6.5],\n    ['Sindhi', 2.5],\n    ['Tamil', 61],\n    ['Telugu', 74],\n    ['Urdu', 52],\n  ]}\n  options={{\n    title: 'Indian Language Use',\n    legend: 'none',\n    pieSliceText: 'label',\n    slices: {\n      4: { offset: 0.2 },\n      12: { offset: 0.3 },\n      14: { offset: 0.4 },\n      15: { offset: 0.5 },\n    },\n  }}\n/>"
            },
            i.a.createElement(p.a, {
              width: "800px",
              height: "400px",
              chartType: "PieChart",
              loader: i.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Language", "Speakers (in millions)"],
                ["Assamese", 13],
                ["Bengali", 83],
                ["Bodo", 1.4],
                ["Dogri", 2.3],
                ["Gujarati", 46],
                ["Hindi", 300],
                ["Kannada", 38],
                ["Kashmiri", 5.5],
                ["Konkani", 5],
                ["Maithili", 20],
                ["Malayalam", 33],
                ["Manipuri", 1.5],
                ["Marathi", 72],
                ["Nepali", 2.9],
                ["Oriya", 33],
                ["Punjabi", 29],
                ["Sanskrit", 0.01],
                ["Santhali", 6.5],
                ["Sindhi", 2.5],
                ["Tamil", 61],
                ["Telugu", 74],
                ["Urdu", 52]
              ],
              options: {
                title: "Indian Language Use",
                legend: "none",
                pieSliceText: "label",
                slices: {
                  4: { offset: 0.2 },
                  12: { offset: 0.3 },
                  14: { offset: 0.4 },
                  15: { offset: 0.5 }
                }
              }
            })
          ),
          i.a.createElement(
            o.MDXTag,
            { name: "h2", components: a, props: { id: "removing-slices" } },
            i.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#removing-slices" }
              },
              i.a.createElement(
                o.MDXTag,
                {
                  name: "span",
                  components: a,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Removing Slices"
          ),
          i.a.createElement(
            r.d,
            {
              __position: 5,
              __code:
                "<Chart\n  width={'800px'}\n  height={'400px'}\n  chartType=\"PieChart\"\n  loader={<div>Loading Chart</div>}\n  data={[['Pac Man', 'Percentage'], ['', 75], ['', 25]]}\n  options={{\n    legend: 'none',\n    pieSliceText: 'none',\n    pieStartAngle: 135,\n    tooltip: { trigger: 'none' },\n    slices: {\n      0: { color: 'yellow' },\n      1: { color: 'transparent' },\n    },\n  }}\n/>"
            },
            i.a.createElement(p.a, {
              width: "800px",
              height: "400px",
              chartType: "PieChart",
              loader: i.a.createElement("div", null, "Loading Chart"),
              data: [["Pac Man", "Percentage"], ["", 75], ["", 25]],
              options: {
                legend: "none",
                pieSliceText: "none",
                pieStartAngle: 135,
                tooltip: { trigger: "none" },
                slices: { 0: { color: "yellow" }, 1: { color: "transparent" } }
              }
            })
          ),
          i.a.createElement(
            o.MDXTag,
            {
              name: "h2",
              components: a,
              props: { id: "slice-visibility-threshold" }
            },
            i.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: {
                  "aria-hidden": !0,
                  href: "#slice-visibility-threshold"
                }
              },
              i.a.createElement(
                o.MDXTag,
                {
                  name: "span",
                  components: a,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Slice Visibility Threshold"
          ),
          i.a.createElement(
            r.d,
            {
              __position: 6,
              __code:
                "<Chart\n  width={'800px'}\n  height={'400px'}\n  chartType=\"PieChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Pizza', 'Popularity'],\n    ['Pepperoni', 33],\n    ['Hawaiian', 26],\n    ['Mushroom', 22],\n    ['Sausage', 10], // Below limit.\n    ['Anchovies', 9], // Below limit.\n  ]}\n  options={{\n    title: 'Popularity of Types of Pizza',\n    sliceVisibilityThreshold: 0.2, // 20%\n  }}\n/>"
            },
            i.a.createElement(p.a, {
              width: "800px",
              height: "400px",
              chartType: "PieChart",
              loader: i.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Pizza", "Popularity"],
                ["Pepperoni", 33],
                ["Hawaiian", 26],
                ["Mushroom", 22],
                ["Sausage", 10],
                ["Anchovies", 9]
              ],
              options: {
                title: "Popularity of Types of Pizza",
                sliceVisibilityThreshold: 0.2
              }
            })
          ),
          i.a.createElement(
            o.MDXTag,
            { name: "h1", components: a, props: { id: "data-format" } },
            i.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#data-format" }
              },
              i.a.createElement(
                o.MDXTag,
                {
                  name: "span",
                  components: a,
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
            { name: "p", components: a },
            i.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/combochart#data-format"
                }
              },
              "Complete Data Format Reference"
            )
          ),
          i.a.createElement(
            o.MDXTag,
            { name: "h1", components: a, props: { id: "reference" } },
            i.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#reference" }
              },
              i.a.createElement(
                o.MDXTag,
                {
                  name: "span",
                  components: a,
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
            { name: "p", components: a },
            i.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/combochart"
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
