import Header from '../components/layout/Header';
import AdvancedFilters from '../features/filters/components/AdvancedFilters';
import KanbanBoard from '../features/kanban/components/KanbanBoard';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <AdvancedFilters />
        <KanbanBoard />
      </main>
    </div>
  );
};

export default HomePage;
