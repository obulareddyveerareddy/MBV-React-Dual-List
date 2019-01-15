import React from "react";
import _ from "lodash";
import ListComponent from "./list-component";

export default class ReactDualList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rightListOptions: [
        { value: "one", label: "Option 1" },
        { value: "two", label: "Option 2" },
        { value: "three", label: "Option 3" },
        { value: "four", label: "Option 4" },
        { value: "five", label: "Option 5" },
        { value: "six", label: "Option 6" }
      ],
      leftListOptions: []
    };
  }
  onClickHandler = (event, entity, direction) => {
    const { leftListOptions, rightListOptions } = this.state;
    if (direction === "right") {
      leftListOptions.push(entity);
      _.remove(rightListOptions, function(item) {
        return item.value === entity.value && item.label === entity.label;
      });
      this.setState({ leftListOptions, rightListOptions });
    } else if (direction === "left") {
      rightListOptions.push(entity);
      _.remove(leftListOptions, function(item) {
        return item.value === entity.value && item.label === entity.label;
      });
      this.setState({ rightListOptions, leftListOptions });
    }
    console.log("~~~~ check status ", this.state);
    event.preventDefault();
  };
  render() {
    return (
      <div className="d-flex m-4 justify-content-between">
        <ListComponent
          optionsList={this.state.rightListOptions}
          handler={this.onClickHandler}
          direction="right"
        />
        <ListComponent
          optionsList={this.state.leftListOptions}
          handler={this.onClickHandler}
          direction="left"
        />
      </div>
    );
  }
}
