async function loadPlugins (progress = () => {}) {
	var plugins = [];
	var plugin;

	progress ('console', 1, 36);
	plugin = await import ('../plugins/console/index.js');
	plugins.push ({name:'console', consumes:["workspace","xterm"], provides:["console"], setup: plugin.setup || plugin.default || plugin});
	progress ('dashboard', 2, 36);
	plugin = await import ('../plugins/dashboard/index.js');
	plugins.push ({name:'dashboard', consumes:["workspace","projects"], provides:["dashboard"], setup: plugin.setup || plugin.default || plugin});
	progress ('dashboard.graph.extra', 3, 36);
	plugin = await import ('../plugins/dashboard.graph.extra/index.js');
	plugins.push ({name:'dashboard.graph.extra', consumes:["workspace","dashboard"], provides:["dashboard_graph_extra"], setup: plugin.setup || plugin.default || plugin});
	progress ('dashboard.graph.gauge', 4, 36);
	plugin = await import ('../plugins/dashboard.graph.gauge/index.js');
	plugins.push ({name:'dashboard.graph.gauge', consumes:["workspace","dashboard"], provides:["dashboard_graph_gauge"], setup: plugin.setup || plugin.default || plugin});
	progress ('dashboard.graph.line', 5, 36);
	plugin = await import ('../plugins/dashboard.graph.line/index.js');
	plugins.push ({name:'dashboard.graph.line', consumes:["workspace","dashboard"], provides:["dashboard_graph_line"], setup: plugin.setup || plugin.default || plugin});
	progress ('dashboard.graph.slider', 6, 36);
	plugin = await import ('../plugins/dashboard.graph.slider/index.js');
	plugins.push ({name:'dashboard.graph.slider', consumes:["workspace","dashboard"], provides:["dashboard_graph_slider"], setup: plugin.setup || plugin.default || plugin});
	progress ('dashboard.graph.speedometer', 7, 36);
	plugin = await import ('../plugins/dashboard.graph.speedometer/index.js');
	plugins.push ({name:'dashboard.graph.speedometer', consumes:["workspace","dashboard"], provides:[], setup: plugin.setup || plugin.default || plugin});
	progress ('dashboard.graph.switch', 8, 36);
	plugin = await import ('../plugins/dashboard.graph.switch/index.js');
	plugins.push ({name:'dashboard.graph.switch', consumes:["workspace","dashboard"], provides:[], setup: plugin.setup || plugin.default || plugin});
	progress ('dashboard.graph.thermometer', 9, 36);
	plugin = await import ('../plugins/dashboard.graph.thermometer/index.js');
	plugins.push ({name:'dashboard.graph.thermometer', consumes:["workspace","dashboard"], provides:[], setup: plugin.setup || plugin.default || plugin});
	progress ('dashboard.graph.vumeter', 10, 36);
	plugin = await import ('../plugins/dashboard.graph.vumeter/index.js');
	plugins.push ({name:'dashboard.graph.vumeter', consumes:["workspace","dashboard"], provides:[], setup: plugin.setup || plugin.default || plugin});
	progress ('device.wyapp', 11, 36);
	plugin = await import ('../plugins/device.wyapp/index.js');
	plugins.push ({name:'device.wyapp', consumes:["workspace","events","console","projects","shell","notebook","dashboard"], provides:["device_wyapp"], setup: plugin.setup || plugin.default || plugin});
	progress ('device.wyapp.beagleboneblack', 12, 36);
	plugin = await import ('../plugins/device.wyapp.beagleboneblack/index.js');
	plugins.push ({name:'device.wyapp.beagleboneblack', consumes:["device_wyapp","workspace","events"], provides:[], setup: plugin.setup || plugin.default || plugin});
	progress ('device.wyapp.raspberrypi', 13, 36);
	plugin = await import ('../plugins/device.wyapp.raspberrypi/index.js');
	plugins.push ({name:'device.wyapp.raspberrypi', consumes:["device_wyapp","workspace","events","editor_visual"], provides:[], setup: plugin.setup || plugin.default || plugin});
	progress ('device.wyapp.udooneo', 14, 36);
	plugin = await import ('../plugins/device.wyapp.udooneo/index.js');
	plugins.push ({name:'device.wyapp.udooneo', consumes:["device_wyapp","workspace","events"], provides:[], setup: plugin.setup || plugin.default || plugin});
	progress ('device.wyapp.websocket', 15, 36);
	plugin = await import ('../plugins/device.wyapp.websocket/index.js');
	plugins.push ({name:'device.wyapp.websocket', consumes:["workspace","settings","device_wyapp"], provides:[], setup: plugin.setup || plugin.default || plugin});
	progress ('documentation.resistorcolorcodes', 16, 36);
	plugin = await import ('../plugins/documentation.resistorcolorcodes/index.js');
	plugins.push ({name:'documentation.resistorcolorcodes', consumes:["workspace"], provides:[], setup: plugin.setup || plugin.default || plugin});
	progress ('events', 17, 36);
	plugin = await import ('../plugins/events/index.js');
	plugins.push ({name:'events', consumes:[], provides:["events"], setup: plugin.setup || plugin.default || plugin});
	progress ('filesystem', 18, 36);
	plugin = await import ('../plugins/filesystem/index.js');
	plugins.push ({name:'filesystem', consumes:[], provides:["filesystem"], setup: plugin.setup || plugin.default || plugin});
	progress ('filesystem.web', 19, 36);
	plugin = await import ('../plugins/filesystem.web/index.js');
	plugins.push ({name:'filesystem.web', consumes:["filesystem"], provides:[], setup: plugin.setup || plugin.default || plugin});
	progress ('language.javascript', 20, 36);
	plugin = await import ('../plugins/language.javascript/index.js');
	plugins.push ({name:'language.javascript', consumes:["workspace","projects"], provides:[], setup: plugin.setup || plugin.default || plugin});
	progress ('language.python', 21, 36);
	plugin = await import ('../plugins/language.python/index.js');
	plugins.push ({name:'language.python', consumes:["workspace","projects"], provides:[], setup: plugin.setup || plugin.default || plugin});
	progress ('language.shell', 22, 36);
	plugin = await import ('../plugins/language.shell/index.js');
	plugins.push ({name:'language.shell', consumes:["workspace","projects"], provides:[], setup: plugin.setup || plugin.default || plugin});
	progress ('language.visual', 23, 36);
	plugin = await import ('../plugins/language.visual/index.js');
	plugins.push ({name:'language.visual', consumes:["workspace","projects"], provides:[], setup: plugin.setup || plugin.default || plugin});
	progress ('language.visual.libwyliodrin', 24, 36);
	plugin = await import ('../plugins/language.visual.libwyliodrin/index.js');
	plugins.push ({name:'language.visual.libwyliodrin', consumes:["workspace","projects","editor_visual"], provides:[], setup: plugin.setup || plugin.default || plugin});
	progress ('language.visual.wyapp', 25, 36);
	plugin = await import ('../plugins/language.visual.wyapp/index.js');
	plugins.push ({name:'language.visual.wyapp', consumes:["editor_visual"], provides:[], setup: plugin.setup || plugin.default || plugin});
	progress ('language.visual.wyliozero', 26, 36);
	plugin = await import ('../plugins/language.visual.wyliozero/index.js');
	plugins.push ({name:'language.visual.wyliozero', consumes:["workspace","projects","editor_visual"], provides:[], setup: plugin.setup || plugin.default || plugin});
	progress ('notebook', 27, 36);
	plugin = await import ('../plugins/notebook/index.js');
	plugins.push ({name:'notebook', consumes:["workspace","projects","filesystem"], provides:["notebook"], setup: plugin.setup || plugin.default || plugin});
	progress ('pinlayout', 28, 36);
	plugin = await import ('../plugins/pinlayout/index.js');
	plugins.push ({name:'pinlayout', consumes:["workspace"], provides:["pin_layout"], setup: plugin.setup || plugin.default || plugin});
	progress ('projects', 29, 36);
	plugin = await import ('../plugins/projects/index.js');
	plugins.push ({name:'projects', consumes:["workspace","xterm","filesystem","settings"], provides:["projects"], setup: plugin.setup || plugin.default || plugin});
	progress ('projects.editor.ace', 30, 36);
	plugin = await import ('../plugins/projects.editor.ace/index.js');
	plugins.push ({name:'projects.editor.ace', consumes:["workspace","projects"], provides:[], setup: plugin.setup || plugin.default || plugin});
	progress ('projects.editor.visual', 31, 36);
	plugin = await import ('../plugins/projects.editor.visual/index.js');
	plugins.push ({name:'projects.editor.visual', consumes:["workspace","projects"], provides:["editor_visual"], setup: plugin.setup || plugin.default || plugin});
	progress ('settings', 32, 36);
	plugin = await import ('../plugins/settings/index.js');
	plugins.push ({name:'settings', consumes:["filesystem"], provides:["settings"], setup: plugin.setup || plugin.default || plugin});
	progress ('shell', 33, 36);
	plugin = await import ('../plugins/shell/index.js');
	plugins.push ({name:'shell', consumes:["workspace","xterm"], provides:["shell"], setup: plugin.setup || plugin.default || plugin});
	progress ('system.browser', 34, 36);
	plugin = await import ('../plugins/system.browser/index.js');
	plugins.push ({name:'system.browser', consumes:[], provides:["system"], setup: plugin.setup || plugin.default || plugin});
	progress ('workspace', 35, 36);
	plugin = await import ('../plugins/workspace/index.js');
	plugins.push ({name:'workspace', consumes:["system"], provides:["workspace"], setup: plugin.setup || plugin.default || plugin});
	progress ('xterm', 36, 36);
	plugin = await import ('../plugins/xterm/index.js');
	plugins.push ({name:'xterm', consumes:["workspace"], provides:["xterm"], setup: plugin.setup || plugin.default || plugin});
	return plugins;
}
module.exports.loadPlugins = loadPlugins;