import { Meteor } from 'meteor/meteor'

Meteor.startup(() => {
  import "../imports/Startup/Server/Index";
});

// //------------------- Server Routes -------------------\\
// import { Picker } from 'meteor/communitypackages:picker'
// const rssRoutes = Picker.filter(function(req, res) {
//   return req.method === "Post"
// })
// rssRoutes.route('/editor/upload/img', function(params, req, res, next) {
//   console.log(params);
//   res.end(
//     {
//       "errorMessage": "insert error message",
//       "result": [
//           {
//               "url": "https://ghadr.org/uploads/2020/7/30/5f225869dfe50%D8%AA%D9%88%D8%AD%DB%8C%D8%AF-%D8%B9%D9%85%D9%84%DB%8C.jpg",
//               "name": "test_image.jpg",
//               "size": "561276"
//           }
//       ]
//   }
//   );
// });
// //----------------- End Server Routes ------------------\\

