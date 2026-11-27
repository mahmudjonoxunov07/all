import { useState } from 'react';

const filters = ['all', 'success', 'warning', 'info'];

function NotificationList({ notifications }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const visibleNotifications = activeFilter === 'all'
    ? notifications
    : notifications.filter(({ type }) => type === activeFilter);

  return (
    <>
      <div className="notification-controls" role="group" aria-label="Filter notifications">
        {filters.map((filter) => (
          <button
            className="notification-filter-button"
            type="button"
            key={filter}
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter === 'all' ? 'Show all' : filter}
          </button>
        ))}
        <span className="notification-count" aria-live="polite">
          {visibleNotifications.length} {visibleNotifications.length === 1 ? 'item' : 'items'}
        </span>
      </div>
      {visibleNotifications.length > 0 ? (
        <ul className="notification-list">
          {visibleNotifications.map(({ id, type, message }) => {
            const icon = type === 'success' ? '✅' : type === 'warning' ? '⚠️' : 'ℹ️';
            return (
              <li className={`notification notification-${type}`} key={id}>
                <span className="notification-icon" aria-hidden="true">{icon}</span>
                <span>{message}</span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="notification-empty" role="status">No notifications to show.</p>
      )}
    </>
  );
}

export default NotificationList;
