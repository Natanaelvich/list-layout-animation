package com.listlayoutanimation;

import android.content.Intent;

import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
 
import expo.modules.devlauncher.DevLauncherController;
import expo.modules.devmenu.react.DevMenuAwareReactActivity;
 
public class MainActivity extends DevMenuAwareReactActivity {

 @Override
  public void onNewIntent(Intent intent) {
    if (DevLauncherController.tryToHandleIntent(this, intent)) {
      return;
    }
    super.onNewIntent(intent);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ListLayoutAnimation";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return DevLauncherController.wrapReactActivityDelegate(this, () -> new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new ReactRootView(MainActivity.this);
      }
    });
  }
}
