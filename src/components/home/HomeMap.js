import React, { Component } from "react"
import { Link } from 'gatsby'
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps"

import ReactTooltip from 'react-tooltip'

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

const markers = [
  { markerOffset: 25, name: "Barcelona", coordinates: [2.173403, 41.385064] },
  { markerOffset: 25, name: "Sofia", coordinates: [23.321868, 42.697708] },
  { markerOffset: 25, name: "Utrecht", coordinates: [5.12142, 52.090737] },
  { markerOffset: 25, name: "Bermuda", coordinates: [-64.7505, 32.3078] },
  { markerOffset: 25, name: "Canggu", coordinates: [115.1385192, -8.6478175] },
  { markerOffset: 25, name: "Singapore", coordinates: [103.819836, 1.352083] },
  { markerOffset: 25, name: "Chiang Mai", coordinates: [98.9817163, 18.7060641] },
  { markerOffset: 25, name: "Guatemala", coordinates: [-91.2025207, 14.6906713] },
  { markerOffset: 25, name: "Stavanger", coordinates: [5.73310739, 58.9699756] },
  { markerOffset: 25, name: "Prague", coordinates: [14.4378005, 50.0755381] },
  { markerOffset: 25, name: "Dublin", coordinates: [-6.2603097, 53.3498053] },
  { markerOffset: 25, name: "Bahia", coordinates: [-38.5016, -12.9777] },
  { markerOffset: 25, name: "Florianopolis", coordinates: [-48.7504785, -27.5713143] },
  { markerOffset: 25, name: "Rio de Janeiro", coordinates: [-43.7261797, -22.9132525] },
  { markerOffset: 25, name: "Patagonia", coordinates: [-72.8894098, -49.3294885] },
  { markerOffset: 25, name: "Taipei", coordinates: [120.9605, 23.6978] },
  { markerOffset: 25, name: "Tokyo", coordinates: [139.6503, 35.6762] },
  { markerOffset: 25, name: "Osaka", coordinates: [135.5023, 34.6937] },
  { markerOffset: 25, name: "Krabi", coordinates: [98.9063, 8.0855] },
  { markerOffset: 25, name: "Lisbon", coordinates: [-9.1393, 38.7223] },
]

class HomeMap extends Component {
  render() {
    return (
      <div style={wrapperStyles}>
        <ReactTooltip />

        <ComposableMap
          projectionConfig={{ scale: 190 }}
          width={1000}
          height={500}
          style={{
            width: "100%",
            height: "auto",
          }}
        >
            <Geographies geography="./world-50m.json">
              {({ geographies }) =>
                geographies.map(geo => <Geography geography={geo}
                  style={{
                    default: {
                      fill: "#ECEFF1",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: "#ECEFF1",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#ECEFF1",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                  }}
                />)
              }
            </Geographies>
            {markers.map(({ name, coordinates, markerOffset }) => (
              <Marker
                key={name}
                coordinates={coordinates}
                style={{
                  default: { fill: "#FF5722" },
                  hover: { fill: "#FFFFFF" },
                  pressed: { fill: "#FF5722" },
                }}>

                <circle
                  cx={0}
                  cy={0}
                  r={5}
                  style={{
                    fill: '#d659ae',
                    stroke: "#d659ae",
                    strokeWidth: 3,
                    opacity: 0.9,
                  }}
                  data-tip={name}
                />
              </Marker>
            ))}

        </ComposableMap>
      </div>
    )
  }
}


export default HomeMap
