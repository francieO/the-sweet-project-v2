if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("PolarisSectionHeading",["cx","joinClasses","react"],(function(a,b,c,d,e,f,g,h){var i=d("react");a=function(a){var b=a.className;a=a.children;return i.jsx("h2",{className:c("joinClasses")("_acot",b),children:a})};b=a;g["default"]=b}),98);
__d("PolarisTimedSpinner",["PolarisIGCoreSpinner","PolarisPerformanceLogger","PolarisTimer","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g){var h=d("react");e=d("react");var i=e.useEffect,j=e.useRef;function a(a){a.component;var b=a.onTimingSpinner;a.timingEvent;a=babelHelpers.objectWithoutPropertiesLoose(a,["component","onTimingSpinner","timingEvent"]);var e=j();i(function(){e.current=b},[b]);i(function(){var a=d("PolarisTimer").now();return function(){var b=e.current;b!=null&&b(d("PolarisTimer").now()-a)}},[]);return h.jsx(c("PolarisIGCoreSpinner"),babelHelpers["extends"]({},a))}a.displayName=a.name+" [from "+f.id+"]";function b(a,b){return{onTimingSpinner:function(c){var e=a.navigation,f=e.pageIdentifier;e=e.route;e!=null&&e!==""&&f&&d("PolarisPerformanceLogger").logComponentPerformanceTiming({component:b.component,eventType:b.timingEvent,pageId:f,route:e,timeTaken:c})}}}e=d("react-redux-wwwig").connect(b)(a);g["default"]=e}),98);
__d("PolarisFacebookConnectUserListItem",["fbt","PolarisAssetManagerGlyphMapping","PolarisFBConnectHelpers","PolarisIGCoreBorderedIcon","PolarisIGCoreButton","PolarisIGCoreConstants","PolarisIGCoreListItem","PolarisIGCoreText","PolarisIGCoreToast","PolarisNewUserActivatorsStrings","PolarisQueryParams","PolarissuggestedUserSelectors","browserHistory","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g,h){var i=d("react");a=d("react");var j=a.useCallback,k=a.useState,l="connect_to_facebook",m=h._(/*FBT_CALL*/"Connect to Facebook"/*FBT_CALL*/),n=h._(/*FBT_CALL*/"Follow your friends"/*FBT_CALL*/),o=h._(/*FBT_CALL*/"Connect"/*FBT_CALL*/);b=function(a){var b=d("react-redux-wwwig").useSelector(j(function(a){return{canFBConnect:d("PolarissuggestedUserSelectors").shouldDisplayFacebookConnect(a),isLoading:d("PolarissuggestedUserSelectors").isInitialLoad(a)}},[]),d("react-redux-wwwig").shallowEqual),e=b.canFBConnect;b=b.isLoading;var f=k(!1),g=f[0],h=f[1];f=d("PolarisQueryParams").parseQueryParams();f[l]!=null&&f[l].length>0&&(d("browserHistory").browserHistory.replace(d("browserHistory").browserHistory.location.pathname),h(!0));return g?i.jsx(c("PolarisIGCoreToast"),{duration:1500,onClose:function(){return h(!1)},children:d("PolarisNewUserActivatorsStrings").FACEBOOK_COMPLETED}):e&&i.jsx(c("PolarisIGCoreListItem"),{action:i.jsx(c("PolarisIGCoreButton"),{disabled:b,loading:b,onClick:function(){return d("PolarisFBConnectHelpers").redirectToFBOAuth(d("browserHistory").browserHistory.location.pathname+"?"+l+"=true",a.analyticsContext)},children:o}),icon:i.jsx(c("PolarisIGCoreBorderedIcon"),{alt:m,color:"facebook",icon:d("PolarisAssetManagerGlyphMapping").ICONS.FACEBOOK_CIRCLE_FILLED_24,size:c("PolarisIGCoreConstants").AVATAR_SIZES.medium}),subtitle:n,title:i.jsx(c("PolarisIGCoreText").BodyEmphasized,{children:m}),truncateText:!1})};e=b;g["default"]=e}),98);
__d("PolarisIGCoreCard",["PolarisIGCoreBox","react"],(function(a,b,c,d,e,f,g){var h=d("react");a=function(a){var b=a.button,d=a.children,e=a.context,f=a.dangerouslySetClassName,g=a.icon,i=a.onClick,j=a.padding;a=a.width;return h.jsx("div",{onClick:i,role:"button",tabIndex:"-1",children:h.jsxs(c("PolarisIGCoreBox"),{alignItems:"center",border:!0,color:"ig-primary-background",dangerouslySetClassName:f,padding:j,shape:"rounded",width:a,children:[g,d,b,e]})})};b=a;g["default"]=b}),98);
__d("PolarisIGCoreActivatorCard",["PolarisIGCoreBorderedIcon","PolarisIGCoreBox","PolarisIGCoreButton","PolarisIGCoreCard","PolarisIGCoreConstants","PolarisIGCoreText","PolariswithIGCoreUtils","react"],(function(a,b,c,d,e,f,g){var h=d("react");a=function(a){var b=a.bodyText,d=a.buttonText,e=a.headerText,f=a.icon,g=a.iconAlt,i=a.loading,j=a.onClick;a=a.width;return h.jsxs(c("PolarisIGCoreCard"),{button:h.jsx(c("PolarisIGCoreButton"),{loading:i,onClick:j,children:d}),icon:h.jsx(c("PolarisIGCoreBorderedIcon"),{alt:g,icon:f,size:c("PolarisIGCoreConstants").AVATAR_SIZES.large}),padding:3,width:a,children:[h.jsx(c("PolarisIGCoreBox"),{marginTop:4,children:h.jsx(c("PolarisIGCoreText").Section,{children:e})}),h.jsx(c("PolarisIGCoreBox"),{height:65,marginBottom:4,marginTop:4,children:h.jsx(c("PolarisIGCoreText").Body,{color:"ig-secondary-text",textAlign:"center",children:b})})]})};b=c("PolariswithIGCoreUtils")(a);g["default"]=b}),98);
__d("PolarisIGCorePeopleCard",["cx","fbt","PolarisAssetManagerGlyphMapping","PolarisGenericStrings","PolarisIGCoreBorderedIcon","PolarisIGCoreBox","PolarisIGCoreCard","PolarisIGCoreConstants","PolarisIGCoreSVGIconButton","PolarisIGCoreText","PolarisIGCoreXPanoFilledIcon","PolarisUA","PolarisUserAvatar","PolarisUserLink","PolariswithIGCoreUtils","react"],(function(a,b,c,d,e,f,g,h,i){var j=d("react"),k=d("PolarisUA").isMobile()?76:86,l=function(a){a=a.children;return j.jsx(c("PolarisIGCoreText").Footnote,{color:"ig-secondary-text",textAlign:"center",children:a})},m=function(a){var b=a.context,d=a.icon;a=a.title;return j.jsxs(c("PolarisIGCoreBox"),{direction:"row",height:k,justifyContent:"center",paddingY:2,width:"100%",children:[j.jsx(c("PolarisIGCoreBox"),{marginEnd:2,children:d}),j.jsxs(c("PolarisIGCoreBox"),{flex:"grow",children:[j.jsx(c("PolarisIGCoreBox"),{marginBottom:3,children:j.jsx(c("PolarisIGCoreText").BodyEmphasized,{children:a})}),j.jsx(c("PolarisIGCoreBox"),{children:j.jsx(c("PolarisIGCoreText").Footnote,{color:"ig-secondary-text",children:b})})]})]})},n=function(a){var b=a.children,e=a.isPrivate;a=a.username;var f=0;b=j.Children.map(b,function(a){if(typeof a===Boolean)return null;f++;return j.cloneElement(a,{dimension:k})});var g=k*f+(f-1);switch(!0){case e:return j.jsx(m,{context:i._(/*FBT_CALL*/"Follow this account to see their photos and videos"/*FBT_CALL*/),icon:j.jsx(c("PolarisIGCoreBorderedIcon"),{alt:i._(/*FBT_CALL*/"Private account"/*FBT_CALL*/),icon:d("PolarisAssetManagerGlyphMapping").ICONS.LOCK_OUTLINE_24_GREY9}),title:i._(/*FBT_CALL*/"The Account is Private"/*FBT_CALL*/)});case f===0:return j.jsx(m,{context:i._(/*FBT_CALL*/"When {Username of current user} posts, you'll see their photos and videos here."/*FBT_CALL*/,[i._param("Username of current user",a)]),icon:j.jsx(c("PolarisIGCoreBorderedIcon"),{alt:i._(/*FBT_CALL*/"Private account"/*FBT_CALL*/),icon:d("PolarisAssetManagerGlyphMapping").ICONS.CAMERA_OUTLINE_24_GREY9}),title:i._(/*FBT_CALL*/"No Posts Yet"/*FBT_CALL*/)});default:return j.jsx(c("PolarisIGCoreBox"),{direction:"row",flex:"grow",justifyContent:"between",marginTop:d("PolarisUA").isMobile()?0:1,width:g,children:b})}};a=function(a){var b=a.button,e=a.children,f=a.context,g=a.isPrivate,h=a.onClick,i=a.onDismissClick,k=a.onUsernameClick,m=a.src,o=a.subtitle,p=a.username;a=a.width;var q=d("PolarisUA").isMobile()?"_aau5":"_aau6";return j.jsxs(c("PolarisIGCoreCard"),{button:b,context:d("PolarisUA").isMobile()?null:j.jsx(c("PolarisIGCoreBox"),{marginTop:4,children:j.jsx(l,{children:f})}),dangerouslySetClassName:{__className:q},icon:j.jsx(c("PolarisIGCoreBox"),{marginBottom:d("PolarisUA").isMobile()?2:4,marginTop:d("PolarisUA").isMobile()?0:1,children:j.jsx(c("PolarisUserAvatar"),{isLink:!1,profilePictureUrl:m,size:c("PolarisIGCoreConstants").AVATAR_SIZES.XL,username:p})}),onClick:h,padding:4,width:a,children:[j.jsx(c("PolarisUserLink"),{onClick:k,username:p,children:j.jsx(c("PolarisIGCoreText").BodyEmphasized,{display:"truncated",textAlign:"center",zeroMargin:!0,children:p})}),i!=null&&j.jsx(c("PolarisIGCoreBox"),{padding:1,position:"absolute",right:!0,children:j.jsx(c("PolarisIGCoreSVGIconButton"),{onClick:i,children:j.jsx(c("PolarisIGCoreXPanoFilledIcon"),{alt:d("PolarisGenericStrings").DISMISS_TEXT,color:"ig-secondary-text",size:11})})}),j.jsx(c("PolarisIGCoreBox"),{marginBottom:o!==null?2:5,paddingY:2,children:j.jsx(c("PolarisIGCoreText").Body,{color:"ig-secondary-text",textAlign:"center",children:o})}),j.jsxs(c("PolarisIGCoreBox"),{alignItems:"center",flex:"grow",justifyContent:"center",children:[j.jsx(n,{isPrivate:g,username:p,children:e}),d("PolarisUA").isMobile()&&f!=null&&j.jsx(c("PolarisIGCoreBox"),{alignItems:"center",flex:"grow",justifyContent:"center",marginBottom:1,children:j.jsx(l,{children:f})})]})]})};b=c("PolariswithIGCoreUtils")(a);g["default"]=b}),98);
__d("PolarisIGCoreUserCard",["cx","PolarisIGCoreBox","PolarisIGCoreCard","PolarisIGCoreConstants","PolarisIGCoreText","PolarisIGCoreVerifiedBadge","PolarisUserAvatar","PolarisUserLink","PolariswithIGCoreUtils","react"],(function(a,b,c,d,e,f,g,h){var i=d("react");function j(a){var b=33;return a.length<b?a:a.substr(0,b-3)+"\u2026"}function a(a){var b=a.button,d=a.isVerified,e=a.onClick,f=a.onUsernameClick,g=a.src,h=a.subtitle,k=a.username;a=a.width;return i.jsxs(c("PolarisIGCoreCard"),{button:b,icon:i.jsx(c("PolarisUserAvatar"),{canTabFocus:!1,profilePictureUrl:g,size:c("PolarisIGCoreConstants").AVATAR_SIZES.large,username:k}),onClick:e,padding:4,width:a,children:[i.jsx(c("PolarisIGCoreBox"),{marginBottom:2,marginTop:4,width:"100%",children:i.jsx(c("PolarisUserLink"),{className:"_aald",onClick:f,username:k,children:i.jsxs(c("PolarisIGCoreBox"),{alignItems:"center",direction:"row",justifyContent:"center",width:"100%",children:[i.jsx(c("PolarisIGCoreBox"),{flex:"shrink",overflow:"hidden",children:i.jsx(c("PolarisIGCoreText").BodyEmphasized,{"data-target":"username",display:"truncated",title:k,zeroMargin:!0,children:k})}),d&&i.jsx(c("PolarisIGCoreBox"),{marginStart:1,children:i.jsx(c("PolarisIGCoreVerifiedBadge"),{})})]})})}),i.jsx(c("PolarisIGCoreBox"),{height:28,marginBottom:2,children:i.jsx(c("PolarisIGCoreText").Footnote,{breakword:!0,color:"ig-secondary-text",display:"preserve-wrap",textAlign:"center",title:k,children:j(h)})})]})}a.displayName=a.name+" [from "+f.id+"]";a.defaultProps={isVerified:!1};b=c("PolariswithIGCoreUtils")(a);g["default"]=b}),98);
__d("PolarisIGCoreDeck",["cx","PolarisIGCoreActivatorCard","PolarisIGCoreBox","PolarisIGCoreConstants","PolarisIGCorePeopleCard","PolarisIGCoreText","PolarisIGCoreUserCard","PolarisUA","PolarisVirtualHSnapScrollCollapsibleList","PolarisuseIGCoreWindowSize","PolariswithForwardRef","PolariswithIGCoreUtils","lodash-clamp","react"],(function(a,b,c,d,e,f,g,h){var i=d("react");a=d("react");var j=a.useImperativeHandle,k=a.useRef,l=function(a){switch(a.type){case c("PolarisIGCoreActivatorCard"):return"ACTIVATOR";case c("PolarisIGCorePeopleCard"):return"PEOPLE";case c("PolarisIGCoreUserCard"):return"USER"}return"USER"},m=d("PolarisUA").isMobile()?"MOBILE":"DESKTOP",n;b=function(a){var b=a.cardBoxDirection,e=b===void 0?"column":b,f=a.cardType;b=a.children;var g=a.color;g=g===void 0?"ig-secondary-background":g;var h=a.forwardedRef,o=a.hasBlur,p=a.headerText,q=a.onVisibilityChange,r=a.pagerDisabled;r=r===void 0?!1:r;a=a.suffix;var s=k(null);j(h,function(){return{scrollToNext:function(){var a=s.current;a!=null&&a.snapToNext()}}});h=c("PolarisuseIGCoreWindowSize")();h=h.innerWidth;var t=k({first:null,last:null});if(i.Children.count(b)===0)return null;var u=i.Children.map(b,function(b){n=f||l(b);var a=c("PolarisIGCoreConstants").CARD_SIZES[n][m];return i.jsx(c("PolarisIGCoreBox"),{alignItems:"center",direction:e,width:a.CARD_WIDTH+a.GAP_WIDTH,children:i.jsx(c("PolarisIGCoreBox"),{dangerouslySetClassName:{__className:d("PolarisUA").isMobile()&&n==="PEOPLE"?"_aale":""},height:a.HEIGHT,justifyContent:"center",width:a.CARD_WIDTH,children:i.cloneElement(b,{width:a.CARD_WIDTH})})},b.key)});b=function(a){var b=a.leftPct;a=a.rightPct;if(q==null)return;var d=u.length;b=c("lodash-clamp")(Math.floor(b),0,d-1);a=c("lodash-clamp")(Math.floor(a),0,d-1);d=t.current;(d.first!==b||d.last!==a)&&(t.current={first:b,last:a},q(b,a))};var v=c("PolarisIGCoreConstants").CARD_SIZES[n][m],w=d("PolarisUA").isMobile()&&n==="PEOPLE";w=w?(h-v.CARD_WIDTH)/2:v.GUTTER_WIDTH;return i.jsxs(c("PolarisIGCoreBox"),{color:g,children:[p!=null&&i.jsxs(c("PolarisIGCoreBox"),{direction:"row",marginTop:3,paddingX:4,children:[i.jsx(c("PolarisIGCoreBox"),{justifyContent:"around",children:i.jsx(c("PolarisIGCoreText").BodyEmphasized,{children:p})}),a!=null&&i.jsx(c("PolarisIGCoreBox"),{alignItems:"end",flex:"grow",children:a})]}),i.jsx("div",{className:o?"_aalf":"",children:i.jsx(c("PolarisIGCoreBox"),{height:v.HEIGHT,marginBottom:4,marginTop:4,children:i.jsx(c("PolarisVirtualHSnapScrollCollapsibleList"),{gutterWidth:Math.max(0,w-v.GAP_WIDTH/2),itemWidth:v.CARD_WIDTH+v.GAP_WIDTH,onVisibilityChange:b,pagerDisabled:r,scrollRef:s,children:u})})})]})};e=c("PolariswithIGCoreUtils")(c("PolariswithForwardRef")(b));g["default"]=e}),98);
__d("PolarisUserGridItem",["PolarisFollowButtonContainer","PolarisIGCoreUserCard","PolarisrelationshipSelectors","PolarisuserSelectors","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g){var h=d("react"),i=d("react").useCallback;a=function(a){var b=a.analyticsContext,e=a.id,f=a.onFollowClick,g=a.position,j=d("react-redux-wwwig").useSelector(i(function(b){return{relationship:d("PolarisrelationshipSelectors").getRelationship(b.relationships,a.id),user:d("PolarisuserSelectors").getUserById(b,a.id)}},[a.id]),d("react-redux-wwwig").shallowEqual),k=j.relationship;j=j.user;var l=function(){f!=null&&k&&f({index:g,userId:e,followedByViewer:d("PolarisrelationshipSelectors").followedByViewer(k)})},m=function(){a.onUsernameClick({index:g,userId:e})},n=j.profilePictureUrl,o=j.suggestionDescription,p=j.username;return n==null||o==null||p==null?null:h.jsx(c("PolarisIGCoreUserCard"),{button:h.jsx(c("PolarisFollowButtonContainer"),{analyticsContext:b,onClick:l,relationship:k,userId:j.id}),isVerified:j.isVerified,onUsernameClick:m,src:n,subtitle:o,username:p})};b=a;g["default"]=b}),98);
__d("PolarisUserGrid",["PolarisIGCoreBox","PolarisIGCoreDeck","PolarisIGCoreSpinner","PolarisUserGridItem","react"],(function(a,b,c,d,e,f,g){var h=d("react");a=function(a){var b=a.isLoading,d=a.onFollowClick,e=a.onUsernameClick,f=a.onVisibilityChange,g=a.subHeader,i=a.suffix;a=a.userIds;var j=function(a){d&&d(a)},k=function(a,b){f&&f(a,b)},l=function(a){e&&e(a)};return b?h.jsx(c("PolarisIGCoreBox"),{alignItems:"center",marginTop:4,width:"100%",children:h.jsx(c("PolarisIGCoreSpinner"),{})}):h.jsx(c("PolarisIGCoreDeck"),{cardType:"USER",hasBlur:!0,headerText:g,onVisibilityChange:k,suffix:i,children:a.map(function(a,b){return h.jsx(c("PolarisUserGridItem"),{id:a,onFollowClick:j,onUsernameClick:l,position:b},b)})})};b=a;g["default"]=b}),98);
__d("PolarisSuggestedUserList",["fbt","PolarisConnectionsLogger","PolarisFBConnectHelpers","PolarisFacebookConnectUserListItem","PolarisIGCoreBox","PolarisIGCoreDivider","PolarisIGCoreText","PolarisRoutes","PolarisSeeAllLink","PolarisUserActions","PolarisUserGrid","PolarisUserList","PolarissuggestedUserSelectors","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g,h){var i=d("react"),j=d("react").useCallback;a=h._(/*FBT_CALL*/"Suggestions For You"/*FBT_CALL*/);b=function(a){var b=a.analyticsContext,e=a.avatarSize;e=e===void 0?"large":e;var f=a.borderlessFollowButton;f=f===void 0?!1:f;var g=a.backgroundColor;g=g===void 0?"ig-primary-background":g;a.children;var h=a.footer,k=a.hideName;k=k===void 0?!1:k;var l=a.hideStoryRings;l=l===void 0?!1:l;var m=a.hideUpsells;m=m===void 0?!1:m;var n=a.initialRenderCount;n=n===void 0?d("PolarisUserActions").SUL_FETCH_SUGGESTED_COUNT_DEFAULT:n;var o=a.isLoading,p=a.onDismiss,q=a.subHeader,r=a.userIds,s=a.variant;s=s===void 0?"LIST":s;var t=a.viewModule,u={};a=d("react-redux-wwwig").useSelector(j(function(a){return{canFBConnect:d("PolarissuggestedUserSelectors").shouldDisplayFacebookConnect(a)}},[]),d("react-redux-wwwig").shallowEqual);a=a.canFBConnect;var v=function(a){var b=a.followedByViewer,c=a.index;a=a.userId;if(b)return;z("recommended_follow_button_tapped",a,c)},w=function(a){var b=a.index;a=a.userId;z("recommended_username_tapped",a,b)},x=function(a,b){if(r==null)return;for(var a=a;a<=b-1;++a){var c=r[a];u[c]||(z("recommended_user_impression",c,a),u[c]=!0)}},y=function(a){var b=a.index;a=a.userId;u[a]||(z("recommended_user_impression",a,b),u[a]=!0)},z=function(a,c,e){d("PolarisConnectionsLogger").logConnectionAction({eventName:a,position:e,targetId:c,containerModule:b,viewModule:t})};return s==="GRID"?i.jsx(c("PolarisUserGrid"),{avatarSize:e,isLoading:o,onFollowClick:v,onUsernameClick:w,onVisibilityChange:x,subHeader:q,suffix:i.jsx(c("PolarisSeeAllLink"),{href:d("PolarisRoutes").DISCOVER_PEOPLE_PATH}),userIds:r||[]}):i.jsxs(i.Fragment,{children:[q!=null&&i.jsx(c("PolarisIGCoreBox"),{marginBottom:3,marginTop:4,paddingX:3,children:i.jsx(c("PolarisIGCoreText").Section,{children:q})}),i.jsxs(c("PolarisIGCoreBox"),{color:g,paddingY:2,children:[!m&&i.jsxs(i.Fragment,{children:[d("PolarisFBConnectHelpers").checkGraphDifferentiationQE()&&i.jsx(c("PolarisFacebookConnectUserListItem"),{analyticsContext:d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES.discover_people}),a&&d("PolarisFBConnectHelpers").checkGraphDifferentiationQE()&&i.jsx(c("PolarisIGCoreBox"),{paddingY:2,children:i.jsx(c("PolarisIGCoreDivider"),{})})]}),i.jsx(c("PolarisUserList"),{avatarSize:e,avatarTriggerAnalyticsContext:"suggested_user_avatar",borderlessFollowButton:f,hideName:k,hideStoryRings:l,hoverPositionType:"fixed",initialRenderCount:n,isLoading:Boolean(o),onDismiss:p,onFollowClick:v,onScrollChange:y,onUsernameClick:w,truncateListItemText:!0,userIds:r||[],usernameTriggerAnalyticsContext:"suggested_user"}),h]})]})};g.HEADER_TEXT=a;g.SuggestedUserList=b}),98);
__d("PolarisFetchingSuggestedUserList",["fbt","PolarisIGCoreBox","PolarisIGCoreButton","PolarisRoutes","PolarisSuggestedUserList","PolarisUserActions","PolarisdisplayDoneBlocking","PolarissuggestedUserSelectors","hero-tracing-placeholder","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g,h){var i=d("react");a=d("react");var j=a.useCallback,k=a.useEffect,l=function(){return i.jsx(c("PolarisIGCoreBox"),{paddingX:4,paddingY:3,children:i.jsx(c("PolarisIGCoreButton"),{borderless:!0,href:d("PolarisRoutes").DISCOVER_PEOPLE_PATH,children:h._(/*FBT_CALL*/"See All Suggestions"/*FBT_CALL*/)})})};b=function(a){var b=a.analyticsContext,c=a.avatarSize;c=c===void 0?"medium":c;var e=a.backgroundColor,f=a.borderlessFollowButton;f=f===void 0?!1:f;var g=a.count,h=a.footer,m=a.header,n=a.hideName;n=n===void 0?!1:n;var o=a.hideUpsells;o=o===void 0?!1:o;var p=a.initialRenderCount;p=p===void 0?d("PolarisUserActions").SUL_FETCH_SUGGESTED_COUNT_DEFAULT:p;var q=a.onDisplayDone,r=a.variant;r=r===void 0?"LIST":r;a=a.viewModule;var s=d("react-redux-wwwig").useSelector(j(function(a){return{isLoading:a.suggestedUsers.isLoadingSuggestions,suggestedUserIds:d("PolarissuggestedUserSelectors").getSuggestions(a)}},[]),d("react-redux-wwwig").shallowEqual),t=s.isLoading,u=s.suggestedUserIds,v=d("react-redux-wwwig").useDispatch(),w=j(function(a){return v(d("PolarisUserActions").loadSULV2())},[v]);k(function(){u.length===0&&w(d("PolarisUserActions").SUL_FETCH_SUGGESTED_COUNT_DEFAULT)},[w,u.length]);k(function(){u.length>0&&q()},[q,u]);return i.jsxs(i.Fragment,{children:[i.jsx(d("PolarisSuggestedUserList").SuggestedUserList,{analyticsContext:b,avatarSize:c,backgroundColor:e,borderlessFollowButton:f,hideName:n,hideUpsells:o,initialRenderCount:p,isLoading:t,subHeader:m!==void 0?m:d("PolarisSuggestedUserList").HEADER_TEXT,userIds:isNaN(g)?u.slice(0,d("PolarisUserActions").SUL_FETCH_SUGGESTED_COUNT_DEFAULT):u.slice(0,g),variant:r,viewModule:a}),r==="LIST"&&(h!==void 0?h:i.jsx(l,{})),i.jsx(d("hero-tracing-placeholder").HeroHoldTrigger,{description:"FetchingSuggestedUserList",hold:t})]})};e=d("PolarisdisplayDoneBlocking").displayDoneBlocking("FetchingSuggestedUserList",b);g["default"]=e}),98);
__d("PolarisRegInterstitialRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisRegInterstitialRoot.react").__setRef("PolarisRegInterstitialRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisProfileLiveRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisProfileLiveRoot.react").__setRef("PolarisProfileLiveRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisProfileRelatedRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisProfileRelatedRoot.react").__setRef("PolarisProfileRelatedRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisSavedCollectionsRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisSavedCollectionsRoot.react").__setRef("PolarisSavedCollectionsRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisPushPreferencesRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisPushPreferencesRoot.react").__setRef("PolarisPushPreferencesRoot.entrypoint")};g["default"]=a}),98);