(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    "./src/docs/AreaChart.mdx": function(e, a, n) {
      "use strict";
      n.r(a);
      var t = n("./node_modules/react/index.js"),
        r = n.n(t),
        o = n("./node_modules/@mdx-js/tag/dist/index.js"),
        s = n("./node_modules/docz/dist/index.m.js"),
        p = n("./src/index.tsx");
      a.default = function(e) {
        var a = e.components;
        return r.a.createElement(
          o.MDXTag,
          { name: "wrapper", components: a },
          r.a.createElement(
            o.MDXTag,
            { name: "h1", components: a, props: { id: "usage" } },
            r.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#usage" }
              },
              r.a.createElement(
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
            "Usage"
          ),
          r.a.createElement(
            o.MDXTag,
            { name: "h2", components: a, props: { id: "simple-example" } },
            r.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#simple-example" }
              },
              r.a.createElement(
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
          r.a.createElement(
            s.d,
            {
              __position: 0,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"AreaChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Year', 'Sales', 'Expenses'],\n    ['2013', 1000, 400],\n    ['2014', 1170, 460],\n    ['2015', 660, 1120],\n    ['2016', 1030, 540],\n  ]}\n  options={{\n    title: 'Company Performance',\n    hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },\n    vAxis: { minValue: 0 },\n    // For the legend to fit, we make the chart area smaller\n    chartArea: { width: '50%', height: '70%' },\n    // lineWidth: 25\n  }}\n/>"
            },
            r.a.createElement(p.a, {
              width: "500px",
              height: "300px",
              chartType: "AreaChart",
              loader: r.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Year", "Sales", "Expenses"],
                ["2013", 1e3, 400],
                ["2014", 1170, 460],
                ["2015", 660, 1120],
                ["2016", 1030, 540]
              ],
              options: {
                title: "Company Performance",
                hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
                vAxis: { minValue: 0 },
                chartArea: { width: "50%", height: "70%" }
              }
            })
          ),
          r.a.createElement(
            o.MDXTag,
            { name: "h2", components: a, props: { id: "stacking-areas" } },
            r.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#stacking-areas" }
              },
              r.a.createElement(
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
            "Stacking Areas"
          ),
          r.a.createElement(
            s.d,
            {
              __position: 1,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"AreaChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Year', 'Sales', 'Expenses'],\n    ['2013', 1000, 400],\n    ['2014', 1170, 460],\n    ['2015', 660, 1120],\n    ['2016', 1030, 540],\n  ]}\n  options={{\n    isStacked: true,\n    height: 300,\n    legend: { position: 'top', maxLines: 3 },\n    vAxis: { minValue: 0 },\n    // lineWidth: 25\n  }}\n/>"
            },
            r.a.createElement(p.a, {
              width: "500px",
              height: "300px",
              chartType: "AreaChart",
              loader: r.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Year", "Sales", "Expenses"],
                ["2013", 1e3, 400],
                ["2014", 1170, 460],
                ["2015", 660, 1120],
                ["2016", 1030, 540]
              ],
              options: {
                isStacked: !0,
                height: 300,
                legend: { position: "top", maxLines: 3 },
                vAxis: { minValue: 0 }
              }
            })
          ),
          r.a.createElement(
            o.MDXTag,
            {
              name: "h2",
              components: a,
              props: { id: "100-percent-stacked-areas" }
            },
            r.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#100-percent-stacked-areas" }
              },
              r.a.createElement(
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
            "100 Percent Stacked Areas"
          ),
          r.a.createElement(
            s.d,
            {
              __position: 2,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"AreaChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Year', 'Sales', 'Expenses'],\n    ['2013', 1000, 400],\n    ['2014', 1170, 460],\n    ['2015', 660, 1120],\n    ['2016', 1030, 540],\n  ]}\n  options={{\n    isStacked: 'relative',\n    height: 300,\n    legend: { position: 'top', maxLines: 3 },\n    vAxis: {\n      minValue: 0,\n      ticks: [0, 0.3, 0.6, 0.9, 1],\n    },\n    // lineWidth: 25\n  }}\n/>"
            },
            r.a.createElement(p.a, {
              width: "500px",
              height: "300px",
              chartType: "AreaChart",
              loader: r.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Year", "Sales", "Expenses"],
                ["2013", 1e3, 400],
                ["2014", 1170, 460],
                ["2015", 660, 1120],
                ["2016", 1030, 540]
              ],
              options: {
                isStacked: "relative",
                height: 300,
                legend: { position: "top", maxLines: 3 },
                vAxis: { minValue: 0, ticks: [0, 0.3, 0.6, 0.9, 1] }
              }
            })
          ),
          r.a.createElement(
            o.MDXTag,
            { name: "h1", components: a, props: { id: "data-format" } },
            r.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#data-format" }
              },
              r.a.createElement(
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
          r.a.createElement(
            o.MDXTag,
            { name: "p", components: a },
            r.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/areachart#data-format"
                }
              },
              "Complete Data Format Reference"
            )
          ),
          r.a.createElement(
            o.MDXTag,
            { name: "h1", components: a, props: { id: "reference" } },
            r.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#reference" }
              },
              r.a.createElement(
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
          r.a.createElement(
            o.MDXTag,
            { name: "p", components: a },
            r.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/areachart"
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
