function bsa1789(ShowAdHereBanner,BannerStyles,Vertical,RepeatAll,NoFollowAll){
var ads = new Array([1286,"http://s3.buysellads.com/1789/5460_2008083175129_1789.gif","http://www.dreamtemplate.com","Free Website Templates","Free Website Templates","0"],[2459,"http://s3.buysellads.com/1789/2459_2009020643107_1789.gif","http://webfusion.com/?_$ja=tsid:7029","www.webfusion.com","webfusion web hosting","0"]);
var Width = "185";var Height = "60";var numAds = 2;var totalAds = ads.length;var SiteID = 314;var output1789 = "";output1789 += showStyles(BannerStyles1789,"adblock",Width,Height,Vertical1789); if(totalAds>0){ if(numAds < totalAds){var AdSet = build_ad_array(totalAds);if(Width != "16"){shuffle(ads);}for(i=0;i<numAds;i++){output1789 += ad_output(ads,AdSet[i],Width,Height,NoFollowAll1789);}} else {AdSet = build_ad_array(totalAds);if(Width != "16"){shuffle(ads);}for(i=0;i<totalAds;i++){output1789 += ad_output(ads,AdSet[i],Width,Height,NoFollowAll1789);}}}if( ((totalAds == 0) || (totalAds < numAds)) && (ShowAdHereBanner == true) ){if(RepeatAll1789 == false){var NumAdHeres = 1;}else{var NumAdHeres = numAds - totalAds;}for(i=0;i<NumAdHeres;i++){output1789 += '<a href="http://buysellads.com/buy/detail/'+SiteID+'/" title="Advertise Here" id="bsa_'+SiteID+'000" class="adhere"';if(NoFollowAll1789 == true){output1789 += ' rel="nofollow"';}output1789 += ' target="_blank">Advertise Here</a>';}} var r=Math.random();var t=new Date(); document.write("<div id=\"bsaz_1789\" class=\"adblock\">"+output1789+"</div>");}bsa1789(ShowAdHereBanner1789,BannerStyles1789,Vertical1789,RepeatAll1789,NoFollowAll1789);function shuffle(myArray){ var i = myArray.length;if ( i == 0 ) return false; while(--i) {var j=Math.floor(Math.random()*(i+1));var tempi = myArray[i];var tempj = myArray[j];myArray[i] = tempj;myArray[j] = tempi;}}function build_ad_array(totalAds){var rand = Math.floor(Math.random()*totalAds+1);var adArray = new Array();for(i=0;i<totalAds;i++){adArray[i] = i;}return adArray;}function ad_output(ads,i,Width,Height,NoFollowAll){var Ad_Output = '<a href="' +ads[i][2]+ '" title="' +ads[i][3]+ '" id="bsa_' +ads[i][0]+ '" target="_blank"'; if( (ads[i][5] == 1) || (NoFollowAll1789 == true) ){Ad_Output += ' rel="nofollow"';};Ad_Output += '><img src="' +ads[i][1]+ '" width="' +Width+ '" height="' +Height+ '" alt="' +ads[i][4]+ '"';Ad_Output += '/></a>';return Ad_Output;}function showStyles(BannerStyles,StyleID,Width,Height,Vertical){styleCode = "";var newWidth = Width - 2;var newHeight = Height - 2;if(Vertical == false){var BlockWidth = "100%";} else {var BlockWidth = Width + "px";}styleCode += "<style type=text/css>";styleCode += "div#bsaz_1789." + StyleID + " {width:" + BlockWidth + ";display:block;}";styleCode += " div#bsaz_1789." + StyleID + " a{width:" + Width + "px;} div#bsaz_1789." + StyleID + " a img{padding:0;} div#bsaz_1789." + StyleID + " a em{font-style:normal;}";for(i=0;i<BannerStyles.length;i++){styleCode += " div#bsaz_1789." + StyleID + " " + BannerStyles[i];}if(Vertical == true){styleCode += " div#bsaz_1789." + StyleID + " a{margin-right:0;}";}if(Width < "100"){styleCode += "div#bsaz_1789." + StyleID + " a em{display:block;text-indent:-9000px;} div#bsaz_1789." + StyleID + " a{height:" + Height + ";line-height:0;} div#bsaz_1789." + StyleID + " a.adhere{font-size:0;}";}styleCode += " div#bsaz_1789." + StyleID + " a.adhere{width:" + Width + "px;height:" + Height + "px;line-height:" + Height*8 + "%;}";styleCode += " html>body div#bsaz_1789." + StyleID + " a.adhere{width:" + newWidth + "px;height:" + newHeight + "px;} div#bsaz_1789." + StyleID + " img.s{height:0;width:0;}</style>";return styleCode;} document.write(unescape("%3Cscript src='"+document.location.protocol+"//s3.buysellads.com/stats.js?v="+Date.parse(new Date())+"' type='text/javascript'%3E%3C/script%3E"));