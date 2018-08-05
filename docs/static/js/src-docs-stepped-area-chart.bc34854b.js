(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    "./src/docs/SteppedAreaChart.mdx": function(e, a, n) {
      "use strict";
      n.r(a);
      var t = n("./node_modules/react/index.js"),
        r = n.n(t),
        o = n("./node_modules/@mdx-js/tag/dist/index.js"),
        p = n("./node_modules/docz/dist/index.m.js"),
        s = n("./src/index.tsx");
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
            p.d,
            {
              __position: 0,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"SteppedAreaChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Director (Year)', 'Rotten Tomatoes', 'IMDB'],\n    ['Alfred Hitchcock (1935)', 8.4, 7.9],\n    ['Ralph Thomas (1959)', 6.9, 6.5],\n    ['Don Sharp (1978)', 6.5, 6.4],\n    ['James Hawes (2008)', 4.4, 6.2],\n  ]}\n  options={{\n    title: \"The decline of 'The 39 Steps'\",\n    vAxis: { title: 'Accumulated Rating' },\n    isStacked: true,\n  }}\n/>"
            },
            r.a.createElement(s.a, {
              width: "500px",
              height: "300px",
              chartType: "SteppedAreaChart",
              loader: r.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Director (Year)", "Rotten Tomatoes", "IMDB"],
                ["Alfred Hitchcock (1935)", 8.4, 7.9],
                ["Ralph Thomas (1959)", 6.9, 6.5],
                ["Don Sharp (1978)", 6.5, 6.4],
                ["James Hawes (2008)", 4.4, 6.2]
              ],
              options: {
                title: "The decline of 'The 39 Steps'",
                vAxis: { title: "Accumulated Rating" },
                isStacked: !0
              }
            })
          ),
          r.a.createElement(
            o.MDXTag,
            {
              name: "h2",
              components: a,
              props: { id: "100-percent-stacked-stepped-area" }
            },
            r.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: {
                  "aria-hidden": !0,
                  href: "#100-percent-stacked-stepped-area"
                }
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
            "100 Percent Stacked Stepped Area"
          ),
          r.a.createElement(
            p.d,
            {
              __position: 1,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"AreaChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Style', 'Colonial', 'Victorian', 'Modern', 'Contemporary'],\n    ['2013', 5.2, 3.6, 2.8, 2],\n    ['2014', 5.6, 4.0, 2.8, 3],\n    ['2015', 7.2, 2.2, 2.2, 6.0],\n    ['2016', 8.0, 1.7, 0.8, 4.0],\n  ]}\n  options={{\n    isStacked: 'relative',\n    height: 300,\n    legend: { position: 'top', maxLines: 3 },\n    vAxis: {\n      minValue: 0,\n      ticks: [0, 0.3, 0.6, 0.9, 1],\n    },\n  }}\n/>"
            },
            r.a.createElement(s.a, {
              width: "500px",
              height: "300px",
              chartType: "AreaChart",
              loader: r.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Style", "Colonial", "Victorian", "Modern", "Contemporary"],
                ["2013", 5.2, 3.6, 2.8, 2],
                ["2014", 5.6, 4, 2.8, 3],
                ["2015", 7.2, 2.2, 2.2, 6],
                ["2016", 8, 1.7, 0.8, 4]
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
                    "https://developers.google.com/chart/interactive/docs/gallery/steppedareachart#data-format"
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
                    "https://developers.google.com/chart/interactive/docs/gallery/steppedareachart"
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
