import React from 'react';

export default function Privacy() {
	return (
		<div
			style={{
				padding: '10px',
				margin: '20px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'flex-start',
			}}
			className="text-bp-light-100"
		>
			<strong>Privacy Policy</strong>
			<br/>
			<strong>Effective Date: 2025-08-20</strong>
			<br/>
			<p>
				BADERproductions ("we," "our," or "us") values your privacy. We built The New York Times Unlocker Chrome extension as an Open Source project.<br/>This Privacy Policy explains how we handle user information when you use our Chrome extension.
			</p>
			<br/>
			<strong>Information We Collect</strong>
			<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
				<br/>
				<li><strong>No Personal Data Collection:</strong> Our extension does not collect, store, or share any personally identifiable information.</li>
				<li><strong>No Account Required:</strong> You do not need to create an account or provide any personal details to use the extension.</li>
				<li><strong>Local-Only Data:</strong> Any settings or preferences you adjust in the extension are stored locally in your browser and are not transmitted to us.</li>
			</ul>
			<strong>Permissions</strong>
			<p>Our extension may request certain browser permissions (such as access to webpages you visit) solely for the purpose of providing accessibility features. We do not use these permissions to track, collect, or transmit your browsing activity.</p>
			<br/>
			<strong>Data Sharing</strong>
			<ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
				<br/>
				<li>We do not sell, trade, or rent your personal information.</li>
				<li>We do not share any data with third parties.</li>
			</ul>
			<strong>Third-Party Services</strong>
			<p>Our extension does not use third-party analytics, tracking tools, or advertising networks.</p>
			<br/>
			<strong>Children’s Privacy</strong>
			<p>Our extension does not target or knowingly collect information from children under the age of 13.</p>
			<br/>
			<strong>Changes to This Policy</strong>
			<p>We may update this Privacy Policy from time to time. If significant changes are made, we will update the “Effective Date” at the top of this page.</p>
			<br/>
			<strong>Contact Us</strong>
			<p>If you have questions or concerns about this Privacy Policy, please contact us at: <a href="mailto:contact@baderproductions.com">contact@baderproductions.com</a>.</p>
		</div>
	);
}
