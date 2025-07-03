
import gulp from 'gulp';
import zip from 'gulp-zip';
import { deleteAsync } from 'del';

gulp.task('clean', async () => await deleteAsync(['languages', 'bundled']));

export const bundle = () => gulp.src([
	'**/*',
	'!bundled/**',
	'!node_modules/**',
	'!src/**',
	'!.eslintrc.js',
	'!.gitignore',
	'!gulpfile.mjs',
	'!package.json',
	'!package-lock.json',
	'!readme.md',
	'!todo.txt',
	'!webpack.config.js',
	'!README.md'
]).pipe(
	zip('info-cards.zip')
).pipe(
	gulp.dest('bundled')
);