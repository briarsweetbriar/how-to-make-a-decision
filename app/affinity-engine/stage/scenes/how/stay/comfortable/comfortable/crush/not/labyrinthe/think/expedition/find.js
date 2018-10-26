import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>[[#twine-cb back]]this isn't the time[[/twine-cb]]</p>").cb('back', () => {
      window.window.close();
    });
  })
});
