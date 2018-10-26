import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>I want wisdom to be my currency. Here, let me give you some in exchange for a seat at your table. I dug it up with my own hands, and together we can pretend that it's [[#twine]]gold.[[/twine]]</p>");
    window.window.close();
  })
});
