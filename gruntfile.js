
module.exports = function(grunt) {

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
			uglify: {
					my_target: {
						files: {
							'js/script.js': ['components/js/*.js']
						}
					} 
			} ,

		sass: {
		  dev: {
		    options: {
		      style: 'expanded',
		      sourcemap: 'none',
		    },
		    files: {
		      'css/main.css': 'components/sass/styles.scss'
		    }
		  }
		},

		watch: {
			options: {livereload: true},
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
			scripts: {
				files: ['**/*.js'],
				tasks: ['uglify']
			},
			html: {
					files: ['*html']
				}

		},

	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);

}