import React, { MouseEventHandler } from 'react';
import './skybox.scss';

export const Skybox = () => (
	<div className="skybox">
		<div className="cube">
			<div className="side front"></div>
			<div className="side back"></div>
			<div className="side right"></div>
			<div className="side left"></div>
			<div className="side top"></div>
			<div className="side bottom"></div>
		</div>
	</div>

)
