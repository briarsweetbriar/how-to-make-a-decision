import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>When I started school, the teachers praised my intellegence because I could already read. That early assessment stuck with me, let me continue thinking I was smart even when so many other things told me that I wasn't.</p><p>[[#twine-cb back]]Lola[[/twine-cb]] was the reason I could read.</p>").cb('back', () => {
      window.window.close();
    });
  })
});
