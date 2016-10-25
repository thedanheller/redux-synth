import React, { Component, PropTypes } from 'react';
import panelCfg from '../constants/panel';

class Panel extends Component {
  constructor(props) {
      super(props);
      this.amp = 0;
  }
  render() {
    return (
      <div className="Panel">
        <ul
          className={`octaveButtons active-octave-${this.props.octave + 1}`}>
          {[...Array(panelCfg.oscillator.octavesLength)].map((x, i) =>
            <li
              key={i}
              onClick={this.props.onParamChanged.bind(this,'octave', i)}
            />
          )}
        </ul>
        <p className={this.props.isPlaying} />
        <input
          type="range"
          onInput={this.props.onParamChanged.bind(this,'amplitude')}
          />
        <ul className="types">
          {panelCfg.oscillator.types.map((type, i) =>
            <li
              key={i}
              onClick={this.props.onParamChanged.bind(this,'type', type)}
            >{type}</li>
          )}
        </ul>
        <input
          type="range"
          onInput={this.props.onParamChanged.bind(this,'lowPass')}
          />
      </div>
    );
  }
}

Panel.propTypes = {
  onParamChanged: PropTypes.func.isRequired,
  octave: PropTypes.number,
  isPlaying: PropTypes.bool
};

export default Panel;