(self.webpackChunkporta_berita=self.webpackChunkporta_berita||[]).push([[173],{2458:(e,t,r)=>{var s,o=Object.create,a=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,n=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,h=(e,t,r,s)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of l(t))p.call(e,o)||o===r||a(e,o,{get:()=>t[o],enumerable:!(s=i(t,o))||s.enumerable});return e},u=(e,t,r)=>(((e,t,r)=>{t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),c={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(c,{default:()=>b}),e.exports=(s=c,h(a({},"__esModule",{value:!0}),s));var y=((e,t,r)=>(r=null!=e?o(n(e)):{},h(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)))(r(5043)),d=r(2206),f=r(1520);const m=e=>e.replace("/manage/videos","");class b extends y.Component{constructor(){super(...arguments),u(this,"callPlayer",d.callPlayer),u(this,"duration",null),u(this,"currentTime",null),u(this,"secondsLoaded",null),u(this,"mute",(()=>{this.setMuted(!0)})),u(this,"unmute",(()=>{this.setMuted(!1)})),u(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){this.duration=null,(0,d.getSDK)("https://player.vimeo.com/api/player.js","Vimeo").then((t=>{if(!this.container)return;const{playerOptions:r,title:s}=this.props.config;this.player=new t.Player(this.container,{url:m(e),autoplay:this.props.playing,muted:this.props.muted,loop:this.props.loop,playsinline:this.props.playsinline,controls:this.props.controls,...r}),this.player.ready().then((()=>{const e=this.container.querySelector("iframe");e.style.width="100%",e.style.height="100%",s&&(e.title=s)})).catch(this.props.onError),this.player.on("loaded",(()=>{this.props.onReady(),this.refreshDuration()})),this.player.on("play",(()=>{this.props.onPlay(),this.refreshDuration()})),this.player.on("pause",this.props.onPause),this.player.on("seeked",(e=>this.props.onSeek(e.seconds))),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",(e=>{let{seconds:t}=e;this.currentTime=t})),this.player.on("progress",(e=>{let{seconds:t}=e;this.secondsLoaded=t})),this.player.on("bufferstart",this.props.onBuffer),this.player.on("bufferend",this.props.onBufferEnd),this.player.on("playbackratechange",(e=>this.props.onPlaybackRateChange(e.playbackRate)))}),this.props.onError)}refreshDuration(){this.player.getDuration().then((e=>{this.duration=e}))}play(){const e=this.callPlayer("play");e&&e.catch(this.props.onError)}pause(){this.callPlayer("pause")}stop(){this.callPlayer("unload")}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setMuted(e){this.callPlayer("setMuted",e)}setLoop(e){this.callPlayer("setLoop",e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){const{display:e}=this.props,t={width:"100%",height:"100%",overflow:"hidden",display:e};return y.default.createElement("div",{key:this.props.url,ref:this.ref,style:t})}}u(b,"displayName","Vimeo"),u(b,"canPlay",f.canPlay.vimeo),u(b,"forceLoad",!0)}}]);
//# sourceMappingURL=reactPlayerVimeo.c958f1b0.chunk.js.map