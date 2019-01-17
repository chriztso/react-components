class ToShopList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  } 
  onListItemClick() {
    this.setState({
      done: !this.state.done
     });
  }  
  render() {
    var style = {
      //textDecoration: this.state.done ? 'line-through' : 'none'
      fontWeight: this.state.done ? 'bold' : 'none'
    };
    return (
      <ul>
        <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.toshop}</li>
      </ul>
    );
  };
}
 //var toshops = ['Butter', 'Bread'];

var GroceryList = (props) => (
  <ul>
    {props.toshops.map(toshop =>
      <ToShopList toshop={toshop} />
    )}
  </ul>
)



  // var onListItemClick = (event) => {
  //   console.log('I got clicked');
  /*// };
  return(
  <ul>
    <li onClick={onListItemClick}>{props.toshops[0]}</li>
    <li>{props.toshops[1]}</li>
  </ul>
  )
};*/

/*var GroceryList = () => (
  <div>
    <h2>Grocery List</h2>
    <App toshops = {['Butter', 'Bread']}/>
  </div>  
);*/




ReactDOM.render(<GroceryList toshops = {['bread', 'butter', 'chicken', 'egg']}/>, document.getElementById("app"));



