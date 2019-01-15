import React from "react";

export default class ListComponent extends React.Component {
  getButtonNameByDirectionContext = entity => {
    const { direction } = this.props;
    if (direction === "right") {
      return (
        <button
          type="button"
          className="close font-weight-lighter"
          aria-label="Close"
          onClick={event => {
            this.props.handler(event, entity, direction);
          }}
        >
          <i className="fas fa-plus"></i>
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={event => {
            this.props.handler(event, entity, direction);
          }}
        >
        <i class="fas fa-minus"></i>
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
              <div className="btn-group" key={entity.value}>
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
