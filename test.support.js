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
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var stro = require("./stro.support.js");
//: @end-client







//: @client:

describe("stro", function () {

	describe("`stro( 'hello' )`", function () {
		it("should return Sequence instance", function () {
			var data = stro("hello");

			assert.equal(typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data), "object");

			assert.equal(data.constructor.name, "Sequence");

			assert.equal(data.valueOf(), "hello");
		});
	});

	describe("`stro( 'hello' ).toString( )`", function () {
		it("should return string type", function () {
			var data = stro("hello").toString();

			assert.equal(typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data), "string");

			assert.equal(data, "hello");
		});
	});

	describe("`stro( 'hello' ).toNumber( )`", function () {
		it("should return number type", function () {
			var data = stro("hello").toNumber();

			assert.equal(typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data), "number");

			assert.equal(data, 5);
		});
	});

	describe("`stro( 'hello' ).toBoolean( )`", function () {
		it("should return boolean type", function () {
			var data = stro("hello").toBoolean();

			assert.equal(typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data), "boolean");

			assert.equal(data, true);
		});
	});

	describe("`stro( 'hello' ).toObject( )`", function () {
		it("should return object type", function () {
			var descriptor = stro("hello").toObject();

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);

			assert.deepEqual(descriptor,
			{ "type": "string", "name": "String", "value": "[string String:data:text/string;base64,aGVsbG8%3D]", "format": "data-url-tag" });

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwic3RybyIsImRlc2NyaWJlIiwiaXQiLCJkYXRhIiwiZXF1YWwiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ2YWx1ZU9mIiwidG9TdHJpbmciLCJ0b051bWJlciIsInRvQm9vbGVhbiIsImRlc2NyaXB0b3IiLCJ0b09iamVjdCIsImRlZXBFcXVhbCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsbUJBQVQsQ0FBYjtBQUNBOzs7Ozs7OztBQVFBOztBQUVBRSxTQUFVLE1BQVYsRUFBa0IsWUFBTzs7QUFFeEJBLFVBQVUsbUJBQVYsRUFBK0IsWUFBTztBQUNyQ0MsS0FBSSxpQ0FBSixFQUF1QyxZQUFPO0FBQzdDLE9BQUlDLE9BQU9ILEtBQU0sT0FBTixDQUFYOztBQUVBRixVQUFPTSxLQUFQLFFBQXFCRCxJQUFyQix1REFBcUJBLElBQXJCLEdBQTJCLFFBQTNCOztBQUVBTCxVQUFPTSxLQUFQLENBQWNELEtBQUtFLFdBQUwsQ0FBaUJDLElBQS9CLEVBQXFDLFVBQXJDOztBQUVBUixVQUFPTSxLQUFQLENBQWNELEtBQUtJLE9BQUwsRUFBZCxFQUErQixPQUEvQjtBQUNBLEdBUkQ7QUFTQSxFQVZEOztBQVlBTixVQUFVLCtCQUFWLEVBQTJDLFlBQU87QUFDakRDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QyxPQUFJQyxPQUFPSCxLQUFNLE9BQU4sRUFBZ0JRLFFBQWhCLEVBQVg7O0FBRUFWLFVBQU9NLEtBQVAsUUFBcUJELElBQXJCLHVEQUFxQkEsSUFBckIsR0FBMkIsUUFBM0I7O0FBRUFMLFVBQU9NLEtBQVAsQ0FBY0QsSUFBZCxFQUFvQixPQUFwQjtBQUNBLEdBTkQ7QUFPQSxFQVJEOztBQVVBRixVQUFVLCtCQUFWLEVBQTJDLFlBQU87QUFDakRDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QyxPQUFJQyxPQUFPSCxLQUFNLE9BQU4sRUFBZ0JTLFFBQWhCLEVBQVg7O0FBRUFYLFVBQU9NLEtBQVAsUUFBcUJELElBQXJCLHVEQUFxQkEsSUFBckIsR0FBMkIsUUFBM0I7O0FBRUFMLFVBQU9NLEtBQVAsQ0FBY0QsSUFBZCxFQUFvQixDQUFwQjtBQUNBLEdBTkQ7QUFPQSxFQVJEOztBQVVBRixVQUFVLGdDQUFWLEVBQTRDLFlBQU87QUFDbERDLEtBQUksNEJBQUosRUFBa0MsWUFBTztBQUN4QyxPQUFJQyxPQUFPSCxLQUFNLE9BQU4sRUFBZ0JVLFNBQWhCLEVBQVg7O0FBRUFaLFVBQU9NLEtBQVAsUUFBcUJELElBQXJCLHVEQUFxQkEsSUFBckIsR0FBMkIsU0FBM0I7O0FBRUFMLFVBQU9NLEtBQVAsQ0FBY0QsSUFBZCxFQUFvQixJQUFwQjtBQUNBLEdBTkQ7QUFPQSxFQVJEOztBQVVBRixVQUFVLCtCQUFWLEVBQTJDLFlBQU87QUFDakRDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QyxPQUFJUyxhQUFhWCxLQUFNLE9BQU4sRUFBZ0JZLFFBQWhCLEVBQWpCOztBQUVBZCxVQUFPTSxLQUFQLENBQWMsVUFBVU8sVUFBeEIsRUFBb0MsSUFBcEM7O0FBRUFiLFVBQU9NLEtBQVAsQ0FBYyxVQUFVTyxVQUF4QixFQUFvQyxJQUFwQzs7QUFFQWIsVUFBT00sS0FBUCxDQUFjLFdBQVdPLFVBQXpCLEVBQXFDLElBQXJDOztBQUVBYixVQUFPTSxLQUFQLENBQWMsWUFBWU8sVUFBMUIsRUFBc0MsSUFBdEM7O0FBRUFiLFVBQU9lLFNBQVAsQ0FBa0JGLFVBQWxCO0FBQ0MsS0FBRSxRQUFRLFFBQVYsRUFBb0IsUUFBUSxRQUE1QixFQUFzQyxTQUFTLG9EQUEvQyxFQUFxRyxVQUFVLGNBQS9HLEVBREQ7O0FBR0EsR0FkRDtBQWVBLEVBaEJEOztBQWtCQSxDQTlERDs7QUFnRUEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJzdHJvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJzdHJvL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9zdHJvLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJzdHJvXCI6IFwic3Ryb1wiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3Qgc3RybyA9IHJlcXVpcmUoIFwiLi9zdHJvLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuXG5kZXNjcmliZSggXCJzdHJvXCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYHN0cm8oICdoZWxsbycgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIFNlcXVlbmNlIGluc3RhbmNlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgZGF0YSA9IHN0cm8oIFwiaGVsbG9cIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBkYXRhLCBcIm9iamVjdFwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGF0YS5jb25zdHJ1Y3Rvci5uYW1lLCBcIlNlcXVlbmNlXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkYXRhLnZhbHVlT2YoICksIFwiaGVsbG9cIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBzdHJvKCAnaGVsbG8nICkudG9TdHJpbmcoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBzdHJpbmcgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IGRhdGEgPSBzdHJvKCBcImhlbGxvXCIgKS50b1N0cmluZyggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGF0YSwgXCJzdHJpbmdcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRhdGEsIFwiaGVsbG9cIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBzdHJvKCAnaGVsbG8nICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBudW1iZXIgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IGRhdGEgPSBzdHJvKCBcImhlbGxvXCIgKS50b051bWJlciggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGF0YSwgXCJudW1iZXJcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRhdGEsIDUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgc3RybyggJ2hlbGxvJyApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGJvb2xlYW4gdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IGRhdGEgPSBzdHJvKCBcImhlbGxvXCIgKS50b0Jvb2xlYW4oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIGRhdGEsIFwiYm9vbGVhblwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGF0YSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBzdHJvKCAnaGVsbG8nICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBzdHJvKCBcImhlbGxvXCIgKS50b09iamVjdCggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcInR5cGVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJuYW1lXCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJmb3JtYXRcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIGRlc2NyaXB0b3IsXG5cdFx0XHRcdHsgXCJ0eXBlXCI6IFwic3RyaW5nXCIsIFwibmFtZVwiOiBcIlN0cmluZ1wiLCBcInZhbHVlXCI6IFwiW3N0cmluZyBTdHJpbmc6ZGF0YTp0ZXh0L3N0cmluZztiYXNlNjQsYUdWc2JHOCUzRF1cIiwgXCJmb3JtYXRcIjogXCJkYXRhLXVybC10YWdcIiB9ICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
