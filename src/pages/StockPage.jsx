import { onMount, createSignal, For, createMemo } from 'solid-js';

import Layout from '../layouts/Layout';

const TICKER = 'sp500';

export default function StockPredictorPage() {
	const currentDate = new Date();
	const todayString = currentDate.toISOString().slice(0, 10);
	const todayDateTime = new Date(todayString + 'T00:00:00').getTime();

	const [displayDates, setDisplayDates] = createSignal([]);
	const [data, setData] = createSignal([]);

	onMount(async () => {
		const response = await fetch(`/scripts/stock.php?ticker=${TICKER}`);
		const result = await response.json();
		setData(result[TICKER]);

		for (let i = 1; i < 4; i++) {
			const nextDate = new Date(currentDate);
			nextDate.setDate(currentDate.getDate() + i);
			setDisplayDates(prev => [...prev, nextDate.toISOString().slice(0, 10)]);
		}
	});

	// Utility function to get datetime timestamp for a date string
	const getDateTimeAt = (dateStr, timeOfDay = 'start') => {
		const time = timeOfDay === 'start' ? 'T00:00:00' : 'T23:59:59';
		return new Date(dateStr + time).getTime();
	};

	// Find data point by date range
	const findDataPointInRange = (startTime, endTime) => {
		return data().find(item => {
			const itemTime = new Date(item.timestamp).getTime();
			return itemTime >= startTime && itemTime <= endTime;
		});
	};

	// Find most recent data point before a specific time
	const findMostRecentBefore = targetTime => {
		for (let i = data().length - 1; i >= 0; i--) {
			const itemTime = new Date(data()[i].timestamp).getTime();
			if (itemTime < targetTime) {
				return data()[i];
			}
		}
		return null;
	};

	// Get data point for a specific date (exact or before)
	const getValueForDate = targetDate => {
		const startTime = getDateTimeAt(targetDate, 'start');
		const endTime = getDateTimeAt(targetDate, 'end');

		// Try exact date match first
		const exactMatch = findDataPointInRange(startTime, endTime);
		if (exactMatch) return exactMatch;

		// Fall back to most recent before this date
		return findMostRecentBefore(startTime);
	};

	// Get today's value (most recent on or before today)
	const todayValue = createMemo(() => {
		for (let i = data().length - 1; i >= 0; i--) {
			const itemTime = new Date(data()[i].timestamp).getTime();
			if (itemTime <= todayDateTime) {
				return data()[i];
			}
		}
		return null;
	});

	// Calculate change from previous value
	const getChangeFromPrevious = (targetDate, currentValue) => {
		const currentDataPoint = getValueForDate(targetDate);
		if (!currentDataPoint) return null;

		const currentIndex = data().indexOf(currentDataPoint);
		if (currentIndex <= 0) return null;

		// Find previous value
		for (let i = currentIndex - 1; i >= 0; i--) {
			if (data()[i] && data()[i].value) {
				const previousValue = parseFloat(data()[i].value);
				const current = parseFloat(currentValue);
				const change = current - previousValue;

				return {
					change,
					percentChange: (change / previousValue) * 100,
					isPositive: change >= 0,
				};
			}
		}
		return null;
	};

	// Format date for display
	const formatDate = dateStr => {
		const date = new Date(dateStr + 'T00:00:00');
		return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
	};

	// Tailwind class sets
	const cardClasses =
		'dark:bg-zinc-900 bg-zinc-100 dark:border-zinc-800 border-zinc-200 border rounded-lg p-6 shadow-lg dark:hover:shadow-xl hover:shadow-lg transition-shadow';
	const labelClasses = 'dark:text-zinc-400 text-zinc-600 text-sm mb-1';
	const valueClasses = 'text-4xl font-bold dark:text-white text-zinc-900';
	const positiveClasses = 'dark:bg-green-950 bg-green-100 dark:border dark:border-green-800';
	const negativeClasses = 'dark:bg-red-950 bg-red-100 dark:border dark:border-red-800';

	const ChangeIndicator = ({ changeInfo }) => {
		if (!changeInfo) {
			return (
				<div className="p-3 rounded-md dark:bg-zinc-800 bg-zinc-200">
					<p className="dark:text-zinc-400 text-zinc-600 text-xs">No previous data</p>
				</div>
			);
		}

		const { isPositive, change, percentChange } = changeInfo;
		const bgClass = isPositive ? positiveClasses : negativeClasses;
		const textColor = isPositive ? 'dark:text-green-400 text-green-600' : 'dark:text-red-400 text-red-600';
		const textColorLight = isPositive ? 'dark:text-green-300 text-green-700' : 'dark:text-red-300 text-red-700';

		return (
			<div className={`p-3 rounded-md ${bgClass}`}>
				<p className="dark:text-zinc-400 text-zinc-600 text-xs mb-1">Change from Previous</p>
				<div className="flex items-center gap-2">
					<span className={`text-2xl font-bold ${textColor}`}>{isPositive ? '↑' : '↓'}</span>
					<div>
						<p className={`text-sm font-semibold ${textColor}`}>
							{isPositive ? '+' : ''}
							{change.toFixed(2)}
						</p>
						<p className={`text-xs ${textColorLight}`}>
							{isPositive ? '+' : ''}
							{percentChange.toFixed(2)}%
						</p>
					</div>
				</div>
			</div>
		);
	};

	const PredictionCard = ({ date }) => {
		const dataPoint = getValueForDate(date);
		const changeInfo = dataPoint && getChangeFromPrevious(date, dataPoint.value);

		return (
			<div className={cardClasses}>
				<div className="mb-4">
					<p className="dark:text-zinc-400 text-zinc-600 text-sm font-semibold uppercase tracking-wider">
						{formatDate(date)}
					</p>
					<p className="dark:text-zinc-500 text-zinc-500 text-xs">{date}</p>
				</div>

				{dataPoint ? (
					<>
						<div className="mb-6">
							<p className={labelClasses}>Predicted Value</p>
							<p className={valueClasses}>{parseFloat(dataPoint.value).toFixed(2)}</p>
						</div>
						<ChangeIndicator changeInfo={changeInfo} />
					</>
				) : (
					<div className="p-4 rounded-md dark:bg-zinc-800 bg-zinc-200 text-center">
						<p className="dark:text-zinc-400 text-zinc-600 text-sm">No prediction available</p>
					</div>
				)}
			</div>
		);
	};

	const template = (
		<div class="flex flex-col min-h-[calc(100vh-16rem)]">
			<div class="flex-1">
				<div class="mb-12">
					<h1 class="text-4xl font-bold mb-2 dark:text-white text-zinc-900">
						{TICKER.toUpperCase()} Predictions
					</h1>
					<p class="dark:text-zinc-400 text-zinc-600">
						Today:{' '}
						{currentDate.toLocaleDateString('en-US', {
							weekday: 'long',
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</p>
				</div>

				{todayValue() && (
					<div class="mb-12 p-8 rounded-lg dark:bg-zinc-900 bg-zinc-100 border dark:border-zinc-800 border-zinc-200 flex flex-col items-center justify-center text-center">
						<p class="dark:text-zinc-400 text-zinc-600 text-sm font-semibold uppercase tracking-wider mb-4">
							Current Value
						</p>
						<p class="text-6xl font-bold dark:text-white text-zinc-900 mb-3">
							{parseFloat(todayValue().value).toFixed(2)}
						</p>
						<p class="dark:text-zinc-500 text-zinc-500 text-xs">{todayValue().timestamp}</p>
					</div>
				)}

				<h2 class="text-2xl font-bold mb-6 dark:text-white text-zinc-900">3-Day Predictions</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
					<For each={displayDates()}>{date => <PredictionCard date={date} />}</For>
				</div>
			</div>
		</div>
	);

	return <Layout slot={template} />;
}
