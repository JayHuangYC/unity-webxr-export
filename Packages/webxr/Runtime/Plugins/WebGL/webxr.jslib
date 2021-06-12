/* functions called from unity */
mergeInto(LibraryManager.library, {
  SetWebXRSettings: function(strJson) {
    Module.WebXR.Settings = JSON.parse(Pointer_stringify(strJson));
    console.log(Module.WebXR.Settings);
  },

  InitXRSharedArray: function(byteOffset) {
    Module.XRSharedArrayOffset = byteOffset / 4;
    Module.WebXR.onUnityLoaded({detail: {state: 'Ready', module: Module}});
  },

  InitControllersArray: function(byteOffset) {
    Module.ControllersArrayOffset = byteOffset / 4;
  },

  InitHandsArray: function(byteOffset) {
    Module.HandsArrayOffset = byteOffset / 4;
  },

  InitViewerHitTestPoseArray: function(byteOffset) {
    Module.ViewerHitTestPoseArrayOffset = byteOffset / 4;
  },

  ToggleAR: function() {
    Module.WebXR.toggleAR();
  },

  ToggleVR: function() {
    Module.WebXR.toggleVR();
  },

  ToggleViewerHitTest: function() {
    Module.WebXR.toggleHitTest();
  },

  ControllerPulse: function(controller, intensity, duration) {
    Module.WebXR.callHapticPulse({detail: {'controller' : controller, 'intensity' : intensity, 'duration': duration}});
  },
});