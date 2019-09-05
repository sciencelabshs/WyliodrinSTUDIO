import os from 'os';
import fs, { truncateSync } from 'fs-extra';
import path from 'path';
var $ = require ('jquery'); //temp
import { remote } from 'electron';
const dialog = remote.dialog;
let studio = null;

let filesystem_real = {
	getDefaultFolder ()
	{
		return path.join(this.getUserFolder(), 'WyliodrinSTUDIO');
	},
	getUserFolder ()
	{
		return os.homedir ();
	},
	getTemporaryFolder ()
	{
		return os.tmpdir ();
	},
	getSettingsFolder ()
	{
		return process.env.WYLIDORIN_STUDIO_SETTINGS || path.join (this.getUserFolder(), '.wyliodrinstudio');
	},
	pathExists: fs.pathExists,
	mkdirp: fs.mkdirp,
	writeFile: fs.writeFile,
	remove: fs.remove,
	copy: fs.copy,
	readFile: fs.readFile,
	createWriteStream: fs.createWriteStream,
	readdir: fs.readdir,
	rename: fs.rename,
	async isFile(path)
	{
		let stats =(await fs.lstat(path));
		if(stats) {
			return stats.isFile();
		} else {
			return false;
		}
	},
	async isDirectory(path)
	{
		let stats =(await fs.lstat(path));
		if(stats) {
			return stats.isDirectory();
		} else {
			return false;
		}
	},
	async getSize(path)
	{
		let stats =(await fs.lstat(path));
		if(stats) {
			return stats.size;
		} else {
			return 0;
		}
	},
	async lastModified(path)
	{
		let stats =(await fs.lstat(path));
		if(stats) {
			return stats.mtime;
		} else {
			return false;
		}
	},
	openSaveDialog() {
		const options = {
			title:'Select a project to import',
			defaultPath: this.getDefaultFolder(),
			filters: [
				{name:'imports', extensions: ['zip','wylioapp']}
			]
		};
		return dialog.showSaveDialog(null, options);
	},
	openLoadDialog() {
		const options = {
			title:'Select a project to import',
			defaultPath: this.getDefaultFolder(),
			filters: [
				{name:'imports', extensions: ['zip','wylioapp']}
			]
		};
		return dialog.showOpenDialog(null, options)[0];

	},
	
};

export default function setup(options, imports, register) {
	studio = imports;
	studio.filesystem.registerFileSystem('fs', filesystem_real);
	register(null, {});
}