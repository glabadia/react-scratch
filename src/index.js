const React = {
  createElement: (tag, props, ...children) => {
    if (typeof tag === "function") {
      return tag(props);
    }
    let element = { tag, props: { ...props, children } };
    console.log(element);
    return element;
  }
};

const App = () => (
  <div className="react-2020">
    <h1 className="header">Hello</h1>
    <p className="body">lorem</p>
  </div>
);

const render = (reactElement, container) => {
  const actualDOMElement = document.createElement(reactElement.tag);
  if (reactElement.props) {
    Object.keys(reactElement.props)
      .filter(p => p !== "children")
      .forEach(p => (actualDOMElement[p] = reactElement[p]));
  }
};

render(<App />, document.querySelector("#app"));
