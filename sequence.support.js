"use strict";

/*;
              	@submodule-license:
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
              	@end-submodule-license
              
              	@submodule-configuration:
              		{
              			"package": "stro",
              			"path": "stro/sequence.module.js",
              			"file": "sequence.module.js",
              			"module": "stro",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/stro.git",
              			"test": "stro-test.js",
              			"global": false,
              			"internal": true,
              			"class": true
              		}
              	@end-submodule-configuration
              
              	@submodule-documentation:
              		String class wrapper.
              	@end-submodule-documentation
              
              	@include:
              		{
              			"ehm": "ehm"
              		}
              	@end-include
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Meta = require("ehm")();

var EMPTY_STRING = "";
var SEQUENCE = String;
var SERIALIZE_SEQUENCE_TAG = "[object String:String]";
var META_SERIALIZE_SEQUENCE_TAG = Meta.create(SEQUENCE).serialize();var

Sequence = function (_Meta) {(0, _inherits3.default)(Sequence, _Meta);(0, _createClass3.default)(Sequence, null, [{ key: _hasInstance2.default, value: function value(
		instance) {
			return (
				instance === SEQUENCE ||
				Meta.instanceOf(instance, this));

		} }, { key: "deserialize", value: function deserialize(

		data, parser, blueprint) {
			/*;
                            	@meta-configuration:
                            		{
                            			"data": "*",
                            			"parser": "function",
                            			"blueprint": "function"
                            		}
                            	@end-meta-configuration
                            */

			return Meta.create(this, SEQUENCE);
		} }]);

	function Sequence() {(0, _classCallCheck3.default)(this, Sequence);return (0, _possibleConstructorReturn3.default)(this, (Sequence.__proto__ || (0, _getPrototypeOf2.default)(Sequence)).call(this,
		SEQUENCE, "Sequence"));
	}(0, _createClass3.default)(Sequence, [{ key: "serialize", value: function serialize(

















		parser) {
			/*;
           	@meta-configuration:
           		{
           			"parser": "function"
           		}
           	@end-meta-configuration
           */

			return SERIALIZE_SEQUENCE_TAG;
		} }, { key: "isCompatible", value: function isCompatible(

		tag) {
			return (
				tag === SERIALIZE_SEQUENCE_TAG ||
				tag === META_SERIALIZE_SEQUENCE_TAG);

		} }, { key: Meta.OBJECT, get: function get() {return EMPTY_STRING;} }, { key: Meta.BOOLEAN, get: function get() {return false;} }, { key: Meta.STRING, get: function get() {return EMPTY_STRING;} }, { key: Meta.NUMBER, get: function get() {return 0;} }]);return Sequence;}(Meta);


module.exports = Sequence;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcXVlbmNlLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiTWV0YSIsInJlcXVpcmUiLCJFTVBUWV9TVFJJTkciLCJTRVFVRU5DRSIsIlN0cmluZyIsIlNFUklBTElaRV9TRVFVRU5DRV9UQUciLCJNRVRBX1NFUklBTElaRV9TRVFVRU5DRV9UQUciLCJjcmVhdGUiLCJzZXJpYWxpemUiLCJTZXF1ZW5jZSIsImluc3RhbmNlIiwiaW5zdGFuY2VPZiIsImRhdGEiLCJwYXJzZXIiLCJibHVlcHJpbnQiLCJ0YWciLCJPQkpFQ1QiLCJCT09MRUFOIiwiU1RSSU5HIiwiTlVNQkVSIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsT0FBT0MsUUFBUyxLQUFULEdBQWI7O0FBRUEsSUFBTUMsZUFBZSxFQUFyQjtBQUNBLElBQU1DLFdBQVdDLE1BQWpCO0FBQ0EsSUFBTUMseUJBQXlCLHdCQUEvQjtBQUNBLElBQU1DLDhCQUE4Qk4sS0FBS08sTUFBTCxDQUFhSixRQUFiLEVBQXdCSyxTQUF4QixFQUFwQyxDOztBQUVNQyxRO0FBQzBCQyxVLEVBQVU7QUFDeEM7QUFDQ0EsaUJBQWFQLFFBQWI7QUFDQUgsU0FBS1csVUFBTCxDQUFpQkQsUUFBakIsRUFBMkIsSUFBM0IsQ0FGRDs7QUFJQSxHOztBQUVtQkUsTSxFQUFNQyxNLEVBQVFDLFMsRUFBVztBQUM1Qzs7Ozs7Ozs7OztBQVVBLFVBQU9kLEtBQUtPLE1BQUwsQ0FBYSxJQUFiLEVBQW1CSixRQUFuQixDQUFQO0FBQ0EsRzs7QUFFRCxxQkFBYztBQUNOQSxVQURNLEVBQ0ksVUFESjtBQUViLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCVVUsUSxFQUFRO0FBQ2xCOzs7Ozs7OztBQVFBLFVBQU9SLHNCQUFQO0FBQ0EsRzs7QUFFYVUsSyxFQUFLO0FBQ2xCO0FBQ0NBLFlBQVFWLHNCQUFSO0FBQ0dVLFlBQVFULDJCQUZaOztBQUlBLEcsV0FqQ0tOLEtBQUtnQixNLHNCQUFXLENBQ3JCLE9BQU9kLFlBQVAsQ0FDQSxDLFdBRUtGLEtBQUtpQixPLHNCQUFZLENBQ3RCLE9BQU8sS0FBUCxDQUNBLEMsV0FFS2pCLEtBQUtrQixNLHNCQUFXLENBQ3JCLE9BQU9oQixZQUFQLENBQ0EsQyxXQUVLRixLQUFLbUIsTSxzQkFBVyxDQUNyQixPQUFPLENBQVAsQ0FDQSxDLHVCQXhDcUJuQixJOzs7QUE4RHZCb0IsT0FBT0MsT0FBUCxHQUFpQlosUUFBakIiLCJmaWxlIjoic2VxdWVuY2Uuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHN1Ym1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtc3VibW9kdWxlLWxpY2Vuc2VcblxuXHRAc3VibW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwic3Ryb1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwic3Ryby9zZXF1ZW5jZS5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInNlcXVlbmNlLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJzdHJvXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9zdHJvLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwic3Ryby10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiBmYWxzZSxcblx0XHRcdFwiaW50ZXJuYWxcIjogdHJ1ZSxcblx0XHRcdFwiY2xhc3NcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1zdWJtb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBzdWJtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRTdHJpbmcgY2xhc3Mgd3JhcHBlci5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZWhtXCI6IFwiZWhtXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgTWV0YSA9IHJlcXVpcmUoIFwiZWhtXCIgKSggKTtcblxuY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbmNvbnN0IFNFUVVFTkNFID0gU3RyaW5nO1xuY29uc3QgU0VSSUFMSVpFX1NFUVVFTkNFX1RBRyA9IFwiW29iamVjdCBTdHJpbmc6U3RyaW5nXVwiO1xuY29uc3QgTUVUQV9TRVJJQUxJWkVfU0VRVUVOQ0VfVEFHID0gTWV0YS5jcmVhdGUoIFNFUVVFTkNFICkuc2VyaWFsaXplKCApO1xuXG5jbGFzcyBTZXF1ZW5jZSBleHRlbmRzIE1ldGEge1xuXHRzdGF0aWMgWyBTeW1ib2wuaGFzSW5zdGFuY2UgXSggaW5zdGFuY2UgKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0aW5zdGFuY2UgPT09IFNFUVVFTkNFIHx8XG5cdFx0XHRNZXRhLmluc3RhbmNlT2YoIGluc3RhbmNlLCB0aGlzIClcblx0XHQpO1xuXHR9XG5cblx0c3RhdGljIGRlc2VyaWFsaXplKCBkYXRhLCBwYXJzZXIsIGJsdWVwcmludCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZGF0YVwiOiBcIipcIixcblx0XHRcdFx0XHRcInBhcnNlclwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJibHVlcHJpbnRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHJldHVybiBNZXRhLmNyZWF0ZSggdGhpcywgU0VRVUVOQ0UgKTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCApe1xuXHRcdHN1cGVyKCBTRVFVRU5DRSwgXCJTZXF1ZW5jZVwiICk7XG5cdH1cblxuXHRnZXQgWyBNZXRhLk9CSkVDVCBdKCApe1xuXHRcdHJldHVybiBFTVBUWV9TVFJJTkc7XG5cdH1cblxuXHRnZXQgWyBNZXRhLkJPT0xFQU4gXSggKXtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRnZXQgWyBNZXRhLlNUUklORyBdKCApe1xuXHRcdHJldHVybiBFTVBUWV9TVFJJTkc7XG5cdH1cblxuXHRnZXQgWyBNZXRhLk5VTUJFUiBdKCApe1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0c2VyaWFsaXplKCBwYXJzZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInBhcnNlclwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cmV0dXJuIFNFUklBTElaRV9TRVFVRU5DRV9UQUc7XG5cdH1cblxuXHRpc0NvbXBhdGlibGUoIHRhZyApe1xuXHRcdHJldHVybiAoXG5cdFx0XHR0YWcgPT09IFNFUklBTElaRV9TRVFVRU5DRV9UQUdcblx0XHRcdHx8IHRhZyA9PT0gTUVUQV9TRVJJQUxJWkVfU0VRVUVOQ0VfVEFHXG5cdFx0KTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcXVlbmNlO1xuIl19
//# sourceMappingURL=sequence.support.js.map
