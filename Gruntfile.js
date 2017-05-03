module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    eslint: {
      options: {
        ignore: false,
      },
      target: [
        'app/**/*.js',
        'lib/**/*.js',
        'public/client/**/*.js',
        'test/**/*.js',
      ],
    },

    concat: {
      options: {
        separator: ';',
      },
      client: {
        src: ['public/client/**/*.js'],
        dest: 'public/dist/client.js',
      },
      clientlib: {
        src: [
          'public/lib/jquery.js',
          'public/lib/underscore.js',
          'public/lib/backbone.js',
          'public/lib/handlebars.js'
        ],
        dest: 'public/dist/lib.js',
      },
    },

    uglify: {
      client: {
        files: {
          'public/dist/client.min.js': ['public/dist/client.js'],
        },
      },
      clientlib: {
        files: {
          'public/dist/lib.min.js': ['public/dist/lib.js'],
        },
      },
    },

    cssmin: {
      target: {
        files: {
          'public/dist/style.min.css': ['public/style.css'],
        },
      },
    },

    mochaTest: {
      options: {
        reporter: 'nyan',
        bail: true,
      },
      normal: {
        src: ['test/**/*.js']
      },
    },

    gitpush: {
      prod: {
        options: {
          remote: 'prod'
        }
      }
    },

    nodemon: {
      dev: {
        script: 'server/index.js'
      }
    },

    watch: {
      eslint: {
        files: [
          'app/**/*.js',
          'lib/**/*.js',
          'public/client/**/*.js',
          'test/**/*.js',
        ],
        tasks: [
          'eslint',
        ],
      },

      // client: {
      //   files: ['public/client/**/*.js'],
      //   tasks: [
      //     'concat:client',
      //     'uglify:client',
      //   ],
      // },

      // clientlib: {
      //   files: ['public/lib/**/*.js'],
      //   tasks: [
      //     'concat:lib',
      //     'uglify:lib',
      //   ],
      // },

      // css: {
      //   files: ['public/*.css'],
      //   tasks: ['cssmin'],
      // },

      mochaTest: {
        files: [
          'server*.js',
          'app/**/*.js',
          'lib/**/*.js',
          'test/**/*.js',
        ],
        tasks: [
          'shell:wait',
          'mochaTest',
        ],
      },
    },

    shell: {
      wait: {
        command: 'sleep 3'
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-git');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-shell-spawn');
  grunt.loadNpmTasks('grunt-nodemon');

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('build', [
    'eslint',
    // 'concat',
    // 'uglify',
    // 'cssmin',
  ]);

  grunt.registerTask('test', [
    'mochaTest:normal'
  ]);

  grunt.registerTask('upload', function(n) {
    if (grunt.option('prod')) {
      grunt.task.run([ 'gitpush:prod' ]);
    }
  });

  grunt.registerTask('deploy', [
    'build',
    'test',
    'upload',
  ]);

  grunt.registerTask('dev', [
    'nodemon'
  ]);
};
