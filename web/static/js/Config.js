var LIGHTS = LIGHTS || {};

LIGHTS.Config = {

    // _______________________________________________________________________________________ Home

	homeImages: {

		loadingButton:      'images/home/loadingButton.png',
		playButton:         'images/home/playButton.png',
		uploadButton:       'images/home/uploadButton.png',
		bokeh:              'images/home/bokeh.png'
	},

    // _______________________________________________________________________________________ Music

	musicMP3:               'audio/music.mp3', // Chrome
	musicOGG:               'audio/music.ogg', // Firefox

    // _______________________________________________________________________________________ Images

	images: {

		terrain66:          'images/experience/terrain66.png',
		plasmaRed:          'images/experience/plasmaRed.png',
		plasmaYellow:       'images/experience/plasmaYellow.png',
		plasmaGreen:        'images/experience/plasmaGreen.png',
		plasmaCyan:         'images/experience/plasmaCyan.png',
		plasmaBlue:         'images/experience/plasmaBlue.png',
		plasmaMagenta:      'images/experience/plasmaMagenta.png',
		plasmaWhite:        'images/experience/plasmaWhite.png',
		circle:             'images/experience/circle.png',
		dot:                'images/experience/dot.png',
		terrainDot:         'images/experience/particle.png',
		glow:               'images/experience/glow.png',
		skybox:             'images/experience/skybox.png',
		bengalSeq:          'images/experience/bengalSeq.png',
		bengalShadow:       'images/experience/bengalShadow.png',
		spot:               'images/experience/spot.png',
		spotLine:           'images/experience/spotLine.png',
		spotLineAlpha:      'images/experience/spotLineAlpha.png',
		envMapTop:          'images/envmap/envMapTop.png',
		envMapBottom:       'images/envmap/envMapBottom.png',
		envMapFrontBack:    'images/envmap/envMapFrontBack.png',
		envMapLeftRight:    'images/envmap/envMapLeftRight.png',
		font:               'images/fonts/standard_07_55.png',
		spectrumData:       'images/data/spectrumData.png',

		tweetButton:        'images/home/tweetButton.png',
		replayButton:       'images/home/replayButton.png',

							// Resolution: 22 x 22 pixels
		ellieAvatar0:       'images/avatars/ellie/ellieAvatar0.png',
		ellieAvatar1:       'images/avatars/ellie/ellieAvatar1.png',
		ellieAvatar2:       'images/avatars/ellie/ellieAvatar2.png',
		ellieAvatar3:       'images/avatars/ellie/ellieAvatar3.png',
		ellieAvatar4:       'images/avatars/ellie/ellieAvatar4.png'
	},

    // _______________________________________________________________________________________ Font

	font:                   'images/fonts/standard_07_55.txt',

    // _______________________________________________________________________________________ Tweets

							// Requires: callback=onTweetsLoaded
	// tweetsFeed:             'http://api.echoenabled.com/v1/search?callback=onTweetsLoaded&q=scope%3Ahttp%3A%2F%2Flights.elliegoulding.com%2F+source%3ATwitter+-state%3AModeratorDeleted%2CSystemFlagged%2CModeratorFlagged%2CCommunityFlagged+safeHTML%3Afalse+children%3A0+itemsPerPage%3A8&appkey=prod.umg',
	tweetsFeed:             '',

	// avatarHandler:          'http://test.lights.elliegoulding.interscope.com/AvatarHandler.ashx?file=',
	avatarHandler:          '',

	// tweetThis:              '',
	tweetThis:              '',
	// tweetThis:              'sharing_disabled.html',
	// tweetThis:              'http://twitter.com',

	tweetThisSpecs:         'width=550,height=256',
	// tweetThisSpecs:         '',

	defaultTweets: [

		'HackShanghai',
		'VuryLeo',
		'zbwmqlw',
		'zxytim',
		'ppwwyyxx',
		'HaskRay',
		'github',
		'lilydjwg',
		'fqj1994'
	],

	defaultAvatars: [

		'images/avatars/hackshanghai.png',
		'images/avatars/vuryleo.png',
		'images/avatars/zbwmqlw.png',
		'images/avatars/zxytim.png',
		'images/avatars/ppwwyyxx.png',
		'images/avatars/haskray.png',
		'images/avatars/github.png',
		'images/avatars/lilydjwg.png',
		'images/avatars/fqj1994.png'
	]
};
