import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>We were crouched on the rungs of a tower crane, the city twinkling beneath us as the wind reddened our cheeks and stole our [[#twine-cb back]]laughter.[[/twine-cb]]</p>").cb('back', () => {
      window.window.close();
    });
  })
});
