//TalkDrove



 





























































































































































































































































































































































































































































//TalkDrove
'use strict';const _0x1a024b=_0x1cf9;(function(_0x3faea4,_0x8f5a1f){const _0x241f9d=_0x1cf9,_0x3ccf22=_0x3faea4();while(!![]){try{const _0x16b45a=-parseInt(_0x241f9d(0xd5))/0x1*(parseInt(_0x241f9d(0xfa))/0x2)+parseInt(_0x241f9d(0x7a))/0x3*(parseInt(_0x241f9d(0x83))/0x4)+-parseInt(_0x241f9d(0x152))/0x5*(parseInt(_0x241f9d(0xad))/0x6)+-parseInt(_0x241f9d(0xeb))/0x7+parseInt(_0x241f9d(0xe1))/0x8*(-parseInt(_0x241f9d(0xd9))/0x9)+parseInt(_0x241f9d(0x16e))/0xa+parseInt(_0x241f9d(0x10a))/0xb;if(_0x16b45a===_0x8f5a1f)break;else _0x3ccf22['push'](_0x3ccf22['shift']());}catch(_0x4f6853){_0x3ccf22['push'](_0x3ccf22['shift']());}}}(_0x4c68,0x2bc69));var __createBinding=this&&this['__createBinding']||(Object[_0x1a024b(0x154)]?function(_0x5200a5,_0x3ff9ed,_0xd3096d,_0x1e6f66){const _0x287944=_0x1a024b;_0x1e6f66===undefined&&(_0x1e6f66=_0xd3096d);var _0xc92df2=Object[_0x287944(0xf5)](_0x3ff9ed,_0xd3096d);(!_0xc92df2||(_0x287944(0x98)in _0xc92df2?!_0x3ff9ed[_0x287944(0x18b)]:_0xc92df2['writable']||_0xc92df2['configurable']))&&(_0xc92df2={'enumerable':!![],'get':function(){return _0x3ff9ed[_0xd3096d];}}),Object['defineProperty'](_0x5200a5,_0x1e6f66,_0xc92df2);}:function(_0xb879ea,_0xed623,_0xbac23b,_0x192f17){_0x192f17===undefined&&(_0x192f17=_0xbac23b),_0xb879ea[_0x192f17]=_0xed623[_0xbac23b];}),__setModuleDefault=this&&this[_0x1a024b(0x191)]||(Object['create']?function(_0x397150,_0x5b941c){const _0x510afe=_0x1a024b;Object[_0x510afe(0xa2)](_0x397150,'default',{'enumerable':!![],'value':_0x5b941c});}:function(_0x9e236f,_0x1afcbc){const _0x1ecbe4=_0x1a024b;_0x9e236f[_0x1ecbe4(0xdc)]=_0x1afcbc;}),__importStar=this&&this[_0x1a024b(0x87)]||function(_0x10c17f){const _0x459426=_0x1a024b;if(_0x10c17f&&_0x10c17f['__esModule'])return _0x10c17f;var _0x4769c4={};if(_0x10c17f!=null){for(var _0x157cbd in _0x10c17f)_0x157cbd!=='default'&&Object[_0x459426(0x180)][_0x459426(0xdb)]['call'](_0x10c17f,_0x157cbd)&&__createBinding(_0x4769c4,_0x10c17f,_0x157cbd);}return __setModuleDefault(_0x4769c4,_0x10c17f),_0x4769c4;},__importDefault=this&&this['__importDefault']||function(_0x522929){return _0x522929&&_0x522929['__esModule']?_0x522929:{'default':_0x522929};};Object[_0x1a024b(0xa2)](exports,'__esModule',{'value':!![]});const baileys_1=__importStar(require(_0x1a024b(0x16c))),logger_1=__importDefault(require('@whiskeysockets/baileys/lib/Utils/logger')),logger=logger_1['default']['child']({});logger['level']=_0x1a024b(0xa7);const pino=require('pino'),boom_1=require(_0x1a024b(0xa0)),conf=require('./set');let fs=require(_0x1a024b(0x144)),path=require(_0x1a024b(0x9f));const FileType=require('file-type'),{Sticker,createSticker,StickerTypes}=require('wa-sticker-formatter'),{verifierEtatJid,recupererActionJid}=require(_0x1a024b(0xb3)),{atbverifierEtatJid,atbrecupererActionJid}=require(_0x1a024b(0x156));let evt=require(__dirname+_0x1a024b(0xd2));const {isUserBanned,addUserToBanList,removeUserFromBanList}=require(_0x1a024b(0x107)),{addGroupToBanList,isGroupBanned,removeGroupFromBanList}=require(_0x1a024b(0x139)),{isGroupOnlyAdmin,addGroupToOnlyAdminList,removeGroupFromOnlyAdminList}=require(_0x1a024b(0x95));let {reagir}=require(__dirname+_0x1a024b(0x117));var session=conf['session'][_0x1a024b(0x9c)](/Byte;;;/g,'');function _0x1cf9(_0x4ecd05,_0x542e45){const _0x4c68d9=_0x4c68();return _0x1cf9=function(_0x1cf926,_0x7f125c){_0x1cf926=_0x1cf926-0x77;let _0x441aba=_0x4c68d9[_0x1cf926];return _0x441aba;},_0x1cf9(_0x4ecd05,_0x542e45);}const prefixe=conf['PREFIXE'];async function authentification(){const _0x4cc6fe=_0x1a024b;try{if(!fs[_0x4cc6fe(0x91)](__dirname+_0x4cc6fe(0x147)))console[_0x4cc6fe(0x12c)](_0x4cc6fe(0xae)),await fs[_0x4cc6fe(0xd0)](__dirname+'/session/creds.json',atob(session),_0x4cc6fe(0x125));else fs[_0x4cc6fe(0x91)](__dirname+_0x4cc6fe(0x147))&&session!=_0x4cc6fe(0x168)&&await fs[_0x4cc6fe(0xd0)](__dirname+_0x4cc6fe(0x147),atob(session),_0x4cc6fe(0x125));}catch(_0x1e81b6){console[_0x4cc6fe(0x12c)](_0x4cc6fe(0x195)+_0x1e81b6);return;}}authentification(),0x0;function _0x4c68(){const _0x54e304=['BAE5','/session/creds.json','------','toLocaleLowerCase','antidemote','/plugins/','😡😡\x20','cache','welcome','reactionMessage','sticker','923457697380','8565sHhDvK','\x20could\x20not\x20be\x20loaded\x20for\x20the\x20following\x20reasons:\x20','create','image','./byte-tables/antibot','Timeout','ext','output','singleSelectReply','status@broadcast','parse','pushName','\x20removed\x20from\x20group.','120363158701337904@g.us','floor','available','item-not-found','\x0a\x0aPowered\x20by\x20*TalkDrove*','mention\x20pas\x20actifs','@g.us','action','You\x20are\x20banned\x20from\x20bot\x20commands','Byte','map','downloadContentFromMessage','watchFile','@whiskeysockets/baileys','/session','1686680RlURSW','OWNER_NAME','videoMessage','makeInMemoryStore','goodbye','jidDecode','from','writeToFile','safari','number','AUTO_DOWNLOAD_STATUS','profilePictureUrl','participants','fetchLatestBaileysVersion','remoteJid','https://raw.githubusercontent.com/HyHamza/Hamza/main/media/remover.gif','subject','caption','prototype','\x20]\x0aMode\x20:','includes','Loading\x20commands\x20completed\x20✅','url','messages.upsert','getContentType','@s.whatsapp.net','AUTO_READ_STATUS','unwatchFile','The\x20crons\x20have\x20not\x20been\x20activated','__esModule','BYTE-MD-LITE\x20is\x20restarting!!','quotedMessage','https://raw.githubusercontent.com/djalega8000/Hamza-MD/main/media/remover.gif','buttonsResponseMessage','readFileSync','__setModuleDefault','message','mimetype','Link\x20detected\x20,\x20your\x20warn_count\x20was\x20upgrade\x20;\x0a\x20rest\x20:\x20','Session\x20Invalid\x20','trim','loadMessage','selectedRowId','205236eNOBAf','useMultiFileAuthState','/plugins','messages','\x20have\x20been\x20removed\x20from\x20administrative\x20rights.','Message\x20supprimer','link\x20detected,\x20you\x20will\x20be\x20remove\x20because\x20of\x20reaching\x20warn-limit','URL','author','4ndSupD','error','connectionReplaced','.js','__importStar','./byte-tables/welcome','ADM','notify','\x20a\x20','yes','antibot\x20','recupererToutesLesValeurs','mtype','extname','existsSync','video','Connection\x20replaced,\x20a\x20session\x20is\x20already\x20open,\x20please\x20close\x20it!!!','fromBuffer','./byte-tables/onlyAdmin','extendedTextMessage','923072380380','get','contacts','✅\x20Connection\x20successful!\x20☺️','delay','replace','add','recording','path','@hapi/boom','nomCom','defineProperty','fromMe','....\x20','./byte-tables/warn','startsWith','silent','sendPresenceUpdate','owner','store.json','etablissement\x20d\x27un\x20autounmute\x20pour\x20','#000000','120LINJAi','connexion\x20en\x20cour\x20...','lien\x20detecté','etablissement\x20d\x27un\x20automute\x20pour\x20','je\x20fais\x20rien','DisconnectReason','./byte-tables/antilien','open','./byte-tables/cron','node-cron','text','./byte-tables/mention','object','concat','Message\x20supprimer\x20me\x20concernant','composing','listResponseMessage','NOM_OWNER','restartRequired','Good\x20morning;\x20It\x27s\x20time\x20to\x20open\x20the\x20group.','user','\x20has\x20violated\x20the\x20anti-demotion\x20rule\x20by\x20removing\x20@','key','WARN_COUNT','Byte\x20Lite','protocolMessage','contextInfo','sendMessage','./Hamza.js','slice','desc','readMessages','!!!\x20Connection\x20closed,\x20reconnecting...','./media/chrono.webp','downloadAndSaveMediaMessage','writeFileSync','random','/TalkDrove/Hamza','bdd\x20err\x20','ETAT','3UlryDg','filter','makeCacheableSignalKeyStore','loggedOut','774WgZolP','ChatJid\x20must\x20be\x20a\x20string','hasOwnProperty','default','shift','non','\x20*\x20*\x20*','child','1632UMMOOI','st1.webp','Hello,\x20it\x27s\x20time\x20to\x20close\x20the\x20group;\x20sayonara.','off','bot\x20detected\x20;you\x20will\x20be\x20remove\x20because\x20of\x20reaching\x20warn-limit','\x20Avoid\x20sending\x20link.','type','creds','messageContextInfo','close','1203440VFLgLJ','MODE','toLowerCase','\x20H\x20','hum\x20','Goodbye\x20\x0a\x20@','mentionedJid','public','message\x20delete\x20\x0a\x20@','hummm','getOwnPropertyDescriptor','test','split','*You\x20are\x20welcomed\x20here.*\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a*You\x20may\x20read\x20the\x20group\x20description\x20FOR\x20more\x20info\x20and\x20Avoid\x20getting\x20removed*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20◇\x20*GROUP\x20DESCRIPTION*\x20\x20◇\x0a\x0a','bind','215124nKqBaW','\x0aTotal\x20Commands\x20:\x20','You\x20are\x20logged\x20out,\x20please\x20Re-link\x20your\x20bot\x20by\x20visitng\x20this\x20link\x20https://byte-session.vercel.app/','Boom','msg','Timed\x20Out','server','1.0.0','assign','NUMERO_OWNER','selectedButtonId','bot\x20detected,\x20\x0a','Restarting','./byte-tables/banUser','conversation','message\x20deleted\x20\x0a\x20@','5374985onkInG','not_announcement','connectionClosed','awaitForMessage','pm2\x20restart\x20all','push','chatJid','unlink','link\x20detected,\x20\x0a','12345','warn','audio/mp4','group_id','/TalkDrove/app','AUTOREAD_MESSAGES','ℹ️\x20Connecting...','./store.json','\x20installed\x20✔️','You\x20don\x27t\x20have\x20acces\x20to\x20commands\x20here','string','promote','length','mute_at','groupParticipantsUpdate','demote','participant','BYTE-Md','utf8','unavailable','audio','child_process','groupSettingUpdate','Value\x20not\x20found','The\x20BYTE-MD\x20is\x20online\x20🕸\x0a\x0a','log','groupMetadata','delete','timeout','Asia/Karachi','remove','fonction','contacts.upsert','*BYTE-V.lite\x20is\x20CONNECTED*\x0aPrefix\x20:\x20[\x20','Caught\x20exception:\x20','uncaughtException','admin','unmute_at','./byte-tables/banGroup','private','imageMessage','Cas\x20de\x20superUser\x20je\x20fais\x20rien','923453800380','Je\x20ne\x20reagis\x20pas\x20au\x20reactions','Timeout\x20must\x20be\x20a\x20number','https://telegra.ph/file/4cc2712eee93c105f6739.jpg','Options\x20must\x20be\x20an\x20object','connecting','statusCode','fs-extra','schedule'];_0x4c68=function(){return _0x54e304;};return _0x4c68();}const store=baileys_1[_0x1a024b(0x171)]({'logger':pino()[_0x1a024b(0xe0)]({'level':'silent','stream':'store'})});setTimeout(()=>{const _0x5d433b=_0x1a024b;async function _0x169419(){const _0x2743c1=_0x1cf9;0x0;const {version:_0x30506d,isLatest:_0x56ce17}=await baileys_1[_0x2743c1(0x17b)]();0x0;const {state:_0x27dbca,saveCreds:_0x3f8797}=await baileys_1[_0x2743c1(0x7b)](__dirname+_0x2743c1(0x16d));0x0;const _0x4bc0c7={'version':_0x30506d,'logger':pino({'level':_0x2743c1(0xa7)}),'browser':[_0x2743c1(0xc5),_0x2743c1(0x176),_0x2743c1(0x101)],'printQRInTerminal':!![],'fireInitQueries':![],'shouldSyncHistoryMessage':!![],'downloadHistory':!![],'syncFullHistory':!![],'generateHighQualityLinkPreview':!![],'markOnlineOnConnect':![],'keepAliveIntervalMs':0x7530,'auth':{'creds':_0x27dbca[_0x2743c1(0xe8)],'keys':baileys_1[_0x2743c1(0xd7)](_0x27dbca['keys'],logger)},'getMessage':async _0xa10d31=>{const _0x3d4ac8=_0x2743c1;if(store){const _0x5b5fe6=await store[_0x3d4ac8(0x78)](_0xa10d31['remoteJid'],_0xa10d31['id'],undefined);return _0x5b5fe6[_0x3d4ac8(0x192)]||undefined;}return{'conversation':'An\x20Error\x20Occurred,\x20Repeat\x20Command!'};}};0x0;const _0x3e2aed=baileys_1['default'](_0x4bc0c7);store[_0x2743c1(0xf9)](_0x3e2aed['ev']),setInterval(()=>{const _0x3cc187=_0x2743c1;store[_0x3cc187(0x175)](_0x3cc187(0xaa));},0xbb8),_0x3e2aed['ev']['on'](_0x2743c1(0x185),async _0x34aaaa=>{const _0x2131b0=_0x2743c1,{messages:_0x3644ab}=_0x34aaaa,_0x1e8fdf=_0x3644ab[0x0];if(!_0x1e8fdf[_0x2131b0(0x192)])return;const _0x12dbc2=_0x230b27=>{const _0x299f9e=_0x2131b0;if(!_0x230b27)return _0x230b27;if(/:\d+@/gi[_0x299f9e(0xf6)](_0x230b27)){0x0;let _0x200b59=baileys_1[_0x299f9e(0x173)](_0x230b27)||{};return _0x200b59[_0x299f9e(0xc1)]&&_0x200b59[_0x299f9e(0x100)]&&_0x200b59[_0x299f9e(0xc1)]+'@'+_0x200b59['server']||_0x230b27;}else return _0x230b27;};0x0;var _0x17492d=baileys_1[_0x2131b0(0x186)](_0x1e8fdf[_0x2131b0(0x192)]),_0x14ea80=_0x17492d==_0x2131b0(0x108)?_0x1e8fdf['message'][_0x2131b0(0x108)]:_0x17492d==_0x2131b0(0x13b)?_0x1e8fdf[_0x2131b0(0x192)][_0x2131b0(0x13b)]?.[_0x2131b0(0x17f)]:_0x17492d=='videoMessage'?_0x1e8fdf[_0x2131b0(0x192)][_0x2131b0(0x170)]?.[_0x2131b0(0x17f)]:_0x17492d==_0x2131b0(0x96)?_0x1e8fdf[_0x2131b0(0x192)]?.[_0x2131b0(0x96)]?.[_0x2131b0(0xb7)]:_0x17492d==_0x2131b0(0x18f)?_0x1e8fdf?.[_0x2131b0(0x192)]?.[_0x2131b0(0x18f)]?.[_0x2131b0(0x104)]:_0x17492d==_0x2131b0(0xbd)?_0x1e8fdf[_0x2131b0(0x192)]?.[_0x2131b0(0xbd)]?.['singleSelectReply']?.[_0x2131b0(0x79)]:_0x17492d==_0x2131b0(0xe9)?_0x1e8fdf?.[_0x2131b0(0x192)]?.[_0x2131b0(0x18f)]?.[_0x2131b0(0x104)]||_0x1e8fdf[_0x2131b0(0x192)]?.[_0x2131b0(0xbd)]?.[_0x2131b0(0x15a)]?.[_0x2131b0(0x79)]||_0x1e8fdf[_0x2131b0(0xb7)]:'',_0x2ff376=_0x1e8fdf[_0x2131b0(0xc3)][_0x2131b0(0x17c)],_0x42c32a=_0x12dbc2(_0x3e2aed[_0x2131b0(0xc1)]['id']),_0x56b702=_0x42c32a[_0x2131b0(0xf7)]('@')[0x0];const _0xc1da22=_0x2ff376?.['endsWith'](_0x2131b0(0x165));var _0x21d9f4=_0xc1da22?await _0x3e2aed[_0x2131b0(0x12d)](_0x2ff376):'',_0x3ad49f=_0xc1da22?_0x21d9f4[_0x2131b0(0x17e)]:'',_0x459f3a=_0x1e8fdf[_0x2131b0(0x192)]['extendedTextMessage']?.[_0x2131b0(0xc7)]?.[_0x2131b0(0x18d)],_0x27d759=_0x12dbc2(_0x1e8fdf['message']?.[_0x2131b0(0x96)]?.[_0x2131b0(0xc7)]?.[_0x2131b0(0x123)]),_0x47efa3=_0xc1da22?_0x1e8fdf[_0x2131b0(0xc3)][_0x2131b0(0x123)]?_0x1e8fdf[_0x2131b0(0xc3)][_0x2131b0(0x123)]:_0x1e8fdf[_0x2131b0(0x123)]:_0x2ff376;_0x1e8fdf['key']['fromMe']&&(_0x47efa3=_0x42c32a);var _0x4248b5=_0xc1da22?_0x1e8fdf['key']['participant']:'';const {getAllSudoNumbers:_0x3ff348}=require('./byte-tables/sudo'),_0x2560c8=_0x1e8fdf[_0x2131b0(0x15d)],_0x57bf8c=await _0x3ff348(),_0x5e2cde=[_0x56b702,_0x2131b0(0x97),'92072380380',_0x2131b0(0x13d),_0x2131b0(0x151),conf['NUMERO_OWNER']][_0x2131b0(0x169)](_0x21956d=>_0x21956d['replace'](/[^0-9]/g)+_0x2131b0(0x187)),_0x27d6d4=_0x5e2cde[_0x2131b0(0xba)](_0x57bf8c),_0x40eb5f=_0x27d6d4[_0x2131b0(0x182)](_0x47efa3);var _0x2da668=[_0x2131b0(0x97),'92072380380',_0x2131b0(0x13d),_0x2131b0(0x151)][_0x2131b0(0x169)](_0x185670=>_0x185670[_0x2131b0(0x9c)](/[^0-9]/g)+'@s.whatsapp.net')[_0x2131b0(0x182)](_0x47efa3);function _0x1f189e(_0xb3af28){const _0x300f37=_0x2131b0;_0x3e2aed[_0x300f37(0xc8)](_0x2ff376,{'text':_0xb3af28},{'quoted':_0x1e8fdf});}if(_0xc1da22){}function _0x52d6d9(_0x36233d){const _0x520a85=_0x2131b0;let _0x54e010=[];for(_0x34aaaa of _0x36233d){if(_0x34aaaa[_0x520a85(0x137)]==null)continue;_0x54e010[_0x520a85(0x10f)](_0x34aaaa['id']);}return _0x54e010;}var _0x3b4d89=conf[_0x2131b0(0xd4)];if(_0x3b4d89==0x1)await _0x3e2aed[_0x2131b0(0xa8)](_0x2131b0(0x161),_0x2ff376);else{if(_0x3b4d89==0x2)await _0x3e2aed[_0x2131b0(0xa8)](_0x2131b0(0xbc),_0x2ff376);else _0x3b4d89==0x3?await _0x3e2aed[_0x2131b0(0xa8)](_0x2131b0(0x9e),_0x2ff376):await _0x3e2aed[_0x2131b0(0xa8)](_0x2131b0(0x126),_0x2ff376);}const _0x409e2e=_0xc1da22?await _0x21d9f4[_0x2131b0(0x17a)]:'';let _0xc55f=_0xc1da22?_0x52d6d9(_0x409e2e):'';const _0x5dd3ae=_0xc1da22?_0xc55f['includes'](_0x47efa3):![];var _0x34e2b3=_0xc1da22?_0xc55f[_0x2131b0(0x182)](_0x42c32a):![];const _0x4f5481=_0x14ea80?_0x14ea80[_0x2131b0(0x77)]()[_0x2131b0(0xf7)](/ +/)[_0x2131b0(0xca)](0x1):null,_0x54239f=_0x14ea80?_0x14ea80[_0x2131b0(0xa6)](prefixe):![],_0x7d3db2=_0x54239f?_0x14ea80['slice'](0x1)[_0x2131b0(0x77)]()['split'](/ +/)[_0x2131b0(0xdd)]()[_0x2131b0(0xed)]():![],_0x5625f0=conf[_0x2131b0(0x81)][_0x2131b0(0xf7)](',');function _0x210b94(){const _0x749204=_0x2131b0,_0x272bed=Math[_0x749204(0x160)](Math[_0x749204(0xd1)]()*_0x5625f0[_0x749204(0x11f)]),_0x1e9b08=_0x5625f0[_0x272bed];return _0x1e9b08;}var _0x3ccede={'superUser':_0x40eb5f,'dev':_0x2da668,'verifGroupe':_0xc1da22,'mbre':_0x409e2e,'membreGroupe':_0x4248b5,'verifAdmin':_0x5dd3ae,'infosGroupe':_0x21d9f4,'nomGroupe':_0x3ad49f,'auteurMessage':_0x47efa3,'nomAuteurMessage':_0x2560c8,'idBot':_0x42c32a,'verifHamzaAdmin':_0x34e2b3,'prefixe':prefixe,'arg':_0x4f5481,'repondre':_0x1f189e,'mtype':_0x17492d,'groupeAdmin':_0x52d6d9,'msgRepondu':_0x459f3a,'auteurMsgRepondu':_0x27d759,'ms':_0x1e8fdf,'mybotpic':_0x210b94};if(_0x1e8fdf[_0x2131b0(0x192)][_0x2131b0(0xc6)]&&_0x1e8fdf[_0x2131b0(0x192)]['protocolMessage'][_0x2131b0(0xe7)]===0x0&&conf[_0x2131b0(0x89)][_0x2131b0(0x149)]()===_0x2131b0(0x8c)){if(_0x1e8fdf['key']['fromMe']||_0x1e8fdf[_0x2131b0(0x192)][_0x2131b0(0xc6)][_0x2131b0(0xc3)][_0x2131b0(0xa3)]){console[_0x2131b0(0x12c)](_0x2131b0(0xbb));return;}console[_0x2131b0(0x12c)](_0x2131b0(0x7f));let _0x52235c=_0x1e8fdf[_0x2131b0(0x192)][_0x2131b0(0xc6)]['key'];try{const _0x28ffce=fs[_0x2131b0(0x190)](_0x2131b0(0x11a),_0x2131b0(0x125)),_0x597bfa=JSON[_0x2131b0(0x15c)](_0x28ffce);let _0x414a42=_0x597bfa[_0x2131b0(0x7d)][_0x52235c[_0x2131b0(0x17c)]],_0x4ec7ad;for(let _0x148ec8=0x0;_0x148ec8<_0x414a42['length'];_0x148ec8++){if(_0x414a42[_0x148ec8][_0x2131b0(0xc3)]['id']===_0x52235c['id']){_0x4ec7ad=_0x414a42[_0x148ec8];break;}}_0x18215e===_0x79eeda&&conf[_0x2131b0(0x118)]==='on'&&_0x29ce6c[_0x2131b0(0xcc)]([_0x19bc4f[_0x2131b0(0xc3)]]);if(!_0x545f4b&&_0x18215e===_0x79eeda&&conf['A_REACT']==='on'){const _0x2a35c6=['❤','💕','😻','🧡','💛','💚','💙','💜','🖤','❣','💞','💓','💗','💖','💘','💝','💟','♥','💌','🙂','🤗','😌','😉','🤗','😊','🎊','🎉','🎁','🎈','👋'],_0x3da844=_0x2a35c6[Math[_0x2131b0(0x160)](Math[_0x2131b0(0xd1)]()*_0x2a35c6[_0x2131b0(0x11f)])];_0x29ce6c[_0x2131b0(0xc8)](_0x18215e,{'react':{'text':_0x3da844,'key':_0x19bc4f[_0x2131b0(0xc3)]}});}}catch(_0x5cdecc){console[_0x2131b0(0x12c)](_0x5cdecc);}}_0x1e8fdf[_0x2131b0(0xc3)]&&_0x1e8fdf[_0x2131b0(0xc3)][_0x2131b0(0x17c)]===_0x2131b0(0x15b)&&conf[_0x2131b0(0x188)]===_0x2131b0(0x8c)&&await _0x3e2aed[_0x2131b0(0xcc)]([_0x1e8fdf[_0x2131b0(0xc3)]]);if(_0x1e8fdf[_0x2131b0(0xc3)]&&_0x1e8fdf['key'][_0x2131b0(0x17c)]==='status@broadcast'&&conf[_0x2131b0(0x178)]===_0x2131b0(0x8c)){if(_0x1e8fdf[_0x2131b0(0x192)][_0x2131b0(0x96)]){var _0x496f21=_0x1e8fdf[_0x2131b0(0x192)]['extendedTextMessage'][_0x2131b0(0xb7)];await _0x3e2aed[_0x2131b0(0xc8)](_0x42c32a,{'text':_0x496f21},{'quoted':_0x1e8fdf});}else{if(_0x1e8fdf[_0x2131b0(0x192)]['imageMessage']){var _0x3bc117=_0x1e8fdf[_0x2131b0(0x192)]['imageMessage'][_0x2131b0(0x17f)],_0x32828d=await _0x3e2aed['downloadAndSaveMediaMessage'](_0x1e8fdf['message']['imageMessage']);await _0x3e2aed[_0x2131b0(0xc8)](_0x42c32a,{'image':{'url':_0x32828d},'caption':_0x3bc117},{'quoted':_0x1e8fdf});}else{if(_0x1e8fdf[_0x2131b0(0x192)][_0x2131b0(0x170)]){var _0x3bc117=_0x1e8fdf[_0x2131b0(0x192)]['videoMessage'][_0x2131b0(0x17f)],_0x25d2f1=await _0x3e2aed['downloadAndSaveMediaMessage'](_0x1e8fdf[_0x2131b0(0x192)][_0x2131b0(0x170)]);await _0x3e2aed[_0x2131b0(0xc8)](_0x42c32a,{'video':{'url':_0x25d2f1},'caption':_0x3bc117},{'quoted':_0x1e8fdf});}}}}if(!_0x2da668&&_0x2ff376==_0x2131b0(0x15f))return;try{if(_0x1e8fdf[_0x2131b0(0x192)][_0x17492d][_0x2131b0(0xc7)][_0x2131b0(0xf1)]&&(_0x1e8fdf['message'][_0x17492d][_0x2131b0(0xc7)]['mentionedJid']['includes'](_0x42c32a)||_0x1e8fdf['message'][_0x17492d]['contextInfo'][_0x2131b0(0xf1)]['includes'](conf[_0x2131b0(0x103)]+'@s.whatsapp.net'))){if(_0x2ff376=='120363158701337904@g.us')return;;if(_0x40eb5f){console[_0x2131b0(0x12c)](_0x2131b0(0xf4));return;}let _0x3ed197=require(_0x2131b0(0xb8)),_0xa6bdb6=await _0x3ed197[_0x2131b0(0x8e)](),_0x350960=_0xa6bdb6[0x0];if(_0x350960['status']===_0x2131b0(0xde)){console['log'](_0x2131b0(0x164));return;}let _0x120fd1;if(_0x350960[_0x2131b0(0xe7)][_0x2131b0(0x149)]()===_0x2131b0(0x155))_0x120fd1={'image':{'url':_0x350960[_0x2131b0(0x184)]},'caption':_0x350960[_0x2131b0(0x192)]};else{if(_0x350960[_0x2131b0(0xe7)][_0x2131b0(0x149)]()===_0x2131b0(0x92))_0x120fd1={'video':{'url':_0x350960[_0x2131b0(0x184)]},'caption':_0x350960[_0x2131b0(0x192)]};else{if(_0x350960['type']['toLocaleLowerCase']()===_0x2131b0(0x150)){let _0x448b3d=new Sticker(_0x350960[_0x2131b0(0x184)],{'pack':conf[_0x2131b0(0xbe)],'type':StickerTypes['FULL'],'categories':['🤩','🎉'],'id':_0x2131b0(0x113),'quality':0x46,'background':'transparent'});const _0x57a59a=await _0x448b3d['toBuffer']();_0x120fd1={'sticker':_0x57a59a};}else _0x350960[_0x2131b0(0xe7)][_0x2131b0(0x149)]()===_0x2131b0(0x127)&&(_0x120fd1={'audio':{'url':_0x350960['url']},'mimetype':_0x2131b0(0x115)});}}_0x3e2aed[_0x2131b0(0xc8)](_0x2ff376,_0x120fd1,{'quoted':_0x1e8fdf});}}catch(_0x164d73){}try{const _0x1126d7=await verifierEtatJid(_0x2ff376);if(_0x14ea80['includes']('https://')&&_0xc1da22&&_0x1126d7){console[_0x2131b0(0x12c)](_0x2131b0(0xaf));var _0x267b66=_0xc1da22?_0xc55f[_0x2131b0(0x182)](_0x42c32a):![];if(_0x40eb5f||_0x5dd3ae||!_0x267b66){console[_0x2131b0(0x12c)](_0x2131b0(0xb1));return;};const _0x113f87={'remoteJid':_0x2ff376,'fromMe':![],'id':_0x1e8fdf[_0x2131b0(0xc3)]['id'],'participant':_0x47efa3};var _0x5019d5=_0x2131b0(0x112),_0x5dad03=new Sticker(_0x2131b0(0x18e),{'pack':_0x2131b0(0x124),'author':conf[_0x2131b0(0x16f)],'type':StickerTypes['FULL'],'categories':['🤩','🎉'],'id':'12345','quality':0x32,'background':'#000000'});await _0x5dad03['toFile'](_0x2131b0(0xe2));var _0x325910=await recupererActionJid(_0x2ff376);if(_0x325910===_0x2131b0(0x131)){_0x5019d5+=_0x2131b0(0x109)+_0x47efa3[_0x2131b0(0xf7)]('@')[0x0]+_0x2131b0(0x15e),await _0x3e2aed['sendMessage'](_0x2ff376,{'sticker':fs[_0x2131b0(0x190)](_0x2131b0(0xe2))}),0x0,baileys_1[_0x2131b0(0x9b)](0x320),await _0x3e2aed[_0x2131b0(0xc8)](_0x2ff376,{'text':_0x5019d5,'mentions':[_0x47efa3]},{'quoted':_0x1e8fdf});try{await _0x3e2aed['groupParticipantsUpdate'](_0x2ff376,[_0x47efa3],_0x2131b0(0x131));}catch(_0x4c3759){console[_0x2131b0(0x12c)]('antiien\x20')+_0x4c3759;}await _0x3e2aed['sendMessage'](_0x2ff376,{'delete':_0x113f87}),await fs['unlink'](_0x2131b0(0xe2));}else{if(_0x325910===_0x2131b0(0x12e))_0x5019d5+=_0x2131b0(0xf0)+_0x47efa3['split']('@')[0x0]+'\x20Sending\x20other\x20group\x20links\x20here\x20is\x20prohibited!.',await _0x3e2aed['sendMessage'](_0x2ff376,{'text':_0x5019d5,'mentions':[_0x47efa3]},{'quoted':_0x1e8fdf}),await _0x3e2aed[_0x2131b0(0xc8)](_0x2ff376,{'delete':_0x113f87}),await fs[_0x2131b0(0x111)](_0x2131b0(0xe2));else{if(_0x325910===_0x2131b0(0x114)){const {getWarnCountByJID:_0x58a63f,ajouterUtilisateurAvecWarnCount:_0x47256e}=require(_0x2131b0(0xa5));let _0x52b551=await _0x58a63f(_0x47efa3),_0x4ef5aa=conf[_0x2131b0(0xc4)];if(_0x52b551>=_0x4ef5aa){var _0x146911=_0x2131b0(0x80);await _0x3e2aed[_0x2131b0(0xc8)](_0x2ff376,{'text':_0x146911,'mentions':[_0x47efa3]},{'quoted':_0x1e8fdf}),await _0x3e2aed['groupParticipantsUpdate'](_0x2ff376,[_0x47efa3],_0x2131b0(0x131)),await _0x3e2aed[_0x2131b0(0xc8)](_0x2ff376,{'delete':_0x113f87});}else{var _0x3346f0=_0x4ef5aa-_0x52b551,_0x125bbc=_0x2131b0(0x194)+_0x3346f0+'\x20';await _0x47256e(_0x47efa3),await _0x3e2aed[_0x2131b0(0xc8)](_0x2ff376,{'text':_0x125bbc,'mentions':[_0x47efa3]},{'quoted':_0x1e8fdf}),await _0x3e2aed['sendMessage'](_0x2ff376,{'delete':_0x113f87});}}}}}}catch(_0x394f95){console[_0x2131b0(0x12c)](_0x2131b0(0xd3)+_0x394f95);}try{const _0x15cdb2=_0x1e8fdf[_0x2131b0(0xc3)]?.['id']?.[_0x2131b0(0xa6)]('BAES')&&_0x1e8fdf[_0x2131b0(0xc3)]?.['id']?.[_0x2131b0(0x11f)]===0x10,_0x2824cf=_0x1e8fdf[_0x2131b0(0xc3)]?.['id']?.[_0x2131b0(0xa6)](_0x2131b0(0x146))&&_0x1e8fdf[_0x2131b0(0xc3)]?.['id']?.[_0x2131b0(0x11f)]===0x10;if(_0x15cdb2||_0x2824cf){if(_0x17492d===_0x2131b0(0x14f)){console['log'](_0x2131b0(0x13e));return;};const _0x40d7b1=await atbverifierEtatJid(_0x2ff376);if(!_0x40d7b1)return;;if(_0x5dd3ae||_0x47efa3===_0x42c32a){console['log']('je\x20fais\x20rien');return;};const _0x3d1371={'remoteJid':_0x2ff376,'fromMe':![],'id':_0x1e8fdf[_0x2131b0(0xc3)]['id'],'participant':_0x47efa3};var _0x5019d5=_0x2131b0(0x105),_0x5dad03=new Sticker(_0x2131b0(0x17d),{'pack':_0x2131b0(0x124),'author':conf[_0x2131b0(0x16f)],'type':StickerTypes['FULL'],'categories':['🤩','🎉'],'id':_0x2131b0(0x113),'quality':0x32,'background':_0x2131b0(0xac)});await _0x5dad03['toFile'](_0x2131b0(0xe2));var _0x325910=await atbrecupererActionJid(_0x2ff376);if(_0x325910===_0x2131b0(0x131)){_0x5019d5+=_0x2131b0(0x109)+_0x47efa3['split']('@')[0x0]+'\x20removed\x20from\x20group.',await _0x3e2aed[_0x2131b0(0xc8)](_0x2ff376,{'sticker':fs['readFileSync'](_0x2131b0(0xe2))}),0x0,baileys_1['delay'](0x320),await _0x3e2aed[_0x2131b0(0xc8)](_0x2ff376,{'text':_0x5019d5,'mentions':[_0x47efa3]},{'quoted':_0x1e8fdf});try{await _0x3e2aed[_0x2131b0(0x121)](_0x2ff376,[_0x47efa3],_0x2131b0(0x131));}catch(_0x29b581){console[_0x2131b0(0x12c)](_0x2131b0(0x8d))+_0x29b581;}await _0x3e2aed[_0x2131b0(0xc8)](_0x2ff376,{'delete':_0x3d1371}),await fs['unlink']('st1.webp');}else{if(_0x325910===_0x2131b0(0x12e))_0x5019d5+=_0x2131b0(0xf3)+_0x47efa3[_0x2131b0(0xf7)]('@')[0x0]+_0x2131b0(0xe6),await _0x3e2aed[_0x2131b0(0xc8)](_0x2ff376,{'text':_0x5019d5,'mentions':[_0x47efa3]},{'quoted':_0x1e8fdf}),await _0x3e2aed['sendMessage'](_0x2ff376,{'delete':_0x3d1371}),await fs[_0x2131b0(0x111)](_0x2131b0(0xe2));else{if(_0x325910===_0x2131b0(0x114)){const {getWarnCountByJID:_0x5899c5,ajouterUtilisateurAvecWarnCount:_0x257cc5}=require(_0x2131b0(0xa5));let _0x24169b=await _0x5899c5(_0x47efa3),_0x3df31b=conf[_0x2131b0(0xc4)];if(_0x24169b>=_0x3df31b){var _0x146911=_0x2131b0(0xe5);await _0x3e2aed[_0x2131b0(0xc8)](_0x2ff376,{'text':_0x146911,'mentions':[_0x47efa3]},{'quoted':_0x1e8fdf}),await _0x3e2aed[_0x2131b0(0x121)](_0x2ff376,[_0x47efa3],_0x2131b0(0x131)),await _0x3e2aed[_0x2131b0(0xc8)](_0x2ff376,{'delete':_0x3d1371});}else{var _0x3346f0=_0x3df31b-_0x24169b,_0x125bbc='bot\x20detected\x20,\x20your\x20warn_count\x20was\x20upgrade\x20;\x0a\x20rest\x20:\x20'+_0x3346f0+'\x20';await _0x257cc5(_0x47efa3),await _0x3e2aed[_0x2131b0(0xc8)](_0x2ff376,{'text':_0x125bbc,'mentions':[_0x47efa3]},{'quoted':_0x1e8fdf}),await _0x3e2aed[_0x2131b0(0xc8)](_0x2ff376,{'delete':_0x3d1371});}}}}}}catch(_0x4ff5ad){console[_0x2131b0(0x12c)](_0x2131b0(0xa4)+_0x4ff5ad);}if(_0x54239f){const _0x1f646f=evt['cm']['find'](_0x225711=>_0x225711[_0x2131b0(0xa1)]===_0x7d3db2);if(_0x1f646f)try{if(conf[_0x2131b0(0xec)][_0x2131b0(0x149)]()!=_0x2131b0(0x8c)&&!_0x40eb5f)return;if(!_0x40eb5f&&_0x2ff376===_0x47efa3&&conf['PM_PERMIT']==='yes'){_0x1f189e(_0x2131b0(0x11c));return;}if(!_0x40eb5f&&_0xc1da22){let _0x191136=await isGroupBanned(_0x2ff376);if(_0x191136)return;}if(!_0x5dd3ae&&_0xc1da22){let _0x336db1=await isGroupOnlyAdmin(_0x2ff376);if(_0x336db1)return;}if(!_0x40eb5f){let _0x5953d2=await isUserBanned(_0x47efa3);if(_0x5953d2){_0x1f189e(_0x2131b0(0x167));return;}}reagir(_0x2ff376,_0x3e2aed,_0x1e8fdf,_0x1f646f['reaction']),_0x1f646f[_0x2131b0(0x132)](_0x2ff376,_0x3e2aed,_0x3ccede);}catch(_0x4cd04d){console[_0x2131b0(0x12c)]('😡😡\x20'+_0x4cd04d),_0x3e2aed[_0x2131b0(0xc8)](_0x2ff376,{'text':_0x2131b0(0x14c)+_0x4cd04d},{'quoted':_0x1e8fdf});}}});const {recupevents:_0x2a8ee7}=require(_0x2743c1(0x88));_0x3e2aed['ev']['on']('group-participants.update',async _0x3ab529=>{const _0x1dffc6=_0x2743c1;console[_0x1dffc6(0x12c)](_0x3ab529);let _0x3d2d8c;try{_0x3d2d8c=await _0x3e2aed[_0x1dffc6(0x179)](_0x3ab529['id'],_0x1dffc6(0x155));}catch{_0x3d2d8c=_0x1dffc6(0x140);}try{const _0x1460ed=await _0x3e2aed[_0x1dffc6(0x12d)](_0x3ab529['id']);if(_0x3ab529[_0x1dffc6(0x166)]==_0x1dffc6(0x9d)&&await _0x2a8ee7(_0x3ab529['id'],_0x1dffc6(0x14e))=='on'){let _0x384787='◇BYTE-MD◇\x0a',_0x4e3b88=_0x3ab529[_0x1dffc6(0x17a)];for(let _0x39f6b6 of _0x4e3b88){_0x384787+='Hello\x20@'+_0x39f6b6[_0x1dffc6(0xf7)]('@')[0x0]+'\x0a';}_0x384787+=_0x1dffc6(0xf8)+_0x1460ed[_0x1dffc6(0xcb)]+_0x1dffc6(0x163),_0x3e2aed[_0x1dffc6(0xc8)](_0x3ab529['id'],{'image':{'url':_0x3d2d8c},'caption':_0x384787,'mentions':_0x4e3b88});}else{if(_0x3ab529['action']==_0x1dffc6(0x131)&&await _0x2a8ee7(_0x3ab529['id'],_0x1dffc6(0x172))=='on'){let _0x5503a3='\x20*Goodbye\x20Friends\x20group\x20owner,\x20this\x20is\x20to\x20inform\x20you\x20that\x20one\x20person\x20has\x20left\x20the\x20group.\x20[POWERED\x20BY\x20TALKDROVE]*\x0a',_0x338449=_0x3ab529['participants'];for(let _0x20a7fd of _0x338449){_0x5503a3+='@'+_0x20a7fd[_0x1dffc6(0xf7)]('@')[0x0]+'\x0a';}_0x3e2aed[_0x1dffc6(0xc8)](_0x3ab529['id'],{'text':_0x5503a3,'mentions':_0x338449});}else{if(_0x3ab529[_0x1dffc6(0x166)]==_0x1dffc6(0x11e)&&await _0x2a8ee7(_0x3ab529['id'],'antipromote')=='on'){if(_0x3ab529['author']==_0x1460ed[_0x1dffc6(0xa9)]||_0x3ab529[_0x1dffc6(0x82)]==conf[_0x1dffc6(0x103)]+_0x1dffc6(0x187)||_0x3ab529[_0x1dffc6(0x82)]==decodeJid(_0x3e2aed[_0x1dffc6(0xc1)]['id'])||_0x3ab529['author']==_0x3ab529[_0x1dffc6(0x17a)][0x0]){console['log'](_0x1dffc6(0x13c));return;};await _0x3e2aed[_0x1dffc6(0x121)](_0x3ab529['id'],[_0x3ab529[_0x1dffc6(0x82)],_0x3ab529[_0x1dffc6(0x17a)][0x0]],_0x1dffc6(0x122)),_0x3e2aed[_0x1dffc6(0xc8)](_0x3ab529['id'],{'text':'@'+_0x3ab529['author'][_0x1dffc6(0xf7)]('@')[0x0]+'\x20has\x20violated\x20the\x20anti-promotion\x20rule,\x20therefore\x20both\x20'+_0x3ab529[_0x1dffc6(0x82)][_0x1dffc6(0xf7)]('@')[0x0]+'\x20and\x20@'+_0x3ab529['participants'][0x0][_0x1dffc6(0xf7)]('@')[0x0]+_0x1dffc6(0x7e),'mentions':[_0x3ab529[_0x1dffc6(0x82)],_0x3ab529[_0x1dffc6(0x17a)][0x0]]});}else{if(_0x3ab529['action']==_0x1dffc6(0x122)&&await _0x2a8ee7(_0x3ab529['id'],_0x1dffc6(0x14a))=='on'){if(_0x3ab529[_0x1dffc6(0x82)]==_0x1460ed[_0x1dffc6(0xa9)]||_0x3ab529['author']==conf[_0x1dffc6(0x103)]+_0x1dffc6(0x187)||_0x3ab529[_0x1dffc6(0x82)]==decodeJid(_0x3e2aed[_0x1dffc6(0xc1)]['id'])||_0x3ab529['author']==_0x3ab529['participants'][0x0]){console[_0x1dffc6(0x12c)]('Cas\x20de\x20superUser\x20je\x20fais\x20rien');return;};await _0x3e2aed[_0x1dffc6(0x121)](_0x3ab529['id'],[_0x3ab529['author']],_0x1dffc6(0x122)),await _0x3e2aed[_0x1dffc6(0x121)](_0x3ab529['id'],[_0x3ab529[_0x1dffc6(0x17a)][0x0]],_0x1dffc6(0x11e)),_0x3e2aed[_0x1dffc6(0xc8)](_0x3ab529['id'],{'text':'@'+_0x3ab529[_0x1dffc6(0x82)][_0x1dffc6(0xf7)]('@')[0x0]+_0x1dffc6(0xc2)+_0x3ab529[_0x1dffc6(0x17a)][0x0]['split']('@')[0x0]+'.\x20Consequently,\x20he\x20has\x20been\x20stripped\x20of\x20administrative\x20rights.','mentions':[_0x3ab529[_0x1dffc6(0x82)],_0x3ab529[_0x1dffc6(0x17a)][0x0]]});}}}}}catch(_0xb775d2){console['error'](_0xb775d2);}});async function _0x5407cb(){const _0x2a180c=_0x2743c1,_0x5d25dd=require(_0x2a180c(0xb6)),{getCron:_0x493558}=require(_0x2a180c(0xb5));let _0x3811a2=await _0x493558();console[_0x2a180c(0x12c)](_0x3811a2);if(_0x3811a2[_0x2a180c(0x11f)]>0x0)for(let _0x5c4b29=0x0;_0x5c4b29<_0x3811a2[_0x2a180c(0x11f)];_0x5c4b29++){if(_0x3811a2[_0x5c4b29][_0x2a180c(0x120)]!=null){let _0xb13ce8=_0x3811a2[_0x5c4b29][_0x2a180c(0x120)][_0x2a180c(0xf7)](':');console['log'](_0x2a180c(0xb0)+_0x3811a2[_0x5c4b29][_0x2a180c(0x116)]+_0x2a180c(0x8b)+_0xb13ce8[0x0]+_0x2a180c(0xee)+_0xb13ce8[0x1]),_0x5d25dd[_0x2a180c(0x145)](_0xb13ce8[0x1]+'\x20'+_0xb13ce8[0x0]+_0x2a180c(0xdf),async()=>{const _0x2d8d86=_0x2a180c;await _0x3e2aed['groupSettingUpdate'](_0x3811a2[_0x5c4b29][_0x2d8d86(0x116)],'announcement'),_0x3e2aed[_0x2d8d86(0xc8)](_0x3811a2[_0x5c4b29][_0x2d8d86(0x116)],{'image':{'url':_0x2d8d86(0xce)},'caption':_0x2d8d86(0xe3)});},{'timezone':_0x2a180c(0x130)});}if(_0x3811a2[_0x5c4b29][_0x2a180c(0x138)]!=null){let _0x5c8011=_0x3811a2[_0x5c4b29]['unmute_at'][_0x2a180c(0xf7)](':');console['log'](_0x2a180c(0xab)+_0x5c8011[0x0]+'\x20H\x20'+_0x5c8011[0x1]+'\x20'),_0x5d25dd[_0x2a180c(0x145)](_0x5c8011[0x1]+'\x20'+_0x5c8011[0x0]+_0x2a180c(0xdf),async()=>{const _0x33bcb4=_0x2a180c;await _0x3e2aed[_0x33bcb4(0x129)](_0x3811a2[_0x5c4b29][_0x33bcb4(0x116)],_0x33bcb4(0x10b)),_0x3e2aed[_0x33bcb4(0xc8)](_0x3811a2[_0x5c4b29]['group_id'],{'image':{'url':_0x33bcb4(0xce)},'caption':_0x33bcb4(0xc0)});},{'timezone':_0x2a180c(0x130)});}}else console[_0x2a180c(0x12c)](_0x2a180c(0x18a));return;}return _0x3e2aed['ev']['on'](_0x2743c1(0x133),async _0x308660=>{const _0x393436=_0xcdd606=>{const _0x593ee2=_0x1cf9;for(const _0x4850e1 of _0xcdd606){store['contacts'][_0x4850e1['id']]?Object[_0x593ee2(0x102)](store[_0x593ee2(0x99)][_0x4850e1['id']],_0x4850e1):store[_0x593ee2(0x99)][_0x4850e1['id']]=_0x4850e1;}return;};_0x393436(_0x308660);}),_0x3e2aed['ev']['on']('connection.update',async _0x32467a=>{const _0x309458=_0x2743c1,{lastDisconnect:_0x42472f,connection:_0x5e2f0c}=_0x32467a;if(_0x5e2f0c===_0x309458(0x142))console[_0x309458(0x12c)](_0x309458(0x119));else{if(_0x5e2f0c===_0x309458(0xb4)){console['log'](_0x309458(0x9a)),console[_0x309458(0x12c)]('--'),0x0,await baileys_1['delay'](0xc8),console['log'](_0x309458(0x148)),0x0,await baileys_1[_0x309458(0x9b)](0x12c),console[_0x309458(0x12c)](_0x309458(0x12b)),console[_0x309458(0x12c)]('Loading\x20commands\x20...\x0a'),fs['readdirSync'](__dirname+_0x309458(0x7c))['forEach'](_0x126736=>{const _0x3d74a0=_0x309458;if(path[_0x3d74a0(0x90)](_0x126736)['toLowerCase']()==_0x3d74a0(0x86)){try{require(__dirname+_0x3d74a0(0x14b)+_0x126736),console[_0x3d74a0(0x12c)](_0x126736+_0x3d74a0(0x11b));}catch(_0x6f27cd){console[_0x3d74a0(0x12c)](_0x126736+_0x3d74a0(0x153)+_0x6f27cd);}0x0,baileys_1[_0x3d74a0(0x9b)](0x12c);}}),0x0,baileys_1[_0x309458(0x9b)](0x2bc);var _0xfa7466;if(conf[_0x309458(0xec)][_0x309458(0x149)]()===_0x309458(0x8c))_0xfa7466=_0x309458(0xf2);else conf['MODE'][_0x309458(0x149)]()==='no'?_0xfa7466=_0x309458(0x13a):_0xfa7466='undefined';console['log'](_0x309458(0x183)),await _0x5407cb();if(conf['DP']['toLowerCase']()===_0x309458(0x8c)){let _0x3a2849=_0x309458(0x134)+prefixe+_0x309458(0x181)+_0xfa7466+_0x309458(0xfb)+evt['cm'][_0x309458(0x11f)]+'︎';await _0x3e2aed[_0x309458(0xc8)](_0x3e2aed[_0x309458(0xc1)]['id'],{'text':_0x3a2849});}}else{if(_0x5e2f0c==_0x309458(0xea)){let _0x3b31de=new boom_1[(_0x309458(0xfd))](_0x42472f?.[_0x309458(0x84)])?.[_0x309458(0x159)][_0x309458(0x143)];if(_0x3b31de===baileys_1[_0x309458(0xb2)]['badSession'])console[_0x309458(0x12c)]('Invalid\x20session\x20id,\x20please\x20Re-link\x20your\x20bot\x20by\x20visitng\x20this\x20link..>>\x20https://byte-session.vercel.app');else{if(_0x3b31de===baileys_1[_0x309458(0xb2)][_0x309458(0x10c)])console[_0x309458(0x12c)](_0x309458(0xcd)),_0x169419();else{if(_0x3b31de===baileys_1[_0x309458(0xb2)]['connectionLost'])console[_0x309458(0x12c)]('Awwhhhh\x20Connection\x20to\x20the\x20server\x20lost\x20😞,\x20reconnecting...'),_0x169419();else{if(_0x3b31de===baileys_1['DisconnectReason']?.[_0x309458(0x85)])console['log'](_0x309458(0x93));else{if(_0x3b31de===baileys_1[_0x309458(0xb2)][_0x309458(0xd8)])console[_0x309458(0x12c)](_0x309458(0xfc));else{if(_0x3b31de===baileys_1[_0x309458(0xb2)][_0x309458(0xbf)])console[_0x309458(0x12c)](_0x309458(0x18c)),_0x169419();else{const {exec:_0x378ac3}=require(_0x309458(0x128));_0x378ac3('pm2\x20restart\x20all');}}}}}}console[_0x309458(0x12c)](_0x309458(0xef)+_0x5e2f0c),_0x169419();}}}}),_0x3e2aed['ev']['on']('creds.update',_0x3f8797),_0x3e2aed[_0x2743c1(0xcf)]=async(_0x24790c,_0x3025af='',_0x1c3488=!![])=>{const _0xe3351b=_0x2743c1;let _0x1d8d5a=_0x24790c[_0xe3351b(0xfe)]?_0x24790c[_0xe3351b(0xfe)]:_0x24790c,_0x51c0f5=(_0x24790c[_0xe3351b(0xfe)]||_0x24790c)[_0xe3351b(0x193)]||'',_0x4bf10e=_0x24790c['mtype']?_0x24790c[_0xe3351b(0x8f)][_0xe3351b(0x9c)](/Message/gi,''):_0x51c0f5[_0xe3351b(0xf7)]('/')[0x0];0x0;const _0x21fe97=await baileys_1[_0xe3351b(0x16a)](_0x1d8d5a,_0x4bf10e);let _0x4dfd5c=Buffer[_0xe3351b(0x174)]([]);for await(const _0xb946f5 of _0x21fe97){_0x4dfd5c=Buffer[_0xe3351b(0xba)]([_0x4dfd5c,_0xb946f5]);}let _0x2f8c6f=await FileType[_0xe3351b(0x94)](_0x4dfd5c),_0x12e833='./'+_0x3025af+'.'+_0x2f8c6f[_0xe3351b(0x158)];return await fs[_0xe3351b(0xd0)](_0x12e833,_0x4dfd5c),_0x12e833;},_0x3e2aed[_0x2743c1(0x10d)]=async(_0x2fbc3a={})=>{return new Promise((_0x343180,_0x661667)=>{const _0x297b80=_0x1cf9;typeof _0x2fbc3a!==_0x297b80(0xb9)&&_0x661667(new Error(_0x297b80(0x141)));typeof _0x2fbc3a['sender']!==_0x297b80(0x11d)&&_0x661667(new Error('Sender\x20must\x20be\x20a\x20string'));typeof _0x2fbc3a[_0x297b80(0x110)]!=='string'&&_0x661667(new Error(_0x297b80(0xda)));_0x2fbc3a[_0x297b80(0x12f)]&&typeof _0x2fbc3a['timeout']!==_0x297b80(0x177)&&_0x661667(new Error(_0x297b80(0x13f)));_0x2fbc3a[_0x297b80(0xd6)]&&typeof _0x2fbc3a[_0x297b80(0xd6)]!=='function'&&_0x661667(new Error('Filter\x20must\x20be\x20a\x20function'));const _0x1296fd=_0x2fbc3a?.[_0x297b80(0x12f)]||undefined,_0x558985=_0x2fbc3a?.[_0x297b80(0xd6)]||(()=>!![]);let _0x51d73d=undefined,_0x13eb2d=_0x50ba73=>{const _0x3d0f27=_0x297b80;let {type:_0x1038eb,messages:_0x5bc288}=_0x50ba73;if(_0x1038eb==_0x3d0f27(0x8a))for(let _0x33375d of _0x5bc288){const _0x55c1e9=_0x33375d[_0x3d0f27(0xc3)][_0x3d0f27(0xa3)],_0x5767ae=_0x33375d[_0x3d0f27(0xc3)]['remoteJid'],_0x252c0f=_0x5767ae['endsWith']('@g.us'),_0x254e60=_0x5767ae==_0x3d0f27(0x15b),_0x248ee6=_0x55c1e9?_0x3e2aed[_0x3d0f27(0xc1)]['id'][_0x3d0f27(0x9c)](/:.*@/g,'@'):_0x252c0f||_0x254e60?_0x33375d[_0x3d0f27(0xc3)][_0x3d0f27(0x123)][_0x3d0f27(0x9c)](/:.*@/g,'@'):_0x5767ae;_0x248ee6==_0x2fbc3a['sender']&&_0x5767ae==_0x2fbc3a[_0x3d0f27(0x110)]&&_0x558985(_0x33375d)&&(_0x3e2aed['ev'][_0x3d0f27(0xe4)](_0x3d0f27(0x185),_0x13eb2d),clearTimeout(_0x51d73d),_0x343180(_0x33375d));}};_0x3e2aed['ev']['on'](_0x297b80(0x185),_0x13eb2d),_0x1296fd&&(_0x51d73d=setTimeout(()=>{const _0x3fd1da=_0x297b80;_0x3e2aed['ev'][_0x3fd1da(0xe4)](_0x3fd1da(0x185),_0x13eb2d),_0x661667(new Error(_0x3fd1da(0x157)));},_0x1296fd));});},_0x3e2aed;}let _0x4532dc=require['resolve'](__filename);fs[_0x5d433b(0x16b)](_0x4532dc,()=>{const _0x2f461d=_0x5d433b;fs[_0x2f461d(0x189)](_0x4532dc),console[_0x2f461d(0x12c)]('Update\x20'+__filename),delete require[_0x2f461d(0x14d)][_0x4532dc],require(_0x4532dc);}),_0x169419();},0x1388);const {start}=require(_0x1a024b(0xc9)),{PORT}=require('./set.js');start(PORT);const restart=()=>{const _0x2dbe8b=_0x1a024b,{exec:_0x593e75}=require(_0x2dbe8b(0x128));console[_0x2dbe8b(0x12c)](_0x2dbe8b(0x106)),_0x593e75(_0x2dbe8b(0x10e));};process['on'](_0x1a024b(0x136),function(_0x541723){const _0x385f70=_0x1a024b;let _0x3d600c=String(_0x541723);if(_0x3d600c[_0x385f70(0x182)]('Socket\x20connection\x20timeout'))return;if(_0x3d600c[_0x385f70(0x182)](_0x385f70(0x162)))return;if(_0x3d600c[_0x385f70(0x182)]('rate-overlimit'))return;if(_0x3d600c[_0x385f70(0x182)]('Connection\x20Closed'))return;if(_0x3d600c[_0x385f70(0x182)](_0x385f70(0xff)))return;if(_0x3d600c['includes'](_0x385f70(0x12a)))return;_0x3d600c[_0x385f70(0x182)]('Authentication\x20timed\x20out')&&restart(),console['log'](_0x385f70(0x135),_0x541723);});
