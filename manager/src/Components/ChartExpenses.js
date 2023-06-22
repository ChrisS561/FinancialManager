import React from 'react';
import ChartBar from './ChartBar';
import './ComponentsCSS/Chart.css';

export default function ChartExpenses(props) {
	const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
	const totalMaxNum = Math.max(...dataPointValues);

	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaxNum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
}