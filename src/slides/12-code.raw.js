import * as React from 'react';
import { MapEvent } from 'react-mapbox-gl/lib/map';
import { throttle } from 'lodash';
import { connect } from 'react-redux';
import { getMonuments } from '../actions/monument';
import { MonumentDict, State } from '../reducers/index';
import UnescoMap from './map';
import { css, StyleSheet } from 'aphrodite/no-important';
import { browserHistory, RouteComponentProps } from 'react-router';
import { Props as SidepanListProps } from './sidepanList';
import { RouteProps } from './sidepanDetail';
import SidepanContainer from './sidepanContainer';
import { fetchMonument } from '../actions/monument';

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  }
});

const defaultZoom = [6];
const defaultCenter = [-0.2416815, 51.5285582];

class Main extends React.Component {
  state = {
    hoveredItem: '',
    zoom: defaultZoom,
    center: defaultCenter,
    filteredMonuments: [],
    bounds: [],
    hoveredAnchor: 'top'
  };

  componentWillMount() {
    const { location, fetchMonument, params } = this.props;

    if (location.pathname.includes('detail')) {
      fetchMonument(params.id).then(() => {
        this.setState({
          center: this.props.monuments[params.id].latlng,
          zoom: [11],
          hoveredItem: params.id
        });
      });
    }

    browserHistory.listen((ev) => {
      if (!ev.pathname.includes('detail')) {
        this.setState({
          zoom: defaultZoom,
          hoveredItem: ''
        });
      }
    });
  }

  mapInit = (map) => {
    const bounds = map.getBounds();
    const boundsArr = [bounds.getSouth(), bounds.getWest(), bounds.getNorth(), bounds.getEast()];

    this.props.getMonuments().then(() => {
      this.setMonumentsAndBounds(boundsArr);
    });
  };

  setMonumentsAndBounds = (bounds) => {
    const { monuments } = this.props;

    this.setState({
      filteredMonuments: Object.keys(monuments).filter(k => {
        const lat = monuments[k].latitude;
        const long = monuments[k].longitude;

        return (
          lat > bounds[0] &&
          long > bounds[1] &&
          lat < bounds[2] &&
          long < bounds[3]
        );
      }),
      bounds
    });
  };

  boundsChanged = throttle((map) => {
    const bounds = map.getBounds();
    const limitedBounds = map.unproject([60, 60]);

    const hDiff = Math.abs(bounds.getNorth() - limitedBounds.lat);
    const vDiff = Math.abs(bounds.getWest() - limitedBounds.lng);

    const boundsArr = [
      bounds.getSouth() + hDiff,
      limitedBounds.lng,
      limitedBounds.lat,
      bounds.getEast() - vDiff
    ];

    this.setMonumentsAndBounds(boundsArr);
  }, 500, { leading: true });

  onMouseEnter = (key) => {
    this.setState({
      hoveredItem: key
    });
  }

  onMouseLeave = () => {
    this.setState({
      hoveredItem: ''
    });
  }

  onMonumentClick = (k) => {
    const selectedMonument = this.props.monuments[k];

    this.setState({
      center: selectedMonument.latlng,
      zoom: [11]
    });

    this.props.fetchMonument(k);

    setTimeout(() => {
      browserHistory.replace(`/detail/${k}`);
    }, 500);
  };

  render() {
    const { monuments, children } = this.props;
    const { zoom, center, hoveredItem, filteredMonuments } = this.state;

    return (
      <div className={css(styles.container)}>
        <SidepanContainer>
        {
          React.cloneElement((children), {
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave,
            filteredMonuments: filteredMonuments,
            onSelectItem: this.onMonumentClick
          })
        }
        </SidepanContainer>
        <UnescoMap
          zoom={zoom}
          center={center}
          hoveredItem={hoveredItem}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          monuments={monuments}
          boundsChanged={this.boundsChanged}
          mapInit={this.mapInit}
          onMonumentClick={this.onMonumentClick}
        />
      </div>
    );
  }
}

export default connect((state) => ({
  monuments: state.monuments
}), dispatch => ({
  getMonuments: () => dispatch(getMonuments()),
  fetchMonument: (id) => dispatch(fetchMonument(id))
}))(Main);
