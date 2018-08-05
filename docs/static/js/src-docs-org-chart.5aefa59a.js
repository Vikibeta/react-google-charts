(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    "./src/docs/OrgChart.mdx": function(e, a, n) {
      "use strict";
      n.r(a);
      var t = n("./node_modules/react/index.js"),
        o = n.n(t),
        r = n("./node_modules/@mdx-js/tag/dist/index.js"),
        m = n("./node_modules/docz/dist/index.m.js"),
        i = n("./src/index.tsx");
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
            { name: "h2", components: a, props: { id: "example-with-html" } },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#example-with-html" }
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
            "Example With HTML"
          ),
          o.a.createElement(
            m.d,
            {
              __position: 0,
              __code:
                "<Chart\n  width={'100%'}\n  height={350}\n  chartType=\"OrgChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Name', 'Manager', 'ToolTip'],\n    [\n      {\n        v: 'Mike',\n        f: 'Mike<div style=\"color:red; font-style:italic\">President</div>',\n      },\n      '',\n      'The President',\n    ],\n    [\n      {\n        v: 'Jim',\n        f:\n          'Jim<div style=\"color:red; font-style:italic\">Vice President</div>',\n      },\n      'Mike',\n      'VP',\n    ],\n    ['Alice', 'Mike', ''],\n    ['Bob', 'Jim', 'Bob Sponge'],\n    ['Carol', 'Bob', ''],\n  ]}\n  options={{\n    allowHtml: true,\n  }}\n/>"
            },
            o.a.createElement(i.a, {
              width: "100%",
              height: 350,
              chartType: "OrgChart",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Name", "Manager", "ToolTip"],
                [
                  {
                    v: "Mike",
                    f:
                      'Mike<div style="color:red; font-style:italic">President</div>'
                  },
                  "",
                  "The President"
                ],
                [
                  {
                    v: "Jim",
                    f:
                      'Jim<div style="color:red; font-style:italic">Vice President</div>'
                  },
                  "Mike",
                  "VP"
                ],
                ["Alice", "Mike", ""],
                ["Bob", "Jim", "Bob Sponge"],
                ["Carol", "Bob", ""]
              ],
              options: { allowHtml: !0 }
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
                    "https://developers.google.com/chart/interactive/docs/gallery/candlestickchart#data-format"
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
                    "https://developers.google.com/chart/interactive/docs/gallery/candlestickchart"
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
