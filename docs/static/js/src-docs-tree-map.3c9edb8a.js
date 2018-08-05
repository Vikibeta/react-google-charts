(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    "./src/docs/TreeMap.mdx": function(e, a, n) {
      "use strict";
      n.r(a);
      var r = n("./node_modules/react/index.js"),
        o = n.n(r),
        i = n("./node_modules/@mdx-js/tag/dist/index.js"),
        t = n("./node_modules/docz/dist/index.m.js"),
        s = n("./src/index.tsx");
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
            { name: "h2", components: a, props: { id: "example" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#example" }
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
            "Example"
          ),
          o.a.createElement(
            t.d,
            {
              __position: 0,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"TreeMap\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      'Location',\n      'Parent',\n      'Market trade volume (size)',\n      'Market increase/decrease (color)',\n    ],\n    ['Global', null, 0, 0],\n    ['America', 'Global', 0, 0],\n    ['Europe', 'Global', 0, 0],\n    ['Asia', 'Global', 0, 0],\n    ['Australia', 'Global', 0, 0],\n    ['Africa', 'Global', 0, 0],\n    ['Brazil', 'America', 11, 10],\n    ['USA', 'America', 52, 31],\n    ['Mexico', 'America', 24, 12],\n    ['Canada', 'America', 16, -23],\n    ['France', 'Europe', 42, -11],\n    ['Germany', 'Europe', 31, -2],\n    ['Sweden', 'Europe', 22, -13],\n    ['Italy', 'Europe', 17, 4],\n    ['UK', 'Europe', 21, -5],\n    ['China', 'Asia', 36, 4],\n    ['Japan', 'Asia', 20, -12],\n    ['India', 'Asia', 40, 63],\n    ['Laos', 'Asia', 4, 34],\n    ['Mongolia', 'Asia', 1, -5],\n    ['Iran', 'Asia', 18, 13],\n    ['Pakistan', 'Asia', 11, -52],\n    ['Egypt', 'Africa', 21, 0],\n    ['S. Africa', 'Africa', 30, 43],\n    ['Sudan', 'Africa', 12, 2],\n    ['Congo', 'Africa', 10, 12],\n    ['Zaire', 'Africa', 8, 10],\n  ]}\n  options={{\n    minColor: '#f00',\n    midColor: '#ddd',\n    maxColor: '#0d0',\n    headerHeight: 15,\n    fontColor: 'black',\n    showScale: true,\n  }}\n/>"
            },
            o.a.createElement(s.a, {
              width: "500px",
              height: "300px",
              chartType: "TreeMap",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  "Location",
                  "Parent",
                  "Market trade volume (size)",
                  "Market increase/decrease (color)"
                ],
                ["Global", null, 0, 0],
                ["America", "Global", 0, 0],
                ["Europe", "Global", 0, 0],
                ["Asia", "Global", 0, 0],
                ["Australia", "Global", 0, 0],
                ["Africa", "Global", 0, 0],
                ["Brazil", "America", 11, 10],
                ["USA", "America", 52, 31],
                ["Mexico", "America", 24, 12],
                ["Canada", "America", 16, -23],
                ["France", "Europe", 42, -11],
                ["Germany", "Europe", 31, -2],
                ["Sweden", "Europe", 22, -13],
                ["Italy", "Europe", 17, 4],
                ["UK", "Europe", 21, -5],
                ["China", "Asia", 36, 4],
                ["Japan", "Asia", 20, -12],
                ["India", "Asia", 40, 63],
                ["Laos", "Asia", 4, 34],
                ["Mongolia", "Asia", 1, -5],
                ["Iran", "Asia", 18, 13],
                ["Pakistan", "Asia", 11, -52],
                ["Egypt", "Africa", 21, 0],
                ["S. Africa", "Africa", 30, 43],
                ["Sudan", "Africa", 12, 2],
                ["Congo", "Africa", 10, 12],
                ["Zaire", "Africa", 8, 10]
              ],
              options: {
                minColor: "#f00",
                midColor: "#ddd",
                maxColor: "#0d0",
                headerHeight: 15,
                fontColor: "black",
                showScale: !0
              }
            })
          ),
          o.a.createElement(
            i.MDXTag,
            { name: "h2", components: a, props: { id: "highlights" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#highlights" }
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
            "Highlights"
          ),
          o.a.createElement(
            t.d,
            {
              __position: 1,
              __code:
                "<Chart\n  width={'100%'}\n  height={'300px'}\n  chartType=\"TreeMap\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['ID', 'Parent', 'Number Of Lines'],\n    ['Shakespeare', null, 0],\n    ['Comedies', 'Shakespeare', null],\n    ['Tragedies', 'Shakespeare', null],\n    ['Histories', 'Shakespeare', null],\n\n    ['As You Like It', 'Comedies', null],\n    ['Adam', 'As You Like It', 10],\n    ['Amiens', 'As You Like It', 10],\n    ['Audrey', 'As You Like It', 12],\n    ['Celia', 'As You Like It', 108],\n    ['Charles', 'As You Like It', 8],\n\n    ['Comedy Of Errors', 'Comedies', null],\n    ['Adriana', 'Comedy Of Errors', 79],\n    ['Aegeon', 'Comedy Of Errors', 17],\n    ['Aemilia', 'Comedy Of Errors', 16],\n    ['Angelo', 'Comedy Of Errors', 31],\n\n    ['Merchant Of Venice', 'Comedies', null],\n    ['Antonio', 'Merchant Of Venice', 47],\n    ['Balthasar', 'Merchant Of Venice', 1],\n    ['Bassanio', 'Merchant Of Venice', 73],\n    ['Duke (of Venice)', 'Merchant Of Venice', 18],\n    ['Gratiano', 'Merchant Of Venice', 48],\n\n    [\"Midsummer Night's Dream\", 'Comedies', null],\n    ['Bottom', \"Midsummer Night's Dream\", 59],\n    ['Cobweb', \"Midsummer Night's Dream\", 4],\n    ['Demetrius', \"Midsummer Night's Dream\", 48],\n    ['Egeus', \"Midsummer Night's Dream\", 7],\n    ['Fairy', \"Midsummer Night's Dream\", 4],\n\n    ['The Tempest', 'Comedies', null],\n    ['Adrian', 'The Tempest', 9],\n    ['Alonso', 'The Tempest', 40],\n    ['Antonio, duke of Milan', 'The Tempest', 57],\n    ['Ariel', 'The Tempest', 45],\n\n    ['Henry VIII', 'Histories', null],\n    ['Anne Bullen', 'Henry VIII', 18],\n    ['Archbishop Cranmer', 'Henry VIII', 21],\n    ['Bishop Lincoln', 'Henry VIII', 2],\n    ['Brandon', 'Henry VIII', 6],\n  ]}\n  options={{\n    highlightOnMouseOver: true,\n    maxDepth: 1,\n    maxPostDepth: 2,\n    minHighlightColor: '#8c6bb1',\n    midHighlightColor: '#9ebcda',\n    maxHighlightColor: '#edf8fb',\n    minColor: '#009688',\n    midColor: '#f7f7f7',\n    maxColor: '#ee8100',\n    headerHeight: 15,\n    showScale: true,\n    height: 500,\n    useWeightedAverageForAggregation: true,\n    generateTooltip: (row, size, value) => {\n      return (\n        '<div style=\"background:#fd9; padding:10px; border-style:solid\"> row: ' +\n        row +\n        ' size: ' +\n        size +\n        ' val: ' +\n        value +\n        '</div>'\n      )\n    },\n  }}\n/>"
            },
            o.a.createElement(s.a, {
              width: "100%",
              height: "300px",
              chartType: "TreeMap",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                ["ID", "Parent", "Number Of Lines"],
                ["Shakespeare", null, 0],
                ["Comedies", "Shakespeare", null],
                ["Tragedies", "Shakespeare", null],
                ["Histories", "Shakespeare", null],
                ["As You Like It", "Comedies", null],
                ["Adam", "As You Like It", 10],
                ["Amiens", "As You Like It", 10],
                ["Audrey", "As You Like It", 12],
                ["Celia", "As You Like It", 108],
                ["Charles", "As You Like It", 8],
                ["Comedy Of Errors", "Comedies", null],
                ["Adriana", "Comedy Of Errors", 79],
                ["Aegeon", "Comedy Of Errors", 17],
                ["Aemilia", "Comedy Of Errors", 16],
                ["Angelo", "Comedy Of Errors", 31],
                ["Merchant Of Venice", "Comedies", null],
                ["Antonio", "Merchant Of Venice", 47],
                ["Balthasar", "Merchant Of Venice", 1],
                ["Bassanio", "Merchant Of Venice", 73],
                ["Duke (of Venice)", "Merchant Of Venice", 18],
                ["Gratiano", "Merchant Of Venice", 48],
                ["Midsummer Night's Dream", "Comedies", null],
                ["Bottom", "Midsummer Night's Dream", 59],
                ["Cobweb", "Midsummer Night's Dream", 4],
                ["Demetrius", "Midsummer Night's Dream", 48],
                ["Egeus", "Midsummer Night's Dream", 7],
                ["Fairy", "Midsummer Night's Dream", 4],
                ["The Tempest", "Comedies", null],
                ["Adrian", "The Tempest", 9],
                ["Alonso", "The Tempest", 40],
                ["Antonio, duke of Milan", "The Tempest", 57],
                ["Ariel", "The Tempest", 45],
                ["Henry VIII", "Histories", null],
                ["Anne Bullen", "Henry VIII", 18],
                ["Archbishop Cranmer", "Henry VIII", 21],
                ["Bishop Lincoln", "Henry VIII", 2],
                ["Brandon", "Henry VIII", 6]
              ],
              options: {
                highlightOnMouseOver: !0,
                maxDepth: 1,
                maxPostDepth: 2,
                minHighlightColor: "#8c6bb1",
                midHighlightColor: "#9ebcda",
                maxHighlightColor: "#edf8fb",
                minColor: "#009688",
                midColor: "#f7f7f7",
                maxColor: "#ee8100",
                headerHeight: 15,
                showScale: !0,
                height: 500,
                useWeightedAverageForAggregation: !0,
                generateTooltip: function(e, a, n) {
                  return (
                    '<div style="background:#fd9; padding:10px; border-style:solid"> row: ' +
                    e +
                    " size: " +
                    a +
                    " val: " +
                    n +
                    "</div>"
                  );
                }
              }
            })
          ),
          o.a.createElement(
            i.MDXTag,
            { name: "h2", components: a, props: { id: "custom-tooltips" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#custom-tooltips" }
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
            "Custom Tooltips"
          ),
          o.a.createElement(
            t.d,
            {
              __position: 2,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"TreeMap\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [\n      'Location',\n      'Parent',\n      'Market trade volume (size)',\n      'Market increase/decrease (color)',\n    ],\n    ['Global', null, 0, 0],\n    ['America', 'Global', 0, 0],\n    ['Europe', 'Global', 0, 0],\n    ['Asia', 'Global', 0, 0],\n    ['Australia', 'Global', 0, 0],\n    ['Africa', 'Global', 0, 0],\n    ['Brazil', 'America', 11, 10],\n    ['USA', 'America', 52, 31],\n    ['Mexico', 'America', 24, 12],\n    ['Canada', 'America', 16, -23],\n    ['France', 'Europe', 42, -11],\n    ['Germany', 'Europe', 31, -2],\n    ['Sweden', 'Europe', 22, -13],\n    ['Italy', 'Europe', 17, 4],\n    ['UK', 'Europe', 21, -5],\n    ['China', 'Asia', 36, 4],\n    ['Japan', 'Asia', 20, -12],\n    ['India', 'Asia', 40, 63],\n    ['Laos', 'Asia', 4, 34],\n    ['Mongolia', 'Asia', 1, -5],\n    ['Iran', 'Asia', 18, 13],\n    ['Pakistan', 'Asia', 11, -52],\n    ['Egypt', 'Africa', 21, 0],\n    ['S. Africa', 'Africa', 30, 43],\n    ['Sudan', 'Africa', 12, 2],\n    ['Congo', 'Africa', 10, 12],\n    ['Zaire', 'Africa', 8, 10],\n  ]}\n  options={{\n    minColor: '#f00',\n    midColor: '#ddd',\n    maxColor: '#0d0',\n    headerHeight: 15,\n    fontColor: 'black',\n    showScale: true,\n    generateTooltip: (row, size, value) => {\n      return (\n        '<div style=\"background:#fd9; padding:10px; border-style:solid\"> ' +\n        value +\n        '</div>'\n      )\n    },\n  }}\n/>"
            },
            o.a.createElement(s.a, {
              width: "500px",
              height: "300px",
              chartType: "TreeMap",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  "Location",
                  "Parent",
                  "Market trade volume (size)",
                  "Market increase/decrease (color)"
                ],
                ["Global", null, 0, 0],
                ["America", "Global", 0, 0],
                ["Europe", "Global", 0, 0],
                ["Asia", "Global", 0, 0],
                ["Australia", "Global", 0, 0],
                ["Africa", "Global", 0, 0],
                ["Brazil", "America", 11, 10],
                ["USA", "America", 52, 31],
                ["Mexico", "America", 24, 12],
                ["Canada", "America", 16, -23],
                ["France", "Europe", 42, -11],
                ["Germany", "Europe", 31, -2],
                ["Sweden", "Europe", 22, -13],
                ["Italy", "Europe", 17, 4],
                ["UK", "Europe", 21, -5],
                ["China", "Asia", 36, 4],
                ["Japan", "Asia", 20, -12],
                ["India", "Asia", 40, 63],
                ["Laos", "Asia", 4, 34],
                ["Mongolia", "Asia", 1, -5],
                ["Iran", "Asia", 18, 13],
                ["Pakistan", "Asia", 11, -52],
                ["Egypt", "Africa", 21, 0],
                ["S. Africa", "Africa", 30, 43],
                ["Sudan", "Africa", 12, 2],
                ["Congo", "Africa", 10, 12],
                ["Zaire", "Africa", 8, 10]
              ],
              options: {
                minColor: "#f00",
                midColor: "#ddd",
                maxColor: "#0d0",
                headerHeight: 15,
                fontColor: "black",
                showScale: !0,
                generateTooltip: function(e, a, n) {
                  return (
                    '<div style="background:#fd9; padding:10px; border-style:solid"> ' +
                    n +
                    "</div>"
                  );
                }
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
                    "https://developers.google.com/chart/interactive/docs/gallery/treemap#data-format"
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
                    "https://developers.google.com/chart/interactive/docs/gallery/treemap"
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
