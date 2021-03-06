(function() {
	/**
	 * Provides the mock external class
	 *
	 * Each individual method are just declared
	 * for use when spying via Jasmine
	 * (returns an error if undefined)
	 *
	 * @class MockExternal
	 * @static
	 */
	var MockExternal =
	{
		/**
		 * source|config|script
		 */
		AppCallFuncAsync: function(name) {

		},

		/**
		 * source|config|window
		 */
		AppGetPropertyAsync: function(name) {

		},

		/**
		 * source|config|window
		 */
		AppSetPropertyAsync: function(name) {

		},

		/**
		 * config|window
		 */
		AppSubscribeEvents: function(name) {

		},

		/**
		 * config|window
		 */
		AppUnsubscribeEvents: function(name) {

		},

		/**
		 * config|window
		 */
		AttachVideoItem: function(name) {

		},

		/**
		 * source
		 */
		AttachVideoItem1: function(name) {

		},

		/**
		 * source|config|window
		 */
		AttachVideoItem2: function(name) {

		},

		/**
		 * source|config|window
		 */
		CallDll: function(name) {

		},

		/**
		 * source|config|window
		 */
		CallDllEx: function(name) {

		},

		/**
		 * config|window
		 */
		CallHost: function(name) {

		},

		/**
		 * source|config|window
		 */
		CallInner: function(name) {

		},

		/**
		 * source|config|window
		 */
		CallInner2: function(name) {

		},

		/**
		 * source
		 */
		CallInnerAsync: function(name) {

		},

		/**
		 * source
		 */
		CallInnerAsync2: function(name) {

		},

		/**
		 * source|config|window
		 */
		CheckDllGrant: function(name) {

		},

		/**
		 * config|window
		 */
		Close: function(name) {

		},

		/**
		 * config|window
		 */
		CloseDialog: function(name) {

		},

		/**
		 * source|config|window
		 */
		CopyToClipboard: function(name) {

		},

		/**
		 * config|window
		 */
		DlgShow: function(name) {

		},

		/**
		 * config|window
		 */
		DlgShow2: function(name) {

		},

		/**
		 * config|window
		 */
		GetAutoCrop: function(name) {

		},

		/**
		 * config|window
		 */
		GetCompositionEnabled: function(name) {

		},

		/**
		 * config|window
		 */
		GetCursorPos: function(name) {

		},

		/**
		 * source |config|window
		 */
		GetFileContent: function(name) {

		},

		/**
		 * config|window
		 */
		GetFrame: function(name) {

		},

		/**
		 * config|window
		 */
		GetFrame2: function(name) {

		},

		/**
		 * source|config|window
		 */
		GetGlobalProperty: function(name) {

		},

		/**
		 * source|config|window
		 */
		GetLocalPropertyAsync: function(name) {

		},

		/**
		 * source|config|window
		 */
		GetLocalPropertyAsync1: function(name) {

		},

		/**
		 * source|config|window
		 */
		GetLocalPropertyAsync2: function(name) {

		},

		/**
		 * config|window
		 */
		GetPresProperty: function(name) {

		},

		/**
		 * source|config|window
		 */
		GetProtectedProperty: function(name) {

		},

		/**
		 * config|window
		 */
		GetScreenPixel: function(name) {

		},

		/**
		 * config|window
		 */
		GetSwfSize: function(name) {

		},

		/**
		 * config|window
		 */
		GetVideoDuration: function(name) {

		},

		/**
		 * config|window
		 */
		GetViewId: function(name) {
			return '1';
		},

		/**
		 * source
		 */
		GetVolume: function(name) {

		},

		/**
		 * source|config|window
		 */
		GetWebContent: function(name) {

		},

		/**
		 * config|window
		 */
		GetWindowPos: function(name) {

		},

		/**
		 * source
		 */
		LoadDll: function(name) {

		},

		/**
		 * config|window
		 */
		LoadSwf: function(name) {

		},

		/**
		 * config|window
		 */
		MouseDownClient: function(name) {

		},

		/**
		 * config|window
		 */
		NewDialog: function(name) {

		},

		/**
		 * config|window
		 */
		NewAutoDialog: function(name) {

		},

		/**
		 * config|window
		 */
		OpenFileDialogAsync: function(name) {

		},

		/**
		 * config|window
		 */
		OpenFolderDialogAsync: function(name) {

		},

		/**
		 * config|window
		 */
		OpenUrl: function(name) {

		},

		/**
		 * config|window
		 */
		PinDialog: function(name) {

		},

		/**
		 * config|window
		 */
		PostMessageToParent: function(name) {

		},

		/**
		 * config|window
		 */
		ResetCapture: function(name) {

		},

		/**
		 * config|window
		 */
		SaveFileDialogAsync: function(name) {

		},

		/**
		 * config|window
		 */
		SaveScenes: function(name) {

		},

		/**
		 * config|window
		 */
		SearchVideoItem: function(name) {

		},

		/**
		 * config|window
		 */
		SearchVideoItem2: function(name) {

		},

		/**
		 * config|window
		 */
		SelScreenArea: function(name) {

		},

		/**
		 * source|config|window
		 */
		SetBrowserProperty: function(name) {

		},

		/**
		 * config|window
		 */
		SetCapture: function(name) {

		},

		/**
		 * config|window
		 */
		SetCursorPos: function(name) {

		},

		/**
		 * config|window
		 */
		SetDialogResult: function(name) {

		},

		/**
		 * config|window
		 */
		SetDialogSize: function(name) {

		},

		/**
		 * config|window
		 */
		SetFocus: function(name) {

		},

		/**
		 * source|config|window
		 */
		SetLocalPropertyAsync: function(name) {

		},

		/**
		 * source|config|window
		 */
		SetLocalPropertyAsync1: function(name) {

		},

		/**
		 * source|config|window
		 */
		SetLocalPropertyAsync2: function(name) {

		},

		/**
		 * source
		 */
		SetParams: function(name) {

		},

		/**
		 * config|window
		 */
		SetPresProperty: function(name) {

		},

		/**
		 * config|window
		 */
		SetPropsDialogSize: function(name) {

		},

		/**
		 * source
		 */
		SetRenderParams: function(name) {

		},

		/**
		 * config|window
		 */
		SetSwfPos: function(name) {

		},

		/**
		 * config|window
		 */
		SourcesListHighlight: function(name) {

		},

		/**
		 * config|window
		 */
		SourcesListOrder: function(name) {

		},

		/**
		 * config|window
		 */
		SourcesListOrderSave: function(name) {

		},

		/**
		 * config|window
		 */
		SourcesListShowProps: function(name) {

		},

		/**
		 * config|window
		 */
		SourcesListSubscribeEvents: function(name) {

		},

		/**
		 * config|window
		 */
		SourcesListUnsubscribeEvents: function(name) {

		}
	};

	if (navigator.userAgent.indexOf("XSplit Broadcaster") < 0)
		window.external = MockExternal;

})();

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
  };
}

window.global_asyncId = 0;

window.randomWord = function(length) {
  var rand;
  var str = '';

  for (var i = 0; i < length; i++) {
    rand = Math.floor(Math.random() * 25) + 65; // A ~ Z
    str += String.fromCharCode(rand);
  }

  return str;
};

window.randomBoolean = function() {
	return Math.random() >= 0.5;
};

window.randomColor = function() {
  return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1,6).toUpperCase();
};

window.randomInt = function(min, max) {
  if (typeof min === 'undefined') {
    min = 0;
  }
  if (typeof max === 'undefined') {
    max = 100;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};