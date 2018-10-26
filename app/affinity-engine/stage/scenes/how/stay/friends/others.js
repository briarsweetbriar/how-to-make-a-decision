import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    const eyes = yield script.text("<p>. . . hands around warm mugs, her eyes still rove my face after all of these years . . .</p><p>[[#twine hold]]hold[[/twine]] | [[#twine release]]release[[/twine]]</p>");
    const eyes = yield script.text("<p>. . .  . . .</p><p>[[#twine hold]]hold[[/twine]] | [[#twine release]]release[[/twine]]</p>");
  })
});
