/// <reference types='codeceptjs' />

import * as endpointSchema from "../endpointschemas/endpoint.json";
import JsMediaTags = require("jsmediatags");
import {BackEndTestHelper} from "../utils/backEndTestHelper";
import {MP3_ENCODER_SETTING, MP3_TAG_TYPE, MP3_TAG_VERSION} from "../utils/contants";


const {I} = inject();

let response: { status: any; data: any; };

Given("the API endpoint is called", async () => {
    response = await I.sendGetRequest();
});

Then("the API endpoint response status is {int}", async (statusCode: number) => {
    I.assertEqual(response.status, 200, "Status Code is not correct");
});

Then("the API response validates against the schema", async () => {
    I.assertJsonSchema(response.data, endpointSchema, "Endpoint Response is not as per the schema");
});

Then("the response contains valid mp3 files", async () => {
    // for each program in the response array get the mp3 link and read and validate basic mp3 tags
    response.data.forEach(async (program: any) => {
        const mp3Link = program.archiveAudio.mp3;
        I.assertTrue(mp3Link.includes(".mp3"), "The file link does not contain mp3 extension");
        BackEndTestHelper.getTagsFromMP3Link(mp3Link).then((tags) => {
            I.assertEqual(tags.type, MP3_TAG_TYPE, "Mp3 tag type does not match");
            I.assertEqual(tags.version, MP3_TAG_VERSION, "Mp3 tag version does not match");
            I.assertEqual(tags.tags.TSSE.id, MP3_ENCODER_SETTING, "Mp3 encoder setting does not match");
        }).catch((error) => {
            I.assertEmpty(error, "Error in fetching mp3 tags");
        });
    });
});

