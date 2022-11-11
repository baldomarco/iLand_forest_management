# iLand_forest_management
iLand forest management is a repository in which are published the javascript codes for the implementation of the forest management into the forest landscape and disturbance model - iLand https://iland-model.org/startpage. In particular here are published the JS realised for the CZ case study in Kostelec sorrounding forests.

Simulation testes and design for the "Climate change and browsing by ungulates drive species composition of Central European forests" first CZ, Kostelec forest landscape example!

The information down to this read me, are mainly notes for the authors purpose and difficult to be understood as they are now. Refer this read me to https://orcid.org/my-orcid?orcid=0000-0002-6689-6933 and contact baldo@fld.czu.cz for further informations and explanations.

____________________________________________________________________________________
20220307

Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation per site, stems and volume constarins, sustainableHarvest=1.
iLand test for both management system SW and CC 400 years (so transition period) with constrains and the presence of 
Pseudotsuga menziesii (Mirb.) Franco (named in the model psme) = Dauglas Fir. Climate optimum Jan -2/3 Celsius degree and July 25/27 Celsius
Pseudotsuga menziesii (Mirb.) Franco -> https://www.srs.fs.usda.gov/pubs/misc/ag_654/volume_1/pseudotsuga/menziesii.htm.
Entire region and 1500y_spinup database used.
Good results in terms of function and harvest balancing but not in terms of forest stucture cosidering most the species composition.
Output= carbon, carbon_flows, landscape, dynamicstand, abeUnit, runinfo.

____________________________________________________________________________________
20220309

Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation per site, 
stems and volume constarins, sustainableHarvest=1.
iLand test for both management system SW and CC 400 years (so transition period). 
In the simulation are both present Wind Disturbances (wind_400y.txt) and the presence of Pseudotsuga menziesii (Mirb.) Franco (named in the model psme) = Dauglas Fir. Climate optimum Jan -2/3 Celsius degree and July 25/27 Celsius
Entire region and 1500y_spinup database used.
Good results in terms of function and harvest balancing but not in terms of forest stucture cosidering most the species composition (final stage: piab 1-2%, fasy <7%, quro<10, qupe>40, psme>30, pisy<9).
Output= Wind, carbon, carbon_flows, landscape, dynamicstand, abeUnit, svdindicators, runinfo.
For SW wind was not generated because the absence of the wind dynamics activation for this reason was delated. yes for CC.

____________________________________________________________________________________
20220314

Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation per site, 
stems and volume constarins, sustainableHarvest=1.
iLand test for both management system SW and CC 400 years (so transition period). 
In the simulation are both present Wind Disturbances (wind_400y.txt) with 3 Wind events from the same direction and intensity
Entire region and 1500y_spinup_20220312 database used, without Pseudotsugo menziesii (Mirb.) Franco.
Normal precipitation precipitation = 1, variability with Good results in terms of function and harvest balancing 
butnot in terms of forest stucture cosidering most the species composition (final stage: piab 1-2%, fasy <12%, quro<30, qupe>40, pisy<15).
Windistururbances impact on volume around the 0.1 % and avg volume around 350 m3/ha
Output= Wind, carbon, carbon_flows, landscape, dynamicstand, abeUnit, runinfo.

____________________________________________________________________________________
20220315

Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation per site, 
stems and volume constarins, sustainableHarvest=1.
iLand test for both management system SW and CC 400 years (so transition period). In the simulation are NOT present Wind Disturbances (wind_400y.txt)
Entire region and 1500y_spinup_20220312 database used, without Pseudotsugo menziesii (Mirb.) Franco.
Normal precipitation <precipitation> = 1, variability with Good results in terms of function and harvest balancing ~ 
but not in terms of forest stucture cosidering most the species composition (final stage: piab 1-2%, fasy <12%, quro<30, qupe>40, pisy<15).
avgvolume around 380 m3/ha
Output= carbon, carbon_flows, landscape, dynamicstand, abeUnit, runinfo.
____________________________________________________________________________________
20220317

Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation per site, 
stems and volume constarins, sustainableHarvest=1.
iLand test for both management system SW and CC 400 years (so transition period). In the simulation ARE present Wind Disturbances (wind_400y.txt) 
3 EVENTS in differents directions NE,SE,SO. 3 differet directions same intensity.
Browsing off and SK PNV table.
Entire region and 1500y_spinup_20220312 database used, without Pseudotsugo menziesii (Mirb.) Franco.
Increased precipitation 20% <precipitation> = 1.2, variability with Good results in terms of function and harvest balancing ~ 
Better in terms of forest stucture even if the climate is not the best. The species composition (final stage: piab 20%, fasy <40%, quro<10, qupe>15, pisy<15).
Distururbances impact on volume around the 0.15 % and avg volume around 500 m3/ha
Output= wind, carbon, carbon_flows, landscape, dynamicstand, abeUnit, runinfo.
__________________________________________________________________________________
20220318

Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation per site, 
stems and volume constarins, sustainableHarvest=1.
iLand test for both management system SW and CC 400 years (so transition period). In the simulation ARE present Wind Disturbances (wind_400y.txt) 
13 EVENTS in differents directions NE,SE,SO. 3 different directions and same day and intensity. 
Browsing off and SK PNV table.
Entire region and 1500y_spinup_20220312 database used, without Pseudotsugo menziesii (Mirb.) Franco.
Increased precipitation 20% <precipitation> = 1.2, variability with Good results in terms of function and harvest balancing and increasing 
Productivity and biomass ~ * SHOULD BE CHECK*
Better in terms of forest stucture even if the climate is not realistic. The species composition (final stage: piab 20%, fasy <40%, quro<10, qupe>15, pisy<15).
Distururbances impact on volume around the 0.45 % and avg volume around 445 m3/ha
Output= wind, carbon, carbon_flows, landscape, dynamicstand, abeUnit, runinfo.
___________________________________________________________________________________
20220319

iLand test for 1 UNMANAGED 400 years. In the simulation ARE present Wind Disturbances (wind_400y.txt) 
13 EVENTS in differents directions NE,SE,SO. 3 different directions and same day and intensity.  
Entire region and 1500y_spinup_20220312 database used, without Pseudotsugo menziesii (Mirb.) Franco.
Browsing off and SK PNV table.
Increased precipitation 20% <precipitation> = 1.2, variability
Better in terms of forest stucture even if the climate is not REALISTIC. The species composition * SHOULD BE CHECK* (final stage: piab 20%, fasy <40%, quro<10, qupe>15, pisy<15).
Distururbances impact on volume around * SHOULD BE CHECK* the 0.15 % and avg volume around 345 m3/ha
Output= wind, carbon, carbon_flows, landscape, dynamicstand, abeUnit, runinfo.
One database.
____________________________________________________________________________________
20220321

Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation based on site, stems and volume constarins, sustainableHarvest=1.
iLand test for both management system SW and CC 400 years (so transition period). In the simulation ARE present Wind Disturbances (wind_400y.txt) 
Wind 13 EVENTS in differents directions NE,SE,SO. 3 different directions and same day and intensity. 
CHANGED THE CZ PNV ALLOMETRIC VARIABLES (FERTIITY OF SOME SPECIES i.e. TILLHYA CORDATA AND ROBINIA PSEUDOACACIA).
Browsing activity is switch off in cc with CZ PNV and on in sw with CZ. 
Entire region and 1500y_spinup_20220312 database used, without Pseudotsugo menziesii (Mirb.) Franco.
Increased precipitation 20% <precipitation> = 1.2, variability with Good results * SHOULD BE CHECK* in terms of function and harvest balancing and increasing 
Productivity and biomass ~ * SHOULD BE CHECK*
Better in terms of forest stucture even if the climate is not realistic. The species composition * SHOULD BE CHECK* (final stage: piab 20%, fasy <40%, quro<10, qupe>15, pisy<15).
Distururbances impact on volume * SHOULD BE CHECK* around the 0.45 % and avg volume around 445 m3/ha
Output= wind, carbon, carbon_flows, landscape, dynamicstand, abeUnit, runinfo.
_____________________________________________________________________________________
20220322

Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation based on site, stems and volume constarins, sustainableHarvest=1.
New management model for Shalterwood to harmonize the volume and harvest fluctuation in SW.
iLand test for both management system SW and CC 400 years (so transition period). In the simulation ARE present Wind Disturbances (wind_400y.txt) 
In the simulation ARE present Bark Beetle Disturbances. 
Wind 13 EVENTS in differents directions NE,SE,SO. 3 different directions and same day and intensity. 
CHANGED THE CZ PNV ALLOMETRIC VARIABLES (FERTIITY OF SOME SPECIES i.e. TILLHYA CORDATA AND ROBINIA PSEUDOACACIA).
Browsing activity is switch off in cc and on in sw. 
Entire region and 1500y_spinup_20220312 database used, without Pseudotsugo menziesii (Mirb.) Franco.
Increased precipitation 20% <precipitation> = 1.2, variability with Good results * SHOULD BE CHECK* in terms of function and harvest balancing and increasing 
Productivity and biomass ~ * SHOULD BE CHECK*
Better in terms of forest stucture even if the climate is not realistic. The species composition * SHOULD BE CHECK* (final stage: piab 20%, fasy <40%, quro<10, qupe>15, pisy<15).
Distururbances impact on volume * SHOULD BE CHECK* around the 0.45 % and avg volume around 445 m3/ha
Output= wind, carbon, carbon_flows, landscape, dynamicstand, abeUnit, runinfo.

_______________________________________________________________________________________
20220323

Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation based on site, stems and volume constarins, sustainableHarvest=1.
New management model for Shalterwood to harmonize the volume and harvest fluctuation in SW. 
iLand test for both management system SW and CC 400 years (so transition period). 
In the simulation ARE present Wind Disturbances (wind_400y.txt)
In the simulation ARE present Bark Beetle Disturbances. 
Wind 13 EVENTS in differents directions WNW,NW,W,WSW and different year period (Jan-Feb and Aug-sep-oct). 13 different directions and day of the year based on real statistics, but same intensity and interactions. 
CHANGED THE CZ PNV ALLOMETRIC VARIABLES (FERTIITY OF SOME SPECIES i.e. TILLHYA CORDATA AND ROBINIA PSEUDOACACIA).
Browsing activity is switch on.
Entire region and 1500y_spinup_20220312 database used, without Pseudotsugo menziesii (Mirb.) Franco.
CHANGED THE GIS TABLE WITH Environment_20220322.txt
Increased precipitation 20% <precipitation> = 1.2, variability with Good results * SHOULD BE CHECK* in terms of function and harvest balancing and increasing 
Productivity and biomass ~ * SHOULD BE CHECK*
Better in terms of forest stucture even if the climate is not realistic. The species composition * SHOULD BE CHECK* (final stage: piab 20%, fasy <40%, quro<10, qupe>15, pisy<15).
Distururbances impact on volume * SHOULD BE CHECK* around the 0.45 % and avg volume around 445 m3/ha
Output= wind, carbon, carbon_flows, landscape, dynamicstand, abeUnit, runinfo.

_______________________________________________________________________________________________
20220325

Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation based on site, stems and volume constarins, sustainableHarvest=1.
New management model for Shalterwood to harmonize the volume and harvest fluctuation in SW. 
iLand test for both management system SW and CC 400 years (so transition period). 
In the simulation ARE present Wind Disturbances (wind_400y.txt)
In the simulation ARE present Bark Beetle Disturbances. 
Wind 8 EVENTS in differents directions WNW,NW,W,WSW and different year period (Jan-Feb and Aug-sep-oct). 8 different directions and day of the year based on real statistics, but same intensity and interactions. 
CHANGED THE CZ PNV ALLOMETRIC VARIABLES (FERTIITY OF SOME SPECIES i.e. TILLHYA CORDATA AND ROBINIA PSEUDOACACIA).
Browsing activity is switch on WITH INTENSITY=1.
Entire region and 1500y_spinup_20220312 database used, without Pseudotsugo menziesii (Mirb.) Franco.
CHANGED THE GIS TABLE WITH Environment_20220322.txt
precipitation ARE NORMAL MODEL <precipitation> = 1, variability with Good results * SHOULD BE CHECK* in terms of function and harvest balancing and increasing 
Productivity and biomass ~ * SHOULD BE CHECK*
Distururbances impact on volume * SHOULD BE CHECK* around the 0.55 % and avg volume around 545 m3/ha
Output= wind, bark beetles, carbon, carbon_flows, landscape, dynamicstand, abeUnit, runinfo.

_______________________________________________________________________________________________
20220330

As before but with changes in:

****IMPORTANT ABE SCHEDULER**** 
                                 minScheduleHarvest: 1,
				 maxScheduleHarvest: 20,
				 scheduleRebounceDuration: 15,
				 maxHarvestLevel: 1.5, // default: 1.5
				 deviationDecayRate: 0.1,  // default: 0.1 
				 useSustainableHarvest: 1,
				 harvestIntensity: 0.8

maxHarvestLevel: 1.5, 
harvestIntensity: 0.8

________________________________________________________________________________________________
TEST_HARV

SEE README IN TEST_HARV FOLDER FOR INFORMATION
BASICALLY ARE TEST FOR EQUILIBRATE THE HARVEST ACTIVITIES IN THE LANDSCAPE AND IN THE BROWSING PRESSURES
GENERALLY 100Y

TEST1

minScheduleHarvest: 1,
		 maxScheduleHarvest: 10,
		 scheduleRebounceDuration: 15,
		 maxHarvestLevel: 1.5,         
		 deviationDecayRate: 0.1,     
		 useSustainableHarvest: 0,   
		 harvestIntensity: 0.8}, 


TEST2 // better but with pick SW

minScheduleHarvest: 1,
		 maxScheduleHarvest: 1,
		 scheduleRebounceDuration: 20,
		 maxHarvestLevel: 1.5,         
		 deviationDecayRate: 0.1,     
		 useSustainableHarvest: 1,   
		 harvestIntensity: 1.2}, 

TEST3 // better but with pick in SW

minScheduleHarvest: 1,
		 maxScheduleHarvest: 1,
		 scheduleRebounceDuration: 20,
		 maxHarvestLevel: 1.5,         
		 deviationDecayRate: 0.1,     
		 useSustainableHarvest: 1,   
		 harvestIntensity: 0.8}, 
TEST4

minScheduleHarvest: 1,
		 maxScheduleHarvest: 1,
		 scheduleRebounceDuration: 20,
		 maxHarvestLevel: 1.5,         
		 deviationDecayRate: 0.1,     
		 useSustainableHarvest: 0,   
		 harvestIntensity: 1.2}, 
TEST5

minScheduleHarvest: 1,
		 maxScheduleHarvest: 10,
		 scheduleRebounceDuration: 15,
		 maxHarvestLevel: 1.1,         
		 deviationDecayRate: 0.1,      
		 useSustainableHarvest: 1,   
		 harvestIntensity: 0.8},

TEST6

minScheduleHarvest: 5,
		 maxScheduleHarvest: 10,
		 scheduleRebounceDuration: 15,
		 maxHarvestLevel: 1.5,         
		 deviationDecayRate: 0.1,      
		 useSustainableHarvest: 0.3,   
		 harvestIntensity: 1},

Browsing pressure = 0.8 make the quercus proportion better

TEST7

minScheduleHarvest: 1,
		 maxScheduleHarvest: 10,
		 scheduleRebounceDuration: 15,
		 maxHarvestLevel: 1,         
		 deviationDecayRate: 0.1,      
		 useSustainableHarvest: 0.5,   
		 harvestIntensity: 1},

TEST8

minScheduleHarvest: 1,
		 maxScheduleHarvest: 10,
		 scheduleRebounceDuration: 15,
		 maxHarvestLevel: 1,         
		 deviationDecayRate: 0.1,      
		 useSustainableHarvest: 0.7,   
		 harvestIntensity: 1},
________________________________________________________________________________________________
20220404_RESONATE

Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation based on site, stems and volume constarins.
MANAGEMENT new 400 years (so transition period). 
In the simulation ARE present Wind Disturbances (wind_400y.txt)
In the simulation ARE present Bark Beetle Disturbances. 
Wind 8 EVENTS in differents directions WNW,NW,W,WSW and different year period (Jan-Feb and Aug-sep-oct). 8 different directions and day of the year based on real statistics, but same intensity and interactions. 
CHANGED THE CZ PNV ALLOMETRIC VARIABLES (FERTIITY OF SOME SPECIES IG TILLHYA CORDATA AND ROBINIA PSEUDOACACIA).
Browsing INTENSITY PRESSURE is switch on WITH PRESSURE=0.8.
Entire region and 1500y_spinup_20220312 database used, without Pseudotsugo menziesii (Mirb.) Franco.
CHANGED THE GIS TABLE WITH Environment_20220322.txt
Precipitation ARE NORMAL MODEL <precipitation> = 1.
Harv variability with not the best results in terms of function and harvest balancing and increasing (spin up and simulation environment are not the same so having a major growth and better environmental condition in the simulation) 
Productivity and biomass ~ * SHOULD BE CHECK*
GOOD FOREST STRUCTURE AND A LITTLE BETTER FOR OAKS AND PINUS BUT STILL HAVING SOME PROBLEMS WITH ACER THAT IS TOO MUCH.
Distururbances impact on volume * SHOULD BE CHECK* around the 0.55 % and avg volume around 545 m3/ha
Output= wind, bark beetles, carbon, carbon_flows, landscape, dynamicstand, abeUnit, abeStand, abestandDetails, abeStandRemoval, stand, runinfo.


___________________________________________________________________________________
20220407

1a) old_with_maxharvestlevel40

Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation based on site, stems and volume constarins.
MANAGEMENT new 200 years (so transition period). 
In the simulation ARE present Wind Disturbances (wind_400y.txt)
In the simulation ARE present Bark Beetle Disturbances. 
Wind 8 EVENTS in differents directions WNW,NW,W,WSW and different year period (Jan-Feb and Aug-sep-oct). 8 different directions and day of the year based on real statistics, but same intensity and interactions. 
CHANGED THE CZ PNV ALLOMETRIC VARIABLES (FERTIITY OF SOME SPECIES IG TILLHYA CORDATA AND ROBINIA PSEUDOACACIA).
Browsing INTENSITY PRESSURE is switch on WITH PRESSURE=1.
Entire region and 1500y_spinup_20220312 database used, without Pseudotsugo menziesii (Mirb.) Franco.
CHANGED THE GIS TABLE WITH Environment_20220322.txt
Precipitation ARE NORMAL MODEL <precipitation> = 1.
Harv variability with not the best results in terms of function and harvest balancing and increasing (spin up and simulation environment are not the same so having a major growth and better environmental condition in the simulation) 
Productivity and biomass ~ * SHOULD BE CHECK*
GOOD FOREST STRUCTURE AND BUT STILL HAVING SOME PROBLEMS WITH ACER THAT IS TOO MUCH and Quercus sp. too small.
Distururbances impact on volume * SHOULD BE CHECK* around the 0.55 % and avg volume around 545 m3/ha
Output= wind, bark beetles, carbon, carbon_flows, landscape, dynamicstand, abeUnit, abeStand, abestandDetails, abeStandRemoval, runinfo.

****IMPORTANT ABE SCHEDULER**** 
                                 minScheduleHarvest: 1,
				 maxScheduleHarvest: 10,
				 scheduleRebounceDuration: 15,
				 maxHarvestLevel: 40, // default: 1.5
				 deviationDecayRate: 0.1,  // default: 0.1 
				 useSustainableHarvest: 0.5,
				 harvestIntensity: 1



____________________________________________________________________________________
1b) new_scheduler_copied_old_env

Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation based on site, stems and volume constarins.
MANAGEMENT new 200 years (so transition period). 
In the simulation ARE present Wind Disturbances (wind_400y.txt)
In the simulation ARE present Bark Beetle Disturbances. 
Wind 8 EVENTS in differents directions WNW,NW,W,WSW and different year period (Jan-Feb and Aug-sep-oct). 8 different directions and day of the year based on real statistics, but same intensity and interactions. 
CHANGED THE CZ PNV ALLOMETRIC VARIABLES (FERTIITY OF SOME SPECIES IG TILLHYA CORDATA AND ROBINIA PSEUDOACACIA).
Browsing INTENSITY PRESSURE is switch on WITH PRESSURE=1.
Entire region and 1500y_spinup_20220312 database used, without Pseudotsugo menziesii (Mirb.) Franco.
CHANGED THE GIS TABLE WITH Environment_20220322.txt
Precipitation ARE NORMAL MODEL <precipitation> = 1.
Harv variability with not the best results in terms of function and harvest balancing and increasing (spin up and simulation environment are not the same so having a major growth and better environmental condition in the simulation) 
Productivity and biomass ~ * SHOULD BE CHECK*
GOOD FOREST STRUCTURE AND BUT STILL HAVING SOME PROBLEMS WITH ACER THAT IS TOO MUCH and Quercus sp. too small.
Distururbances impact on volume * SHOULD BE CHECK* around the 0.55 % and avg volume around 545 m3/ha
Output= wind, bark beetles, carbon, carbon_flows, landscape, dynamicstand, abeUnit, abeStand, abestandDetails, abeStandRemoval, runinfo.

****IMPORTANT ABE SCHEDULER**** 
                                 minScheduleHarvest: 1,
				 maxScheduleHarvest: 10,
				 scheduleRebounceDuration: 5,
				 maxHarvestLevel: 1.5, // default: 1.5
				 deviationDecayRate: 0.2,  // default: 0.1 
				 useSustainableHarvest: 1,
				 harvestIntensity: 1

____________________________________________________________________________________________________
################                                                                ####################
################           FIRST RUN WITH THE NEW ENVIRONMENT                   ####################
################                                                                ####################
################                                                                ####################
_____________________________________________________________________________________________________

New environment and simil test 6

Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation based on site, stems and volume constarins.
MANAGEMENT new 200 years (so transition period). 
In the simulation ARE present Wind Disturbances (wind_400y.txt)
In the simulation ARE present Bark Beetle Disturbances. 
Wind 8 EVENTS in differents directions WNW,NW,W,WSW and different year period (Jan-Feb and Aug-sep-oct). 8 different directions and day of the year based on real statistics, but same intensity and interactions. 
CHANGED THE CZ PNV ALLOMETRIC VARIABLES (FERTIITY OF SOME SPECIES IG TILLHYA CORDATA AND ROBINIA PSEUDOACACIA).
Browsing INTENSITY PRESSURE is switch on WITH PRESSURE= 0.8.
Entire region and 1500y_spinup_snapshot_0.sqlite database used, without Pseudotsugo menziesii (Mirb.) Franco.
CHANGED THE GIS TABLE WITH Environment_20220404.txt
Precipitation ARE NORMAL MODEL <precipitation> = 1.
Harv variability with not the best results in terms of function and harvest balancing and increasing (spin up and simulation environment are not the same so having a major growth and better environmental condition in the simulation) 
Productivity and biomass ~ * SHOULD BE CHECK*
GOOD FOREST STRUCTURE AND BUT STILL HAVING SOME PROBLEMS WITH ACER THAT IS TOO MUCH and Quercus sp. too small.
Distururbances impact on volume * SHOULD BE CHECK* around the 0.55 % and avg volume around 545 m3/ha
Output= wind, bark beetles, carbon, carbon_flows, landscape, dynamicstand, abeUnit, abeStand, abestandDetails, abeStandRemoval, runinfo.

****IMPORTANT ABE SCHEDULER**** 
                                 minScheduleHarvest: 5,
				 maxScheduleHarvest: 10,
				 scheduleRebounceDuration: 15,
				 maxHarvestLevel: 1, // default: 1.5
				 deviationDecayRate: 0.1,  // default: 0.1 
				 useSustainableHarvest: 0.3,
				 harvestIntensity: 1


______________________________________________________________________________________
20220411

Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation based on site, stems and volume constarins.
MANAGEMENT new 400 years (so transition period). 
In the simulation ARE present Wind Disturbances (wind_400y.txt)
In the simulation ARE present Bark Beetle Disturbances. 
Wind 8 EVENTS in differents directions WNW,NW,W,WSW and different year period (Jan-Feb and Aug-sep-oct). 8 different directions and day of the year based on real statistics, but same intensity and interactions. 
CHANGED THE CZ PNV ALLOMETRIC VARIABLES (FERTIITY OF SOME SPECIES IG TILLHYA CORDATA AND ROBINIA PSEUDOACACIA).
Browsing INTENSITY PRESSURE is switch on WITH PRESSURE= 1.
Entire region and 1500y_spinup_snapshot_0.sqlite database used, without Pseudotsugo menziesii (Mirb.) Franco.
CHANGED THE GIS TABLE WITH Environment_20220404.txt
Precipitation ARE NORMAL MODEL <precipitation> = 1.
Harv variability with not the best results in terms of function and harvest balancing and increasing (spin up and simulation environment are not the same so having a major growth and better environmental condition in the simulation) 
Productivity and biomass ~ * SHOULD BE CHECK*
GOOD FOREST STRUCTURE AND BUT STILL HAVING SOME PROBLEMS WITH ACER THAT IS TOO MUCH and Quercus sp. too small.
Distururbances impact on volume * SHOULD BE CHECK* around the 0.55 % and avg volume around 545 m3/ha
Output= wind, bark beetles, carbon, carbon_flows, landscape, dynamicstand, abeUnit, abeStand, abestandDetails, abeStandRemoval, runinfo.

****IMPORTANT ABE SCHEDULER**** 
                                 minScheduleHarvest: 5,
				 maxScheduleHarvest: 10,
				 scheduleRebounceDuration: 20,
				 maxHarvestLevel: 30, // default: 1.5
				 deviationDecayRate: 0.1,  // default: 0.1 
				 useSustainableHarvest: 0.5,
				 harvestIntensity: 1

_________________________________________________________________________________________
20220412 (START NEW TESTS (SEE EXCEL FILE) AND NEW ENVIRONMENT B (SEE new_input_data_20220407))

Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation based on site, stems and volume constarins.
MANAGEMENT new 400 years (so transition period).
CHANGED THE CZ PNV ALLOMETRIC VARIABLES (FERTIITY OF SOME SPECIES IG TILLHYA CORDATA AND ROBINIA PSEUDOACACIA).
Browsing INTENSITY PRESSURE is switch on WITH PRESSURE= 0.6.
Entire region and 1500y_spinup_snapshot_0.sqlite database used, without Pseudotsugo menziesii (Mirb.) Franco.
CHANGED THE GIS TABLE WITH Environment_20220404.txt
Precipitation ARE NORMAL MODEL <precipitation> = 1.
Harv variability with not the best results in terms of function and harvest balancing and increasing (spin up and simulation environment are not the same so having a major growth and better environmental condition in the simulation) 
Productivity and biomass ~ * SHOULD BE CHECK*
GOOD FOREST STRUCTURE AND BUT STILL HAVING SOME PROBLEMS WITH ACER THAT IS TOO MUCH and Quercus sp. too small.
Distururbances impact on volume * SHOULD BE CHECK* around the 0.55 % and avg volume around 545 m3/ha
Output= wind, bark beetles, carbon, carbon_flows, landscape, dynamicstand, abeUnit, abeStand, abestandDetails, abeStandRemoval, runinfo.

SW5
****IMPORTANT ABE SCHEDULER**** 
                                 minScheduleHarvest: 1,
				 maxScheduleHarvest: 10,
				 scheduleRebounceDuration: 15,
				 maxHarvestLevel: 3, // default: 1.5
				 deviationDecayRate: 0.1,  // default: 0.1 
				 useSustainableHarvest: 1,
				 harvestIntensity: 0.4

_________________________________________________________________________________________
SW6
****IMPORTANT ABE SCHEDULER**** 
                                 minScheduleHarvest: 1,
				 maxScheduleHarvest: 10,
				 scheduleRebounceDuration: 15,
				 maxHarvestLevel: 3, // default: 1.5
				 deviationDecayRate: 0.1,  // default: 0.1 
				 useSustainableHarvest: 1,
				 harvestIntensity: 0.5

_________________________________________________________________________________________
SW7
****IMPORTANT ABE SCHEDULER**** 
                                 minScheduleHarvest: 1,
				 maxScheduleHarvest: 10,
				 scheduleRebounceDuration: 15,
				 maxHarvestLevel: 3, // default: 1.5
				 deviationDecayRate: 0.1,  // default: 0.1 
				 useSustainableHarvest: 1,
				 harvestIntensity: 0.6
_________________________________________________________________________________________
SW8
****IMPORTANT ABE SCHEDULER**** 
                                 minScheduleHarvest: 1,
				 maxScheduleHarvest: 10,
				 scheduleRebounceDuration: 15,
				 maxHarvestLevel: 3, // default: 1.5
				 deviationDecayRate: 0.1,  // default: 0.1 
				 useSustainableHarvest: 1,
				 harvestIntensity: 0.7
_________________________________________________________________________________________
SW9
****IMPORTANT ABE SCHEDULER**** 
                                 minScheduleHarvest: 1,
				 maxScheduleHarvest: 10,
				 scheduleRebounceDuration: 15,
				 maxHarvestLevel: 1.5, // default: 1.5
				 deviationDecayRate: 0.1,  // default: 0.1 
				 useSustainableHarvest: 1,
				 harvestIntensity: 0.4
_________________________________________________________________________________________
SW10
****IMPORTANT ABE SCHEDULER**** 
                                 minScheduleHarvest: 1,
				 maxScheduleHarvest: 10,
				 scheduleRebounceDuration: 15,
				 maxHarvestLevel: 1.5, // default: 1.5
				 deviationDecayRate: 0.1,  // default: 0.1 
				 useSustainableHarvest: 1,
				 harvestIntensity: 0.5

_________________________________________________________________________________________
SW11
****IMPORTANT ABE SCHEDULER**** 
                                 minScheduleHarvest: 1,
				 maxScheduleHarvest: 10,
				 scheduleRebounceDuration: 15,
				 maxHarvestLevel: 1.5, // default: 1.5
				 deviationDecayRate: 0.1,  // default: 0.1 
				 useSustainableHarvest: 1,
				 harvestIntensity: 0.6

_________________________________________________________________________________________
SW12
****IMPORTANT ABE SCHEDULER**** 
                                 minScheduleHarvest: 1,
				 maxScheduleHarvest: 10,
				 scheduleRebounceDuration: 15,
				 maxHarvestLevel: 1.5, // default: 1.5
				 deviationDecayRate: 0.1,  // default: 0.1 
				 useSustainableHarvest: 1,
				 harvestIntensity: 0.7

_________________________________________________________________________________________
SW2 / CC6/ CC10
***REPEAT THE SW2 AND CREATE THE MODEL WITH THE SCHEDULER OF SW6 AND SW10 FOR CC6 AND CC10
***BROWSING***

_________________________________FINISH OF THE TESTS______________________________________
__________________________________________________________________________________________
__________________________________________________________________________________________
20220420 - wind+barkbettle - max disturbance

Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation based on site, stems and volume constarins.
MANAGEMENT new 400 years (so transition period). 
In the simulation ARE present Wind Disturbances (wind_example_eq.txt)
In the simulation ARE present Bark Beetle Disturbances. 
Wind 8 EVENTS in differents directions WNW,NW,W,WSW and every 50 YEARS STARTING FROM year 25 period (Jan-Feb and Aug-sep-oct). 8 different directions and day of the year based on real statistics, but same intensity and interactions. 
CHANGED THE CZ PNV ALLOMETRIC VARIABLES (FERTIITY OF SOME SPECIES IG TILLHYA CORDATA AND ROBINIA PSEUDOACACIA).
Browsing INTENSITY PRESSURE is switch on WITH PRESSURE= 0.8
Entire region and 1500y_spinup_snapshot.sqlite database used, without Pseudotsugo menziesii (Mirb.) Franco.
CHANGED THE GIS TABLE WITH Environment_20220404.txt
Precipitation ARE NORMAL MODEL <precipitation> = 1.
Productivity and biomass ~ * SHOULD BE CHECK*
GOOD FOREST STRUCTURE AND BUT STILL HAVING SOME PROBLEMS WITH ACER THAT IS TOO MUCH and Quercus sp. too small.
Distururbances impact on volume * SHOULD BE CHECK* around the 0.55 % and avg volume around 545 m3/ha
Output= wind, bark beetles, carbon, carbon_flows, landscape, dynamicstand, abeUnit, abeStand, abestandDetails, abeStandRemoval, runinfo.

****IMPORTANT ABE SCHEDULER**** 
            SW10 - CC10
                                 minScheduleHarvest: 1,
				 maxScheduleHarvest: 10,
				 scheduleRebounceDuration: 15,
				 maxHarvestLevel: 1.5,
				 deviationDecayRate: 0.1, 
				 useSustainableHarvest: 1,
				 harvestIntensity: 0.5

_________________________________________________________________________________________
20220420 - wind - disturbance

Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation based on site, stems and volume constarins.
MANAGEMENT new 400 years (so transition period). 
In the simulation ARE present Wind Disturbances (wind_example_eq.txt)
In the simulation ARE NOT present Bark Beetle Disturbances. 
Wind 8 EVENTS in differents directions WNW,NW,W,WSW and every 50 YEARS STARTING FROM year 25 period (Jan-Feb and Aug-sep-oct). 8 different directions and day of the year based on real statistics, but same intensity and interactions. 
CHANGED THE CZ PNV ALLOMETRIC VARIABLES (FERTIITY OF SOME SPECIES IG TILLHYA CORDATA AND ROBINIA PSEUDOACACIA).
Browsing INTENSITY PRESSURE is switch on WITH PRESSURE= 0.8
Entire region and 1500y_spinup_snapshot.sqlite database used, without Pseudotsugo menziesii (Mirb.) Franco.
CHANGED THE GIS TABLE WITH Environment_20220404.txt
Precipitation ARE NORMAL MODEL <precipitation> = 1.
Productivity and biomass ~ * SHOULD BE CHECK*
GOOD FOREST STRUCTURE AND BUT STILL HAVING SOME PROBLEMS WITH ACER THAT IS TOO MUCH and Quercus sp. too small.
Distururbances impact on volume * SHOULD BE CHECK* around the 0.55 % and avg volume around 545 m3/ha
Output= wind, bark beetles, carbon, carbon_flows, landscape, dynamicstand, abeUnit, abeStand, abestandDetails, abeStandRemoval, runinfo.

****IMPORTANT ABE SCHEDULER**** 
            SW10 - CC10
                                 minScheduleHarvest: 1,
				 maxScheduleHarvest: 10,
				 scheduleRebounceDuration: 15,
				 maxHarvestLevel: 1.5,
				 deviationDecayRate: 0.1, 
				 useSustainableHarvest: 1,
				 harvestIntensity: 0.5

________________________________________________________________________________________
20220420 - no disturbances -

Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation based on site, stems and volume constarins.
MANAGEMENT new 400 years (so transition period). 
In the simulation ARE NOT present Wind Disturbances (wind_example_eq.txt)
In the simulation ARE NOT present Bark Beetle Disturbances. 
NOT Wind 8 EVENTS in differents directions WNW,NW,W,WSW and every 50 YEARS STARTING FROM year 25 period (Jan-Feb and Aug-sep-oct). 8 different directions and day of the year based on real statistics, but same intensity and interactions. 
CHANGED THE CZ PNV ALLOMETRIC VARIABLES (FERTIITY OF SOME SPECIES IG TILLHYA CORDATA AND ROBINIA PSEUDOACACIA).
Browsing INTENSITY PRESSURE is switch on WITH PRESSURE= 0.8
Entire region and 1500y_spinup_snapshot.sqlite database used, without Pseudotsugo menziesii (Mirb.) Franco.
CHANGED THE GIS TABLE WITH Environment_20220404.txt
Precipitation ARE NORMAL MODEL <precipitation> = 1.
Productivity and biomass ~ * SHOULD BE CHECK*
GOOD FOREST STRUCTURE AND BUT STILL HAVING SOME PROBLEMS WITH ACER THAT IS TOO MUCH and Quercus sp. too small.
Distururbances impact on volume * SHOULD BE CHECK* around the 0.55 % and avg volume around 545 m3/ha
Output= wind, bark beetles, carbon, carbon_flows, landscape, dynamicstand, abeUnit, abeStand, abestandDetails, abeStandRemoval, runinfo.

****IMPORTANT ABE SCHEDULER**** 
            SW10 - CC10
                                 minScheduleHarvest: 1,
				 maxScheduleHarvest: 10,
				 scheduleRebounceDuration: 15,
				 maxHarvestLevel: 1.5,
				 deviationDecayRate: 0.1, 
				 useSustainableHarvest: 1,
				 harvestIntensity: 0.5

_________________________________________________________________________________________
________________________________________________________________________________________
20220422 - BROWSING PRESSURE TEST SEE EXCEL FILE "testing" -

Java scripts inherent the management activities (all for SW and just the best combination for CC) 5 stps, optimum rotation period and silviculture plantation based on site, stems and volume constarins.
MANAGEMENT new 400 years (so transition period). 
In the simulation ARE present Wind Disturbances (wind_example_eq.txt)
In the simulation ARE present Bark Beetle Disturbances. 
Wind 8 EVENTS in differents directions WNW,NW,W,WSW and every 50 YEARS STARTING FROM year 25 period (Jan-Feb and Aug-sep-oct). 8 different directions and day of the year based on real statistics, but same intensity and interactions. 
CHANGED THE CZ PNV ALLOMETRIC VARIABLES (FERTIITY OF SOME SPECIES IG TILLHYA CORDATA AND ROBINIA PSEUDOACACIA).
Browsing INTENSITY PRESSURE is switch on WITH PRESSURE= from 0 to 1.2
Entire region and 1500y_spinup_snapshot.sqlite database used, without Pseudotsugo menziesii (Mirb.) Franco.
CHANGED THE GIS TABLE WITH Environment_20220404.txt
Precipitation ARE NORMAL MODEL <precipitation> = 1.
Productivity and biomass ~ * SHOULD BE CHECK*
GOOD FOREST STRUCTURE AND BUT STILL HAVING SOME PROBLEMS WITH ACER THAT IS TOO MUCH and Quercus sp. too small.
Distururbances impact on volume * SHOULD BE CHECK* around the 0.55 % and avg volume around 545 m3/ha
Output= wind, bark beetles, carbon, carbon_flows, landscape, dynamicstand, abeUnit, abeStand, abestandDetails, abeStandRemoval, runinfo.

****IMPORTANT ABE SCHEDULER**** 
            SW10 - CC10
                                 minScheduleHarvest: 1,
				 maxScheduleHarvest: 10,
				 scheduleRebounceDuration: 15,
				 maxHarvestLevel: 1.5,
				 deviationDecayRate: 0.1, 
				 useSustainableHarvest: 1,
				 harvestIntensity: 0.5


_________________________________________________________________________________________
________________________________________________________________________________________
20220425 - BROWSING and Climate Change test - see Browsing_Study_experiment_design excel table

Java scripts inherent the management activities SW 5 stps, optimum rotation period and silviculture plantation based on site, stems and volume constarins.
MANAGEMENT new 400 years (so transition period). 
In the simulation ARE present Wind Disturbances (wind_example_big_5.txt) big event at 5 then always more smoothed during the time.
In the simulation ARE present Bark Beetle Disturbances. 
Wind 8 EVENTS in differents directions WNW,NW,W,WSW and every 50 YEARS STARTING FROM year 25 period (Jan-Feb and Aug-sep-oct). 8 different directions and day of the year based on real statistics, but same intensity and interactions. 
CHANGED THE CZ PNV ALLOMETRIC VARIABLES (FERTIITY OF SOME SPECIES IG TILLHYA CORDATA AND ROBINIA PSEUDOACACIA).
Browsing INTENSITY PRESSURE is switch on = 1 or off= 0.
Entire region and 1500y_spinup_snapshot.sqlite database used, without Pseudotsugo menziesii (Mirb.) Franco.
CHANGED THE GIS TABLE WITH Environment_20220404.txt
Teperature = 0 (RC) or +4 (RCP 8.5), we didn't change both the seasonality of the water precpitation for bark beetle
And the VPD increasing temperature wrongly remain the same.
Precipitation ARE NORMAL MODEL <precipitation> = 1. RC
Productivity and biomass have some problem when we had +4 because the volume differed to much. Also but good Quercus dominant have more carbon stock but less volume
GOOD FOREST STRUCTURE AND BUT STILL HAVING SOME PROBLEMS WITH ACER THAT IS TOO MUCH and Quercus sp.
Distururbances impact on volume * SHOULD BE CHECK* around the 0.55 % and avg volume around 545 m3/ha
Output= wind, bark beetles, carbon, carbon_flows, landscape, dynamicstand, abeUnit, abeStand, abestandDetails, abeStandRemoval, runinfo.

****IMPORTANT ABE SCHEDULER**** 
            SW10 
                                 minScheduleHarvest: 1,
				 maxScheduleHarvest: 10,
				 scheduleRebounceDuration: 15,
				 maxHarvestLevel: 1.5,
				 deviationDecayRate: 0.1, 
				 useSustainableHarvest: 1,
				 harvestIntensity: 0.5


_________________________________________________________________________________________
________________________________________________________________________________________
20220509 - BROWSING and Climate Change test - see shared excel table

Java scripts inherent the management activities SW 5 stps, optimum rotation period and silviculture plantation based on site, stems and volume constarins.
MANAGEMENT new 400 years (so transition period). 
In the simulation ARE present Wind Disturbances (wind_example_big_5_random.txt) big event at 5 then always more smoothed during the time.
In the simulation ARE present Bark Beetle Disturbances. 
Wind 8 EVENTS in differents directions WNW,NW,W,WSW random period and big event at year 5 (Jan-Feb and Aug-sep-oct). 8 different directions and day of the year based on real statistics, different intensity and interactions. 
CHANGED THE CZ PNV ALLOMETRIC VARIABLES (FERTIITY OF SOME SPECIES IG TILLHYA CORDATA AND ROBINIA PSEUDOACACIA).
Browsing INTENSITY PRESSURE is switch on = 1 or off= 0.
Entire region and 1500y_spinup_snapshot.sqlite database used, without Pseudotsugo menziesii (Mirb.) Franco.
CHANGED THE GIS TABLE WITH Environment_20220404.txt
Teperature = 0 (RC) or changed the Clim database for simulate +4, we change both the seasonality of the water precpitation for bark beetle
And the VPD increasing temperature higher evaporation.
Precipitation ARE NORMAL MODEL <precipitation> = 1
Productivity and biomass have ood shape finally. Also but good Quercus dominant have more carbon stock but less volume
harvest we added the salvager model (set at 0.2 (xml) and 0.7(thresholdClearStand))to salvaged the wood after the storm, but still to be fitted because seems to much.
GOOD FOREST STRUCTURE AND BUT STILL HAVING SOME PROBLEMS WITH ACER THAT IS TOO MUCH and Quercus sp.
Distururbances impact on volume * SHOULD BE CHECK* around the 0.55 % and avg volume around 545 m3/ha
to be chech and also before was higher ... Output= wind, bark beetles, carbon, carbon_flows, landscape, dynamicstand, abeUnit, abeStand, abestandDetails, abeStandRemoval, runinfo.

****IMPORTANT ABE SCHEDULER**** 
            SW10 
                                 minScheduleHarvest: 1,
				 maxScheduleHarvest: 10,
				 scheduleRebounceDuration: 15,
				 maxHarvestLevel: 1.5,
				 deviationDecayRate: 0.1, 
				 useSustainableHarvest: 1,
				 harvestIntensity: 0.5

Salvager  sw

                                var salvager_sw = { type: 'salvage',  schedule: { repeat: true },
     disturbanceCondition: "dbh>10 and rnd(0,1)<"+Globals.setting('user.salvage.remove'),
     onExecute: function() {
		 // when stand is cleared... WE DO NOT DO CLEARING
		 trees.loadAll();

		 trees.harvest("dbh>5"); 
		  
                   fmengine.log("Remained after disturbance: " + trees.count + " normal trees");
                  var n = trees.killSaplings('');
                  fmengine.log("Plus remained: " + n + " saplings");
                 //trees.killSaplings("");
                fmengine.log("We do not do harvest, and clearing, one RESET")

               // fmengine.runActivity(stand.id, "planting"); // assuming the name of the activity is "planting"      
               //  fmengine.log("PLANTING AFTER RESET");
		       //stand.trace = true; // enable tracing ...
			stand.U = 120;   // stand.U is for the rotation time restarting after the salvaging
	 },

	 debugSplit: false,
	 thresholdIgnoreDamage: 100, // modified, WR: was 100000  above this threshold clearing and splitting is tested
	 thresholdClearStand: 0.70,  // This is the % of the demaged area in a stand. We can change it based on what we want. added WR  if the relative damage is higher than this, it is cleared
	 thresholdSplitStand: 1.0,   // added WR (no splitting=1, if 0.5 at 50% demaged area we split the stand based on demaged - no demaged area)   if this is smaller than the clearstand, it is splitted if rel.damage higher than this value

    }	

xml  

<user> <!-- user defined settings (which can be accessed via Javascript through the Globals.setting) -->
	<salvage>
	  <remove>0.2</remove>    <!-- is telling in the js how much should be remove from salvaging activities set in abe script -->
	</salvage>
	<windspeed_factor>1</windspeed_factor>
	<code>value</code>
</user>

_________________________________________________________________________________________
________________________________________________________________________________________
20220512 - BROWSING and Climate Change test - see shared excel table number 10

Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation based on site, stems and volume constarins.
MANAGEMENT new 400 years (so transition period). 
In the simulation ARE present Wind Disturbances (wind_example_big_5_random.txt) big event at 5 then always more smoothed during the time.
In the simulation ARE present Bark Beetle Disturbances. 
Wind 8 EVENTS in differents directions WNW,NW,W,WSW random period and big event at year 5 (Jan-Feb and Aug-sep-oct). 8 different directions and day of the year based on real statistics, different intensity and interactions. 
CHANGED THE CZ PNV ALLOMETRIC VARIABLES (FERTIITY OF SOME SPECIES IG TILLHYA CORDATA AND ROBINIA PSEUDOACACIA).
Browsing INTENSITY PRESSURE is switch on = 1 
Entire region and 1500y_spinup_snapshot.sqlite database used, without Pseudotsugo menziesii (Mirb.) Franco.
CHANGED THE GIS TABLE WITH Environment_20220404.txt
Teperature = changed the Clim database for simulate +4, we change both the seasonality of the water precpitation for bark beetle
And the VPD increasing temperature higher evaporation.
Precipitation ARE NORMAL MODEL <precipitation> = 1
Productivity and biomass have good shape finally. Also but good Quercus dominant have more carbon stock but less volume
harvest we added the salvager in xml connection with the java.script, (modified setting 0.2 and 1(thresholdClearStand)) Model to salvaged the wood after the storm, but still to be fitted because seems to much.
GOOD FOREST STRUCTURE AND BUT STILL HAVING SOME PROBLEMS WITH ACER THAT IS TOO MUCH and Quercus sp.
Distururbances impact on volume * SHOULD BE CHECK* around the 0.55 % and avg volume around 545 m3/ha
to be chech and also before was higher ... Output= wind, bark beetles, carbon, carbon_flows, landscape, dynamicstand, abeUnit, abeStand, abestandDetails, abeStandRemoval, runinfo.

****IMPORTANT ABE SCHEDULER**** 
            SW10
                                 minScheduleHarvest: 1,
				 maxScheduleHarvest: 10,
				 scheduleRebounceDuration: 15,
				 maxHarvestLevel: 1.5,
				 deviationDecayRate: 0.1, 
				 useSustainableHarvest: 1,
				 harvestIntensity: 0.5

Salvager  sw

                                var salvager_sw = { type: 'salvage',  schedule: { repeat: true },
     disturbanceCondition: "dbh>10 and rnd(0,1)<"+Globals.setting('user.salvage.remove'),
     onExecute: function() {
		 // when stand is cleared... WE DO NOT DO CLEARING
		 trees.loadAll();

		 trees.harvest("dbh>5"); 
		  
                   fmengine.log("Remained after disturbance: " + trees.count + " normal trees");
                  var n = trees.killSaplings('');
                  fmengine.log("Plus remained: " + n + " saplings");
                 //trees.killSaplings("");
                fmengine.log("We do not do harvest, and clearing, one RESET")

               // fmengine.runActivity(stand.id, "planting"); // assuming the name of the activity is "planting"      
               //  fmengine.log("PLANTING AFTER RESET");
		       //stand.trace = true; // enable tracing ...
			stand.U = 120;   // stand.U is for the rotation time restarting after the salvaging
	 },

	 debugSplit: false,
	 thresholdIgnoreDamage: 100, // modified, WR: was 100000  above this threshold clearing and splitting is tested
	 thresholdClearStand: 1.0,  // This is the % of the demaged area in a stand. We can change it based on what we want. added WR  if the relative damage is higher than this, it is cleared
	 thresholdSplitStand: 1.0,   // added WR (no splitting=1, if 0.5 at 50% demaged area we split the stand based on demaged - no demaged area)   if this is smaller than the clearstand, it is splitted if rel.damage higher than this value

    }	

xml  

<user> <!-- user defined settings (which can be accessed via Javascript through the Globals.setting) -->
	<salvage>
	  <remove>0.2</remove>    <!-- is telling in the js how much should be remove from salvaging activities set in abe script -->
	</salvage>
	<windspeed_factor>1</windspeed_factor>
	<code>value</code>
</user>


_________________________________________________________________________________________
________________________________________________________________________________________
20220512 - BROWSING and Climate Change test - see shared excel table number 11

Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation based on site, stems and volume constarins.
MANAGEMENT new 400 years (so transition period). 
In the simulation ARE present Wind Disturbances (wind_example_big_5_random.txt) big event at 5 then always more smoothed during the time.
In the simulation ARE present Bark Beetle Disturbances. 
Wind 8 EVENTS in differents directions WNW,NW,W,WSW random period and big event at year 5 (Jan-Feb and Aug-sep-oct). 8 different directions and day of the year based on real statistics, different intensity and interactions. 
CHANGED THE CZ PNV ALLOMETRIC VARIABLES (FERTIITY OF SOME SPECIES IG TILLHYA CORDATA AND ROBINIA PSEUDOACACIA).
Browsing INTENSITY PRESSURE is switch on = 1 
Entire region and 1500y_spinup_snapshot.sqlite database used, without Pseudotsugo menziesii (Mirb.) Franco.
CHANGED THE GIS TABLE WITH Environment_20220404.txt
Teperature = changed the Clim database for simulate +4, we change both the seasonality of the water precpitation for bark beetle
And the VPD increasing temperature higher evaporation.
Precipitation ARE NORMAL MODEL <precipitation> = 1
Productivity and biomass have good shape finally. Also but good Quercus dominant have more carbon stock but less volume
harvest we added the salvager in xml connection with the java.script, (modified setting 0.2 and 0.7(thresholdClearStand)) Model to salvaged the wood after the storm, but still to be fitted because seems to much.
set at every activity (thinning, regcut ,finalcut)  the forcing to "false". E. G. :  schedule: { minRel: 0.09, optRel: 0.10, maxRel: 0.11 , force=false}, 
GOOD FOREST STRUCTURE AND BUT STILL HAVING SOME PROBLEMS WITH ACER THAT IS TOO MUCH and Quercus sp.
Distururbances impact on volume * SHOULD BE CHECK* around the 0.55 % and avg volume around 545 m3/ha
to be chech and also before was higher ... Output= wind, bark beetles, carbon, carbon_flows, landscape, dynamicstand, abeUnit, abeStand, abestandDetails, abeStandRemoval, runinfo.

****IMPORTANT ABE SCHEDULER**** 
            SW10
                                 minScheduleHarvest: 1,
				 maxScheduleHarvest: 10,
				 scheduleRebounceDuration: 15,
				 maxHarvestLevel: 1.5,
				 deviationDecayRate: 0.1, 
				 useSustainableHarvest: 1,
				 harvestIntensity: 0.5

Salvager  sw

                                var salvager_sw = { type: 'salvage',  schedule: { repeat: true },
     disturbanceCondition: "dbh>10 and rnd(0,1)<"+Globals.setting('user.salvage.remove'),
     onExecute: function() {
		 // when stand is cleared... WE DO NOT DO CLEARING
		 trees.loadAll();

		 trees.harvest("dbh>5"); 
		  
                   fmengine.log("Remained after disturbance: " + trees.count + " normal trees");
                  var n = trees.killSaplings('');
                  fmengine.log("Plus remained: " + n + " saplings");
                 //trees.killSaplings("");
                fmengine.log("We do not do harvest, and clearing, one RESET")

               // fmengine.runActivity(stand.id, "planting"); // assuming the name of the activity is "planting"      
               //  fmengine.log("PLANTING AFTER RESET");
		       //stand.trace = true; // enable tracing ...
			stand.U = 120;   // stand.U is for the rotation time restarting after the salvaging
	 },

	 debugSplit: false,
	 thresholdIgnoreDamage: 100, // modified, WR: was 100000  above this threshold clearing and splitting is tested
	 thresholdClearStand: 0.7,  // This is the % of the demaged area in a stand. We can change it based on what we want. added WR  if the relative damage is higher than this, it is cleared
	 thresholdSplitStand: 1.0,   // added WR (no splitting=1, if 0.5 at 50% demaged area we split the stand based on demaged - no demaged area)   if this is smaller than the clearstand, it is splitted if rel.damage higher than this value

    }	

xml  

<user>                            <!-- user defined settings (which can be accessed via Javascript through the Globals.setting) -->
	<salvage>
	  <remove>0.2</remove>    <!-- is telling in the js how much should be remove from salvaging activities set in abe script -->
	</salvage>
	<windspeed_factor>1</windspeed_factor>
	<code>value</code>
</user>


_________________________________________________________________________________________
20220512_salv_test
*** CLIMATE CHANGE ***
***  BROWSING  ***
*** SW10  as the official management ***
*** HERE WE test SALVAGING MANAGEMENT ***

Years of simulation 400y
Climate changes is in the database 0 and +4 
Disturbance: wind_example_big_5.txt ***
Browsing tables from Ausria. Browsing 1
DB: species parameters: species_param_europe_allometry_20190521_CZ.sqlite 
DB climate: reference: CZ_region_1961-2018_20211208f.sqlite and +4degree
Salvaging 20% at the end of the project file

_________________________________________________________________________________________
SAL_02_1

Salvage 20% of total volume - in 100% impacted volume stand - make clear cut in that case
debugSplit: false,
	 thresholdIgnoreDamage: 100, // modified, WR: was 100000  above this threshold clearing and splitting is tested
	 thresholdClearStand: 1.0,  // This is the % of the demaged area in a stand. We can change it based on what we want. added WR  if the relative damage is higher than this, it is cleared
	 thresholdSplitStand: 1.0,   // added WR (no splitting=1, if 0.5 at 50% demaged area we split the stand based on demaged - no demaged area)   if this is smaller than the clearstand, it is splitted if rel.damage higher than this value
_________________________________________________________________________________________
SAL_02_07

debugSplit: false,
	 thresholdIgnoreDamage: 100, // modified, WR: was 100000  above this threshold clearing and splitting is tested
	 thresholdClearStand: 0.70,  // This is the % of the demaged area in a stand. We can change it based on what we want. added WR  if the relative damage is higher than this, it is cleared
	 thresholdSplitStand: 1.0,   // added WR (no splitting=1, if 0.5 at 50% demaged area we split the stand based on demaged - no demaged area)   if this is smaller than the clearstand, it is splitted if rel.damage higher than this value
_________________________________________________________________________________________
SAL_02_07_false (is not activated in the project file)

debugSplit: false,
	 thresholdIgnoreDamage: 100, // modified, WR: was 100000  above this threshold clearing and splitting is tested
	 thresholdClearStand: 0.70,  // This is the % of the demaged area in a stand. We can change it based on what we want. added WR  if the relative damage is higher than this, it is cleared
	 thresholdSplitStand: 1.0,   // added WR (no splitting=1, if 0.5 at 50% demaged area we split the stand based on demaged - no demaged area)   if this is smaller than the clearstand, it is splitted if rel.damage higher than this value


_________________________________________________________________________________________
20220604_final_test
********THIS IS THE MOST IMPORTANT FROM HERE COMES THE DB and OUTPUTS OF THE BROWSING PAPER *******
*** CLIMATE CHANGE ***
***  BROWSING  ***
*** SW10  as the official management ***
*** SALVAGING MANAGEMENT ***
*** EXCEL "test_manuscript_grid.xlsx" ***
*** EXCEL "variable_all.xlsx" ***


Years of simulation 300 ***
Climate changes is in the database (LOOK AT DATABASE AND EXCEL "test_manuscript_grid.xlsx")
Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation based on site. We used stems and volume constarins. 
In the simulation ARE present Wind Disturbances (wind_example_random.txt) big 10 event.
We changed the BROWSING PROBABILIY of Acer spp (mapples) as the Quercus spp (oaks) 0.73 ***
Disturbance: wind_example_random_final.txt ***
Browsing tables from CZ. Browsing 0 / 0.5 / 1 / 2 / tot (look the DB species)
DB: species parameters: species_param_europe_allometry_20220603_CZ.sqlite  and   species_param_europe_allometry_20220603_brow_tot_CZ.sqlite
DB climate: reference: and T+1 / T+3 / T+5 and Precipitation Pr+10% / reference Pr0 / Pr-10%
Salvaging 20% at the end of the project file

_________________________________________________________________________________________
________________________________________________________________________________________
20221103 - Forest Recovery after disturbances (wind and bark beetles, and anthropogenic disturbance for harvest)

*** REFERENCE 1961-2018 CLIMATE ***
***  BROWSING  Reference***
*** Shelterwood n10  as the official management ***
*** SALVAGING MANAGEMENT ***

Years of simulation 300 ***
Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation based on site. We used stems and volume constarins. 
In the simulation ARE present Wind Disturbances (wind10.txt; .... wind110.txt) 1 big event recorring at the year 10; ... 110. Then blocks of little events repeting them exaclty at then same time in every different simulation. See the tables. Random EVENTS in differents directions WNW,NW,W,WSW. 
In the simulation ARE present Bark Beetle Disturbances, initial infestation 0.001
Browsing INTENSITY PRESSURE is switch on = 1 
Entire region and 1500y_spinup_snapshot.sqlite database used for the spin up of the study area simulated.
CHANGED THE GIS TABLE WITH Environment_20220404.txt
Precipitation ARE NORMAL MODEL <precipitation> = 1
***CO2 levels: 380 ppm (avg period 1961-2018)

_________________________________________________________________________________________
________________________________________________________________________________________
20221109 - Forest Recovery after disturbances (wind and bark beetles, and anthropogenic disturbance for harvest)

*** REFERENCE 1961-2018 CLIMATE ***
***  BROWSING  0.7 ***
*** Shelterwood BAU n10  as the official management ***
*** SALVAGING MANAGEMENT ***

Years of simulation 300 ***
Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation based on site. We used stems and volume constarins. 
In the simulation ARE present Wind Disturbances (wind10.txt; .... wind110.txt) 1 big event recurrent at the year 10; 30; ... 110. Random little EVENTS in differents directions WNW,NW,W,WSW, random period and wind speed, consistent for every runs. 
In the simulation ARE present Bark Beetle Disturbances, initial infestation:

<initialInfestationProbability>0.000685</initialInfestationProbability> <!-- p that a potential host pixel is infested at startup (as a result of pre-simulation dynamics), increase it in case of warming -->	
		<referenceClimate>

Browsing INTENSITY PRESSURE is switch on = 0.7
Entire region and 1500y_spinup_snapshot.sqlite database used for the spin up of the study area simulated.
CHANGED THE GIS TABLE WITH Environment_20220404.txt
Precipitation ARE NORMAL MODEL <precipitation> = 1

***CO2 levels: 356 ppm (avg period 1961-2018)
			
________________________________________________________________________________________
20221112 - TEST CONTROL BITE - MASTODON AND CAPREOULUS (ROE DEER)
			/
			/
			/
			/
________________________________________________________________________________________
20221112 - Forest Recovery after disturbances - Test to focus the productivity rate

*** REFERENCE 1961-2018 CLIMATE ***
***  BROWSING  0.7 or absent ***
*** Shelterwood BAU n10  as the official management ***
*** SALVAGING MANAGEMENT ***
*** Different Disturbance Rate ***

Years of simulation 300 ***
Java scripts inherent the management activities 5 stps, optimum rotation period and silviculture plantation based on site. We used stems and volume constarins. 
Yes-Not/ In the simulation when present Wind Disturbances only wind10.txt and wind90.txt. 1 big event recurrent at the year 10 and 90. Random little EVENTS in differents directions WNW,NW,W,WSW, random period and wind speed, consistent for every runs. 
Yes-not/ In the simulation ARE present the Bark Beetle Disturbances only in the one without browsing and with only brak beetle dist.

<initialInfestationProbability>0.000685</initialInfestationProbability> <!-- p that a potential host pixel is infested at startup (as a result of pre-simulation dynamics), increase it in case of warming -->	
		<referenceClimate>
		
		
Browsing INTENSITY PRESSURE is switch on = 0.7
Entire region and 1500y_spinup_snapshot.sqlite database used for the spin up of the study area simulated.
CHANGED THE GIS TABLE WITH Environment_20220404.txt
Precipitation ARE NORMAL MODEL <precipitation> = 1

***CO2 levels: 356 ppm (avg period 1961-2018)
