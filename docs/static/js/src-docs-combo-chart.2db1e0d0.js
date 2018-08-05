(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    "./src/docs/ComboChart.mdx": function(e, a, n) {
      "use strict";
      n.r(a);
      var t = n("./node_modules/react/index.js"),
        o = n.n(t),
        r = n("./node_modules/@mdx-js/tag/dist/index.js"),
        s = n("./node_modules/docz/dist/index.m.js"),
        p = n("./src/index.tsx");
      a.default = function(e) {
        var a = e.components;
        return o.a.createElement(
          r.MDXTag,
          { name: "wrapper", components: a },
          o.a.createElement(
            r.MDXTag,
            { name: "h1", components: a, props: { id: "usage" } },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#usage" }
              },
              o.a.createElement(
                r.MDXTag,
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
          o.a.createElement(
            s.d,
            {
              __position: 0,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"ComboChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      'Month',\n      'Bolivia',\n      'Ecuador',\n      'Madagascar',\n      'Papua New Guinea',\n      'Rwanda',\n      'Average',\n    ],\n    ['2004/05', 165, 938, 522, 998, 450, 614.6],\n    ['2005/06', 135, 1120, 599, 1268, 288, 682],\n    ['2006/07', 157, 1167, 587, 807, 397, 623],\n    ['2007/08', 139, 1110, 615, 968, 215, 609.4],\n    ['2008/09', 136, 691, 629, 1026, 366, 569.6],\n  ]}\n  options={{\n    title: 'Monthly Coffee Production by Country',\n    vAxis: { title: 'Cups' },\n    hAxis: { title: 'Month' },\n    seriesType: 'bars',\n    series: { 5: { type: 'line' } },\n  }}\n/>"
            },
            o.a.createElement(p.a, {
              width: "500px",
              height: "300px",
              chartType: "ComboChart",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  "Month",
                  "Bolivia",
                  "Ecuador",
                  "Madagascar",
                  "Papua New Guinea",
                  "Rwanda",
                  "Average"
                ],
                ["2004/05", 165, 938, 522, 998, 450, 614.6],
                ["2005/06", 135, 1120, 599, 1268, 288, 682],
                ["2006/07", 157, 1167, 587, 807, 397, 623],
                ["2007/08", 139, 1110, 615, 968, 215, 609.4],
                ["2008/09", 136, 691, 629, 1026, 366, 569.6]
              ],
              options: {
                title: "Monthly Coffee Production by Country",
                vAxis: { title: "Cups" },
                hAxis: { title: "Month" },
                seriesType: "bars",
                series: { 5: { type: "line" } }
              }
            })
          ),
          o.a.createElement(
            r.MDXTag,
            { name: "h1", components: a, props: { id: "data-format" } },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#data-format" }
              },
              o.a.createElement(
                r.MDXTag,
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
          o.a.createElement(
            r.MDXTag,
            { name: "p", components: a },
            o.a.createElement(
              r.MDXTag,
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
          o.a.createElement(
            r.MDXTag,
            { name: "h1", components: a, props: { id: "reference" } },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#reference" }
              },
              o.a.createElement(
                r.MDXTag,
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
          o.a.createElement(
            r.MDXTag,
            { name: "p", components: a },
            o.a.createElement(
              r.MDXTag,
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
