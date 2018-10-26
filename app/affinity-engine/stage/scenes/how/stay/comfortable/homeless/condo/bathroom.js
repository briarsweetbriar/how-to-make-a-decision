import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>The tub actually worked, and even though the hot water didn't turn on, a cold bath sounded nice in its own right. I swished the water around the tub a few times to wash out the little flakes of plaster and paint, and then I took off my clothes and stepped in. I hadn't bathed in weeks, and as I settled into the water, it felt like quenching a parched throat. I lingered in there until the tub was rimmed with grime.</p><p>At the time, I was working as a pedicabber, and I deeply resented the middle-class 30-somethings who made it seem so natural that I should be the one to serve them. Laying in that bath, coating it in my filth: I wanted to feel satisfied that I was spoiling their brand new luxury apartment. Instead, once the water had drained, I got down on my hands and knees and scrubbed like I could erase [[#twine-cb back]]what I had done.[[/twine-cb]]</p>").cb('back', () => {
      window.window.close();
    });
  })
});
