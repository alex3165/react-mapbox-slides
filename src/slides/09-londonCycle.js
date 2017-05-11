import { parseString } from "xml2js";
import { Map } from "immutable";
import React from "react";
import ReactMapboxGl, { Layer, Feature, Popup } from "react-mapbox-gl";
import { marine, fern } from '../colors';

// Fetch bike stations from tfl
function getCycleStations() {
  return fetch("https://tfl.gov.uk/tfl/syndication/feeds/cycle-hire/livecyclehireupdates.xml")
    .then(res => res.text())
    .then(data => {
      return new Promise((resolve, reject) => {
        parseString(data, (err, res) => {
          if (!err) {
            resolve(res.stations.station);
          } else {
            reject(err);
          }
        });
      });
    })
}

const styles = {
  container: {
    height: 500,
    width: "100%"
  },
  stationDescription: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "10px 30px",
    textAlign: "center",
    backgroundColor: "white",
    display: 'flex',
    justifyContent: 'space-between'
  },
  popup: {
    background: 'white',
    color: marine.toString(),
    fontWeight: 400,
    padding: "5px",
    borderRadius: "2px"
  },
  p1: {
    color: fern.toString(),
    fontSize: 20,
    fontWeight: 'bold',
    margin: '5px 0px'
  },
  p2: {
    color: marine.toString(),
    fontSize: 14,
    margin: '5px 0px'
  }
};

export default class LondonCycle extends React.Component {
  state = {
    center: [-0.109970527, 51.52916347],
    zoom: [11],
    skip: 0,
    stations: new Map(),
    popupShowLabel: true
  };

  componentWillMount() {
    // Fetch stations and hydrate the state
    getCycleStations().then(res => {
      this.setState(({ stations }) => ({
        stations: stations.merge(res.reduce((acc, station) => (
          acc.set(station.id[0], new Map({
            id: station.id[0],
            name: station.name[0],
            position: [ parseFloat(station.long[0]), parseFloat(station.lat[0]) ],
            bikes: parseInt(station.nbBikes[0], 10),
            slots: parseInt(station.nbDocks[0], 10)
          }))
        ), new Map()))
      }));
    });
  };

  _markerClick = (station, { feature }) => {
    // Define the selected station, store it in the state
    this.setState({
      center: feature.geometry.coordinates,
      zoom: [14],
      station,
    });
  }

  _onDrag = () => {
    // If a station is selected and user drag the map, unselect it
    if (this.state.station) {
      this.setState({
        station: null,
      });
    }
  }

  _onToggleHover(cursor, { map }) {
    // Change cursor style on marker hover
    map.getCanvas().style.cursor = cursor;
  }

  _popupChange(popupShowLabel) {
    this.setState({ popupShowLabel });
  }

  render() {
    const { stations, station, popupShowLabel, center, zoom } = this.state;

    return (
      <div style={{ position: 'relative' }}>
        <ReactMapboxGl
          style="mapbox://styles/alex3165/cj2hv9v4y00242slphcyk9oca"
          center={center}
          zoom={zoom}
          accessToken="pk.eyJ1IjoiYWxleDMxNjUiLCJhIjoiY2l4b3V1YjgxMDAxZzMycG94ajRydGJ2ciJ9.ENIGGEe_9pIKS3hZFY9teg"
          onDrag={this._onDrag}
          containerStyle={styles.container}>

          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "bike" }}>
            {
              stations
                .map((st, index) => (
                  <Feature
                    key={st.get("id")}
                    onMouseEnter={this._onToggleHover.bind(this, "pointer")}
                    onMouseLeave={this._onToggleHover.bind(this, "")}
                    onClick={this._markerClick.bind(this, st)}
                    coordinates={st.get("position")}/>
                )).toArray()
            }
          </Layer>

          {
            station && (
              <Popup
                key={station.get("id")}
                offset={[0, -50]}
                coordinates={station.get("position")}>
                <div>
                  <span style={{
                    ...styles.popup,
                    display: popupShowLabel ? "block" : "none"
                  }}>
                    {station.get("name")}
                  </span>
                </div>
              </Popup>
            )
          }
        </ReactMapboxGl>
        {
          station && (
            <div style={styles.stationDescription}>
              <p style={styles.p1}>{ station.get("name") }</p>
              <p style={styles.p2}>{ station.get("bikes") } bikes / { station.get("slots") } slots</p>
            </div>
          )
        }
      </div>
    )
  }
}
