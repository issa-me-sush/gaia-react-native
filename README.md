# A simple template to have a mobile interface for any GAIA node agent url 

## How to run the app

1.``` Clone the repository```
2.```cd react_native_template```
3. ```npm i ``` 
4. 
``` 
cd ios
pod deintegrate
pod install
cd ..
npx react-native run-ios 
```

for android:
```npx react-native run-android```

### there you go ! plug in any url in the .env file :

```
GAIA_AGENT_URL="your_agent_url"
```
### user can directly chat on the app now! 

## further improvements :

- more customizations 
- user being able to authenticate with account abstraction/social login 
