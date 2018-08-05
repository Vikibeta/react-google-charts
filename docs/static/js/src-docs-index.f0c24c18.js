(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    "./src/docs/index.mdx": function(e, a, t) {
      "use strict";
      t.r(a);
      var n = t("./node_modules/react/index.js"),
        r = t.n(n),
        o = t("./node_modules/@mdx-js/tag/dist/index.js"),
        i = t("./src/index.tsx");
      a.default = function(e) {
        var a = e.components;
        return r.a.createElement(
          o.MDXTag,
          { name: "wrapper", components: a },
          r.a.createElement(
            o.MDXTag,
            { name: "h1", components: a, props: { id: "react-google-charts" } },
            r.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#react-google-charts" }
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
            "React Google Charts"
          ),
          r.a.createElement(
            o.MDXTag,
            { name: "p", components: a },
            "React Google Charts offers a declarative API to make rendering charts fun and easy."
          ),
          r.a.createElement(
            o.MDXTag,
            { name: "h2", components: a, props: { id: "install" } },
            r.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#install" }
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
            "Install"
          ),
          r.a.createElement(
            o.MDXTag,
            { name: "pre", components: a },
            r.a.createElement(
              o.MDXTag,
              {
                name: "code",
                components: a,
                parentName: "pre",
                props: { className: "language-sh" }
              },
              "  yarn add react-google-charts\n  # or npm i react-google-charts\n"
            )
          ),
          r.a.createElement(
            o.MDXTag,
            { name: "h2", components: a, props: { id: "import" } },
            r.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#import" }
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
            "Import"
          ),
          r.a.createElement(
            o.MDXTag,
            { name: "pre", components: a },
            r.a.createElement(
              o.MDXTag,
              {
                name: "code",
                components: a,
                parentName: "pre",
                props: { className: "language-javascript" }
              },
              "import Chart from 'react-google-charts';\n// or\nimport {Chart} from 'react-google-charts';\n// or\nconst {Chart} = require('react-google-charts');\n// or \nvar Chart = require('react-google-charts').Chart;\n"
            )
          ),
          r.a.createElement(
            o.MDXTag,
            { name: "p", components: a },
            "\ud83d\udc4d Good to go."
          ),
          r.a.createElement(
            "div",
            { style: { display: "flex" } },
            r.a.createElement(i.a, {
              width: 400,
              height: 300,
              chartType: "ColumnChart",
              loader: r.a.createElement("div", null, "Loading Chart"),
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
                chartArea: { width: "30%" },
                hAxis: { title: "Total Population", minValue: 0 },
                vAxis: { title: "City" }
              },
              legendToggle: !0
            }),
            r.a.createElement(i.a, {
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
            }),
            r.a.createElement(i.a, {
              width: 500,
              height: 300,
              chartType: "Scatter",
              loader: r.a.createElement("div", null, "Loading Chart"),
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
                [3, 71]
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
          r.a.createElement(
            "div",
            { style: { display: "flex" } },
            r.a.createElement(i.a, {
              width: "500px",
              height: "300px",
              chartType: "BubbleChart",
              loader: r.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  "ID",
                  "Life Expectancy",
                  "Fertility Rate",
                  "Region",
                  "Population"
                ],
                ["CAN", 80.66, 1.67, "North America", 33739900],
                ["DEU", 79.84, 1.36, "Europe", 81902307],
                ["DNK", 78.6, 1.84, "Europe", 5523095],
                ["EGY", 72.73, 2.78, "Middle East", 79716203],
                ["GBR", 80.05, 2, "Europe", 61801570],
                ["IRN", 72.49, 1.7, "Middle East", 73137148],
                ["IRQ", 68.09, 4.77, "Middle East", 31090763],
                ["ISR", 81.55, 2.96, "Middle East", 7485600],
                ["RUS", 68.6, 1.54, "Europe", 14185e4],
                ["USA", 78.09, 2.05, "North America", 307007e3]
              ],
              options: {
                title:
                  "Correlation between life expectancy, fertility rate and population of some world countries (2010)",
                hAxis: { title: "Life Expectancy" },
                vAxis: { title: "Fertility Rate" },
                bubble: { textStyle: { fontSize: 11 } }
              }
            }),
            r.a.createElement(i.a, {
              width: 500,
              height: 300,
              chartType: "LineChart",
              loader: r.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "number", label: "x" },
                  { type: "number", label: "values" },
                  { id: "i0", type: "number", role: "interval" },
                  { id: "i1", type: "number", role: "interval" },
                  { id: "i2", type: "number", role: "interval" },
                  { id: "i2", type: "number", role: "interval" },
                  { id: "i2", type: "number", role: "interval" },
                  { id: "i2", type: "number", role: "interval" }
                ],
                [1, 100, 90, 110, 85, 96, 104, 120],
                [2, 120, 95, 130, 90, 113, 124, 140],
                [3, 130, 105, 140, 100, 117, 133, 139],
                [4, 90, 85, 95, 85, 88, 92, 95],
                [5, 70, 74, 63, 67, 69, 70, 72],
                [6, 30, 39, 22, 21, 28, 34, 40],
                [7, 80, 77, 83, 70, 77, 85, 90],
                [8, 100, 90, 110, 85, 95, 102, 110]
              ],
              options: { intervals: { style: "sticks" }, legend: "none" }
            }),
            r.a.createElement(i.a, {
              width: 500,
              height: 300,
              chartType: "Line",
              loader: r.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  "Day",
                  "Guardians of the Galaxy",
                  "The Avengers",
                  "Transformers: Age of Extinction"
                ],
                [1, 37.8, 80.8, 41.8],
                [2, 30.9, 69.5, 32.4],
                [3, 25.4, 57, 25.7],
                [4, 11.7, 18.8, 10.5],
                [5, 11.9, 17.6, 10.4],
                [6, 8.8, 13.6, 7.7],
                [7, 7.6, 12.3, 9.6],
                [8, 12.3, 29.2, 10.6],
                [9, 16.9, 42.9, 14.8],
                [10, 12.8, 30.9, 11.6],
                [11, 5.3, 7.9, 4.7],
                [12, 6.6, 8.4, 5.2],
                [13, 4.8, 6.3, 3.6],
                [14, 4.2, 6.2, 3.4]
              ],
              options: {
                chart: {
                  title: "Box Office Earnings in First Two Weeks of Opening",
                  subtitle: "in millions of dollars (USD)"
                }
              }
            })
          ),
          r.a.createElement(
            o.MDXTag,
            { name: "h4", components: a, props: { id: "and-many-more" } },
            r.a.createElement(
              o.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h4",
                props: { "aria-hidden": !0, href: "#and-many-more" }
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
            "And many more."
          )
        );
      };
    }
  }
]);
