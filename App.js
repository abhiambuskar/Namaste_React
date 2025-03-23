// const head = React.createElement
// ('h1',
// {  
//     id : "first_head",
//     hi:"hello",
// },"Hello from react");

// const parent = React.createElement(
//     'div',{id: "parent"},
//     [React.createElement('div',{id:child1},
//         [React.createElement('h1',{},'I an first H1 tag'), 
//         React.createElement('h1',{},'I an second H1 tag')])
// ,   React.createElement('div',{id:child2},
//         [React.createElement('h1',{},'I an first H1 tag'), 
//         React.createElement('h1',{},'I an second H1 tag')])
//     ]
// )

const head = React.createElement(
    'div',{id:"parent"},
    [React.createElement("div",{id: "child1"},
        [React.createElement('h1',{},"Hi i am h1"),
        React.createElement('h1',{},"Hi i am h1")]
    ),
    React.createElement("div",{id: "child2"},
        [React.createElement('h1',{},"Hi i am h1"),
            React.createElement('h1',{},"Hi i am h1")]
    )]

);

// ,
//      React.createElement('div',{id:child2},[
//         React.createElement('h1',{id: "hello"},"Hi I h1 am there"), 
//         React.createElement('h2',{id: "HELLOO"},"Hi I h2 am there")
//     ])

const root = ReactDOM.createRoot(document.getElementById("name"));
root.render(head)
