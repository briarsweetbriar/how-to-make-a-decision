import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>There was a train track running along the bottom of the hill, and they were down there, hitting a railroad signal with some bamboo sticks. They spotted me while I was slipping under the barbed wire, and after a brief chase, they surrounded me before I could unlock my bike.</p><p>They couldn't have been older than thirteen. The tallest didn't even come up to my chin. He kept insisting that I was selling drugs, and although I assured him that I wasn't, he didn't buy my story about 'just wanting to explore the abandoned parking lot.'</p><p>Eventually he pointed to some graffiti and told me that it was his tag; that I wasn't allowed wherever I saw it. I nodded, and it was in that moment that he seemed to register my matted hair, my filthy clothes, my overstuffed backpack. There was a flicker of recognition, even pity. Then he summoned his bluster back up, and I realized this was just a performance for his friends. So I played along, and when it was all over, I did as he asked and [[#twine-cb back]]I never went back.[[/twine-cb]]</p>").cb('back', () => {
      window.window.close();
    });
  })
});
