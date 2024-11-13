// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world im from React!"
// ); // inside the {}Obj atributes we can give

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }),
//   [
//     React.createElement("h1", {}, "im an h1 tag"),
//     React.createElement("h3", {}, "im h3 tag"),
//   ]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Im a h1 tag"),
    React.createElement("h2", {}, "im a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Im a h1 tag"),
    React.createElement("h2", {}, "im a h2 tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
