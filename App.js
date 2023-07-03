const ele = React.createElement('h1',{style:{color:"Red"}},"calling from react.....");
const ele1 = React.createElement('h2',{style:{color:"Blue"}},"calling from react.....");

const child = React.createElement('div',{id:"child"},[ele,ele1]);
const child1 = React.createElement('div',{id:"child1"},[ele,ele1]);

const parent = React.createElement('div',{id:"parent"},[child,child1]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);