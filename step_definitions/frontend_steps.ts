/// <reference types='codeceptjs' />

import {TEST_URL} from "../utils/contants";
import {SbsHindiLockDownPage} from "../pages/sbsHindiLockdownPage";

const {I} = inject();

let sbsHindiLockDownPage: SbsHindiLockDownPage;

Before(() => {
    sbsHindiLockDownPage = new SbsHindiLockDownPage();
});

Given("the user has navigated to the site", () => {
    I.amOnPage(TEST_URL);
});

Then("the user verifies title of the audio track", async () => {
    // get the page title
    const pageTitle = await I.grabTitle();

    // verify that the portion of title is displayed on the heading element
    I.see(pageTitle.split("|")[1].trim(), sbsHindiLockDownPage.fields.audioTitleTrackHeading);
});

Then("the user verifies subscribe dropdown displays {string} podcasts", (podcastOptions: string) => {
    // exapnd the drop down
    I.click(sbsHindiLockDownPage.fields.subscribeDropDownToggle);

    // for each podcast option verify that the drop down list contains podcast option text and the order of the podcasts option
    podcastOptions.split(",").forEach((option) => {
        if (option.trim() === "apple") {
            I.see(option.trim().toUpperCase(), sbsHindiLockDownPage.fields.applePodcasts);
        } else if (option.trim() === "google") {
            I.see(option.trim().toUpperCase(), sbsHindiLockDownPage.fields.googlePodcasts);
        }
    });
    I.click(sbsHindiLockDownPage.fields.subscribeDropDownToggle);
});

Then("the user clicks Play on the audio icon of article section", () => {
    I.click(sbsHindiLockDownPage.fields.audioTrackPlayIcon);
});

Then("the user verifies audio player is launched at the bottom of the screen", async () => {
    // wait for the player to be visible
    I.waitForVisible(sbsHindiLockDownPage.audioPlayerFields.audioPlayer);

    // step1 - get the height of the element and y property of the element and add them
    // step 2- get the height of the view port
    // assert step 1 value with step 2
    I.usePlaywrightTo("getting location of element", async ({page}) => {
        const box = await page.locator(sbsHindiLockDownPage.audioPlayerFields.audioPlayer).boundingBox();
        I.assertTrue((box.height + box.y) === (page.viewportSize().height), "The audio player is not at the boittom of the page");
    });
});

Then("the user verifies player controls - {string}", async (buttonOption: string) => {
    if (buttonOption === "Play" || buttonOption === "Pause") {
        await sbsHindiLockDownPage.verifyPlayPauseControl(buttonOption);
    } else {
        await sbsHindiLockDownPage.verifyMuteUnmuteControl(buttonOption);
    }
});

Then("the user clicks Pause on the Audio Player", () => {
    I.click(sbsHindiLockDownPage.audioPlayerFields.playButton);
});

Then("the user clicks {int} seconds {string} on the audio player and verifies scrub on the progress bar", async (seconds: number, forwardRewindOption: string) => {
    await sbsHindiLockDownPage.verifyScrubOnProgressBar(seconds, forwardRewindOption);
});

Then("the user verifies clicking on language toggle displays language list", async () => {
    await sbsHindiLockDownPage.verifyLanguageListDropDown();
});
