import { useState } from 'react';

function Alert({ type, message }) {
  if (!message) return null;
  return <p className={`demo-alert alert-${type}`} role="status">{message}</p>;
}

function ConditionalDemo() {
  const [user, setUser] = useState(null);

  return (
    <div className="conditional-demo">
      <Alert type="error" message={user ? '' : 'You are signed out.'} />
      <Alert type="success" message={user ? 'You are signed in.' : ''} />
      <div className="welcome-panel">
        {user && <p>Welcome back, {user.name}.</p>}
        {!user && <p>Sign in to see your dashboard.</p>}
        <button
          className="filter-button"
          type="button"
          onClick={() => setUser(user ? null : { name: 'Xushnudbek' })}
        >
          {user ? 'Sign out' : 'Sign in'}
        </button>
      </div>
    </div>
  );
}

export default ConditionalDemo;
