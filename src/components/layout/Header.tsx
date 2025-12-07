import CreateTaskForm from '../../features/kanban/components/CreateTaskForm';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="header-title">Kanban Board</h1>
          <p className="header-subtitle">Manage your tasks efficiently</p>
        </div>
        <div className="header-right">
          <CreateTaskForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
