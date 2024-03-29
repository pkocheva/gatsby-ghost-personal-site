import React from 'react';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body {
    background: var(--color-background);
}

pre,
code {
    background: var(--color-syntax);
}

strong {
    color: var(--color-subtitle);
}

html,
.header-home,
.header-home:after,
.site-head {
    background: var(--color-backgroundpop);
}

.home-links div {
    background: var(--color-background);
}

.header-description h1,
.header-description h1 strong {
    color: var(--color-titlehero);
}

.home-title {
    color: var(--color-title);
}

h2,
.content-body h2,
.content-body h3 {
    color: var(--color-subtitle);
}

.content-title,
.site-main h1,
.tag-header h1 {
    color: var(--color-title);
}

.content p,
.content li {
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
    background: var(--color-backgroundpop);
    box-shadow: none;
}

.post-card-title {
    color: var(--color-smalltitle);
    line-height: 1.5;
    letter-spacing: 1px;
}

.site-footer {
    color: var(--color-text);
    background: var(--color-backgroundpop);
}

`;

export default GlobalStyle