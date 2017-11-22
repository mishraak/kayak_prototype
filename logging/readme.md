### Description.

This folder contains all the topics/artefacts related to the logging infrastructure for the Kayak app.


### Use Case

The following are the logging and analytics use cases of our app.


Sr.No|Use Case|Description|Module
---|--|--|--|
1|Clicks per page|Users clicks per day|All
2|Reviews per item|Ability to report the items(hotels/flights wrt reviews)|<li>Flights</li><li>Hotels</li>
4|Real time User activity<ul><li>Number of logged in users.</li><li>Region wise logged in users.</li></ul>|Ability to report currently logged in users based on location|User Management
5|Flights booked per hr/day|Ability to report total number of flights booked in a time interval|Bookings.
6|Hotels booked per hr/day|Ability to report total number of hotels booked in a time interval|Bookings.
7|Most searched flights in area|Ability to report most number of flights searched in a given area|Search.




### Design

- We will be using the *winston* middleware to capture logs and these logs will be stored in MongoDB.
- Based on the use cases the data will be logged into MongoDB / Kafka topics.
- The reporting GUI can be built on top of data from MongoDB and or MySQL.



### Observations.

1. User activity can be captured in the Kafka topic.
2. This capture is realtime and can be used for further analysis directly or dumped to archival.
3. It is easier to use the Winston MongoDB transport rather than the expressWinston one. 


### TODO.

- [x] List down common uses cases.
- [x] Create a logging lib for the required transport.
- [x] Create a logging schema for each module based on the use case.
- [ ] Create schema for MongoDB collections based on modules.
- [ ] Update the module code to use the logging lib and log data to the MongoDB transport.
- [ ] Test the collection updates.
- [ ] Create Kafka topics for real-time data.
- [ ] Create the reporting service.
