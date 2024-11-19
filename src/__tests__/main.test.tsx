import { it, expect, describe } from 'vitest';
import {render, screen} from "@testing-library/react";
import App from "../App.tsx";
import React from "react";

describe('Main tests', () => {
    it('should render App', () => {
        render(<App/>)
        expect(screen.getByRole('heading', {name: /Your Todos/i})).toBeVisible();
        expect(1).toBeTruthy();
    })
})
