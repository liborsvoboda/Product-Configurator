/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
	// Define changes to default configuration here. For example:
	 config.language = 'cs';  //en,de,cs,fr
	// config.uiColor = '#AADC6E';
         config.skin = 'v2'; //  kama,v2,office2003
         config.toolbar='Full'; //Basic, Full
         config.width='100%';
         config.height='188px';

	 config.removePlugins = 'about,templates,save,video,iframe,forms,scayt,wsc,maximize,resize';
};


