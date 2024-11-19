import { render, screen } from "@testing-library/react";
import { within } from "@testing-library/dom";
import TodoTable from "../todo-page.tsx";
import {Todo} from "../todo-service.ts";
import {expect} from "vitest";

let mockTodos: Todo[];

vi.mock('./TodoItem', () => ({ rowId, rowDescription, rowAssigned }) => (
    <tr>
        <th>{rowId}</th>
        <td>{rowDescription}</td>
        <td>{rowAssigned}</td>
    </tr>
));

describe("Todo Page Tests", () => {
    describe("should render todo table", () => {
        beforeEach(() => {
            mockTodos = [
                {rowId: 1, rowDescription: "feed cat", rowAssigned: "Curt"},
                {rowId: 2, rowDescription: "make coffee", rowAssigned: "Curt"}
            ]
            render(<TodoTable todos={mockTodos} deleteTodos={vi.fn()} editTodos={vi.fn()} />);
        })
        it("should show list header", () => {
//            screen.logTestingPlaygroundURL();
            const table = screen.getByLabelText('todo table');
            const rows = within(table).getAllByRole('row');
            expect(rows).toHaveLength(mockTodos.length + 1);

            const firstRow = rows[1];
            const firstCell = within(firstRow).getByRole('cell', {name: /feed cat/i});

            expect(table).toBeInTheDocument();
            expect(firstCell).toBeInTheDocument();
        })
    })
})