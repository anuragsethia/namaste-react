// Single Heading
// const heading = React.createElement(
//     "h1",
//     {
//         id: "heading",
//         abc: "xyz"
//     },
//     "Hello World from React!"
// );

// // React.createElement returns an react object/element, 
// // which consist of type(h1) and props({children: "hello...", id: "heading"...}) and some other properties
// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// Nested Tags
// const component = React.createElement(
//     "div", { id: "parent" },
//     React.createElement(
//         "div", { id: "child" },
//         React.createElement(
//             "h1", {}, "I'm H1 tag in nested div tags")));
// console.log(component);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(component);

// To display more than one sibling, pass an array to third argument. for ex: 
const component = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I'm H1 tag in nested div tags"),
        React.createElement("h2", {}, "I'm H2 tag in nested div tags")]));
console.log(component);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(component);