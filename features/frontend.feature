@frontend
Feature: Front end coding challenge

  Scenario: Automate the audio player
    Given the user has navigated to the site
    Then the user verifies title of the audio track
    Then the user verifies subscribe dropdown displays "apple, google" podcasts
    Then the user clicks Play on the audio icon of article section
    Then the user verifies audio player is launched at the bottom of the screen
    Then the user verifies player controls - "Pause"
    Then the user verifies player controls - "Play"
    Then the user verifies player controls - "Mute"
    Then the user verifies player controls - "Unmute"
    Then the user clicks Pause on the Audio Player
    Then the user clicks 20 seconds "forward" on the audio player and verifies scrub on the progress bar
    Then the user clicks 20 seconds "rewind" on the audio player and verifies scrub on the progress bar
    Then the user verifies mouse hovering on language toggle displays language list