A easier to read README can be found at - https://docs.google.com/document/d/15SN7ROuASDLYFpr1mVv5QxKUhLjG31MSJQzExLeANas/edit?usp=sharing

Campus Map 
React Application Documentation
  
Introduction	
This React demo helps to address a specific user experience challenge associated with SightMap's Campus Maps. A Campus Map is a SightMap that features markers that direct the user to different instances of a campus or building when clicked on. These markers are individual SightMaps. 

For example, here is a sample Campus SightMap - https://sightmap.com/embed/rxwj9yozp1e?instance=frisco-campus

In the context of Campus Maps, an "instance" refers to an individual SightMap that the user is 
directed to upon clicking a marker within the Campus Map. Using the example SightMap, if a user clicks on the “ Frisco Crossing “ marker, the instance would be “frisco-crossing”

A “marker” is the button that a user can click to navigate to a different SightMap on the Campus Map.

Normally, when users click on these markers to open different SightMap instances, each instance would open in a new browser tab. This would redirect the user away from the property website to the SightMap URL where the SightMap is hosted.

The function of this demo is to offer a solution to help improve this user experience. This allows for a more seamless navigation experience across multiple SightMap instances.

How to use the Code
The code can be accessed via Github and you can then:

Clone the repository.
Run npm install to install it.
Replace the SightMap embed URL in App.js with the one relevant to your property. The SightMap embed URL is the unique link of your SightMap,( i.e https://sightmap.com/embed/rxwj9yozp1e ) If you don’t have one or are not sure what it is, please let us know and we can provide it for you.
Run the application using npm start.

From there, you can test it and integrate it into your larger application or website. If you need help with testing anything, please let us know.

What You Need to Provide Back to Us
You will need to provide us back with a full URL, which will be the link to each specific SightMap to be displayed when a user chooses a different SightMap via the marker on the SightMap.

The URL you provide to us will be based on the website page URL where you plan on hosting the SightMap and code. This URL should also contain the instance ( aka the SightMap the user is trying to navigate to )

From there, we will be able to add these links to the SightMap markers. 

For example, when the URLs are provided to us in this format:

Select Amli at the Ballpark
http://localhost:3000?sightmap_instance=ballpark

View Frisco Crossing
http://localhost:3000/?sightmap_instance=frisco-campus

Select Amli Frisco Crossing
http://localhost:3000?sightmap_instance=frisco-crossing

The Application navigates between the different instances of the SightMap with a quick reload of the SightMap, and without navigating to a different tab. 

Video Demo of Functionality - https://drive.google.com/file/d/15rb_V1QCBwx7QqDvuTnXZPv2jMNeR_wT/view?usp=sharing

While you test this out, please feel free to provide us some test URLs you’d like to try, and we can add it to the SightMap.

Conclusion
This solution can hopefully improve the user experience of the Campus SightMaps.
Please let us know if you have any questions and need help with testing.

Have a great day!



