// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearch} = props
  const {suggestion} = suggestionDetails

  const onUpdateSearch = () => {
    updateSearch(suggestion)
  }

  return (
    <li className="search-suggestions">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="arrow-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
          onClick={onUpdateSearch}
        />
      </button>
    </li>
  )
}

export default SuggestionItem
