function AppHeader({ user, onLogout }) {
  return (
    <header className="app-header">
      <div>
        <p className="eyebrow">Reusable Lab Boilerplate</p>
        <h1>CRUD Control Panel</h1>
      </div>

      <div className="account-box">
        <div>
          <strong>{user.name}</strong>
          <span>{user.role.replace('_', ' ')}</span>
        </div>
        <button className="secondary-button" type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  )
}

export default AppHeader