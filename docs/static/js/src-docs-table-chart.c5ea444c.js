(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    "./src/docs/TableChart.mdx": function(e, a, n) {
      "use strict";
      n.r(a);
      var t = n("./node_modules/react/index.js"),
        o = n.n(t),
        r = n("./node_modules/@mdx-js/tag/dist/index.js"),
        m = n("./node_modules/docz/dist/index.m.js"),
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
            r.MDXTag,
            { name: "h2", components: a, props: { id: "simple-example" } },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#simple-example" }
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
            "Simple Example"
          ),
          o.a.createElement(
            m.d,
            {
              __position: 0,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"Table\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      { type: 'string', label: 'Name' },\n      { type: 'number', label: 'Salary' },\n      { type: 'boolean', label: 'Full Time Employee' },\n    ],\n    ['Mike', { v: 10000, f: '$10,000' }, true],\n    ['Jim', { v: 8000, f: '$8,000' }, false],\n    ['Alice', { v: 12500, f: '$12,500' }, true],\n    ['Bob', { v: 7000, f: '$7,000' }, true],\n  ]}\n  options={{\n    showRowNumber: true,\n  }}\n/>"
            },
            o.a.createElement(p.a, {
              width: "500px",
              height: "300px",
              chartType: "Table",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "string", label: "Name" },
                  { type: "number", label: "Salary" },
                  { type: "boolean", label: "Full Time Employee" }
                ],
                ["Mike", { v: 1e4, f: "$10,000" }, !0],
                ["Jim", { v: 8e3, f: "$8,000" }, !1],
                ["Alice", { v: 12500, f: "$12,500" }, !0],
                ["Bob", { v: 7e3, f: "$7,000" }, !0]
              ],
              options: { showRowNumber: !0 }
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
                    "https://developers.google.com/chart/interactive/docs/gallery/table#data-format"
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
                    "https://developers.google.com/chart/interactive/docs/gallery/table"
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
