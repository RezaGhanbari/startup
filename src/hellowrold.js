var Helloworld = React.createClass({
    render: function () {
        return <div>
        <h1>Hello World!</h1>
        <p>www.rezaghanbari.ir</p>
        </div>
    }
});
React.render(<Helloworld />, document.body);