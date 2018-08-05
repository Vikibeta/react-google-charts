(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    "./src/docs/SankeyDiagram.mdx": function(a, n, e) {
      "use strict";
      e.r(n);
      var o = e("./node_modules/react/index.js"),
        r = e.n(o),
        l = e("./node_modules/@mdx-js/tag/dist/index.js"),
        c = e("./node_modules/docz/dist/index.m.js"),
        i = e("./src/index.tsx");
      n.default = function(a) {
        var n = a.components;
        return r.a.createElement(
          l.MDXTag,
          { name: "wrapper", components: n },
          r.a.createElement(
            l.MDXTag,
            { name: "h2", components: n, props: { id: "simple-example" } },
            r.a.createElement(
              l.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#simple-example" }
              },
              r.a.createElement(
                l.MDXTag,
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
          r.a.createElement(
            c.d,
            {
              __position: 0,
              __code:
                "<Chart\n  width={600}\n  height={'300px'}\n  chartType=\"Sankey\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['From', 'To', 'Weight'],\n    ['A', 'X', 5],\n    ['A', 'Y', 7],\n    ['A', 'Z', 6],\n    ['B', 'X', 2],\n    ['B', 'Y', 9],\n    ['B', 'Z', 4],\n  ]}\n/>"
            },
            r.a.createElement(i.a, {
              width: 600,
              height: "300px",
              chartType: "Sankey",
              loader: r.a.createElement("div", null, "Loading Chart"),
              data: [
                ["From", "To", "Weight"],
                ["A", "X", 5],
                ["A", "Y", 7],
                ["A", "Z", 6],
                ["B", "X", 2],
                ["B", "Y", 9],
                ["B", "Z", 4]
              ]
            })
          ),
          r.a.createElement(
            l.MDXTag,
            { name: "h2", components: n, props: { id: "multilvel-sankeys" } },
            r.a.createElement(
              l.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#multilvel-sankeys" }
              },
              r.a.createElement(
                l.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Multilvel Sankeys"
          ),
          r.a.createElement(
            c.d,
            {
              __position: 1,
              __code:
                "<Chart\n  width={600}\n  height={'300px'}\n  chartType=\"Sankey\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['From', 'To', 'Weight'],\n    ['Brazil', 'Portugal', 5],\n    ['Brazil', 'France', 1],\n    ['Brazil', 'Spain', 1],\n    ['Brazil', 'England', 1],\n    ['Canada', 'Portugal', 1],\n    ['Canada', 'France', 5],\n    ['Canada', 'England', 1],\n    ['Mexico', 'Portugal', 1],\n    ['Mexico', 'France', 1],\n    ['Mexico', 'Spain', 5],\n    ['Mexico', 'England', 1],\n    ['USA', 'Portugal', 1],\n    ['USA', 'France', 1],\n    ['USA', 'Spain', 1],\n    ['USA', 'England', 5],\n    ['Portugal', 'Angola', 2],\n    ['Portugal', 'Senegal', 1],\n    ['Portugal', 'Morocco', 1],\n    ['Portugal', 'South Africa', 3],\n    ['France', 'Angola', 1],\n    ['France', 'Senegal', 3],\n    ['France', 'Mali', 3],\n    ['France', 'Morocco', 3],\n    ['France', 'South Africa', 1],\n    ['Spain', 'Senegal', 1],\n    ['Spain', 'Morocco', 3],\n    ['Spain', 'South Africa', 1],\n    ['England', 'Angola', 1],\n    ['England', 'Senegal', 1],\n    ['England', 'Morocco', 2],\n    ['England', 'South Africa', 7],\n    ['South Africa', 'China', 5],\n    ['South Africa', 'India', 1],\n    ['South Africa', 'Japan', 3],\n    ['Angola', 'China', 5],\n    ['Angola', 'India', 1],\n    ['Angola', 'Japan', 3],\n    ['Senegal', 'China', 5],\n    ['Senegal', 'India', 1],\n    ['Senegal', 'Japan', 3],\n    ['Mali', 'China', 5],\n    ['Mali', 'India', 1],\n    ['Mali', 'Japan', 3],\n    ['Morocco', 'China', 5],\n    ['Morocco', 'India', 1],\n    ['Morocco', 'Japan', 3],\n  ]}\n/>"
            },
            r.a.createElement(i.a, {
              width: 600,
              height: "300px",
              chartType: "Sankey",
              loader: r.a.createElement("div", null, "Loading Chart"),
              data: [
                ["From", "To", "Weight"],
                ["Brazil", "Portugal", 5],
                ["Brazil", "France", 1],
                ["Brazil", "Spain", 1],
                ["Brazil", "England", 1],
                ["Canada", "Portugal", 1],
                ["Canada", "France", 5],
                ["Canada", "England", 1],
                ["Mexico", "Portugal", 1],
                ["Mexico", "France", 1],
                ["Mexico", "Spain", 5],
                ["Mexico", "England", 1],
                ["USA", "Portugal", 1],
                ["USA", "France", 1],
                ["USA", "Spain", 1],
                ["USA", "England", 5],
                ["Portugal", "Angola", 2],
                ["Portugal", "Senegal", 1],
                ["Portugal", "Morocco", 1],
                ["Portugal", "South Africa", 3],
                ["France", "Angola", 1],
                ["France", "Senegal", 3],
                ["France", "Mali", 3],
                ["France", "Morocco", 3],
                ["France", "South Africa", 1],
                ["Spain", "Senegal", 1],
                ["Spain", "Morocco", 3],
                ["Spain", "South Africa", 1],
                ["England", "Angola", 1],
                ["England", "Senegal", 1],
                ["England", "Morocco", 2],
                ["England", "South Africa", 7],
                ["South Africa", "China", 5],
                ["South Africa", "India", 1],
                ["South Africa", "Japan", 3],
                ["Angola", "China", 5],
                ["Angola", "India", 1],
                ["Angola", "Japan", 3],
                ["Senegal", "China", 5],
                ["Senegal", "India", 1],
                ["Senegal", "Japan", 3],
                ["Mali", "China", 5],
                ["Mali", "India", 1],
                ["Mali", "Japan", 3],
                ["Morocco", "China", 5],
                ["Morocco", "India", 1],
                ["Morocco", "Japan", 3]
              ]
            })
          ),
          r.a.createElement(
            l.MDXTag,
            { name: "h2", components: n, props: { id: "custom-colors" } },
            r.a.createElement(
              l.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#custom-colors" }
              },
              r.a.createElement(
                l.MDXTag,
                {
                  name: "span",
                  components: n,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Custom Colors"
          ),
          r.a.createElement(
            c.d,
            {
              __position: 2,
              __code:
                "<Chart\n  width={600}\n  height={'300px'}\n  chartType=\"Sankey\"\n  loader={<div>Loading Chart</div>}\n  options={{\n    sankey: {\n      link: { color: { fill: '#d799ae' } },\n      node: {\n        colors: ['#a61d4c'],\n        label: { color: '#871b47' },\n      },\n    },\n  }}\n  data={[\n    ['From', 'To', 'Weight'],\n    ['Brazil', 'Portugal', 5],\n    ['Brazil', 'France', 1],\n    ['Brazil', 'Spain', 1],\n    ['Brazil', 'England', 1],\n    ['Canada', 'Portugal', 1],\n    ['Canada', 'France', 5],\n    ['Canada', 'England', 1],\n    ['Mexico', 'Portugal', 1],\n    ['Mexico', 'France', 1],\n    ['Mexico', 'Spain', 5],\n    ['Mexico', 'England', 1],\n    ['USA', 'Portugal', 1],\n    ['USA', 'France', 1],\n    ['USA', 'Spain', 1],\n    ['USA', 'England', 5],\n    ['Portugal', 'Angola', 2],\n    ['Portugal', 'Senegal', 1],\n    ['Portugal', 'Morocco', 1],\n    ['Portugal', 'South Africa', 3],\n    ['France', 'Angola', 1],\n    ['France', 'Senegal', 3],\n    ['France', 'Mali', 3],\n    ['France', 'Morocco', 3],\n    ['France', 'South Africa', 1],\n    ['Spain', 'Senegal', 1],\n    ['Spain', 'Morocco', 3],\n    ['Spain', 'South Africa', 1],\n    ['England', 'Angola', 1],\n    ['England', 'Senegal', 1],\n    ['England', 'Morocco', 2],\n    ['England', 'South Africa', 7],\n    ['South Africa', 'China', 5],\n    ['South Africa', 'India', 1],\n    ['South Africa', 'Japan', 3],\n    ['Angola', 'China', 5],\n    ['Angola', 'India', 1],\n    ['Angola', 'Japan', 3],\n    ['Senegal', 'China', 5],\n    ['Senegal', 'India', 1],\n    ['Senegal', 'Japan', 3],\n    ['Mali', 'China', 5],\n    ['Mali', 'India', 1],\n    ['Mali', 'Japan', 3],\n    ['Morocco', 'China', 5],\n    ['Morocco', 'India', 1],\n    ['Morocco', 'Japan', 3],\n  ]}\n/>"
            },
            r.a.createElement(i.a, {
              width: 600,
              height: "300px",
              chartType: "Sankey",
              loader: r.a.createElement("div", null, "Loading Chart"),
              options: {
                sankey: {
                  link: { color: { fill: "#d799ae" } },
                  node: { colors: ["#a61d4c"], label: { color: "#871b47" } }
                }
              },
              data: [
                ["From", "To", "Weight"],
                ["Brazil", "Portugal", 5],
                ["Brazil", "France", 1],
                ["Brazil", "Spain", 1],
                ["Brazil", "England", 1],
                ["Canada", "Portugal", 1],
                ["Canada", "France", 5],
                ["Canada", "England", 1],
                ["Mexico", "Portugal", 1],
                ["Mexico", "France", 1],
                ["Mexico", "Spain", 5],
                ["Mexico", "England", 1],
                ["USA", "Portugal", 1],
                ["USA", "France", 1],
                ["USA", "Spain", 1],
                ["USA", "England", 5],
                ["Portugal", "Angola", 2],
                ["Portugal", "Senegal", 1],
                ["Portugal", "Morocco", 1],
                ["Portugal", "South Africa", 3],
                ["France", "Angola", 1],
                ["France", "Senegal", 3],
                ["France", "Mali", 3],
                ["France", "Morocco", 3],
                ["France", "South Africa", 1],
                ["Spain", "Senegal", 1],
                ["Spain", "Morocco", 3],
                ["Spain", "South Africa", 1],
                ["England", "Angola", 1],
                ["England", "Senegal", 1],
                ["England", "Morocco", 2],
                ["England", "South Africa", 7],
                ["South Africa", "China", 5],
                ["South Africa", "India", 1],
                ["South Africa", "Japan", 3],
                ["Angola", "China", 5],
                ["Angola", "India", 1],
                ["Angola", "Japan", 3],
                ["Senegal", "China", 5],
                ["Senegal", "India", 1],
                ["Senegal", "Japan", 3],
                ["Mali", "China", 5],
                ["Mali", "India", 1],
                ["Mali", "Japan", 3],
                ["Morocco", "China", 5],
                ["Morocco", "India", 1],
                ["Morocco", "Japan", 3]
              ]
            })
          ),
          r.a.createElement(
            l.MDXTag,
            { name: "h1", components: n, props: { id: "data-format" } },
            r.a.createElement(
              l.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#data-format" }
              },
              r.a.createElement(
                l.MDXTag,
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
          r.a.createElement(
            l.MDXTag,
            { name: "p", components: n },
            r.a.createElement(
              l.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/sankey#data-format"
                }
              },
              "Complete Data Format Reference"
            )
          ),
          r.a.createElement(
            l.MDXTag,
            { name: "h1", components: n, props: { id: "reference" } },
            r.a.createElement(
              l.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#reference" }
              },
              r.a.createElement(
                l.MDXTag,
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
          r.a.createElement(
            l.MDXTag,
            { name: "p", components: n },
            r.a.createElement(
              l.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/sankey"
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
