import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>I sometimes think about them in their new cities, leading lives that are impossibly exciting and important, and then I wonder, what do they see when they think of me? I always find myself imagining a mosquito encased in [[#twine-cb back]]amber.[[/twine-cb]]</p>").cb('back', () => {
      window.window.close();
    });
  })
});
