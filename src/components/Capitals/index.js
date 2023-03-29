import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {addCountryId: countryAndCapitalsList[0].id}

  changeState = event => {
    this.setState({addCountryId: event.target.value})
  }

  getCountry = () => {
    const {addCountryId} = this.state

    const filterCountry = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === addCountryId,
    )
    return filterCountry.country
  }

  render() {
    const {addCountryId} = this.state

    const country = this.getCountry(addCountryId)

    return (
      <div className="container">
        <div className="form-container">
          <form>
            <h1 className="heading">Countries And Capitals</h1>
            <div className="input-container">
              <select
                className="form-control capital-name"
                onChange={this.changeState}
                value={addCountryId}
              >
                {countryAndCapitalsList.map(eachCapital => (
                  <option
                    key={eachCapital.id}
                    value={eachCapital.id}
                    className="option"
                  >
                    {eachCapital.capitalDisplayText}
                  </option>
                ))}
              </select>
              <p className="which-capital"> is capital of which country? </p>
            </div>
            <p className="country-name">{country}</p>
          </form>
        </div>
      </div>
    )
  }
}
export default Capitals
