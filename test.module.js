"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "stro",
			"path": "stro/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/stro.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"stro": "stro"
		}
	@end-include
*/

const assert = require( "should/as-function" );

//: @server:
const stro = require( "./stro.js" );
//: @end-server

//: @client:
const stro = require( "./stro.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "stro", ( ) => {

	describe( "`stro( 'hello' )`", ( ) => {
		it( "should return Sequence instance", ( ) => {
			let data = stro( "hello" );

			assert.equal( typeof data, "object" );

			assert.equal( data.constructor.name, "Sequence" );

			assert.equal( data.valueOf( ), "hello" );
		} );
	} );

	describe( "`stro( 'hello' ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			let data = stro( "hello" );

			assert.equal( data.toString( ), "hello" );
		} );
	} );

	describe( "`stro( 'hello' ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			let data = stro( "hello" );

			assert.equal( data.toNumber( ), 5 );
		} );
	} );

	describe( "`stro( 'hello' ).toBoolean( )`", ( ) => {
		it( "should return number type", ( ) => {
			let data = stro( "hello" );

			assert.equal( data.toBoolean( ), true );
		} );
	} );

	describe( "`stro( 'hello' ).toObject( )`", ( ) => {
		it( "should return number type", ( ) => {
			let data = stro( "hello" );

			let descriptor = data.toObject( );

			assert.equal( "type" in descriptor, true );

			assert.equal( "name" in descriptor, true );

			assert.equal( "value" in descriptor, true );

			assert.equal( "format" in descriptor, true );

			assert.deepEqual( descriptor,
				{ "type": "string", "name": "String", "value": "[string String:data:text/string;base64,aGVsbG8%3D]", "format": "data-url-tag" } );

		} );
	} );

} );

//: @end-server


//: @client:

describe( "stro", ( ) => {

	describe( "`stro( 'hello' )`", ( ) => {
		it( "should return Sequence instance", ( ) => {
			let data = stro( "hello" );

			assert.equal( typeof data, "object" );

			assert.equal( data.constructor.name, "Sequence" );

			assert.equal( data.valueOf( ), "hello" );
		} );
	} );

	describe( "`stro( 'hello' ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			let data = stro( "hello" );

			assert.equal( data.toString( ), "hello" );
		} );
	} );

	describe( "`stro( 'hello' ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			let data = stro( "hello" );

			assert.equal( data.toNumber( ), 5 );
		} );
	} );

	describe( "`stro( 'hello' ).toBoolean( )`", ( ) => {
		it( "should return number type", ( ) => {
			let data = stro( "hello" );

			assert.equal( data.toBoolean( ), true );
		} );
	} );

	describe( "`stro( 'hello' ).toObject( )`", ( ) => {
		it( "should return number type", ( ) => {
			let data = stro( "hello" );

			let descriptor = data.toObject( );

			assert.equal( "type" in descriptor, true );

			assert.equal( "name" in descriptor, true );

			assert.equal( "value" in descriptor, true );

			assert.equal( "format" in descriptor, true );

			assert.deepEqual( descriptor,
				{ "type": "string", "name": "String", "value": "[string String:data:text/string;base64,aGVsbG8%3D]", "format": "data-url-tag" } );

		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "stro", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`stro( 'hello' )`", ( ) => {
		it( "should return Sequence instance", ( ) => {
			//: @ignore:
			assert.equal( browser.url( bridgeURL ).execute( function( ){ return typeof stro( "hello" ); } ).value, "object" );
			//: @end-ignore

			assert.equal( browser.url( bridgeURL ).execute( ( ) => stro( "hello" ).constructor.name ).value, "Sequence" );

			assert.equal( browser.url( bridgeURL ).execute( ( ) => stro( "hello" ).valueOf( ) ).value, "hello" );
		} );
	} );

	describe( "`stro( 'hello' ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let data = stro( "hello" );

					return data.toString( );
				}

			).value;
			//: @end-ignore

			assert.equal( result, "hello" );
		} );
	} );

	describe( "`stro( 'hello' ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let data = stro( "hello" );

					return data.toNumber( );
				}

			).value;
			//: @end-ignore

			assert.equal( result, 5 );
		} );
	} );

	describe( "`stro( 'hello' ).toBoolean( )`", ( ) => {
		it( "should return number type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let data = stro( "hello" );

					return data.toBoolean( );
				}

			).value;
			//: @end-ignore

			assert.equal( result, true );
		} );
	} );

	describe( "`stro( 'hello' ).toObject( )`", ( ) => {
		it( "should return number type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let data = stro( "hello" );

					return JSON.stringify( data.toObject( ) );
				}

			).value;
			//: @end-ignore

			let descriptor = JSON.parse( result );

			assert.equal( "type" in descriptor, true );

			assert.equal( "name" in descriptor, true );

			assert.equal( "value" in descriptor, true );

			assert.equal( "format" in descriptor, true );

			assert.deepEqual( descriptor,
				{ "type": "string", "name": "String", "value": "[string String:data:text/string;base64,aGVsbG8%3D]", "format": "data-url-tag" } );

		} );
	} );

} );

//: @end-bridge
