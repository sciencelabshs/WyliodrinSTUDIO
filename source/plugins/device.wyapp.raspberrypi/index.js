var studio = null;

let firmata_blocks = require ('./visual/definitions_pyfirmata.js');
let firmata_code = require ('./visual/code_pyfirmata.js');

let picamera_blocks = require ('./visual/definitions_picamera.js');
let picamera_code = require ('./visual/code_picamera.js');

import toolbox from 'raw-loader!./visual/toolbox.xml';

export function setup (options, imports, register)
{
	studio = imports;

	imports.events.on ('ready', (imports) => 
	{
		// add optional imports
		studio = imports;

		/* Register Pin Layout */
		if (studio.pin_layout)
		{
			studio.pin_layout.registerPinLayout ('wyapp', 'raspberrypi', 'plugins/device.wyapp.raspberrypi/data/img/pins-raspberrypi.png');
		}
		else
		{
			studio.workspace.warn ('device.wyapp.raspberrypi: pin_layout plugin is not available');
		}
	});

	let raspberrypi = {
		/** 
		 * Device Icon 
		*/
		iconURL ()
		{
			return 'plugins/device.wyapp.raspberrypi/data/img/icon-raspberrypi.png';
		},

		/**
		 * Found a device, modify stuff (like icon)
		 * @param {Device} device 
		 */
		found (device)
		{
			device.icon = this.iconURL ();
			if (!device.description) device.description = 'Raspberry Pi';
		},

		/**
		 * Update a device, modify stuff
		 * @param {Device} device 
		 */
		update (device)
		{
			device.icon = this.iconURL ();
			if (!device.description) device.description = 'Raspberry Pi';
		},

		/**
		 * Modidify the project before run
		 * @param {Project} project - the project
		 */
		run (project)
		{
			project;
		}
	};

	/* Register Icon */
	studio.device_wyapp.registerBoard ('raspberrypi', raspberrypi);

	studio.editor_visual.registerBlocksDefinitions ('raspberrypi', [firmata_blocks, picamera_blocks], [firmata_code, picamera_code], toolbox, 
		{
			type: 'wyapp', 
			board: 'raspberrypi'
		}
	);

	register (null, {});
}