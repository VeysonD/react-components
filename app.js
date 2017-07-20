

// var GroceryList = () => (
//   <ul>
//     <GroceryListItem food={['milk', 'eggs', 'apples']} />
//
//   </ul>
// )


// var GroceryListItem = (props) => (
// <li>{props.food}</li>
// );

var GroceryList = (props) => {
  console.log(props);
  return (
    <ul>
    {props.food.map(item =>
      <GroceryListItem item={item} />
    )}
    </ul>
  )
}



class GroceryListItem extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }
  onListItemClick() {
    this.setState ({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      'font-weight': this.state.done ? 'bold': 'normal'
    };

    return (
      <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<GroceryList food={['milk', 'eggs', 'bananas']}/>, document.getElementById("app"));


//functional inplementation

// var GroceryList = // () => (
//    <ul>
//     <GroceryListItem food="m// ilk" />
//     <GroceryListItem food="// egg" />
//   </ul>
// )



// var GroceryListItem = (props) => ( // functional component implementation
// <li>{props.food}</li>
// );
