(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    "./src/docs/GeoChart.mdx": function(e, a, n) {
      "use strict";
      n.r(a);
      var o = n("./node_modules/react/index.js"),
        r = n.n(o),
        t = n("./node_modules/@mdx-js/tag/dist/index.js"),
        i = n("./node_modules/docz/dist/index.m.js"),
        p = (n("./node_modules/react-component-component/es/index.js"),
        n("./src/index.tsx"));
      a.default = function(e) {
        var a = e.components;
        return r.a.createElement(
          t.MDXTag,
          { name: "wrapper", components: a },
          r.a.createElement(
            t.MDXTag,
            { name: "h1", components: a, props: { id: "usage" } },
            r.a.createElement(
              t.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#usage" }
              },
              r.a.createElement(
                t.MDXTag,
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
            t.MDXTag,
            { name: "h2", components: a, props: { id: "region-geocharts" } },
            r.a.createElement(
              t.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#region-geocharts" }
              },
              r.a.createElement(
                t.MDXTag,
                {
                  name: "span",
                  components: a,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Region GeoCharts"
          ),
          r.a.createElement(
            i.d,
            {
              __position: 0,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"GeoChart\"\n  data={[\n    ['Country', 'Popularity'],\n    ['Germany', 200],\n    ['United States', 300],\n    ['Brazil', 400],\n    ['Canada', 500],\n    ['France', 600],\n    ['RU', 700],\n  ]}\n  // Note: you will need to get a mapsApiKey for your project.\n  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings\n  mapsApiKey=\"AIzaSyBGYxQkfrKhmEnvWrX__NajCQpTDK1d1oo\"\n/>"
            },
            r.a.createElement(p.a, {
              width: "500px",
              height: "300px",
              chartType: "GeoChart",
              data: [
                ["Country", "Popularity"],
                ["Germany", 200],
                ["United States", 300],
                ["Brazil", 400],
                ["Canada", 500],
                ["France", 600],
                ["RU", 700]
              ],
              mapsApiKey: "AIzaSyBGYxQkfrKhmEnvWrX__NajCQpTDK1d1oo"
            })
          ),
          r.a.createElement(
            t.MDXTag,
            { name: "h2", components: a, props: { id: "marker-geocharts" } },
            r.a.createElement(
              t.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#marker-geocharts" }
              },
              r.a.createElement(
                t.MDXTag,
                {
                  name: "span",
                  components: a,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Marker GeoCharts"
          ),
          r.a.createElement(
            i.d,
            {
              __position: 1,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"GeoChart\"\n  data={[\n    ['City', 'Population', 'Area'],\n    ['Rome', 2761477, 1285.31],\n    ['Milan', 1324110, 181.76],\n    ['Naples', 959574, 117.27],\n  ]}\n  options={{\n    region: 'IT',\n    displayMode: 'markers',\n    colorAxis: { colors: ['green', 'blue'] },\n  }}\n  // Note: you will need to get a mapsApiKey for your project.\n  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings\n  mapsApiKey=\"AIzaSyBGYxQkfrKhmEnvWrX__NajCQpTDK1d1oo\"\n/>"
            },
            r.a.createElement(p.a, {
              width: "500px",
              height: "300px",
              chartType: "GeoChart",
              data: [
                ["City", "Population", "Area"],
                ["Rome", 2761477, 1285.31],
                ["Milan", 1324110, 181.76],
                ["Naples", 959574, 117.27]
              ],
              options: {
                region: "IT",
                displayMode: "markers",
                colorAxis: { colors: ["green", "blue"] }
              },
              mapsApiKey: "AIzaSyBGYxQkfrKhmEnvWrX__NajCQpTDK1d1oo"
            })
          ),
          r.a.createElement(
            t.MDXTag,
            {
              name: "h2",
              components: a,
              props: { id: "displaying-proportional-markers" }
            },
            r.a.createElement(
              t.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: {
                  "aria-hidden": !0,
                  href: "#displaying-proportional-markers"
                }
              },
              r.a.createElement(
                t.MDXTag,
                {
                  name: "span",
                  components: a,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Displaying Proportional Markers"
          ),
          r.a.createElement(
            i.d,
            {
              __position: 2,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"GeoChart\"\n  data={[\n    ['Country', 'Population', 'Area Percentage'],\n    ['France', 65700000, 50],\n    ['Germany', 81890000, 27],\n    ['Poland', 38540000, 23],\n  ]}\n  options={{\n    sizeAxis: { minValue: 0, maxValue: 100 },\n    region: '155', // Western Europe\n    displayMode: 'markers',\n    colorAxis: { colors: ['#e7711c', '#4374e0'] }, // orange to blue\n  }}\n  // Note: you will need to get a mapsApiKey for your project.\n  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings\n  mapsApiKey=\"AIzaSyBGYxQkfrKhmEnvWrX__NajCQpTDK1d1oo\"\n/>"
            },
            r.a.createElement(p.a, {
              width: "500px",
              height: "300px",
              chartType: "GeoChart",
              data: [
                ["Country", "Population", "Area Percentage"],
                ["France", 657e5, 50],
                ["Germany", 8189e4, 27],
                ["Poland", 3854e4, 23]
              ],
              options: {
                sizeAxis: { minValue: 0, maxValue: 100 },
                region: "155",
                displayMode: "markers",
                colorAxis: { colors: ["#e7711c", "#4374e0"] }
              },
              mapsApiKey: "AIzaSyBGYxQkfrKhmEnvWrX__NajCQpTDK1d1oo"
            })
          ),
          r.a.createElement(
            t.MDXTag,
            { name: "h2", components: a, props: { id: "coloring-your-chart" } },
            r.a.createElement(
              t.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#coloring-your-chart" }
              },
              r.a.createElement(
                t.MDXTag,
                {
                  name: "span",
                  components: a,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Coloring Your Chart"
          ),
          r.a.createElement(
            i.d,
            {
              __position: 3,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"GeoChart\"\n  data={[\n    ['Country', 'Latitude'],\n    ['Algeria', 36],\n    ['Angola', -8],\n    ['Benin', 6],\n    ['Botswana', -24],\n    ['Burkina Faso', 12],\n    ['Burundi', -3],\n    ['Cameroon', 3],\n    ['Canary Islands', 28],\n    ['Cape Verde', 15],\n    ['Central African Republic', 4],\n    ['Ceuta', 35],\n    ['Chad', 12],\n    ['Comoros', -12],\n    [\"Cote d'Ivoire\", 6],\n    ['Democratic Republic of the Congo', -3],\n    ['Djibouti', 12],\n    ['Egypt', 26],\n    ['Equatorial Guinea', 3],\n    ['Eritrea', 15],\n    ['Ethiopia', 9],\n    ['Gabon', 0],\n    ['Gambia', 13],\n    ['Ghana', 5],\n    ['Guinea', 10],\n    ['Guinea-Bissau', 12],\n    ['Kenya', -1],\n    ['Lesotho', -29],\n    ['Liberia', 6],\n    ['Libya', 32],\n    ['Madagascar', null],\n    ['Madeira', 33],\n    ['Malawi', -14],\n    ['Mali', 12],\n    ['Mauritania', 18],\n    ['Mauritius', -20],\n    ['Mayotte', -13],\n    ['Melilla', 35],\n    ['Morocco', 32],\n    ['Mozambique', -25],\n    ['Namibia', -22],\n    ['Niger', 14],\n    ['Nigeria', 8],\n    ['Republic of the Congo', -1],\n    ['R\xe9union', -21],\n    ['Rwanda', -2],\n    ['Saint Helena', -16],\n    ['S\xe3o Tom\xe9 and Principe', 0],\n    ['Senegal', 15],\n    ['Seychelles', -5],\n    ['Sierra Leone', 8],\n    ['Somalia', 2],\n    ['Sudan', 15],\n    ['South Africa', -30],\n    ['South Sudan', 5],\n    ['Swaziland', -26],\n    ['Tanzania', -6],\n    ['Togo', 6],\n    ['Tunisia', 34],\n    ['Uganda', 1],\n    ['Western Sahara', 25],\n    ['Zambia', -15],\n    ['Zimbabwe', -18],\n  ]}\n  options={{\n    region: '002', // Africa\n    colorAxis: { colors: ['#00853f', 'black', '#e31b23'] },\n    backgroundColor: '#81d4fa',\n    datalessRegionColor: '#f8bbd0',\n    defaultColor: '#f5f5f5',\n  }}\n  // Note: you will need to get a mapsApiKey for your project.\n  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings\n  mapsApiKey=\"AIzaSyBGYxQkfrKhmEnvWrX__NajCQpTDK1d1oo\"\n/>"
            },
            r.a.createElement(p.a, {
              width: "500px",
              height: "300px",
              chartType: "GeoChart",
              data: [
                ["Country", "Latitude"],
                ["Algeria", 36],
                ["Angola", -8],
                ["Benin", 6],
                ["Botswana", -24],
                ["Burkina Faso", 12],
                ["Burundi", -3],
                ["Cameroon", 3],
                ["Canary Islands", 28],
                ["Cape Verde", 15],
                ["Central African Republic", 4],
                ["Ceuta", 35],
                ["Chad", 12],
                ["Comoros", -12],
                ["Cote d'Ivoire", 6],
                ["Democratic Republic of the Congo", -3],
                ["Djibouti", 12],
                ["Egypt", 26],
                ["Equatorial Guinea", 3],
                ["Eritrea", 15],
                ["Ethiopia", 9],
                ["Gabon", 0],
                ["Gambia", 13],
                ["Ghana", 5],
                ["Guinea", 10],
                ["Guinea-Bissau", 12],
                ["Kenya", -1],
                ["Lesotho", -29],
                ["Liberia", 6],
                ["Libya", 32],
                ["Madagascar", null],
                ["Madeira", 33],
                ["Malawi", -14],
                ["Mali", 12],
                ["Mauritania", 18],
                ["Mauritius", -20],
                ["Mayotte", -13],
                ["Melilla", 35],
                ["Morocco", 32],
                ["Mozambique", -25],
                ["Namibia", -22],
                ["Niger", 14],
                ["Nigeria", 8],
                ["Republic of the Congo", -1],
                ["R\xe9union", -21],
                ["Rwanda", -2],
                ["Saint Helena", -16],
                ["S\xe3o Tom\xe9 and Principe", 0],
                ["Senegal", 15],
                ["Seychelles", -5],
                ["Sierra Leone", 8],
                ["Somalia", 2],
                ["Sudan", 15],
                ["South Africa", -30],
                ["South Sudan", 5],
                ["Swaziland", -26],
                ["Tanzania", -6],
                ["Togo", 6],
                ["Tunisia", 34],
                ["Uganda", 1],
                ["Western Sahara", 25],
                ["Zambia", -15],
                ["Zimbabwe", -18]
              ],
              options: {
                region: "002",
                colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
                backgroundColor: "#81d4fa",
                datalessRegionColor: "#f8bbd0",
                defaultColor: "#f5f5f5"
              },
              mapsApiKey: "AIzaSyBGYxQkfrKhmEnvWrX__NajCQpTDK1d1oo"
            })
          ),
          r.a.createElement(
            t.MDXTag,
            { name: "h1", components: a, props: { id: "data-format" } },
            r.a.createElement(
              t.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#data-format" }
              },
              r.a.createElement(
                t.MDXTag,
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
            t.MDXTag,
            { name: "p", components: a },
            r.a.createElement(
              t.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/geochart#data-format"
                }
              },
              "Complete Data Format Reference"
            )
          ),
          r.a.createElement(
            t.MDXTag,
            { name: "h1", components: a, props: { id: "reference" } },
            r.a.createElement(
              t.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#reference" }
              },
              r.a.createElement(
                t.MDXTag,
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
            t.MDXTag,
            { name: "p", components: a },
            r.a.createElement(
              t.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/geochart"
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
