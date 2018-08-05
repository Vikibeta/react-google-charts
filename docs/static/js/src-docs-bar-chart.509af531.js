(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    "./src/docs/BarChart.mdx": function(e, a, n) {
      "use strict";
      n.r(a);
      var t = n("./node_modules/react/index.js"),
        o = n.n(t),
        i = n("./node_modules/@mdx-js/tag/dist/index.js"),
        r = n("./node_modules/docz/dist/index.m.js"),
        l = n("./src/index.tsx");
      a.default = function(e) {
        var a = e.components;
        return o.a.createElement(
          i.MDXTag,
          { name: "wrapper", components: a },
          o.a.createElement(
            i.MDXTag,
            { name: "h1", components: a, props: { id: "usage" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#usage" }
              },
              o.a.createElement(
                i.MDXTag,
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
            i.MDXTag,
            {
              name: "h2",
              components: a,
              props: { id: "basic-bar-chart-with-multiple-series" }
            },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: {
                  "aria-hidden": !0,
                  href: "#basic-bar-chart-with-multiple-series"
                }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: a,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Basic bar chart with multiple series"
          ),
          o.a.createElement(
            r.d,
            {
              __position: 0,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"BarChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['City', '2010 Population', '2000 Population'],\n    ['New York City, NY', 8175000, 8008000],\n    ['Los Angeles, CA', 3792000, 3694000],\n    ['Chicago, IL', 2695000, 2896000],\n    ['Houston, TX', 2099000, 1953000],\n    ['Philadelphia, PA', 1526000, 1517000],\n  ]}\n  options={{\n    title: 'Population of Largest U.S. Cities',\n    chartArea: { width: '50%' },\n    hAxis: {\n      title: 'Total Population',\n      minValue: 0,\n    },\n    vAxis: {\n      title: 'City',\n    },\n  }}\n/>"
            },
            o.a.createElement(l.a, {
              width: "500px",
              height: "300px",
              chartType: "BarChart",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                ["City", "2010 Population", "2000 Population"],
                ["New York City, NY", 8175e3, 8008e3],
                ["Los Angeles, CA", 3792e3, 3694e3],
                ["Chicago, IL", 2695e3, 2896e3],
                ["Houston, TX", 2099e3, 1953e3],
                ["Philadelphia, PA", 1526e3, 1517e3]
              ],
              options: {
                title: "Population of Largest U.S. Cities",
                chartArea: { width: "50%" },
                hAxis: { title: "Total Population", minValue: 0 },
                vAxis: { title: "City" }
              }
            })
          ),
          o.a.createElement(
            i.MDXTag,
            { name: "h2", components: a, props: { id: "material-design" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#material-design" }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: a,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Material Design"
          ),
          o.a.createElement(
            r.d,
            {
              __position: 1,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"Bar\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Year', 'Sales', 'Expenses', 'Profit'],\n    ['2014', 1000, 400, 200],\n    ['2015', 1170, 460, 250],\n    ['2016', 660, 1120, 300],\n    ['2017', 1030, 540, 350],\n  ]}\n  options={{\n    // Material design options\n    chart: {\n      title: 'Company Performance',\n      subtitle: 'Sales, Expenses, and Profit: 2014-2017',\n    },\n  }}\n/>"
            },
            o.a.createElement(l.a, {
              width: "500px",
              height: "300px",
              chartType: "Bar",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Year", "Sales", "Expenses", "Profit"],
                ["2014", 1e3, 400, 200],
                ["2015", 1170, 460, 250],
                ["2016", 660, 1120, 300],
                ["2017", 1030, 540, 350]
              ],
              options: {
                chart: {
                  title: "Company Performance",
                  subtitle: "Sales, Expenses, and Profit: 2014-2017"
                }
              }
            })
          ),
          o.a.createElement(
            i.MDXTag,
            {
              name: "h2",
              components: a,
              props: { id: "stacked-bar-chart-with-multiple-series" }
            },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: {
                  "aria-hidden": !0,
                  href: "#stacked-bar-chart-with-multiple-series"
                }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: a,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Stacked bar chart with multiple series"
          ),
          o.a.createElement(
            r.d,
            {
              __position: 2,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"BarChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['City', '2010 Population', '2000 Population'],\n    ['New York City, NY', 8175000, 8008000],\n    ['Los Angeles, CA', 3792000, 3694000],\n    ['Chicago, IL', 2695000, 2896000],\n    ['Houston, TX', 2099000, 1953000],\n    ['Philadelphia, PA', 1526000, 1517000],\n  ]}\n  options={{\n    title: 'Population of Largest U.S. Cities',\n    chartArea: { width: '50%' },\n    isStacked: true,\n    hAxis: {\n      title: 'Total Population',\n      minValue: 0,\n    },\n    vAxis: {\n      title: 'City',\n    },\n  }}\n/>"
            },
            o.a.createElement(l.a, {
              width: "500px",
              height: "300px",
              chartType: "BarChart",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                ["City", "2010 Population", "2000 Population"],
                ["New York City, NY", 8175e3, 8008e3],
                ["Los Angeles, CA", 3792e3, 3694e3],
                ["Chicago, IL", 2695e3, 2896e3],
                ["Houston, TX", 2099e3, 1953e3],
                ["Philadelphia, PA", 1526e3, 1517e3]
              ],
              options: {
                title: "Population of Largest U.S. Cities",
                chartArea: { width: "50%" },
                isStacked: !0,
                hAxis: { title: "Total Population", minValue: 0 },
                vAxis: { title: "City" }
              }
            })
          ),
          o.a.createElement(
            i.MDXTag,
            {
              name: "h2",
              components: a,
              props: { id: "customizable-bar-colors" }
            },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#customizable-bar-colors" }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: a,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Customizable Bar Colors"
          ),
          o.a.createElement(
            r.d,
            {
              __position: 3,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"BarChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['City', '2010 Population', '2000 Population'],\n    ['New York City, NY', 8175000, 8008000],\n    ['Los Angeles, CA', 3792000, 3694000],\n    ['Chicago, IL', 2695000, 2896000],\n    ['Houston, TX', 2099000, 1953000],\n    ['Philadelphia, PA', 1526000, 1517000],\n  ]}\n  options={{\n    title: 'Population of Largest U.S. Cities',\n    chartArea: { width: '50%' },\n    colors: ['#b0120a', '#ffab91'],\n    hAxis: {\n      title: 'Total Population',\n      minValue: 0,\n    },\n    vAxis: {\n      title: 'City',\n    },\n  }}\n/>"
            },
            o.a.createElement(l.a, {
              width: "500px",
              height: "300px",
              chartType: "BarChart",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                ["City", "2010 Population", "2000 Population"],
                ["New York City, NY", 8175e3, 8008e3],
                ["Los Angeles, CA", 3792e3, 3694e3],
                ["Chicago, IL", 2695e3, 2896e3],
                ["Houston, TX", 2099e3, 1953e3],
                ["Philadelphia, PA", 1526e3, 1517e3]
              ],
              options: {
                title: "Population of Largest U.S. Cities",
                chartArea: { width: "50%" },
                colors: ["#b0120a", "#ffab91"],
                hAxis: { title: "Total Population", minValue: 0 },
                vAxis: { title: "City" }
              }
            })
          ),
          o.a.createElement(
            i.MDXTag,
            { name: "h2", components: a, props: { id: "right-y-axis" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#right-y-axis" }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: a,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Right Y axis."
          ),
          o.a.createElement(
            r.d,
            {
              __position: 4,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  // Note here we use Bar instead of BarChart to load the material design version\n  chartType=\"Bar\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['City', '2010 Population', '2000 Population'],\n    ['New York City, NY', 8175000, 8008000],\n    ['Los Angeles, CA', 3792000, 3694000],\n    ['Chicago, IL', 2695000, 2896000],\n    ['Houston, TX', 2099000, 1953000],\n    ['Philadelphia, PA', 1526000, 1517000],\n  ]}\n  options={{\n    // Material chart options\n    chart: {\n      title: 'Population of Largest U.S. Cities',\n      subtitle: 'Based on most recent and previous census data',\n    },\n    hAxis: {\n      title: 'Total Population',\n      minValue: 0,\n    },\n    vAxis: {\n      title: 'City',\n    },\n    bars: 'horizontal',\n    axes: {\n      y: {\n        0: { side: 'right' },\n      },\n    },\n  }}\n/>"
            },
            o.a.createElement(l.a, {
              width: "500px",
              height: "300px",
              chartType: "Bar",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                ["City", "2010 Population", "2000 Population"],
                ["New York City, NY", 8175e3, 8008e3],
                ["Los Angeles, CA", 3792e3, 3694e3],
                ["Chicago, IL", 2695e3, 2896e3],
                ["Houston, TX", 2099e3, 1953e3],
                ["Philadelphia, PA", 1526e3, 1517e3]
              ],
              options: {
                chart: {
                  title: "Population of Largest U.S. Cities",
                  subtitle: "Based on most recent and previous census data"
                },
                hAxis: { title: "Total Population", minValue: 0 },
                vAxis: { title: "City" },
                bars: "horizontal",
                axes: { y: { 0: { side: "right" } } }
              }
            })
          ),
          o.a.createElement(
            i.MDXTag,
            { name: "h2", components: a, props: { id: "labeling-bars" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#labeling-bars" }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: a,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Labeling Bars."
          ),
          o.a.createElement(
            r.d,
            {
              __position: 5,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"BarChart\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      'Element',\n      'Density',\n      { role: 'style' },\n      {\n        sourceColumn: 0,\n        role: 'annotation',\n        type: 'string',\n        calc: 'stringify',\n      },\n    ],\n    ['Copper', 8.94, '#b87333', null],\n    ['Silver', 10.49, 'silver', null],\n    ['Gold', 19.3, 'gold', null],\n    ['Platinum', 21.45, 'color: #e5e4e2', null],\n  ]}\n  options={{\n    title: 'Density of Precious Metals, in g/cm^3',\n    width: 600,\n    height: 400,\n    bar: { groupWidth: '95%' },\n    legend: { position: 'none' },\n  }}\n/>"
            },
            o.a.createElement(l.a, {
              width: "500px",
              height: "300px",
              chartType: "BarChart",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  "Element",
                  "Density",
                  { role: "style" },
                  {
                    sourceColumn: 0,
                    role: "annotation",
                    type: "string",
                    calc: "stringify"
                  }
                ],
                ["Copper", 8.94, "#b87333", null],
                ["Silver", 10.49, "silver", null],
                ["Gold", 19.3, "gold", null],
                ["Platinum", 21.45, "color: #e5e4e2", null]
              ],
              options: {
                title: "Density of Precious Metals, in g/cm^3",
                width: 600,
                height: 400,
                bar: { groupWidth: "95%" },
                legend: { position: "none" }
              }
            })
          ),
          o.a.createElement(
            i.MDXTag,
            { name: "h1", components: a, props: { id: "data-format" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#data-format" }
              },
              o.a.createElement(
                i.MDXTag,
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
            i.MDXTag,
            { name: "p", components: a },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/barchart#data-format"
                }
              },
              "Complete Data Format Reference"
            )
          ),
          o.a.createElement(
            i.MDXTag,
            { name: "h1", components: a, props: { id: "reference" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#reference" }
              },
              o.a.createElement(
                i.MDXTag,
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
            i.MDXTag,
            { name: "p", components: a },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/barchart"
                }
              },
              "Original Google Charts BarCharts Docs"
            )
          )
        );
      };
    }
  }
]);
