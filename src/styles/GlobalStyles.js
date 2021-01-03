import React from 'react';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body {
    background: var(--color-background);
}

.header-home,
.header-home:after {
    background: var(--color-backgroundpop);
}

.home-links div {
    background: var(--color-background);
}

.header-description h1 {
    color: var(--color-titlehero);
}

.home-title {
    color: var(--color-title2);
}

h2 {
    color: var(--color-subtitle);
}

.content-title,
.site-main h1,
.tag-header h1 {
    color: var(--color-title);
}

.content p {
    color: var(--color-text);
}

.location-box-inner {
    background: transparent;
    border: 1px solid var(--color-border);
}

.location-box-inner svg {
    background: var(--color-border);
}

path.rsm-geography {
    fill: var(--color-mapfill) !important;
    stroke: var(--color-mapline) !important;
}

.post-card {
    background: transparent;
    border: 1px solid var(--color-border);
    box-shadow: none;
}

.post-card-title {
    color: var(--color-small-title-dark);
    line-height: 1.5;
    letter-spacing: 1px;
}
`;

export default GlobalStyle