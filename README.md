### Installation

- Create a `.env` file in the project root and set `REACT_APP_GIPHY_KEY` to your Giphy API key.
- run `yarn install`
- run `yarn start`

### Library Choices

I wanted to keep the project dependencies straightforward. `Immer` is used in reducers to operate on a draft state tree. `Reselect` is used for composing selectors, which is a pattern used heavily throughout the app. `Redux Thunk` is used to dispatch a network request result or when dispatch needs access to the state tree. `Blueprint` is used for UI elements.

### Requirements

I was able to meet all of the requirements within the deadline.

### Other Specs

> It’s fine if a user goes back to a previous weirdness score and a different GIF appears.

I choose to implement caching on the slider. It reduces the number of network requests
and prevents users from losing a gif they may like when sliding through weirdness levels.
