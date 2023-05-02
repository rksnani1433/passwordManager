import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwordList: [],
    userName: '',
    userWeb: '',
    password: '',
    search: '',
    showPasswords: false,
  }

  onAddpassword = event => {
    const {passwordList} = this.state

    event.preventDefault()
    const {userName, userWeb, password} = this.state
    const newPassword = {
      id: v4(),
      userName,
      userWeb,
      password,
    }
    this.setState(prev => ({passwordList: [...prev.passwordList, newPassword]}))
    console.log(passwordList)
  }

  onUserName = event => {
    this.setState({userName: event.target.value})
  }

  onWebName = event => {
    this.setState({userWeb: event.target.value})
  }

  onPassWord = event => {
    this.setState({password: event.target.value})
  }

  onDelete = id => {
    const {passwordList} = this.state
    const filtered = passwordList.filter(each => each.id !== id)
    this.setState({passwordList: filtered})
  }

  onSearch = event => {
    this.setState({search: event.target.value})
    const {search} = this.state
  }

  onShowPasswords = event => {
    this.setState({showPasswords: event.target.checked})
  }

  render() {
    const {passwordList, search, showPasswords} = this.state
    const searchFilter = passwordList.filter(each =>
      each.userWeb.includes(search),
    )
    console.log(showPasswords)

    return (
      <div className="app-container">
        <div className="password-logo-container">
          <img
            className="password-logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
        </div>
        <div className="main-filling-container">
          <form onSubmit={this.onAddpassword} className="form-container">
            <h2>Add New Password</h2>
            <div className="inputbar-container">
              <p className="label-logo">
                <img
                  className="input-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
              </p>
              <input
                onChange={this.onWebName}
                type="text"
                className="user-webiste"
                placeholder="Enter Website"
              />
            </div>
            <div className="inputbar-container">
              <p className="label-logo">
                <img
                  className="input-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
              </p>
              <input
                onChange={this.onUserName}
                type="text"
                className="user-webiste"
                placeholder="Enter username"
              />
            </div>
            <div className="inputbar-container">
              <p className="label-logo">
                <img
                  className="input-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
              </p>
              <input
                onChange={this.onPassWord}
                type="password"
                className="user-webiste"
                placeholder="Enter Password"
              />
            </div>
            <button data-testid="delete" className="add-button" type="submit">
              Add
            </button>
          </form>
          <img
            className="password-manager-logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
            alt="password manager"
          />
        </div>
        <div className="password-visible-container">
          <div className="top-text-container">
            <h2>
              Your Passwords:
              <span className="count">{searchFilter.length}</span>
            </h2>
            <div className="inputbar-container">
              <p className="label-logo">
                <img
                  className="search-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
              </p>
              <input
                onChange={this.onSearch}
                type="search"
                className="searchbar"
                placeholder="search"
              />
            </div>
          </div>
          <hr className="hr-line" />
          <label>
            <input
              onChange={this.onShowPasswords}
              type="checkbox"
              name="myCheckbox"
              value="yes"
            />
            Show Passwords
          </label>
          <ul>
            {searchFilter.map(each => (
              <li className="password-display-container" key={each.id}>
                <div className="text-container">
                  <p className="first-letter">
                    {each.userName[0].toUpperCase()}
                  </p>
                  <div className="inner-text">
                    <p className="text-password">{each.userWeb}</p>
                    <p className="text-password">{each.userName}</p>
                    <p className="text-password">
                      {showPasswords ? (
                        `${each.password}`
                      ) : (
                        <img
                          className="stars"
                          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                          alt="stars"
                        />
                      )}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => this.onDelete(each.id)}
                  className="delete-button"
                  type="button"
                >
                  <img
                    className="delete-logo"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
                    alt="delete"
                  />
                </button>
              </li>
            ))}
          </ul>
          {searchFilter.length === 0 ? (
            <div>
              <img
                className="no-password-image"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
              />
              <p className="no-pass">No Passwords</p>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    )
  }
}
export default PasswordManager
