// import $ from 'jquery';

// $(document).ready(function() {
	
// 	console.log('MODULE - Video component');

// 	// Set all the data youtube needs

// 	// Generated API key
// 	var ApiKey = 'AIzaSyAt7OKYMSop2FtpDZXxR75UtYFYByqg_zM'

// 	// The id of the playlist I made on my youtube channel
// 	var youtubePlayListId = 'PL5owQiLpxKsvtLLXY4_mU7WoIMW4NoXfT'

// 	// Get url from the documentation
// 	// This url is for the playlistItems
// 	var GetURL = 'https://www.googleapis.com/youtube/v3/playlistItems'

// 	console.log(ApiKey);

// 	// Options Youtube API expects to receive
// 	// - the part you want to get 'snippet' (title, description, thumbnail etc)
// 	// - apikey
// 	// - Max Results (can be anything you set)
// 	// - Playlist id (from my channel)
// 	var options = {
// 		part: 'snippet',
// 		key: ApiKey,
// 		maxResults: 25,
// 		playlistId: youtubePlayListId
// 	}

// 	function getPlaylist() {
		
// 		// Send a GET Request to playlist items endpoint and 
// 		// GET playlist from options and return its data
// 		$.getJSON(GetURL, options, function(data) {
			
// 			console.log(data);
			
// 			// Find the video Id in the array of
// 			// items (videos), provided from youtube api (data)
// 			// and get the first video ID
// 			var id = data.items[0].snippet.resourceId.videoId;		
// 			var title = data.items[0].snippet.title;
// 			var description = data.items[0].snippet.description;
			
// 			// Call the function featureVideo and pass into it
// 			// the first video of items array
// 			featureVideo(id, title, description);

// 			// Call the function listOfVideo and pass into it
// 			// the data that we are getting from youtube,
// 			// And in the function it will loop through the items
// 			listOfVideos(data);
// 		});
// 	}

// 	getPlaylist();

// 	// Backticks lets us set variables in the iframe
// 	function featureVideo(id, title, description) {

// 		// Select video section and print a iframe into it
// 		$('.feature-video').html(`
// 			<iframe width="560" 
// 					height="315" 
// 					src="https://www.youtube.com/embed/${id}" 
// 					frameborder="0" 
// 					allow="autoplay; 
// 					encrypted-media" 
// 					allowfullscreen>
// 			</iframe>
// 			<div>
// 				<h2>${title}</h2>
// 				<p>${description}</p>
// 			</div>
// 		`);
// 	}

// 	function listOfVideos(data) {


// 		// Loop through each of the data in the items array
// 		$.each(data.items, function(i, item) {
			
// 			// Select item and grab:

// 			// Get the thumbnail img and store it in a variable
// 			var thumbnail = item.snippet.thumbnails.medium.url;

// 			// Get the title "
// 			var title = item.snippet.title;

// 			// Get the description "
// 			var description = item.snippet.description;

// 			// Get the video ID "
// 			var vid = item.snippet.resourceId.videoId;

// 			console.log(vid);

// 			// Append for every item the data to the dom
// 			$('.list-of-videos').append(`
// 				<article class="video-item" data-key="${vid}"">

// 					<img class="thumbnail-img" src=${thumbnail} />
// 					<div class="video-information__wrapper">
// 						<h3>${title}</h3>
// 						<p>${description}</p>
// 					</div>

// 					<div class="clear-fix"></div>

// 				</article>
// 			`);

// 		});
// 	}

// 	// When clicked on a article find id of list video and print it on feature video
// 	$('.list-of-videos').on('click', 'article', function() {
		
// 		// Find this article that is click on, and it's attricute data key,
// 		// it's title, and it's description.
// 		var id = $(this).attr('data-key');
// 		var title = $(this).find('h3').text();
// 		var description = $(this).find('p').text();

// 		// Call the function featureVideo and pass into it,
// 		// it's new id, title, and description from the users click event
// 		featureVideo(id, title, description);

// 		console.log(id, title, description);
// 	});
// });