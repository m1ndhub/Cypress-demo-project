FROM cypress/factory
WORKDIR /app

COPY cypress.config.js ./
COPY package.json ./
COPY cypress ./cypress
RUN npm install -f


CMD cd /app && npx cypress run --spec "TS01-Search.cy.js"*