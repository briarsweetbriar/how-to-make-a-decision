import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>If they see you as worthless, their eyes will be like death. It's something you learn to [[#twine]]feel.[[/twine]]</p>");
    window.window.close();
  })
});
