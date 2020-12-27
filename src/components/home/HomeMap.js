import React, { Component } from "react"
import { Link } from 'gatsby'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps"

import ReactTooltip from 'react-tooltip'

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

const markers = [
  { markerOffset: 25, name: "Barcelona", link: "/tag/barcelona/", hasPost: true, coordinates: [2.173403, 41.385064] },
  { markerOffset: 25, name: "Sofia", link: "/tag/bulgaria/", hasPost: true, coordinates: [23.321868, 42.697708] },
  { markerOffset: 25, name: "Utrecht", link: "/tag/travel/", hasPost: false, coordinates: [5.12142, 52.090737] },
  { markerOffset: 25, name: "Bermuda", link: "/tag/travel/", hasPost: false, coordinates: [-64.7505, 32.3078] },
  { markerOffset: 25, name: "Canggu", link: "/tag/bali/", hasPost: true, coordinates: [115.1385192, -8.6478175] },
  { markerOffset: 25, name: "Singapore", link: "/tag/travel/", hasPost: false, coordinates: [103.819836, 1.352083] },
  { markerOffset: 25, name: "Chiang Mai", link: "/tag/travel/", hasPost: false, coordinates: [98.9817163, 18.7060641] },
  { markerOffset: 25, name: "Guatemala", link: "/guatemala-belize/", hasPost: true, coordinates: [-91.2025207, 14.6906713] },
  { markerOffset: 25, name: "Stavanger", link: "/preikestolen/", hasPost: true, coordinates: [5.73310739, 58.9699756] },
  { markerOffset: 25, name: "Prague", link: "/tag/travel/", hasPost: false, coordinates: [14.4378005, 50.0755381] },
  { markerOffset: 25, name: "Dublin", link: "/tag/travel/", hasPost: false, coordinates: [-6.2603097, 53.3498053] },
  { markerOffset: 25, name: "Bahia", link: "/tag/bahia/", hasPost: true, coordinates: [-38.5016, -12.9777] },
  { markerOffset: 25, name: "Florianopolis", link: "/living-in-florianopolis-brazil-as-a-nomad/", hasPost: true, coordinates: [-48.7504785, -27.5713143] },
  { markerOffset: 25, name: "Rio de Janeiro", link: "/rio-de-janeiro/", hasPost: true, coordinates: [-43.7261797, -22.9132525] },
  { markerOffset: 25, name: "Patagonia", link: "/tag/patagonia/", hasPost: true, coordinates: [-72.8894098, -49.3294885] },
  { markerOffset: 25, name: "Taipei", link: "/one-week-in-taipei-and-my-first-missed-flight/", hasPost: true, coordinates: [120.9605, 23.6978] },
  { markerOffset: 25, name: "Tokyo", link: "/japan-tokyo/", hasPost: true, coordinates: [139.6503, 35.6762] },
  { markerOffset: 25, name: "Osaka", link: "/japan-osaka/", hasPost: true, coordinates: [135.5023, 34.6937] },
  { markerOffset: 25, name: "Krabi", link: "/krabi/", hasPost: true, coordinates: [98.9063, 8.0855] },
  { markerOffset: 25, name: "Lisbon", link: "/tag/travel/", hasPost: false, coordinates: [-9.1393, 38.7223] },
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
            {markers.map(({ name, link, hasPost,  coordinates, markerOffset }) => (
              <Marker
                key={name}
                coordinates={coordinates}
                style={{
                  default: { fill: "#FF5722" },
                  hover: { fill: "#FFFFFF" },
                  pressed: { fill: "#FF5722" },
                }}>

                <Link to={link} data-tip={name}>
                  <circle
                  cx={0}
                  cy={0}
                  r={5}
                  style={{
                    fill: hasPost ? '#d659ae' : '#8170c2',
                    stroke: hasPost ? '#d659ae' : '#8170c2',
                    strokeWidth: 3,
                    opacity: 0.9,
                  }}
                  data-tip={name}
                />
                </Link>
              </Marker>
            ))}

        </ComposableMap>
      </div>
    )
  }
}


export default HomeMap
