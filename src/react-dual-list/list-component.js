import React from "react";

export default class ListComponent extends React.Component {
  getButtonNameByDirectionContext = () => {
    const { direction } = this.props;
    if (direction === "right") {
      return "+";
    } else {
      return "-";
    }
  };
  render() {
    const { optionsList, direction } = this.props;
    return (
      <div>
        <div
          className="d-flex flex-column col-md-4 border"
          style={{
            maxHeight: "10rem",
            minHeight: "10rem",
            minWidth: "10rem",
            overflowY: "auto"
          }}
        >
          {optionsList.map(entity => {
            return (
              <div className="btn-group">
                <button
                  className="btn btn-primary btn-sm mt-1"
                  onClick={event => {
                    this.props.handler(event, entity, direction);
                  }}
                >
                  {this.getButtonNameByDirectionContext()}
                </button>
                <button className="btn btn-default btn-sm mt-1">
                  {entity.label}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
