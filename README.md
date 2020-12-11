# Corrupted-data-in-SSR-and-fast-rendering

![image](https://user-images.githubusercontent.com/36485982/101948907-11bdfa00-3c08-11eb-80ad-2f80a3c78786.png)

# First of all, I have to thank those who try to solve my problem #


In fact, my problem is that, in the subscription system, a document appears that does not exist in the database at all.

And further examination, we see that this document, which does not exist in the database and we share, is actually a copy of one of the documents registered in the database.
Except that this fake document does not have a _id field.

As shown in the image below: 

![image](https://user-images.githubusercontent.com/36485982/101949015-39ad5d80-3c08-11eb-8ee4-5e0010160531.png)


In this repository, I have given a very simple example, in which there is a title field that is inserted into the collection.
And I simply published and subscribed to the items.
The rendering server is also implemented in the startup file


### Note, it may not be a problem to insert the first item -to collection-, but after inserting a few items and refreshing - F5 - , the problem is clearly visible.


I also discussed this issue in detail in the forum, at the following address:

[why-subscribe-to-something-that-is-not-in-the-database]


Package list used : 
* [meteor-fast-render]
* [meteor-collection2]
* [npdev-react-loadable]
* server-render





[meteor-fast-render]: <https://github.com/abecks/meteor-fast-render>
[npdev-react-loadable]: <https://github.com/CaptainN/npdev-react-loadable>
[meteor-collection2]: <https://github.com/Meteor-Community-Packages/meteor-collection2>
[why-subscribe-to-something-that-is-not-in-the-database]: <https://forums.meteor.com/t/why-subscribe-to-something-that-is-not-in-the-database/54492/21>

I am happy with any comments, suggestions, or reviews .
Please state in the issues section
