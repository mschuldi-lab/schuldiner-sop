---
sidebar_position: 12
title: 🔬 Microscopy
slug: /microscopy
---

# Microscopy


:::note
- When going to the microscope make sure to take all the correct controls. For all fluorescence measurements you must take a strain with NO fluorophore as background (you will be surprised but yeast have weird autofluorescent organelles that change in different conditions). For co-localization studies you MUST take strains with each protein tagged individually to check for bleedthrough of the fluorophores. Bleedthrough must be measured separately in each experiment - while there might not be a bleedthrough in one experiment, there might still be in another even though the microscopy settings are the same, because of a protein that is more abundant or with a more concentrated location in the cell which leads to a stronger signal.
:::


* It is important to take an image in brightfield (BF) for future quantifications (that utilize cell segmentation), and to demonstrate the presence of cells and their outlines, in case of no fluorescent signal. When preparing figures for publication, instead of showing the BF, you can also highlight the cell surrounding as dotted white line in the (black) fluorescent picture.

* ConA plates are viable for three months. After three months from conA addition, use with caution.

* When repeating an experiment using the same microscopy system, load the settings from the previous experiment - this will save you time and make your experiments more comparable if you need to do quantifications in the future (.xml file in ScanR and .oex file in CellSens – does not include saving of the intensity of light source.).

* When imaging samples of multi-colors start with exposure of the long(er) wavelength(s) fluorophores or sensitive, less photostable fluorophores, to avoid bleaching of the others.


:::note
- Please use our lab spinning disk Microscope (connected to Eva) only in cases where no other microscope can be used such as the use for the double camera, the Sora, the incubator, ScanR analysis etc… In all other cases please use the departmental spinning disk.
:::


* When running microscope experiments make sure you take enough fields to make quantifications/statistical analysis if needed.

* When going over microscopy images from a screen for the first time, ask for guidance on how to do it optimally. Methods may vary between experiments. Beginnings are hard and take time, but if you are going over images and haven’t finished going over a plate in the course of 2-3 days- ask for help, it shouldn’t take this long. Generally, you should be able to go over several plates per day.

* After using the oil objective, clean it from oil with 100% ethanol or isopropanol using the designated lens paper. Also look for oil drops on the floor. Label this plate that you know to use it only for oil imaging in the future.

* Keep separate 384 imaging plates for oil and air.


:::note
- For turning on the EVA microscope: click the main power, wait for start-up noises to finish, turn on the RTC controller (upper shelf) -wait for the two beeps before continuing (the first beep is immediate and strong and the second takes about a minute). Turn on the lasers, wait for a light of “Laser Ready” to appear on the black keys. Then turn on the TPC (little screen on the drawer, to the right of the big PC screen), before opening the software. And the other way around for turning off EVA: first turn off the TPC, then the controllers, then the microscope. While usually always “on”, over the weekend, the tango box (one of the boxes on the shelf) might have been turned off. So, if there are problems, check if it is on and properly communicating (blue light, switch is on the back, not the front as for the other boxes).
:::

If you are not sure how to define channels for different colors for confocal imaging with Eva, there's a folder on the desktop of Eva's microscope computer, named 'settings for all colors'. 
In the folder you will find an xml file that you can use to load the settings into ScanR that should support proper imaging of all common four basic fluorescent proteins (blue, green, red, FR) without and bleedthrough between channels.  
It also loads the definition for 3 long stoke shift channels - this should be used with more care if you choose to use them since there in no combination that currently supports 7 colors. 
Please do not change the settings in this file.
***SORA has a different set of filters and light sources, so it does not apply to that. 


:::note
- CellSens offers personalized layouts that allow you to individually arrange all the windows for the different settings the way you want. This just affects the way it is displayed on the screen. Other changes you make will also affect other users and vice versa. Of note, the “operation methods” (that you can save and which then appear as buttons labeled after the channel settings) only save a few hardware settings, such as light source and filter set, and not the intensity or exposure time.
:::


For independent users, before imaging, best check the following: i) settings for saving (select the info you want to save in the name of every image, such as WellID or PositionID, the order of numbering, directory, mark the box if images should be closed after saving or not), ii) channel intensities, iii) exposure time, iv) check that the position list is empty and not filled with old entries. The stage may otherwise move to unreasonable places.

CellSens offers to save separate files for: i) the experiment - imaging workflow (.oex), ii) the actual image, which can be displayed in ImageJ using an Olympus plugin, or be exported in CellSens as ome.tif (.vsi).

* To open a user and get access to the departmental spinning disc microscope, set a training session with Yeynit. To use any other of the fluorescent microscopes in the molecular genetics department (Belfer building, left side: “LM900 point scanner” also for Airyscan, right side: “Dragonfly” for Immunofluorescence), talk to Eyal Schejter.

* For analyzing images from the departmental spinning disk the images must be in scanR, you will have to convert them to scanR format (use scanR Analysis software to convert). In addition, you need to notice the order of the wells you imaged because the file names of the images will follow this order. However, in the .nd file, every serial name has the well description.

* To add the well description to the serial image name from the spinning disk, download the software splitToWells.exe  from the Dropbox.

* For analyzing images, we have a Wacom tablet that you can connect to your computer to use it with ImageJ etc... It makes it easier to draw lines and follow structures to measure all kinds of parameters.

* For visualizing and processing microscopy data, consider learning and using ImageJ macros. By using code to automate the processing, you can process images much more efficiently and robustly. There are macros people wrote in the past in the shared “Software” folder.

Troubleshooting EVA microscope (FOR INDEPENDENT USERS):

Although it might be tricky to provide an absolute solution to the problem you may observe during a microscopy session with EVA, check the following actions that were useful previously. Some of these can be carried out without worrying about causing harm, others you may want to do only after having tried other things first, some might mean a bigger interference with the microscope, so ALWAYS TALK FIRST WITH YEYNIT for briefing, also as an independent user.
