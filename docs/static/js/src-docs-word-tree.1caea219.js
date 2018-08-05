(window.webpackJsonp = window.webpackJsonp || []).push([
  [26],
  {
    "./src/docs/WordTree.mdx": function(a, e, t) {
      "use strict";
      t.r(e);
      var n = t("./node_modules/react/index.js"),
        c = t.n(n),
        r = t("./node_modules/@mdx-js/tag/dist/index.js"),
        o = t("./node_modules/docz/dist/index.m.js"),
        l = t("./src/index.tsx");
      e.default = function(a) {
        var e = a.components;
        return c.a.createElement(
          r.MDXTag,
          { name: "wrapper", components: e },
          c.a.createElement(
            r.MDXTag,
            { name: "h1", components: e, props: { id: "usage" } },
            c.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: e,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#usage" }
              },
              c.a.createElement(
                r.MDXTag,
                {
                  name: "span",
                  components: e,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Usage"
          ),
          c.a.createElement(
            r.MDXTag,
            { name: "h2", components: e, props: { id: "simple-example" } },
            c.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: e,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#simple-example" }
              },
              c.a.createElement(
                r.MDXTag,
                {
                  name: "span",
                  components: e,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Simple Example"
          ),
          c.a.createElement(
            o.d,
            {
              __position: 0,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"WordTree\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Phrases'],\n    ['cats are better than dogs'],\n    ['cats eat kibble'],\n    ['cats are better than hamsters'],\n    ['cats are awesome'],\n    ['cats are people too'],\n    ['cats eat mice'],\n    ['cats meowing'],\n    ['cats in the cradle'],\n    ['cats eat mice'],\n    ['cats in the cradle lyrics'],\n    ['cats eat kibble'],\n    ['cats for adoption'],\n    ['cats are family'],\n    ['cats eat mice'],\n    ['cats are better than kittens'],\n    ['cats are evil'],\n    ['cats are weird'],\n    ['cats eat mice'],\n  ]}\n  options={{\n    wordtree: {\n      format: 'implicit',\n      word: 'cats',\n    },\n  }}\n/>"
            },
            c.a.createElement(l.a, {
              width: "500px",
              height: "300px",
              chartType: "WordTree",
              loader: c.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Phrases"],
                ["cats are better than dogs"],
                ["cats eat kibble"],
                ["cats are better than hamsters"],
                ["cats are awesome"],
                ["cats are people too"],
                ["cats eat mice"],
                ["cats meowing"],
                ["cats in the cradle"],
                ["cats eat mice"],
                ["cats in the cradle lyrics"],
                ["cats eat kibble"],
                ["cats for adoption"],
                ["cats are family"],
                ["cats eat mice"],
                ["cats are better than kittens"],
                ["cats are evil"],
                ["cats are weird"],
                ["cats eat mice"]
              ],
              options: { wordtree: { format: "implicit", word: "cats" } }
            })
          ),
          c.a.createElement(
            r.MDXTag,
            { name: "h2", components: e, props: { id: "eplicit-wordtree" } },
            c.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: e,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#eplicit-wordtree" }
              },
              c.a.createElement(
                r.MDXTag,
                {
                  name: "span",
                  components: e,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Eplicit WordTree"
          ),
          c.a.createElement(
            o.d,
            {
              __position: 1,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"WordTree\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['id', 'childLabel', 'parent', 'size', { role: 'style' }],\n    [0, 'Life', -1, 1, 'black'],\n    [1, 'Archaea', 0, 1, 'black'],\n    [2, 'Eukarya', 0, 5, 'black'],\n    [3, 'Bacteria', 0, 1, 'black'],\n    [4, 'Crenarchaeota', 1, 1, 'black'],\n    [5, 'Euryarchaeota', 1, 1, 'black'],\n    [6, 'Korarchaeota', 1, 1, 'black'],\n    [7, 'Nanoarchaeota', 1, 1, 'black'],\n    [8, 'Thaumarchaeota', 1, 1, 'black'],\n\n    [9, 'Amoebae', 2, 1, 'black'],\n    [10, 'Plants', 2, 1, 'black'],\n    [11, 'Chromalveolata', 2, 1, 'black'],\n    [12, 'Opisthokonta', 2, 5, 'black'],\n    [13, 'Rhizaria', 2, 1, 'black'],\n    [14, 'Excavata', 2, 1, 'black'],\n\n    [15, 'Animalia', 12, 5, 'black'],\n    [16, 'Fungi', 12, 2, 'black'],\n\n    [17, 'Parazoa', 15, 2, 'black'],\n    [18, 'Eumetazoa', 15, 5, 'black'],\n\n    [19, 'Radiata', 18, 2, 'black'],\n    [20, 'Bilateria', 18, 5, 'black'],\n\n    [21, 'Orthonectida', 20, 2, 'black'],\n    [22, 'Rhombozoa', 20, 2, 'black'],\n    [23, 'Acoelomorpha', 20, 1, 'black'],\n    [24, 'Deuterostomia', 20, 5, 'black'],\n    [25, 'Chaetognatha', 20, 2, 'black'],\n    [26, 'Protostomia', 20, 2, 'black'],\n\n    [27, 'Chordata', 24, 5, 'black'],\n    [28, 'Hemichordata', 24, 1, 'black'],\n    [29, 'Echinodermata', 24, 1, 'black'],\n    [30, 'Xenoturbellida', 24, 1, 'black'],\n    [31, 'Vetulicolia', 24, 1, 'black'],\n  ]}\n  options={{\n    colors: ['black', 'black', 'black'],\n    wordtree: {\n      format: 'explicit',\n      type: 'suffix',\n    },\n  }}\n/>"
            },
            c.a.createElement(l.a, {
              width: "500px",
              height: "300px",
              chartType: "WordTree",
              loader: c.a.createElement("div", null, "Loading Chart"),
              data: [
                ["id", "childLabel", "parent", "size", { role: "style" }],
                [0, "Life", -1, 1, "black"],
                [1, "Archaea", 0, 1, "black"],
                [2, "Eukarya", 0, 5, "black"],
                [3, "Bacteria", 0, 1, "black"],
                [4, "Crenarchaeota", 1, 1, "black"],
                [5, "Euryarchaeota", 1, 1, "black"],
                [6, "Korarchaeota", 1, 1, "black"],
                [7, "Nanoarchaeota", 1, 1, "black"],
                [8, "Thaumarchaeota", 1, 1, "black"],
                [9, "Amoebae", 2, 1, "black"],
                [10, "Plants", 2, 1, "black"],
                [11, "Chromalveolata", 2, 1, "black"],
                [12, "Opisthokonta", 2, 5, "black"],
                [13, "Rhizaria", 2, 1, "black"],
                [14, "Excavata", 2, 1, "black"],
                [15, "Animalia", 12, 5, "black"],
                [16, "Fungi", 12, 2, "black"],
                [17, "Parazoa", 15, 2, "black"],
                [18, "Eumetazoa", 15, 5, "black"],
                [19, "Radiata", 18, 2, "black"],
                [20, "Bilateria", 18, 5, "black"],
                [21, "Orthonectida", 20, 2, "black"],
                [22, "Rhombozoa", 20, 2, "black"],
                [23, "Acoelomorpha", 20, 1, "black"],
                [24, "Deuterostomia", 20, 5, "black"],
                [25, "Chaetognatha", 20, 2, "black"],
                [26, "Protostomia", 20, 2, "black"],
                [27, "Chordata", 24, 5, "black"],
                [28, "Hemichordata", 24, 1, "black"],
                [29, "Echinodermata", 24, 1, "black"],
                [30, "Xenoturbellida", 24, 1, "black"],
                [31, "Vetulicolia", 24, 1, "black"]
              ],
              options: {
                colors: ["black", "black", "black"],
                wordtree: { format: "explicit", type: "suffix" }
              }
            })
          ),
          c.a.createElement(
            r.MDXTag,
            { name: "h1", components: e, props: { id: "data-format" } },
            c.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: e,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#data-format" }
              },
              c.a.createElement(
                r.MDXTag,
                {
                  name: "span",
                  components: e,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Data Format"
          ),
          c.a.createElement(
            r.MDXTag,
            { name: "p", components: e },
            c.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: e,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/wordtree#data-format"
                }
              },
              "Complete Data Format Reference"
            )
          ),
          c.a.createElement(
            r.MDXTag,
            { name: "h1", components: e, props: { id: "reference" } },
            c.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: e,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#reference" }
              },
              c.a.createElement(
                r.MDXTag,
                {
                  name: "span",
                  components: e,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Reference"
          ),
          c.a.createElement(
            r.MDXTag,
            { name: "p", components: e },
            c.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: e,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/wordtree"
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
