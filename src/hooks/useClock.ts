import React from 'react';

const useClock = () => {
	const [now, setNow] = React.useState('--:--:--');

	React.useEffect(() => {
		const tick = () => setNow(new Date().toLocaleTimeString('en-GB', { hour12: false }));
		tick();
		const id = window.setInterval(tick, 1000);
		return () => window.clearInterval(id);
	}, []);

	return now;
};

export default useClock;
