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
			let data = stro( "hello" ).toString( );

			assert.equal( typeof data, "string" );

			assert.equal( data, "hello" );
		} );
	} );

	describe( "`stro( 'hello' ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			let data = stro( "hello" ).toNumber( );

			assert.equal( typeof data, "number" );

			assert.equal( data, 5 );
		} );
	} );

	describe( "`stro( 'hello' ).toBoolean( )`", ( ) => {
		it( "should return boolean type", ( ) => {
			let data = stro( "hello" ).toBoolean( );

			assert.equal( typeof data, "boolean" );

			assert.equal( data, true );
		} );
	} );

	describe( "`stro( 'hello' ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
			let descriptor = stro( "hello" ).toObject( );

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






