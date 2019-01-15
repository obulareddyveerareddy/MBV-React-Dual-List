import React from "react";

export default class ListComponent extends React.Component {
  getButtonNameByDirectionContext = entity => {
    const { direction } = this.props;
    if (direction === "right") {
      return (
        <button
          type="button"
          class="close"
          aria-label="Close"
          onClick={event => {
            this.props.handler(event, entity, direction);
          }}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      );
    } else {
      return (
        <button
          type="button"
          class="close"
          aria-label="Close"
          onClick={event => {
            this.props.handler(event, entity, direction);
          }}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      );
    }
  };
  render() {
    const { optionsList } = this.props;
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
                {this.getButtonNameByDirectionContext(entity)}
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
