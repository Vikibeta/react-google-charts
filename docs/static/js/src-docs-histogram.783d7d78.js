(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    "./src/docs/Histogram.mdx": function(a, r, e) {
      "use strict";
      e.r(r);
      var n = e("./node_modules/react/index.js"),
        o = e.n(n),
        i = e("./node_modules/@mdx-js/tag/dist/index.js"),
        s = e("./node_modules/docz/dist/index.m.js"),
        t = (e("./node_modules/react-component-component/es/index.js"),
        e("./src/index.tsx"));
      r.default = function(a) {
        var r = a.components;
        return o.a.createElement(
          i.MDXTag,
          { name: "wrapper", components: r },
          o.a.createElement(
            i.MDXTag,
            { name: "h2", components: r, props: { id: "example" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: r,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#example" }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: r,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Example"
          ),
          o.a.createElement(
            s.d,
            {
              __position: 0,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"Histogram\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Dinosaur', 'Length'],\n    ['Acrocanthosaurus (top-spined lizard)', 12.2],\n    ['Albertosaurus (Alberta lizard)', 9.1],\n    ['Allosaurus (other lizard)', 12.2],\n    ['Apatosaurus (deceptive lizard)', 22.9],\n    ['Archaeopteryx (ancient wing)', 0.9],\n    ['Argentinosaurus (Argentina lizard)', 36.6],\n    ['Baryonyx (heavy claws)', 9.1],\n    ['Brachiosaurus (arm lizard)', 30.5],\n    ['Ceratosaurus (horned lizard)', 6.1],\n    ['Coelophysis (hollow form)', 2.7],\n    ['Compsognathus (elegant jaw)', 0.9],\n    ['Deinonychus (terrible claw)', 2.7],\n    ['Diplodocus (double beam)', 27.1],\n    ['Dromicelomimus (emu mimic)', 3.4],\n    ['Gallimimus (fowl mimic)', 5.5],\n    ['Mamenchisaurus (Mamenchi lizard)', 21.0],\n    ['Megalosaurus (big lizard)', 7.9],\n    ['Microvenator (small hunter)', 1.2],\n    ['Ornithomimus (bird mimic)', 4.6],\n    ['Oviraptor (egg robber)', 1.5],\n    ['Plateosaurus (flat lizard)', 7.9],\n    ['Sauronithoides (narrow-clawed lizard)', 2.0],\n    ['Seismosaurus (tremor lizard)', 45.7],\n    ['Spinosaurus (spiny lizard)', 12.2],\n    ['Supersaurus (super lizard)', 30.5],\n    ['Tyrannosaurus (tyrant lizard)', 15.2],\n    ['Ultrasaurus (ultra lizard)', 30.5],\n    ['Velociraptor (swift robber)', 1.8],\n  ]}\n  options={{\n    title: 'Lengths of dinosaurs, in meters',\n    legend: { position: 'none' },\n  }}\n/>"
            },
            o.a.createElement(t.a, {
              width: "500px",
              height: "300px",
              chartType: "Histogram",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Dinosaur", "Length"],
                ["Acrocanthosaurus (top-spined lizard)", 12.2],
                ["Albertosaurus (Alberta lizard)", 9.1],
                ["Allosaurus (other lizard)", 12.2],
                ["Apatosaurus (deceptive lizard)", 22.9],
                ["Archaeopteryx (ancient wing)", 0.9],
                ["Argentinosaurus (Argentina lizard)", 36.6],
                ["Baryonyx (heavy claws)", 9.1],
                ["Brachiosaurus (arm lizard)", 30.5],
                ["Ceratosaurus (horned lizard)", 6.1],
                ["Coelophysis (hollow form)", 2.7],
                ["Compsognathus (elegant jaw)", 0.9],
                ["Deinonychus (terrible claw)", 2.7],
                ["Diplodocus (double beam)", 27.1],
                ["Dromicelomimus (emu mimic)", 3.4],
                ["Gallimimus (fowl mimic)", 5.5],
                ["Mamenchisaurus (Mamenchi lizard)", 21],
                ["Megalosaurus (big lizard)", 7.9],
                ["Microvenator (small hunter)", 1.2],
                ["Ornithomimus (bird mimic)", 4.6],
                ["Oviraptor (egg robber)", 1.5],
                ["Plateosaurus (flat lizard)", 7.9],
                ["Sauronithoides (narrow-clawed lizard)", 2],
                ["Seismosaurus (tremor lizard)", 45.7],
                ["Spinosaurus (spiny lizard)", 12.2],
                ["Supersaurus (super lizard)", 30.5],
                ["Tyrannosaurus (tyrant lizard)", 15.2],
                ["Ultrasaurus (ultra lizard)", 30.5],
                ["Velociraptor (swift robber)", 1.8]
              ],
              options: {
                title: "Lengths of dinosaurs, in meters",
                legend: { position: "none" }
              }
            })
          ),
          o.a.createElement(
            i.MDXTag,
            { name: "h2", components: r, props: { id: "controlling-colors" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: r,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#controlling-colors" }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: r,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Controlling Colors"
          ),
          o.a.createElement(
            s.d,
            {
              __position: 1,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"Histogram\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Dinosaur', 'Length'],\n    ['Acrocanthosaurus (top-spined lizard)', 12.2],\n    ['Albertosaurus (Alberta lizard)', 9.1],\n    ['Allosaurus (other lizard)', 12.2],\n    ['Apatosaurus (deceptive lizard)', 22.9],\n    ['Archaeopteryx (ancient wing)', 0.9],\n    ['Argentinosaurus (Argentina lizard)', 36.6],\n    ['Baryonyx (heavy claws)', 9.1],\n    ['Brachiosaurus (arm lizard)', 30.5],\n    ['Ceratosaurus (horned lizard)', 6.1],\n    ['Coelophysis (hollow form)', 2.7],\n    ['Compsognathus (elegant jaw)', 0.9],\n    ['Deinonychus (terrible claw)', 2.7],\n    ['Diplodocus (double beam)', 27.1],\n    ['Dromicelomimus (emu mimic)', 3.4],\n    ['Gallimimus (fowl mimic)', 5.5],\n    ['Mamenchisaurus (Mamenchi lizard)', 21.0],\n    ['Megalosaurus (big lizard)', 7.9],\n    ['Microvenator (small hunter)', 1.2],\n    ['Ornithomimus (bird mimic)', 4.6],\n    ['Oviraptor (egg robber)', 1.5],\n    ['Plateosaurus (flat lizard)', 7.9],\n    ['Sauronithoides (narrow-clawed lizard)', 2.0],\n    ['Seismosaurus (tremor lizard)', 45.7],\n    ['Spinosaurus (spiny lizard)', 12.2],\n    ['Supersaurus (super lizard)', 30.5],\n    ['Tyrannosaurus (tyrant lizard)', 15.2],\n    ['Ultrasaurus (ultra lizard)', 30.5],\n    ['Velociraptor (swift robber)', 1.8],\n  ]}\n  options={{\n    title: 'Lengths of dinosaurs, in meters',\n    legend: { position: 'none' },\n    colors: ['green'],\n  }}\n/>"
            },
            o.a.createElement(t.a, {
              width: "500px",
              height: "300px",
              chartType: "Histogram",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Dinosaur", "Length"],
                ["Acrocanthosaurus (top-spined lizard)", 12.2],
                ["Albertosaurus (Alberta lizard)", 9.1],
                ["Allosaurus (other lizard)", 12.2],
                ["Apatosaurus (deceptive lizard)", 22.9],
                ["Archaeopteryx (ancient wing)", 0.9],
                ["Argentinosaurus (Argentina lizard)", 36.6],
                ["Baryonyx (heavy claws)", 9.1],
                ["Brachiosaurus (arm lizard)", 30.5],
                ["Ceratosaurus (horned lizard)", 6.1],
                ["Coelophysis (hollow form)", 2.7],
                ["Compsognathus (elegant jaw)", 0.9],
                ["Deinonychus (terrible claw)", 2.7],
                ["Diplodocus (double beam)", 27.1],
                ["Dromicelomimus (emu mimic)", 3.4],
                ["Gallimimus (fowl mimic)", 5.5],
                ["Mamenchisaurus (Mamenchi lizard)", 21],
                ["Megalosaurus (big lizard)", 7.9],
                ["Microvenator (small hunter)", 1.2],
                ["Ornithomimus (bird mimic)", 4.6],
                ["Oviraptor (egg robber)", 1.5],
                ["Plateosaurus (flat lizard)", 7.9],
                ["Sauronithoides (narrow-clawed lizard)", 2],
                ["Seismosaurus (tremor lizard)", 45.7],
                ["Spinosaurus (spiny lizard)", 12.2],
                ["Supersaurus (super lizard)", 30.5],
                ["Tyrannosaurus (tyrant lizard)", 15.2],
                ["Ultrasaurus (ultra lizard)", 30.5],
                ["Velociraptor (swift robber)", 1.8]
              ],
              options: {
                title: "Lengths of dinosaurs, in meters",
                legend: { position: "none" },
                colors: ["green"]
              }
            })
          ),
          o.a.createElement(
            i.MDXTag,
            { name: "h2", components: r, props: { id: "controlling-buckets" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: r,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#controlling-buckets" }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: r,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Controlling Buckets"
          ),
          o.a.createElement(
            s.d,
            {
              __position: 2,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"Histogram\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Dinosaur', 'Length'],\n    ['Acrocanthosaurus (top-spined lizard)', 12.2],\n    ['Albertosaurus (Alberta lizard)', 9.1],\n    ['Allosaurus (other lizard)', 12.2],\n    ['Apatosaurus (deceptive lizard)', 22.9],\n    ['Archaeopteryx (ancient wing)', 0.9],\n    ['Argentinosaurus (Argentina lizard)', 36.6],\n    ['Baryonyx (heavy claws)', 9.1],\n    ['Brachiosaurus (arm lizard)', 30.5],\n    ['Ceratosaurus (horned lizard)', 6.1],\n    ['Coelophysis (hollow form)', 2.7],\n    ['Compsognathus (elegant jaw)', 0.9],\n    ['Deinonychus (terrible claw)', 2.7],\n    ['Diplodocus (double beam)', 27.1],\n    ['Dromicelomimus (emu mimic)', 3.4],\n    ['Gallimimus (fowl mimic)', 5.5],\n    ['Mamenchisaurus (Mamenchi lizard)', 21.0],\n    ['Megalosaurus (big lizard)', 7.9],\n    ['Microvenator (small hunter)', 1.2],\n    ['Ornithomimus (bird mimic)', 4.6],\n    ['Oviraptor (egg robber)', 1.5],\n    ['Plateosaurus (flat lizard)', 7.9],\n    ['Sauronithoides (narrow-clawed lizard)', 2.0],\n    ['Seismosaurus (tremor lizard)', 45.7],\n    ['Spinosaurus (spiny lizard)', 12.2],\n    ['Supersaurus (super lizard)', 30.5],\n    ['Tyrannosaurus (tyrant lizard)', 15.2],\n    ['Ultrasaurus (ultra lizard)', 30.5],\n    ['Velociraptor (swift robber)', 1.8],\n  ]}\n  options={{\n    title: 'Lengths of dinosaurs, in meters',\n    legend: { position: 'none' },\n    colors: ['#e7711c'],\n    histogram: { lastBucketPercentile: 5 },\n    vAxis: { scaleType: 'mirrorLog' },\n  }}\n/>"
            },
            o.a.createElement(t.a, {
              width: "500px",
              height: "300px",
              chartType: "Histogram",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Dinosaur", "Length"],
                ["Acrocanthosaurus (top-spined lizard)", 12.2],
                ["Albertosaurus (Alberta lizard)", 9.1],
                ["Allosaurus (other lizard)", 12.2],
                ["Apatosaurus (deceptive lizard)", 22.9],
                ["Archaeopteryx (ancient wing)", 0.9],
                ["Argentinosaurus (Argentina lizard)", 36.6],
                ["Baryonyx (heavy claws)", 9.1],
                ["Brachiosaurus (arm lizard)", 30.5],
                ["Ceratosaurus (horned lizard)", 6.1],
                ["Coelophysis (hollow form)", 2.7],
                ["Compsognathus (elegant jaw)", 0.9],
                ["Deinonychus (terrible claw)", 2.7],
                ["Diplodocus (double beam)", 27.1],
                ["Dromicelomimus (emu mimic)", 3.4],
                ["Gallimimus (fowl mimic)", 5.5],
                ["Mamenchisaurus (Mamenchi lizard)", 21],
                ["Megalosaurus (big lizard)", 7.9],
                ["Microvenator (small hunter)", 1.2],
                ["Ornithomimus (bird mimic)", 4.6],
                ["Oviraptor (egg robber)", 1.5],
                ["Plateosaurus (flat lizard)", 7.9],
                ["Sauronithoides (narrow-clawed lizard)", 2],
                ["Seismosaurus (tremor lizard)", 45.7],
                ["Spinosaurus (spiny lizard)", 12.2],
                ["Supersaurus (super lizard)", 30.5],
                ["Tyrannosaurus (tyrant lizard)", 15.2],
                ["Ultrasaurus (ultra lizard)", 30.5],
                ["Velociraptor (swift robber)", 1.8]
              ],
              options: {
                title: "Lengths of dinosaurs, in meters",
                legend: { position: "none" },
                colors: ["#e7711c"],
                histogram: { lastBucketPercentile: 5 },
                vAxis: { scaleType: "mirrorLog" }
              }
            })
          ),
          o.a.createElement(
            i.MDXTag,
            { name: "h2", components: r, props: { id: "distribution" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: r,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#distribution" }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: r,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Distribution"
          ),
          o.a.createElement(
            s.d,
            {
              __position: 3,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"Histogram\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Dinosaur', 'Length'],\n    ['Acrocanthosaurus (top-spined lizard)', 12.2],\n    ['Albertosaurus (Alberta lizard)', 9.1],\n    ['Allosaurus (other lizard)', 12.2],\n    ['Apatosaurus (deceptive lizard)', 22.9],\n    ['Archaeopteryx (ancient wing)', 0.9],\n    ['Argentinosaurus (Argentina lizard)', 36.6],\n    ['Baryonyx (heavy claws)', 9.1],\n    ['Brachiosaurus (arm lizard)', 30.5],\n    ['Ceratosaurus (horned lizard)', 6.1],\n    ['Coelophysis (hollow form)', 2.7],\n    ['Compsognathus (elegant jaw)', 0.9],\n    ['Deinonychus (terrible claw)', 2.7],\n    ['Diplodocus (double beam)', 27.1],\n    ['Dromicelomimus (emu mimic)', 3.4],\n    ['Gallimimus (fowl mimic)', 5.5],\n    ['Mamenchisaurus (Mamenchi lizard)', 21.0],\n    ['Megalosaurus (big lizard)', 7.9],\n    ['Microvenator (small hunter)', 1.2],\n    ['Ornithomimus (bird mimic)', 4.6],\n    ['Oviraptor (egg robber)', 1.5],\n    ['Plateosaurus (flat lizard)', 7.9],\n    ['Sauronithoides (narrow-clawed lizard)', 2.0],\n    ['Seismosaurus (tremor lizard)', 45.7],\n    ['Spinosaurus (spiny lizard)', 12.2],\n    ['Supersaurus (super lizard)', 30.5],\n    ['Tyrannosaurus (tyrant lizard)', 15.2],\n    ['Ultrasaurus (ultra lizard)', 30.5],\n    ['Velociraptor (swift robber)', 1.8],\n  ]}\n  options={{\n    title: 'Distribution',\n    legend: { position: 'none' },\n    colors: ['#4285F4'],\n    chartArea: { width: 401 },\n    hAxis: {\n      ticks: [-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1],\n    },\n    bar: { gap: 0 },\n    histogram: {\n      bucketSize: 5,\n      maxNumBuckets: 200,\n      minValue: 0,\n      maxValue: 30,\n    },\n  }}\n/>"
            },
            o.a.createElement(t.a, {
              width: "500px",
              height: "300px",
              chartType: "Histogram",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Dinosaur", "Length"],
                ["Acrocanthosaurus (top-spined lizard)", 12.2],
                ["Albertosaurus (Alberta lizard)", 9.1],
                ["Allosaurus (other lizard)", 12.2],
                ["Apatosaurus (deceptive lizard)", 22.9],
                ["Archaeopteryx (ancient wing)", 0.9],
                ["Argentinosaurus (Argentina lizard)", 36.6],
                ["Baryonyx (heavy claws)", 9.1],
                ["Brachiosaurus (arm lizard)", 30.5],
                ["Ceratosaurus (horned lizard)", 6.1],
                ["Coelophysis (hollow form)", 2.7],
                ["Compsognathus (elegant jaw)", 0.9],
                ["Deinonychus (terrible claw)", 2.7],
                ["Diplodocus (double beam)", 27.1],
                ["Dromicelomimus (emu mimic)", 3.4],
                ["Gallimimus (fowl mimic)", 5.5],
                ["Mamenchisaurus (Mamenchi lizard)", 21],
                ["Megalosaurus (big lizard)", 7.9],
                ["Microvenator (small hunter)", 1.2],
                ["Ornithomimus (bird mimic)", 4.6],
                ["Oviraptor (egg robber)", 1.5],
                ["Plateosaurus (flat lizard)", 7.9],
                ["Sauronithoides (narrow-clawed lizard)", 2],
                ["Seismosaurus (tremor lizard)", 45.7],
                ["Spinosaurus (spiny lizard)", 12.2],
                ["Supersaurus (super lizard)", 30.5],
                ["Tyrannosaurus (tyrant lizard)", 15.2],
                ["Ultrasaurus (ultra lizard)", 30.5],
                ["Velociraptor (swift robber)", 1.8]
              ],
              options: {
                title: "Distribution",
                legend: { position: "none" },
                colors: ["#4285F4"],
                chartArea: { width: 401 },
                hAxis: {
                  ticks: [-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1]
                },
                bar: { gap: 0 },
                histogram: {
                  bucketSize: 5,
                  maxNumBuckets: 200,
                  minValue: 0,
                  maxValue: 30
                }
              }
            })
          ),
          o.a.createElement(
            i.MDXTag,
            { name: "h2", components: r, props: { id: "multiple-series" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: r,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#multiple-series" }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: r,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Multiple Series"
          ),
          o.a.createElement(
            s.d,
            {
              __position: 4,
              __code:
                "<Chart\n  width={'500px'}\n  height={'300px'}\n  chartType=\"Histogram\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    ['Quarks', 'Leptons', 'Gauge Bosons', 'Scalar Bosons'],\n    [2 / 3, -1, 0, 0],\n    [2 / 3, -1, 0, null],\n    [2 / 3, -1, 0, null],\n    [-1 / 3, 0, 1, null],\n    [-1 / 3, 0, -1, null],\n    [-1 / 3, 0, null, null],\n    [-1 / 3, 0, null, null],\n  ]}\n  options={{\n    title: 'Charges of subatomic particles',\n    legend: { position: 'top', maxLines: 2 },\n    colors: ['#5C3292', '#1A8763', '#871B47', '#999999'],\n    interpolateNulls: false,\n  }}\n/>"
            },
            o.a.createElement(t.a, {
              width: "500px",
              height: "300px",
              chartType: "Histogram",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                ["Quarks", "Leptons", "Gauge Bosons", "Scalar Bosons"],
                [2 / 3, -1, 0, 0],
                [2 / 3, -1, 0, null],
                [2 / 3, -1, 0, null],
                [-1 / 3, 0, 1, null],
                [-1 / 3, 0, -1, null],
                [-1 / 3, 0, null, null],
                [-1 / 3, 0, null, null]
              ],
              options: {
                title: "Charges of subatomic particles",
                legend: { position: "top", maxLines: 2 },
                colors: ["#5C3292", "#1A8763", "#871B47", "#999999"],
                interpolateNulls: !1
              }
            })
          ),
          o.a.createElement(
            i.MDXTag,
            { name: "h1", components: r, props: { id: "data-format" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: r,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#data-format" }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: r,
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
            { name: "p", components: r },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: r,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/histogram#data-format"
                }
              },
              "Complete Data Format Reference"
            )
          ),
          o.a.createElement(
            i.MDXTag,
            { name: "h1", components: r, props: { id: "reference" } },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: r,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#reference" }
              },
              o.a.createElement(
                i.MDXTag,
                {
                  name: "span",
                  components: r,
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
            { name: "p", components: r },
            o.a.createElement(
              i.MDXTag,
              {
                name: "a",
                components: r,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/histogram"
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
