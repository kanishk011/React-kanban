import { useState } from 'react';
import { Cross2Icon, PlusIcon } from '@radix-ui/react-icons';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  addFilterCondition,
  removeFilterCondition,
  setGlobalOperation,
  clearAllFilters,
} from '../filterSlice';
import type { FilterCondition, FilterOperation } from '../../../types';
import { assignees, tags } from '../../../data/dummyTasks';
import './AdvancedFilters.css';

const AdvancedFilters = () => {
  const dispatch = useAppDispatch();
  const filterState = useAppSelector((state) => state.filters);

  const [newCondition, setNewCondition] = useState<{
    field: 'assignee' | 'tag';
    operation: FilterOperation;
    selectedValues: string[];
  }>({
    field: 'assignee',
    operation: 'OR',
    selectedValues: [],
  });

  const handleAddCondition = () => {
    if (newCondition.selectedValues.length === 0) return;

    const condition: FilterCondition = {
      id: Date.now().toString(),
      field: newCondition.field,
      operation: newCondition.operation,
      values: newCondition.selectedValues,
    };

    dispatch(addFilterCondition(condition));

    // Reset
    setNewCondition({
      field: 'assignee',
      operation: 'OR',
      selectedValues: [],
    });
  };

  const handleRemoveCondition = (id: string) => {
    dispatch(removeFilterCondition(id));
  };

  const handleValueToggle = (value: string) => {
    setNewCondition((prev) => {
      const isSelected = prev.selectedValues.includes(value);
      return {
        ...prev,
        selectedValues: isSelected
          ? prev.selectedValues.filter((v) => v !== value)
          : [...prev.selectedValues, value],
      };
    });
  };

  const getAvailableValues = () => {
    return newCondition.field === 'assignee' ? assignees : tags;
  };

  const getOperationLabel = (operation: FilterOperation): string => {
    switch (operation) {
      case 'AND':
        return 'Matches all';
      case 'OR':
        return 'Matches any';
      case 'NOT':
        return 'Excludes';
      default:
        return operation;
    }
  };

  return (
    <div className="filters-container">
      <div className="filters-header">
        <h2 className="filters-title">Advanced Filters</h2>
        {filterState.conditions.length > 0 && (
          <button
            className="button button-text"
            onClick={() => dispatch(clearAllFilters())}
          >
            Clear All
          </button>
        )}
      </div>

      {/* Global Operation */}
      {filterState.conditions.length > 1 && (
        <div className="global-operation">
          <label className="filter-label">Match tasks that satisfy:</label>
          <div className="operation-toggle">
            <button
              className={`toggle-button ${filterState.globalOperation === 'AND' ? 'active' : ''}`}
              onClick={() => dispatch(setGlobalOperation('AND'))}
            >
              All conditions
            </button>
            <button
              className={`toggle-button ${filterState.globalOperation === 'OR' ? 'active' : ''}`}
              onClick={() => dispatch(setGlobalOperation('OR'))}
            >
              Any condition
            </button>
          </div>
        </div>
      )}

      {/* Active Filters */}
      {filterState.conditions.length > 0 && (
        <div className="active-filters">
          <label className="filter-label">Active Filters:</label>
          <div className="filter-chips">
            {filterState.conditions.map((condition, index) => (
              <div key={condition.id} className="filter-condition-wrapper">
                {index > 0 && (
                  <span className="filter-operator">{filterState.globalOperation}</span>
                )}
                <div className="filter-chip">
                  <span className="chip-content">
                    <span className="chip-field">{condition.field}</span>
                    <span className="chip-operation" data-operation={condition.operation}>
                      {getOperationLabel(condition.operation)}
                    </span>
                    <span className="chip-values">
                      {condition.values.join(', ')}
                    </span>
                  </span>
                  <button
                    className="chip-remove"
                    onClick={() => handleRemoveCondition(condition.id)}
                    aria-label="Remove filter"
                  >
                    <Cross2Icon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add New Filter */}
      <div className="add-filter-section">
        <label className="filter-label">Add Filter Condition:</label>

        <div className="filter-builder">
          <div className="filter-builder-row">
            <select
              className="filter-select"
              value={newCondition.field}
              onChange={(e) =>
                setNewCondition({
                  ...newCondition,
                  field: e.target.value as 'assignee' | 'tag',
                  selectedValues: [],
                })
              }
            >
              <option value="assignee">Assignee</option>
              <option value="tag">Tag</option>
            </select>

            <select
              className="filter-select"
              value={newCondition.operation}
              onChange={(e) =>
                setNewCondition({
                  ...newCondition,
                  operation: e.target.value as FilterOperation,
                })
              }
            >
              <option value="OR">Matches any</option>
              <option value="AND">Matches all</option>
              <option value="NOT">Excludes</option>
            </select>
          </div>

          <div className="value-selector">
            {getAvailableValues().map((value) => (
              <label key={value} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={newCondition.selectedValues.includes(value)}
                  onChange={() => handleValueToggle(value)}
                  className="checkbox-input"
                />
                <span className="checkbox-text">{value}</span>
              </label>
            ))}
          </div>

          <button
            className="button button-primary button-sm"
            onClick={handleAddCondition}
            disabled={newCondition.selectedValues.length === 0}
          >
            <PlusIcon />
            Add Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFilters;
