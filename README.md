# Basic React app
- Exercise in building basic components, working with props & state
- Used giphy-api to do the Giphy search
- Added a simple delay for search bar to avoid too many requests

## Notes along the way
- No storing of secrets in React (https://create-react-app.dev/docs/adding-custom-environment-variables/)
- Updating the state from props in the constructor won't work (https://reactjs.org/docs/react-component.html#constructor)
- ESLint: destructuring assignment example: `const { id, selectFn } = this.props;`
- ESLint: interactive element example: `<input type="image" src={src} />` (common way to make a graphical button)
- `yarn upgrade` to upgrade packages
