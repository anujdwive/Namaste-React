/*
<div id:"parent">
    <div id:"child">
        <h1></h1>
    </div>
</div>
*/

const parent = React.createElement(
    "div", 
    {id:"parent"},
    [React.createElement("div", {id:"child"},
    [React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h1", {}, "I am h2 tag")
    ]),
    React.createElement("div", {id:"child2"},
    [React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h1", {}, "I am h2 tag")
    ])
    ]);

const heading = React.createElement(
    "h1", // this is an HTML element
    {id:"heading"}, // this is an take attribute
    "Hello world from react" // this is an child
    );
    console.log(heading); // obeject (React.creatElement)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // this is put into ReactDOM.createRoot and change into HTML