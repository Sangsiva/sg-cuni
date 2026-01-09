# Testing Guide

This document outlines the testing implementation for the sgCorpUni project, including frameworks used, types of tests, and steps to run them.

## Overview

The project employs a comprehensive testing strategy to ensure code quality, functionality, and reliability. Tests are written for both unit-level components and integration-level flows.

## Frameworks and Tools Used

- **Jest**: Primary test runner for executing tests, assertions, and mocking.
- **React Testing Library**: For testing React components by simulating user interactions and verifying rendered output.
- **MSW (Mock Service Worker)**: For mocking API requests in integration tests, allowing isolated testing of frontend-backend interactions.
- **@testing-library/jest-dom**: Extends Jest matchers for DOM assertions (e.g., `toBeInTheDocument`).

## Unit Tests

Unit tests focus on individual components in isolation.

### Example: HeroSection Component Test

- **File**: `components/__tests__/HeroSection.test.tsx`
- **Purpose**: Verifies the HeroSection component renders correctly with expected text and structure.
- **Implementation**:
  - Renders the component using `render` from React Testing Library.
  - Queries elements using `screen.getByText` or `screen.getByRole`.
  - Asserts presence and content of title, subtitle, and button.
- **Key Code**:
  ```tsx
  import { render, screen } from '@testing-library/react';
  import HeroSection from '../HeroSection';

  test('renders hero section with title and button', () => {
    render(<HeroSection />);
    expect(screen.getByText('Professional Corporate Uniforms & Sports T-Shirts')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /get a quote/i })).toBeInTheDocument();
  });
  ```

## Integration Tests

Integration tests verify interactions between components, forms, and API calls.

### Example: Contact Form Test

- **File**: `app/contact/__tests__/page.test.tsx`
- **Purpose**: Tests the full contact form submission flow, including validation, API interaction, and success/error states.
- **Implementation**:
  - Uses MSW to mock the `/api/contact` endpoint.
  - Simulates user input with `userEvent`.
  - Submits the form and checks for success message or error handling.
- **Key Code**:
  ```tsx
  import { render, screen, waitFor } from '@testing-library/react';
  import userEvent from '@testing-library/user-event';
  import Contact from '../page';
  import { server } from '../../../mocks/server';

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('submits form successfully', async () => {
    render(<Contact />);
    const companyInput = screen.getByLabelText(/company name/i);
    userEvent.type(companyInput, 'Test Co');
    // ... fill other fields
    const submitButton = screen.getByRole('button', { name: /submit enquiry/i });
    userEvent.click(submitButton);
    await waitFor(() => expect(screen.getByText('Enquiry submitted successfully!')).toBeInTheDocument());
  });
  ```

## Running Tests

### Prerequisites

Ensure all dependencies are installed:

```bash
npm install
```

### Run All Tests

Execute the test suite:

```bash
npm test
```

This runs Jest, which discovers and executes all `.test.tsx` files in `__tests__` directories.

### Test Output

- **Pass**: Indicates successful assertions.
- **Fail**: Shows detailed errors (e.g., missing elements, assertion failures).
- **Coverage**: Use `jest --coverage` for a coverage report (HTML generated in `coverage/` folder).

### Manual Test Execution

- For specific files: `npx jest path/to/test.file.tsx`
- Watch mode: `npm test -- --watch` for auto-re-running on changes.
- Verbose output: `npm test -- --verbose`

## End-to-End Testing

The current setup focuses on unit and integration tests. For true end-to-end (e2e) testing (e.g., browser automation), consider adding tools like Cypress or Playwright in the future.

To "test the project end-to-end" with existing tests:

1. Run unit tests for components.
2. Run integration tests for user flows.
3. Manually verify in browser: `npm run dev`, navigate pages, submit forms.

This ensures frontend logic and mocked API interactions work correctly.
