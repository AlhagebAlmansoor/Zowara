//tealium universal tag - utag.428 ut4.0.201706211059, Copyright 2017 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={"ui":"uid","zz_look_site2sitetype":"site","zz_generic_segment":"user_segment","channel_id":"ui_channel","exp1":"ui_xe","user_location":"ui_ip,ui_cn","language":"ui_ln","genis":"ui_gn","nights":"nbrn","city_name":"ui_ct","region_name":"ui_rg","hr":"ui_hr","ut.env":"ui_ev","currency":"ui_cc"};u.extend=[function(a,b){try{if(typeof b['exp1']=='undefined'){try{b['exp1']='';}catch(e){}}}catch(e){utag.DB(e)}},function(a,b,c,d,e,f,g){d=b['site'];if(typeof d=='undefined')return;c=[{'bookings2':'d'},{'mobile':'m'},{'tablet':'t'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['zz_look_site2sitetype']=c[e][f];m=true};};if(m)break};if(!m)b['zz_look_site2sitetype']='d';},function(a,b){try{if(1){try{b['rooms']=(b.rooms==-1)?'1':(b.rooms||'');}catch(e){};try{b['hotel_id_list']=b.hotel_id_list||'';}catch(e){};try{b['adults']=(b.adults==-1)?'2':(b.adults||'');}catch(e){};try{b['children']=(b.children==-1)?'0':(b.children||'');}catch(e){};b['ttv']='1';try{b['zz_is_weekday']=b.date_in&&(new Date(b.date_in).getDay()===0||new Date(b.date_in).getDay()===6?0:1)||'';}catch(e){};try{b['zz_bizbooker']=(b.biz_s==1)?'B':(b.biz_s==2)?'L':(b.biz_p==1)?'PB':'';}catch(e){};try{b['date_in']=(b.date_in==-1)?'':(b.date_in||'');}catch(e){};try{b['date_out']=(b.date_out==-1)?'':(b.date_out||'');}catch(e){};try{b['p1']=b.p1||'';}catch(e){};try{b['language']=b.language.slice(0,2);}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if(b['ui']=='0'){b['ui']=''}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={"base_url":"//static.criteo.net/js/ld/ld.js"
};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
u.loader_cb=function(){u.initialized=true;window.criteo_q=window.criteo_q||[];window.criteo_q.push({event:"setAccount",account:{an:'web-booking.com',cn:u.data.ui_ip,ln:u.data.ui_ln}},{event:"setHashedEmail",email:""},{event:"setCustomerId",id:u.data.uid},{event:"setSiteType",type:u.data.site},{event:"viewHome",user_segment:u.data.user_segment},{event:"viewSearch",ui_channel:u.data.ui_channel,ui_cc:u.data.ui_cc,nbrn:u.data.nbrn,ui_xe:u.data.ui_xe,ui_ip:u.data.ui_ip,ui_gn:u.data.ui_gn,ui_ct:u.data.ui_ct,ui_rg:u.data.ui_rg,ui_ln:u.data.ui_ln,ui_cn:u.data.ui_cn,ui_ev:u.data.ui_ev,ui_hr:u.data.ui_hr});};if(!u.initialized){u.loader({"type":"script","src":u.data.base_url,"cb":u.loader_cb,"loc":"script","id":'utag_428'});}else{u.loader_cb();}
}};utag.o[loader].loader.LOAD(id);})("428","booking.com.main");}catch(error){utag.DB(error);}
