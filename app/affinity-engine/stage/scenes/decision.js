import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>I'm [[#twine]]not ready[[/twine]] for this yet.</p>");
    window.window.close()
  })
});
