// NPM packages
const Matter = require('gray-matter');
const Got = require( 'got' );
const Globby = require( 'globby' );

// Local dependencies
const Fs = require( 'fs' ).promises;

// Settings
const SETTINGS = {
	dataFile: 'src/_data/data.json',
	projects: 'src/projects/*/index.md',
	githubApi: 'https://api.github.com/repos/',
	npmApi: 'https://api.npmjs.org/downloads/point/last-week/',
}


const FetchAll = async( url, ids ) => {
	try {
		const resolvedData = await Promise.all(
			ids.map( async( id ) => {
				return new Promise( async( resolve, reject ) => {
					try {
						const { body } = await Got( `${ url }${ id }`, { json: true });
						resolve( body );
					}
					catch( error ) {
						reject( error );
					}
				})
			})
		);

		return resolvedData;
	}
	catch( error ){
		throw new Error( error );
	}
}


const FindIds = async( idglob ) => {
	const files = await Globby([ idglob ]);

	const ids = await Promise.all(
		files.map( async( file ) => {
			try {
				const fileContents = await Fs.readFile( file, 'utf-8' );
				const { data } = Matter( fileContents );
				return {
					npm: data.npm,
					github: data.github,
				};
			}
			catch( error ){
				throw new Error( error );
			}
		})
	);

	return {
		githubRepos: ids.filter( id => id.github ).map( id => id.github ),
		npmPackages: ids.filter( id => id.npm ).map( id => id.npm ),
	}
}


( async() => {
	console.log( '🎾 Fetching data' );
	try {
		const { githubRepos, npmPackages } = await FindIds( SETTINGS.projects );

		const stars = {};
		const downloads = {};
		( await FetchAll( SETTINGS.npmApi, npmPackages ) )
			.forEach( package => downloads[ package.package ] = package.downloads );

		( await FetchAll( SETTINGS.githubApi, githubRepos ) )
			.forEach( repo => stars[ repo.full_name ] = repo.stargazers_count );

		const result = JSON.stringify({ stars, downloads }, null, 2 );

		await Fs.writeFile( SETTINGS.dataFile, result );
		console.log( `🤖 Generated ${ SETTINGS.dataFile }` );
	}
	catch( error ){
		console.error( error );
	}
})();

