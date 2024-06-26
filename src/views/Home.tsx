import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';

const Home = () => {
	return (
		<div className="bg-bp-dark-200">
			<Hero className="illustration-section-01" />
			<FeaturesSplit
				invertMobile
				topDivider
				imageFill
				className="illustration-section-02"
			/>
			<FeaturesTiles />
		</div>
	);
};

export default Home;
