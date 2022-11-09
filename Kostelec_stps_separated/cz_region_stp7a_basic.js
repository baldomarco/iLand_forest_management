/*
###############################################################   SITE 7a partially waterlock soil STP7        ###########################################################################


This management script is doing businness-as-usual activities on the full landscape of our study area in the Kostelec for iLand model.
MARCO BALDO
2022/01/07
We have one agent and one unit. 1 stp: WE PLANT 60% Picea abies L. (Norway Sprunce) and 40% Quercus petraea L. (Sessile Oak). We used only stp7 with planiting 9 thinning and with a finalcut. clearcut (stp7) shelterwood management (stp8).
This selection was done in preprocess (in R).
Activities that this script is doing:
Planting
Thinning x9 (stp7) with 2 sw times in one rotation period (stp8)
clearcut (stp7)
Shelterwood (sw) Finalcut (stp8)
 */



//--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 
//                                                 ---       P L A N T I N G  7a ----
//
//  At the input file there are columns with the fractions how planting should be done: PlantPiab	PlantAbal	PlantPisy	PlantFasy	PlantLade	PlantBrLf
//  Values are summing up to 1.  The last one is BrLf means broadleaf, and distributed into acps (40%), frex(30%) and ulgl(30%). 
//  Defines a fraction 0-1 of 2x2m pixels for which to plant trees of the given species. The `fraction` is interpreted as a probability, i.e. for each 2x2m pixel a random number decides whether to plant or not.
//  Planting is in 2nd year of every rotation (schedule: 2 )
//  50 cm high trees are planted wall to wall
//  We are not clearing the existing tree saplings at the site. (clear: false)
//  planting_7a = planting for site 7a partially waterlock soil 60% Picea abies L. (Norway sprunce) and 40% Quercus petra L. (Sessile oak).


var planting_7a = {
	 type: "planting", 
	 schedule: 2 ,    
	 items: [ {species: "piab",  height: 0.5, fraction: 0.6 , clear: false},
		  {species: "qupe",  height: 0.5, fraction: 0.4 	}],
		  
// Here just doing logging to logfile:
	 onExit: function() { 	fmengine.log("Planting piab fraction= 0.6" );
    			     	fmengine.log("Planting qupe fraction= 0.4" ); }
};



//--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 
//                                                      ---  T H I N N I N G S  STP7/8 --->   

// http://iland-model.org/ABE+activity+thinning
// For thinnings there are build in method in the Bilek L., excel file, and we use it. Stand top height and dbh variable CHANGE DURING THE ACTIVITY/AGE
// WE ARE USING THE METHOD_1_STP7 -> 7a IS THE KIND OF SOIL (partially waterlock oak type SITES). 
// (only for shelterwood) WE ARE USING SHELTERWOOD MANAGEMENT FOR LAST THINNING
// VARIANT FOR NUMBER OF STEMS REMAINING AND WITHOUT HEIGHT CONSTRAINS + volume target 
// For stams constrains I put 5 trees in more of the target because was > of some n. i.g. thin 71a -> stems n. > 1500 = remainingStems: 1505


var thinning71a = { type: "thinning", 
				   schedule: { minRel: 0.09, optRel: 0.10, maxRel: 0.11 , force=true},
				   
                                   thinning: "custom",
				   onEvaluate: function() { console.log("1st THINNING ");return true;},
				    remainingStems: 1505, targetValue: 45,  targetVariable: "volume", targetRelative: true,  minDbh: 0,
				   classes: [10, 20, 25, 25, 20]
}



var thinning72a = { type: "thinning", 
				   schedule: { minRel: 0.19, optRel: 0.20, maxRel: 0.21 , force=true},
				   
                                   thinning: "custom",
				   onEvaluate: function() { console.log("2nd THINNING ");return true;},
				   remainingStems: 1005, targetValue: 30,  targetVariable: "volume", targetRelative: true,  minDbh: 5,
				   classes: [10, 20, 25, 25, 20]
}



var thinning73a = { type: "thinning", 
				   schedule: { minRel: 0.29, optRel: 0.30, maxRel: 0.31 , force=true},
				   
                                   thinning: "custom",
				   onEvaluate: function() { console.log("3rd THINNING ");return true;},
				   remainingStems: 705, targetValue: 20,  targetVariable: "volume", targetRelative: true,  minDbh: 5,
				   classes: [10, 20, 25, 25, 20]
}


var thinning74a = { type: "thinning", 
				   schedule: { minRel: 0.39, optRel: 0.40, maxRel: 0.41 , force=true},
				   
                                   thinning: "custom",
				   onEvaluate: function() { console.log("4th THINNING ");return true;},
				   remainingStems: 455, targetValue: 15,  targetVariable: "volume", targetRelative: true,  minDbh: 5,
				   classes: [10, 20, 25, 25, 20]
}


var thinning75a = { type: "thinning", 
				   schedule: { minRel: 0.49, optRel: 0.50, maxRel: 0.51 , force=true},
				   
                                   thinning: "custom",
				   onEvaluate: function() { console.log("5th THINNING ");return true;},
				   remainingStems: 385, targetValue: 15,  targetVariable: "volume", targetRelative: true,  minDbh: 5,
				   classes: [10, 20, 25, 25, 20]
}



var thinning76a = { type: "thinning", 
				   schedule: { minRel: 0.59, optRel: 0.60, maxRel: 0.61 , force=true},
				   
                                   thinning: "custom",
				   onEvaluate: function() { console.log("6th THINNING ");return true;},
				   remainingStems: 335, targetValue: 15,  targetVariable: "volume", targetRelative: true,  minDbh: 5,
				   classes: [30, 30, 30, 10, 0]
}


var thinning77a = { type: "thinning", 
				   schedule: { minRel: 0.69, optRel: 0.70, maxRel: 0.71 , force=true},
				   
                                   thinning: "custom",
				   onEvaluate: function() { console.log("7th THINNING ");return true;},
				   remainingStems: 265, targetValue: 15,  targetVariable: "volume", targetRelative: true,  minDbh: 5,
				   classes: [30, 30, 30, 10, 0]
}


var thinning78a = { type: "thinning", 
				   schedule: { minRel: 0.79, optRel: 0.80, maxRel: 0.81 , force=true},
				   
                                   thinning: "custom",
				   onEvaluate: function() { console.log("8th THINNING ");return true;},
				   remainingStems: 245, targetValue: 15,  targetVariable: "volume", targetRelative: true,  minDbh: 5,
				   classes: [30, 30, 30, 10, 0]
}

// BECARFUL WE ARE IN CLEARCUT stp7  change IF IN STP8  ###############################################################################################

var thinning79a = { type: "thinning", 
				   schedule: { minRel: 0.89, optRel: 0.90, maxRel: 0.91 , force=true},
				   
                                 thinning: "custom",
				   onEvaluate: function() { console.log("9th THINNING ");return true;},
				   remainingStems: 205, targetValue: 15,  targetVariable: "volume", targetRelative: true,  minDbh: 5,
				   classes: [30, 30, 30, 10, 0]
}

// BECARFUL WE ARE IN SHELTERWOOD CUT (STP8) DELATE IF IN STP7  ###########################################################################################
//
// var thinning79a_sw1 = { type: "thinning", 
//				   schedule: { minRel: 0.89, optRel: 0.9, maxRel: 0.91 , force=true},
//				   
//                                   thinning: "custom",
//				   onEvaluate: function() { console.log(" SW_THINNING_9 ");return true;},
//				   targetValue: 50,  targetVariable: "volume", targetRelative: true,  minDbh: 5,
//				   classes: [40, 30, 20, 5, 5]
//} 


//////////////////////////////////////////////////////////// DELATE IF IN STP8

//- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 
//                                                      ---   C L E A R C U T   STP7--->   



/// final harvest for all stands, specific dbh treshold can be set in the options of the stp
//  we use default 5 cm dbh threshold



// clearcut for STP7: we do NOT remove the regeneration thanks the tree.filter    https://iland-model.org/ABE+activity+scheduled?highlight=scheduler

var clearcut7a =  { type: "scheduled",
			 schedule: { minRel: 0.99, optRel: 1.0, maxRel: 1.01, force=true },

			onEvaluate: function(){ 

	fmengine.log("finalHarvest:" + activity.finalHarvest);
					trees.loadAll();

	fmengine.log("---THE U WHAT iLAND USE HERE:" + stand.U);         // HAVE A LOOK AT "fmengine.log" HERE AND FOR THE FOLLOWING, IN THE XLXS FILE THE CODE IS A BIT DIFFERENT
	fmengine.log("Number of trees before selecting: "+ trees.count);

					 trees.filter("dbh>5")
					 trees.filter("age>0")

	fmengine.log("finLcut: using age threshold: "+stand.U*(0) );
	fmengine.log("Number of trees after selecting: "+trees.count);   // HERE THERE IS A KIND OF FUNCTION tree.count THAT CAN BE USED FOR THE TRASHOLD OF REMAINING TREES?! FOR THINNINIG

					trees.harvest(); 
                                        return true;},
			onExecute: function() { 

         fmengine.log("I really do the harvest..."); 

					trees.removeMarkedTrees(); 	
                 			},
					onCreate: function() {activity.finalHarvest=true;  },
		onSetup: function() {  } 
					
};


///////////////////////////////////////////////////////////// DELATE IF IN STP7

//- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- 
//                                                      ---   F I N A L C U T S  --->  S H E L T E R W O O D   T Y P E  STP8



/// final harvest for all stands, specific dbh treshold can be set in the options of the stp
//  we use default 10 cm dbh threshold



// shelterwood cut for STP8: we do NOT remove the regeneration thanks the tree.filter

//var finalcut7a_sw =  { type: "scheduled",
//			 schedule: { minRel: 0.99, optRel: 1.0, maxRel: 1.01, force=true },
//			onEvaluate: function(){ 
//					trees.loadAll();
//trees.filter("dbh>10")
//trees.filter("age>40")
//					trees.harvest(); 
//					return true; },
//			onExecute: function() { 
//        					trees.removeMarkedTrees(); },
//					onCreate: function() {activity.finalHarvest=true;  },
//					onSetup: function() {  } 
//					
//};



//////////////////// DELATE IT IF IN STP8

///////////////////  EDIT U THIS FOR DIFFERENT AGE ROTATION PERIOD

		
/// This show what activites are set for STP7	
var stp7 = { U: [120,120,120], // short/normal/long rotation age --- are ignored if U is provided in input file  ... we have it in .csv
            options: {}, 
			planting7a:  planting_7a, 
			
			thinning1: thinning71a,
			thinning2: thinning72a,
			thinning3: thinning73a,
			thinning4: thinning74a,
			thinning5: thinning75a,
			thinning6: thinning76a,
			thinning7: thinning77a,
			thinning8: thinning78a,
			thinning9: thinning79a,
			clearcut7a:  clearcut7a,

            // standmonitoring: stand_monitor

      onInit: function() {}  
			
};



// register the stand treatment program stp with the name 'stp'
console.log('adding STPs...');
fmengine.addManagement(stp7, 'STP7');



//////////////////// DELATE IT IF IN STP7

///////////////////  EDIT U THIS FOR DIFFERENT AGE ROTATION PERIOD


/// This show what activites are set for STP8	
//var stp8 = { U: [120,120,120], // short/normal/long rotation age --- are ignored if U is provided in input file  ... we have it in .csv
//            options: {}, 
//			planting:  planting_7a, 
//			
//			thinning1: thinning71a,
//			thinning2: thinning72a,
//			thinning3: thinning73a,
//			thinning4: thinning74a,
//			thinning5: thinning75a,
//			thinning6: thinning76a,
//			thinning7: thinning77a,
//			thinning8: thinning78a,
//			thinning9_sw1: thinning79a_sw1,
//			finalcut7a_sw:  finalcut7a_sw,
//
            // standmonitoring: stand_monitor
//
//      onInit: function() {}  
			
//};



// register the stand treatment program stp with the name 'stp'
//console.log('adding STPs...');
//fmengine.addManagement(stp8, 'STP8');



// without doent's work well the model
// minimal agent type/            https://iland-model.org/ABE?highlight=minimal+agent+type        link 2 :    https://iland-model.org/ABE+agents
//  VERY IMPORTANT FOR THE BELOW CONSTRAINS UNDERSTANDING   https://iland-model.org/doxy/struct_a_b_e_1_1_scheduler_options.html

var base_agent = {
	scheduler: { 
		 enabled: true,
                 minScheduleHarvest: 1,
		 maxScheduleHarvest: 20,
		 scheduleRebounceDuration: 15,
		 maxHarvestLevel: 150,         // default: 1.5
		 deviationDecayRate: 0.1,      // default: 0.1
		 useSustainableHarvest: 0.5,   // 0 is bottom-up harvest planning (i.e., stands are always processed at their optimal dates), and 1 is top-down approach (i.e, the scheduling algorithm decides when a stand should be processed).
		 harvestIntensity: 1}, 

	
	
	
////////////// EDIT IT IF YOU WANT SWITCH STAND STPS WITH SOME TRASHOLD LIKE PROPORTION OF ONE SPECIES 
////////////// PAY ATTENTION 
	
////////////// a list of all STPs the agent has access to....
	
stp: {  'STP7': 'STP7' ,'STP7': 'STP7', 'STP7': 'STP7','STP7': 'STP7','STP7': 'STP7','default':'STP7' },
newAgent: function() { return {  scheduler: this.scheduler }; },

        onSelect: function() { if (stand.flag("group")==1) {
              console.log(stand.flag("group")) ;
console.log('we should go back to STP1');
return 'STP7';
   }; 

if  (stand.flag("group")==2) {
console.log(stand.flag("group")) ;
console.log('we are in STP3');
return 'STP7';
                    };

if (stand.flag("group")==3) {
              console.log(stand.flag("group")) ;
console.log('we should go back to STP5');
return 'STP7';                                    //  REMEMBER TO CHANGE IT WHILE YOU ADD OTHER STPS
}; 

if (stand.flag("group")==4) {
              console.log(stand.flag("group")) ;
console.log('we should go back to STP7');
return 'STP7';
}; 

if (stand.flag("group")==5) {
              console.log(stand.flag("group")) ;
console.log('we should go back to STP9');
return 'STP7';
}; 

if (stand.flag("group")==6) {
              console.log(stand.flag("group")) ;
console.log('we should go back to STP5');
return 'STP7';
};

},

run: function() { console.log('base-agent run called');
                         console.log(stand.relSpeciesBasalAreaOf('piab'))  }
};




console.log('adding Agents...');
// register the agent-factory object base_agent under the name agenttype
fmengine.addAgentType(base_agent, 'agenttype');
// use the 'agenttype' agent-factory and create an agent named 'agent'
fmengine.addAgent('agenttype', 'agent');


// Writing out grids:   this is only to write out some grids (maps) of some info...

function onYearEnd()
{
 console.log("GlobalEvent: on year end: " + Globals.year);



}
