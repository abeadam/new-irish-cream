'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bowerInstall: {
			install: {
				options: {
					targetDir: './vendors',
					cleanBowerDir: true,
					cleanTargetDir: true,
					layout: function(type, comp) {
						debugger;
						if	(type === 'css'|| type === 'less') {
							return 'vendor-css';
						} else if (type === 'js' ) {
							return 'vendor-js';
						} else {
							return 'vendor-other';
						}
					}
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-bower-task');
 
  	grunt.renameTask("bower", "bowerInstall");

  	// Default task.
  	grunt.registerTask('default', ['bowerInstall']);
};


