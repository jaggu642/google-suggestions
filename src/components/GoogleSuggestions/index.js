// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event =>
    this.setState({searchInput: event.target.value})

  updateSearch = value => this.setState({searchInput: value})

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const filteredSuggestions = suggestionsList.filter(eachObj =>
      eachObj.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="logo"
          />
          <div className="content-container">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search Google"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
            <ul className="list-container">
              {filteredSuggestions.map(eachObj => (
                <SuggestionItem
                  key={eachObj.id}
                  suggestionDetails={eachObj}
                  updateSearch={this.updateSearch}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
