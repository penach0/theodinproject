import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SubmissionTitle from '../submission-title';

const submission = {
	lesson_path: 'test_path',
	lesson_title: 'Test Title',
	user_name: 'TestUser',
};

describe('Dashboard view true', () => {
	it('shows the lesson title in dashboard view', () => {
		render(<SubmissionTitle submission={submission} isDashboardView={true} />);
		expect(screen.getByText('Test Title')).toBeInTheDocument();
	});
	it('has a link to the project in dashboard view', () => {
		render(<SubmissionTitle submission={submission} isDashboardView={true} />);
		expect(screen.getByText('Test Title')).toHaveAttribute('href', 'test_path');
	});
});

describe('Dashboard view false', () => {
	it('returns the username if not in dashboard mode', () => {
		render(<SubmissionTitle submission={submission} />);
		expect(screen.getByText('TestUser')).toBeInTheDocument();
	});
});
