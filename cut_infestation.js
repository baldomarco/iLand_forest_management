#//In the agent-based management module of iLand (http://iland.boku.ac.at/ABE?highlight=abe) we used the following JavaScript description 
#//to cut all the trees in a stand affected by the biotic agent and exceeding the threshold given above:


var a_disturbance_response = { type: 'general',
                     schedule: 1000, // not reached 
                     action: function() {
                                 trees.loadAll();  
                                trees.harvest();
                                trees.removeMarkedTrees();
                         // do whatever needs to be done here
                         console.log('ABE: disturbance response');
                     }
}
