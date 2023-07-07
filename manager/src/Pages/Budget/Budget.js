import { Button, Container, Stack } from 'react-bootstrap';
import BudgetCard from './BudgetCard';

export default function Budget() {
	return (
		<Container className="my-4">
			<Stack direction="horizontal" gap="2" className="mb-4">
				<h1 className="me-auto">Budgets</h1>
				<Button variant="primary">Add Budget</Button>
				<Button variant="outline-primary">Add Expenses</Button>
			</Stack>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill, minimax(300px, 1fr))',
					gap: '1rem',
					alignItems: 'flex-start',
				}}
			>
				<BudgetCard name="Entertainment" amount={1200} max={1000}/>
			</div>
		</Container>
	);
} 
