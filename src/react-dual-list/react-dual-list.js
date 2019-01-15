import React from "react";
import _ from "lodash";
import ListComponent from "./list-component";

export default class ReactDualList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rightListOptions: [
        {
            label: 'Earth',
            options: [
                { value: 'luna', label: 'Moon' },
            ],
        },
        {
            label: 'Mars',
            options: [
                { value: 'phobos', label: 'Phobos' },
                { value: 'deimos', label: 'Deimos' },
            ],
        },
        {
            label: 'Jupiter',
            options: [
                { value: 'io', label: 'Io' },
                { value: 'europa', label: 'Europa' },
                { value: 'ganymede', label: 'Ganymede' },
                { value: 'callisto', label: 'Callisto' },
            ],
        },
    ],
      leftListOptions: []
    };
  }
  onClickHandler = (event, entity, direction, childEntity) => {
    const { leftListOptions, rightListOptions } = this.state;
    var clonedEntity = _.cloneDeep(entity)
    if (direction === "right") {
      if(!childEntity || (entity.options && entity.options.length === 1)){
        _.remove(rightListOptions, function(item) {
          return item.value === entity.value && item.label === entity.label;
        });
      }else {
        clonedEntity = _.cloneDeep(entity)
        _.remove(clonedEntity.options, function(item){
          return item.value !== childEntity.value && item.label !== childEntity.label;
        })
        _.forEach(rightListOptions, function (item) {
          if(item.label === entity.label){
            _.remove(item.options, function(item){
              return item.value === childEntity.value && item.label === childEntity.label;
            })
          }
        });
      }
      if(_.find(leftListOptions, {label:entity.label})){
        _.forEach(leftListOptions, function(item){
          if(item.label === entity.label){
            item.options.push(childEntity)
          }
        })
      }else {
        leftListOptions.push(clonedEntity)
      }
      
      this.setState({ leftListOptions, rightListOptions });
    } else if (direction === "left") {
      if(!childEntity || (entity.options && entity.options.length === 1)){
        _.remove(leftListOptions, function(item) {
          return item.value === entity.value && item.label === entity.label;
        });
      }else {
        clonedEntity = _.cloneDeep(entity)
        _.remove(clonedEntity.options, function(item){
          return item.value !== childEntity.value && item.label !== childEntity.label;
        })
        _.forEach(leftListOptions, function (item) {
          if(item.label === entity.label){
            _.remove(item.options, function (item) {
              return item.value === childEntity.value && item.label === childEntity.label;
            })
          }
        });
      }
      if(_.find(rightListOptions, {label:entity.label})){
        _.forEach(rightListOptions, function(item){
          if(item.label === entity.label){
            item.options.push(childEntity)
          }
        })
      }else {
        rightListOptions.push(clonedEntity)
      }
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
