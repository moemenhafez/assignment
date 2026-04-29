const login = () => {
  return (
      <div className="login-container">
        <form action="#">
            <h2>Login</h2>
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Enter Username" required>
                </input>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter Password" required>
                </input>
            </div>
            <button type="submit" className="login-btn">Log In</button>
        </form>
        </div>
        );
        };export default login;