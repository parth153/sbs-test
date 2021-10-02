import { FrontEndTestHelper } from "../utils/frontEndTestHelper";
const { I } = inject();

export class SbsHindiLockDownPage {

  //locators
  fields = {
    audioTrackPodCastCollectionLabel: 'audiotrack__podcastcollection label',
    audioTitleTrackHeading: 'h1.audiotrack__title',
    subscribeDropDownToggle: '#mod-dropdown_module-2 div',
    subscribePodcastsDropdownOptions: 'div.dropdown__body ul li',
    audioTrackPlayIcon: 'div.audiotrack__image button',
    applePodcasts: 'div.podcast-subscribe ul li:nth-child(1) a',
    googlePodcasts: 'div.podcast-subscribe ul li:nth-child(2) a',
    languageListDropDownLink: '#mod-dropdown_module-1 a',
    languageListDropDownBody: 'div.language-toggle__body'
  }

  audioPlayerFields = {
    audioPlayer: 'div.audio-player',
    playButton: 'button.audio-player__button--play-pause',
    volumeButton: 'button.audio-player__volume-button',
    audioPlayerTimeElapsed: 'span.audio-player__time--elapsed',
    audioArticle: '#mod-audiotrack_module-1',
    stepForwardButton: 'button.audio-player__button--step-forward',
    stepBackButton: 'button.audio-player__button--step-back',
    audioPlayerProgressBar: 'div.audio-player__progress'
  }

  audioPlayerClasses = {
    isMediaPlaying: 'is-media-playing',
    isMediaPaused: 'is-media-paused',
    isMuted: 'is-muted'
  }
  
  constructor() {}

  async verifyPlayPauseControl(playPauseOption: string) {
    //class to verify after action performed
    let classToCheck = playPauseOption === 'Play' ? this.audioPlayerClasses.isMediaPlaying : this.audioPlayerClasses.isMediaPaused;

    //get the classes for audio player and assert the class presence
    let classesAudioPlayer = await I.grabAttributeFrom(this.audioPlayerFields.audioPlayer, "class");
    I.assertNotContain(classesAudioPlayer, classToCheck);

    //perform the action
    I.click(this.audioPlayerFields.playButton);

    //get the time elapsed after click, wait and get the time elapsed after wait
    let afterClickTimeElapsed = await I.grabTextFrom(this.audioPlayerFields.audioPlayerTimeElapsed);
    I.wait(2)
    let afterWaitTimeElapsed = await I.grabTextFrom(this.audioPlayerFields.audioPlayerTimeElapsed);

    //assert that the elapsed time is correctly updated 
    if (playPauseOption === 'Pause') {
      I.assertEqual(afterClickTimeElapsed, afterWaitTimeElapsed);
    } else {
      I.assertNotEqual(afterClickTimeElapsed, afterWaitTimeElapsed);
    }

    //get the class attributes for audio player again to assert the class
    classesAudioPlayer = await I.grabAttributeFrom(this.audioPlayerFields.audioPlayer, "class");
    I.assertContain(classesAudioPlayer, classToCheck);

    //get teh classes for the article section to verify play pause option
    let classesAudioArticle = await I.grabAttributeFrom(this.audioPlayerFields.audioArticle, "class");
    I.assertContain(classesAudioArticle, classToCheck);

  }

  async verifyMuteUnmuteControl(muteUnmuteOption) {
    //class to be verified
    let classToCheck = this.audioPlayerClasses.isMuted;

    //get the classs and assert the class presence before action
    let classesAudioPlayer = await I.grabAttributeFrom(this.audioPlayerFields.audioPlayer, "class");
    if(muteUnmuteOption === 'Mute') {
      I.assertNotContain(classesAudioPlayer, classToCheck);
    } else {
      I.assertContain(classesAudioPlayer, classToCheck);
    }

    //perform the action
    I.click(this.audioPlayerFields.volumeButton);

    //get the classs again and assert the class presence after action
    classesAudioPlayer = await I.grabAttributeFrom(this.audioPlayerFields.audioPlayer, "class");
    if(muteUnmuteOption === 'Mute') {
      I.assertContain(classesAudioPlayer, classToCheck);
    } else {
      I.assertNotContain(classesAudioPlayer, classToCheck);
    }
  }

  async verifyScrubOnProgressBar(seconds: number, forwardRewindOption: string) {
    //get elapsed time and style width initial value
    let elapsedTimeBeforeClick = await I.grabTextFrom(this.audioPlayerFields.audioPlayerTimeElapsed);
    let styleWidthBeforeClick = await I.grabAttributeFrom(this.audioPlayerFields.audioPlayerProgressBar, "style");

    //perform the action
    if(forwardRewindOption === 'forward') {
      I.click(this.audioPlayerFields.stepForwardButton);
    } else {
      I.click(this.audioPlayerFields.stepBackButton);
    }

    I.wait(1);

    //get elapsed time and style width value after click
    let elapsedTimeAfterClick = await I.grabTextFrom(this.audioPlayerFields.audioPlayerTimeElapsed);
    let styleWidthAfterClick = await I.grabAttributeFrom(this.audioPlayerFields.audioPlayerProgressBar, "style");

    //assert elapsed time and style width values
    I.assertEqual(FrontEndTestHelper.addSubSecondsFromTimeLapsedElementText(elapsedTimeBeforeClick, seconds, forwardRewindOption), elapsedTimeAfterClick, 
      "The elapsed time on the progress bar is not correct");
    //style width component has a minor discrepancy so not asserting equality but just starts with
    I.assertStartsWith(FrontEndTestHelper.calculateWidthProgressFor20Secs(styleWidthBeforeClick.width, forwardRewindOption), styleWidthAfterClick.width.substring(0, 4),
      "The style width on progrss bar has not updated correctly"); 
  }

  async verifyLanguageListDropDown() {
    I.dontSeeElement(this.fields.languageListDropDownBody);
    I.click(this.fields.languageListDropDownLink);
    I.seeElement(this.fields.languageListDropDownBody);
  }

}