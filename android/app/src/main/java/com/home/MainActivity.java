package com.home;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import android.content.Intent;
import android.content.res.Configuration;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
     public void onConfigurationChanged(Configuration newConfig) {
     super.onConfigurationChanged(newConfig);
     Intent intent = new Intent("onConfigurationChanged");
     intent.putExtra("newConfig", newConfig);
     sendBroadcast(intent);
     }
    protected String getMainComponentName() {
        return "home";
    }
    protected ReactActivityDelegate createReactActivityDelegate(){
        return new ReactActivityDelegate(this, getMainComponentName()){
            @Override
            protected ReactRootView createRootView(){
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }
}
