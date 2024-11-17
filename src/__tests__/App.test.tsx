import App from "../App.tsx";
import {render, screen} from "@testing-library/react";
import React from "react";
import {describe, expect, it} from "vitest";

describe('App', () => {
    it('should render the app', () => {
        render(<App/>);
        expect(screen.getByRole('heading', {name: /your todos/i})).toBeVisible()
    })
})