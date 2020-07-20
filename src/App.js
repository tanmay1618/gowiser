import React from 'react';
//import logo from './logo.svg';
import ReactJkMusicPlayer from "react-jinke-music-player";
import './App.css';
import './example.less';
import Locale from './config/locale'
//import { createRandomNum } from '../src/utils'
import PLAY_MODE from './config/playMode'
import './styles/index.less'
import Headlines from './Headlines';
import {WhatsappShareButton, WhatsappIcon} from 'react-share';
import axios from 'axios';
import logo from './logo.png';

const audioList1 = [
  {
    name: '22nd June 2020',
    singer: 'gowiser.in',
    cover:
      'http://gowiser.in/audio/logo.png',
    data:'https://gowiser.in/json/22-06-2020.json',
    musicSrc: () => {
      return Promise.resolve(
        'https://res.cloudinary.com/djj9nsqql/video/upload/v1592850392/22nd_June_News_b2tqex.mp3',
      )
    }
  },
  {
    name: '21st June 2020',
    singer: 'gowiser.in',
    cover:
      'http://gowiser.in/audio/logo.png',
    data:'https://gowiser.in/json/21-06-2020.json',
    musicSrc: () => {
      return Promise.resolve(
        'https://res.cloudinary.com/djj9nsqql/video/upload/v1592763466/21st_June_News_hx7b0q.mp3',
      )
    }
  },
  {
    name: '19th June 2020',
    singer: 'gowiser.in',
    cover:
      'http://gowiser.in/audio/logo.png',
    data:'https://gowiser.in/json/19-06-2020.json',
    musicSrc: () => {
      return Promise.resolve(
        'https://res.cloudinary.com/djj9nsqql/video/upload/v1592653176/19th_June_News_grh2hw.mp3',
      )
    }
  },
  {
    name: '18th June 2020',
    singer: 'gowiser.in',
    cover:
      'http://gowiser.in/audio/logo.png',
    data:'https://gowiser.in/json/18-06-2020.json',
    musicSrc: () => {
      return Promise.resolve(
        'https://res.cloudinary.com/djj9nsqql/video/upload/v1592507037/18th_June_2020_jpekeg.mp3',
      )
    }
  },
  {
    name: '17th June 2020',
    singer: 'gowiser.in',
    cover:
      'http://gowiser.in/audio/logo.png',
    data:'https://gowiser.in/json/17-06-2020.json',
    musicSrc: () => {
      return Promise.resolve(
        'https://res.cloudinary.com/djj9nsqql/video/upload/v1592458821/17th_June_News_bxffil.mp3',
      )
    }
  },
  {
    name: '14th June 2020',
    singer: 'gowiser.in',
    cover:
      'http://gowiser.in/audio/logo.png',
    data:'https://gowiser.in/json/14-06-2020.json',
    musicSrc: () => {
      return Promise.resolve(
        'https://res.cloudinary.com/dm4ifaedf/video/upload/v1592459778/14th_June_News_1_g2tehq.mp3',
      )
    }
  },
  {
    name: '13th June 2020',
    singer: 'gowiser.in',
    cover:
      'http://gowiser.in/audio/logo.png',
    data:'https://gowiser.in/json/13-06-2020.json',
    musicSrc: () => {
      return Promise.resolve(
        'https://res.cloudinary.com/dm4ifaedf/video/upload/v1592459736/13th_June_News_wpuclg.mp3',
      )
    }
  },
  {
    name: '12th June 2020',
    singer: 'gowiser.in',
    cover:
      'http://gowiser.in/audio/logo.png',
    data:'https://gowiser.in/json/12-06-2020.json',
    musicSrc: () => {
      return Promise.resolve(
        'https://res.cloudinary.com/dm4ifaedf/video/upload/v1592459683/12th_June_News_ibcgh7.mp3',
      )
    }
  },
  {
    name: '11th June 2020',
    singer: 'gowiser.in',
    cover:
      'http://gowiser.in/audio/logo.png',
    data:'https://gowiser.in/json/11-06-2020.json',
    musicSrc: () => {
      return Promise.resolve(
        'https://res.cloudinary.com/dm4ifaedf/video/upload/v1592459636/11th_June_News_pzv61s.mp3',
      )
    }
  },
  {
    name: '10th June 2020',
    singer: 'gowiser.in',
    cover:
      'http://gowiser.in/audio/logo.png',
    data:'https://gowiser.in/json/10-06-2020.json',
    musicSrc: () => {
      return Promise.resolve(
		'https://res.cloudinary.com/dm4ifaedf/video/upload/v1592215070/10th_June_News_unyxdz.mp3',
	)
    }
  }
]


const options = {
  //audio lists model
  audioLists: audioList1,

  //default play index of the audio player  [type `number` default `0`]
  defaultPlayIndex: 0,

  
  displayData: false,
  //if you want dynamic change current play audio you can change it [type `number` default `0`]
  // playIndex: 0,

  //color of the music player theme    [ type `string`: 'light' or 'dark'  default `dark` ]
  theme: 'dark',

  // Specifies movement boundaries. Accepted values:
  // - `parent` restricts movement within the node's offsetParent
  //    (nearest node with position relative or absolute), or
  // - a selector, restricts movement within the targeted node
  // - An object with `left, top, right, and bottom` properties.
  //   These indicate how far in each direction the draggable
  //   can be moved.
  // Ref: https://github.com/STRML/react-draggable#draggable-api
  bounds: 'body',

  // Replace a new playlist with the first loaded playlist
  // instead of adding it at the end of it.
  // [type `boolean`, default `false`]
  clearPriorAudioLists: false,

  // Play your new play list right after your new play list is loaded turn false.
  // [type `boolean`, default `false`]
  autoPlayInitLoadPlayList: false,

  //Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
  //"auto|metadata|none" "true| false"
  preload: false,

  //Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
  glassBg: false,

  //The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
  remember: false,

  //The Audio Can be deleted  [type `Boolean`, default `true`]
  remove: false,

  //audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
  defaultPosition: {
    right: 100,
    bottom: 120,
  },

  defaultPlayMode: 'order',

  // if you want dynamic change current play mode you can change it
  // [type`order | orderLoop | singleLoop | shufflePlay`, default `order`]
  // playMode: 'order',

  //audio mode        mini | full          [type `String`  default `mini`]
  mode: 'full',

  /**
   * [ type `Boolean` default 'false' ]
   * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
   */
  once: false,

  //Whether the audio is played after loading is completed. [type `Boolean` default 'true']
  autoPlay: true,

  //Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
  toggleMode: false,

  //audio cover is show of the "mini" mode [type `Boolean` default 'true']
  showMiniModeCover: false,

  //audio playing progress is show of the "mini"  mode
  showMiniProcessBar: false,

  //audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
  drag: true,

  //drag the audio progress bar [type `Boolean` default `true`]
  seeked: true,

  //Display chrome media session.  [type `Boolean` default `false`]
  showMediaSession: false,

  //Displays the audio load progress bar.  [type `Boolean` default `true`]
  showProgressLoadBar: true,

  //play button display of the audio player panel   [type `Boolean` default `true`]
  showPlay: true,

  //reload button display of the audio player panel   [type `Boolean` default `true`]
  showReload: true,

  //download button display of the audio player panel   [type `Boolean` default `true`]
  showDownload: false,

  //loop button display of the audio player panel   [type `Boolean` default `true`]
  showPlayMode: false,

  //theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
  showThemeSwitch: false,

  //lyric display of the audio player panel   [type `Boolean` default `false`]
  showLyric: false,

  //destroy player button display  [type `Boolean` default `false`]
  showDestroy: false,

  //Extensible custom content       [type 'Array' default '-' ]
  extendsContent: null,

  //default volume of the audio player [type `Number` default `1` range `0-1`]
  defaultVolume: 1,

  //playModeText show time [type `Number(ms)` default `700`]
  playModeShowTime: 600,

  //Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
  loadAudioErrorPlayNext: false,

  // Auto hide the cover photo if no cover photo is available [type `Boolean` default `false`]
  autoHiddenCover: false,

  // Play and pause audio through blank space [type `Boolean` default `false`]
  spaceBar: true,

  // international [type `en_US | zh_CN | Object` default `en_US`]
  locale: Locale.en_US,

  // Enable responsive player, auto toggle desktop and mobile [type `Boolean` default `true`]
  responsive: false,

  /**
   * @description Customer audio title [type `String | Function` default `${name} - ${singer}`]
   * @example
   * audioTitle: (audioInfo) => 'title'
   */

  // audioTitle: 'xxxx',

  //Music is downloaded handle
  onAudioDownload(audioInfo) {
    console.log('audio download', audioInfo)
  },

  //audio play handle
  onAudioPlay(audioInfo) {
    console.log('audio playing', audioInfo)
  },

  //audio pause handle
  onAudioPause(audioInfo) {
    console.log('audio pause', audioInfo)
  },

  //When the user has moved/jumped to a new location in audio
  onAudioSeeked(audioInfo) {
    console.log('audio seeked', audioInfo)
  },

  //When the volume has changed  min = 0.0  max = 1.0
  onAudioVolumeChange(currentVolume) {
    console.log('audio volume change', currentVolume)
  },

  //The single song is ended handle
  onAudioEnded(currentPlayId, audioLists, audioInfo) {
    console.log('audio ended', currentPlayId, audioLists, audioInfo)
  },

  //audio load abort
  onAudioAbort(currentPlayId, audioLists, audioInfo) {
    console.log('audio abort', currentPlayId, audioLists, audioInfo)
  },

  //audio play progress handle
  onAudioProgress(audioInfo) {
    // console.log('audio progress',audioInfo);
  },

  //audio reload handle
  onAudioReload(audioInfo) {
    console.log('audio reload:', audioInfo)
  },

  //audio load failed error handle
  onAudioError(errMsg, currentPlayId, audioLists, audioInfo) {
    console.error(
      'audio load error',
      errMsg,
      currentPlayId,
      audioLists,
      audioInfo,
    )
  },

  //theme change handle
  // onThemeChange(theme) {
  //   console.log('theme change:', theme)
  // },

  onAudioListsChange(currentPlayId, audioLists, audioInfo) {
    console.log('[currentPlayId] audio lists change:', currentPlayId)
    console.log('[audioLists] audio lists change:', audioLists)
    console.log('[audioInfo] audio lists change:', audioInfo)
  },

  onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
    console.log(
      'audio play track change:',
      currentPlayId,
      audioLists,
      audioInfo,
    )
  },

  // onPlayModeChange(playMode) {
  //   console.log('play mode change:', playMode)
  // },

  // onModeChange(mode) {
  //   console.log('mode change:', mode)
  // },

  onAudioListsPanelChange(panelVisible) {
    console.log('audio lists panel visible:', panelVisible)
  },

  onAudioListsDragEnd(fromIndex, endIndex) {
    console.log('audio lists drag end:', fromIndex, endIndex)
  },

  onAudioLyricChange(lineNum, currentLyric) {
    // console.log('audio lyric change:', lineNum, currentLyric)
  },

  // custom music player root node
  getContainer() {
    return document.body
  },

  /**
   * @description get origin audio element instance , you can use it do everything
   * @example
   * audio.playbackRate = 1.5  // set play back rate
   * audio.crossOrigin = 'xxx' // config cross origin
   */
  getAudioInstance(audio) {
    console.log('audio instance', audio)
  },

  onBeforeDestroy(currentPlayId, audioLists, audioInfo) {
    console.log('currentPlayId: ', currentPlayId)
    console.log('audioLists: ', audioLists)
    console.log('audioInfo: ', audioInfo)
    return new Promise((resolve, reject) => {
      // your custom validate
      if (window.confirm('Are you confirm destroy the player?')) {
        // if resolve, player destroyed
        resolve()
      } else {
        // if reject, skip.
        reject()
      }
    })
  },

  onDestroyed(currentPlayId, audioLists, audioInfo) {
    console.log('onDestroyed:', currentPlayId, audioLists, audioInfo)
  },

  // transform audio info like return a Promise

  /**
   * @return
   *  {
   *    src: 'xxx',
   *    filename: 'xxx',
   *    mimeType: 'xxx'
   *  }
   */
  // onBeforeAudioDownload() {
  //   return Promise.resolve({
  //     src: '1.mp3',
  //   })
  // },

  /**
   * customer download handler
   * eg. a link , or https://www.npmjs.com/package/file-saver
   * @param {*} downloadInfo
   * @example
   *
       customDownloader(downloadInfo) {
        const link = document.createElement('a')
        link.href = downloadInfo.src
        link.download = downloadInfo.filename || 'test'
        document.body.appendChild(link)
        link.click()
      },
   */
  // customDownloader(downloadInfo) {
  //   console.log(downloadInfo.src)
  //   console.log(downloadInfo.filename)
  //   console.log(downloadInfo.mimeType)
  // },
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.audio = {}
  }
  state = {
    unmount: false,
    params: {
      ...options,
      getAudioInstance: (audio) => {
        this.audio = audio
      },
    },
  }

  componentDidMount=()=>{
    this.getCurrentData(this.state.params.audioLists[this.state.params.defaultPlayIndex]["data"])
  }

  getCurrentData=(url)=>{
    //console.log("url",url)
    axios.get(url)
    .then((response) => {
      //console.log("response")
      this.updateParams({ displayData: response["data"] })
    }, (error) => {
      this.updateParams({ displayData: false })
      console.log(error);
    });
  }

  onAddAudio = () => {
    this.updateParams({
      clearPriorAudioLists: false,
      audioLists: [
        ...this.state.params.audioLists,
        {
          name: "I'm new here",
          singer: 'jack',
          cover: 'http://www.lijinke.cn/music/1387583682387727.jpg',
          musicSrc: `http://www.lijinke.cn/music/${Date.now()}.mp3`,
        },
      ],
    })
  }

  onChangeToFirstAudioList = () => {
    this.updateParams({
      clearPriorAudioLists: true,
      audioLists: audioList1,
    })
  }

  onAutoPlayMode = () => {
    this.updateParams({
      autoPlay: !this.state.params.autoPlay,
    })
  }

  onAutoPlayInitLoadPlayList = () => {
    this.updateParams({
      autoPlayInitLoadPlayList: !this.state.params.autoPlayInitLoadPlayList,
    })
  }

  onClearPriorAudioLists = () => {
    this.updateParams({
      clearPriorAudioLists: !this.state.params.clearPriorAudioLists,
    })
  }

  onShowGlassBg = () => {
    this.onChangeKey('glassBg')
  }
  onDrag = () => {
    this.onChangeKey('drag')
  }
  onToggleMode = () => {
    this.onChangeKey('toggleMode')
  }
  onSeeked = () => {
    this.onChangeKey('seeked')
  }
  onChangeKey = (key) => {
    const data = {
      ...this.state.params,
      [key]: !this.state.params[key],
    }
    if (key === 'light' || key === 'dark') {
      data.theme = key
    }
    if (key === 'full' || key === 'mini') {
      data.mode = key
    }
    if (Object.values(Locale).includes(key)) {
      data.locale = key
    }
    this.setState({ params: data })
  }
  showMiniProcessBar = () => {
    this.onChangeKey('showMiniProcessBar')
  }
  showMiniModeCover = () => {
    this.onChangeKey('showMiniModeCover')
  }
  updateParams = (params) => {
    const data = {
      ...this.state.params,
      ...params,
    }
    this.setState({
      params: data,
    })
  }
  unmountPlayer = () => {
    this.setState({ unmount: true })
  }

  onPlayModeChange = (e) => {
    this.updateParams({ playMode: e.target.value })
  }

  handleHeadlineClick=(time)=>{
    this.audio.currentTime = time 
  }

  renderCustomUI = () => {
    return (
      <>
        <h2>Custom UI</h2>
        <button onClick={() => this.audio.play()}>play</button>
        <button onClick={() => this.audio.pause()}>pause</button>
        <button onClick={() => this.audio.load()}>reload</button>
        <button onClick={() => (this.audio.currentTime = 40)}>
          change current play time
        </button>
        <button onClick={() => (this.audio.playbackRate = 2)}>
          change play back rate
        </button>
        <button onClick={() => (this.audio.volume = 0.2)}>change volume</button>
        <button onClick={() => this.audio.destroy()}>destroy player</button>
      </>
    )
  }
  render() {
    console.log("state",this.state)
    const { params, unmount } = this.state
  return (
    <div className="App">
	<div class="logo-header" >
            <img src={logo} height={50} width={100}/>

            <div className="Demo__some-network">
            <a href='whatsapp://send?text=Now get audio news on %0a http://gowiser.in %0a %0aSend "Hi" on 8329565344 to get messages in your whatsapp daily.'>
              <WhatsappIcon size={32} round />
            </a>
          </div>
          </div>
          <Headlines data={this.state.params.displayData} onHeadlineClick={this.handleHeadlineClick}/>

    <ReactJkMusicPlayer {...options}/>
    </div>
  );
}
}

export default App;
