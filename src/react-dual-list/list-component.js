import React from "react";

export default class ListComponent extends React.Component {
  getButtonNameByDirectionContext = (entity, item) => {
    const { direction } = this.props;
    if (direction === "right") {
      return (
        <button
          type="button"
          className="close font-weight-lighter"
          aria-label="Close"
          onClick={event => {
            this.props.handler(event, entity, direction, item);
          }}
          style={{fontSize:'14px'}}
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
            this.props.handler(event, entity, direction, item);
          }}
          style={{fontSize:'14px'}}
        >
          <i class="fas fa-minus"></i>
        </button>
      );
    }
  };

  bindListOptions = () => {
    const { optionsList } = this.props
    return(
      optionsList.map(entity => {
          return (
            <div className="d-flex flex-column">
              <div className="btn-group mt-1" key={entity.label}>
                {this.getButtonNameByDirectionContext(entity)}
                <span className="ml-1">
                  {entity.label}
                </span>
              </div>
              {entity.options ? (
                entity.options.map((item) => {
                  return(
                    <div className="btn-group ml-3" key={item.value}>
                      {this.getButtonNameByDirectionContext(entity,item)}
                      <span className="ml-1">
                        {item.label}
                      </span>
                    </div>
                  )
                })
              ):''}
            </div>
          );
        })
    )
  }
  render() {
    return (
      <div>
        <div
          className="d-flex flex-column col-md-4 border"
          style={{
            maxHeight: "16rem",
            minHeight: "16rem",
            minWidth: "10rem",
            overflowY: "auto"
          }}
        >
          {this.bindListOptions()}
        </div>
      </div>
    );
  }
}
