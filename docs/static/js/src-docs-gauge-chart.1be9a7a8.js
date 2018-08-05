(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    "./src/docs/GaugeChart.mdx": function(e, n, a) {
      "use strict";
      a.r(n);
      var t = a("./node_modules/react/index.js"),
        o = a.n(t),
        r = a("./node_modules/@mdx-js/tag/dist/index.js"),
        m = a("./node_modules/docz/dist/index.m.js"),
        p = a("./node_modules/react-component-component/es/index.js"),
        c = a("./src/index.tsx");
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
            { name: "h2", components: n, props: { id: "simple-example" } },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#simple-example" }
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
            "Simple Example"
          ),
          o.a.createElement(
            m.d,
            {
              __position: 0,
              __code:
                "<Component\n  initialState={{\n    memory: 80,\n    cpu: 55,\n    network: 68,\n    intervalID: null,\n  }}\n  didMount={component => {\n    const intervalID = setInterval(() => {\n      component.setState({\n        memory: Math.random() * 100,\n        cpu: Math.random() * 100,\n        network: Math.random() * 100,\n        intervalID,\n      })\n    }, 1000)\n  }}\n  willUnmount={component => {\n    if (component.state.intervalID !== null) {\n      clearInterval(component.state.intervalID)\n    }\n  }}\n>\n  {comp => {\n    return (\n      <Chart\n        width={400}\n        height={120}\n        chartType=\"Gauge\"\n        loader={<div>Loading Chart</div>}\n        data={[\n          ['Label', 'Value'],\n          ['Memory', comp.state.memory],\n          ['CPU', comp.state.cpu],\n          ['Network', comp.state.network],\n        ]}\n        options={{\n          redFrom: 90,\n          redTo: 100,\n          yellowFrom: 75,\n          yellowTo: 90,\n          minorTicks: 5,\n        }}\n      />\n    )\n  }}\n</Component>"
            },
            o.a.createElement(
              p.a,
              {
                initialState: {
                  memory: 80,
                  cpu: 55,
                  network: 68,
                  intervalID: null
                },
                didMount: function(e) {
                  var n = setInterval(function() {
                    e.setState({
                      memory: 100 * Math.random(),
                      cpu: 100 * Math.random(),
                      network: 100 * Math.random(),
                      intervalID: n
                    });
                  }, 1e3);
                },
                willUnmount: function(e) {
                  null !== e.state.intervalID &&
                    clearInterval(e.state.intervalID);
                }
              },
              function(e) {
                return o.a.createElement(c.a, {
                  width: 400,
                  height: 120,
                  chartType: "Gauge",
                  loader: o.a.createElement("div", null, "Loading Chart"),
                  data: [
                    ["Label", "Value"],
                    ["Memory", e.state.memory],
                    ["CPU", e.state.cpu],
                    ["Network", e.state.network]
                  ],
                  options: {
                    redFrom: 90,
                    redTo: 100,
                    yellowFrom: 75,
                    yellowTo: 90,
                    minorTicks: 5
                  }
                });
              }
            )
          ),
          o.a.createElement(
            r.MDXTag,
            { name: "h1", components: n, props: { id: "data-format" } },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: n,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#data-format" }
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
            "Data Format"
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
                    "https://developers.google.com/chart/interactive/docs/gallery/gauge#data-format"
                }
              },
              "Complete Data Format Reference"
            )
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
                    "https://developers.google.com/chart/interactive/docs/gallery/gauge"
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
