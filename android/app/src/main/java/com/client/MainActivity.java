package com.client;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

import expo.modules.splashscreen.singletons.SplashScreen;
import expo.modules.splashscreen.SplashScreenImageResizeMode;
public class SampleActivity extends AppCompatActivity implements OnMapReadyCallback {
    private BingMap mBingMap;
    private MapView mMapView;
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sample);
    }
    
    private void initMap() {
        mMapView = (MapView) findViewById(R.id.map_view);
        mMapView.getMapAsync("Your Bing API Key", this);
    }

    @Override
    public void onMapReady(BingMap bingMap) {
        mBingMap = bingMap;
    }

    @Override
    protected void onResume() {
        super.onResume();
        initMap();
    }

    @Override
    protected void onPause() {
        super.onPause();
        mMapView.onPause();
    }

public class MainActivity extends ReactActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
    // SplashScreen.show(...) has to be called after super.onCreate(...)
    // Below line is handled by '@expo/configure-splash-screen' command and it's discouraged to modify it manually
    SplashScreen.show(this, SplashScreenImageResizeMode.CONTAIN, ReactRootView.class, false);
  }


    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "main";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }
}
