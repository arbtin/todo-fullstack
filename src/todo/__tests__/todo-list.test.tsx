import { render, screen } from '@testing-library/react'
import { it, expect, describe } from 'vitest'
import { within } from "@testing-library/dom";
import TodoItem from '../todo-item'
import { Todo } from '../todo-service';

let mockTodos: Todo[];

beforeEach(() => {
    mockTodos = [
        {id: 1, description: "feed cat", assigned: "Curt"},
    ]
})

describe('Todo List Tests', () => {
    beforeEach(() => {
        render(<TodoItem todos={mockTodos} />);
    })
    it('it should show one list of items', () => {
        const row = screen.getAllByRole('row')[0];
        const firstCell = within(row).getByRole('cell', {name: /1/i});
        expect(firstCell).toBeInTheDocument();
    })
    it("should show the todo list values for the first todo", () => {
        expect(screen.getByText(/1/i)).toBeVisible();
        expect(screen.getByText(/feed cat/i)).toBeVisible();
        expect(screen.getByText(/Curt/i)).toBeVisible();
        expect(screen.getAllByRole('button', {name: /edit/i})[0]).toBeVisible();
        expect(screen.getAllByRole('button', {name: /delete/i})[0]).toBeVisible();
    })
})