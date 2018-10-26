import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>It was my first or second sublet, I forget exactly which. A friend of mine was going to New Mexico for the month, and so I got his room in a tiny house in East Austin. Rent back then was like $300.</p><p>His roommates were an older couple with a kid. They fought a lot, and most nights, the dad wasn't around. I remember coming home one day and their daughter was sitting by herself in the living room. She patted the couch next to her and asked me if we could 'talk about hard feelings.' She was three years old. I did my best to console her, but . . . fuck.</p><p>When I left, I gave her the stuffed animals, though honestly it didn't feel like the right thing to do. She was a sweet kid, but a part of me knew that her parents would probably throw the animals away when they moved next. I just wanted to tell myself a story, you know. A story that I cared enough to find [[#twine-cb back]]the right home[[/twine-cb]] for them.</p>").cb('back', () => {
      window.window.close();
    });
  })
});
