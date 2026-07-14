/* Blueprint — deep report content: centers (defined & open), channels, alignment lists, closing synthesis */

window.DEEP = {

  // ---- All 36 channels: name + interpretation ----
  channels: {
    '1-8':  ['Channel of Inspiration', 'A creative role model. You carry a unique creative direction that inspires others simply through authentic self-expression. Your contribution isn\'t to fit in — it\'s to show what individual expression looks like, and your creative work gives others permission to be original too.'],
    '2-14': ['Channel of the Beat', 'The keeper of keys. You hold a natural sense of direction fueled by sustainable resources and energy. When you love what you do, resources flow toward you, and others orient their direction around your steady beat.'],
    '3-60': ['Channel of Mutation', 'An engine of change. You carry pulses of genuinely new energy — innovation that arrives in its own timing. Your gift is bringing real novelty into the world; your practice is honoring the pulse and not forcing change between beats.'],
    '4-63': ['Channel of Logic', 'A mind built for answers. Doubts and questions press on you until they resolve into workable formulas. You\'re here to test patterns and provide answers that make the future more secure — just remember your logic is for others; your own decisions still come from your authority.'],
    '5-15': ['Channel of Rhythm', 'A being in the flow. You have fixed natural rhythms and an aura that puts others back in flow. Your timing is your medicine — honor your routines, and don\'t let anyone convince you their schedule should be yours.'],
    '6-59': ['Channel of Intimacy', 'A force of connection. You\'re designed to break down the barriers between people — emotionally, creatively, and physically. Intimacy, in every sense, is your field of mastery, and your warmth creates the trust that makes real union possible.'],
    '7-31': ['Channel of the Alpha', 'A born leader — by election. You carry the energy of leadership that works through influence and being chosen, not force. When a group recognizes and asks for your direction, you guide naturally toward the future.'],
    '9-52': ['Channel of Concentration', 'A laser mind. You can focus on details with a stillness others can\'t sustain, driving projects to completion through determined attention. Your gift is knowing what deserves that focus — aim it only at what truly matters.'],
    '10-20': ['Channel of Awakening', 'You are here to inspire authenticity in others simply by being your most authentic self. Your words carry impact when they come from what is true for you right now — you\'re designed to speak from direct awareness, not from overthinking or people-pleasing. By being fully yourself, you awaken others to do the same.'],
    '10-34': ['Channel of Exploration', 'A follower of your own convictions. You\'re designed to live by your own principles and love yourself through action. When you do what you love, purely because it\'s true to you, you become magnetic — self-love as a way of life.'],
    '10-57': ['Channel of Perfected Form', 'Intuitive grace. Your survival and wellbeing are guided by an in-the-moment intuitive attunement to how you live. When you trust it, life gains an effortless elegance — right place, right timing, right form.'],
    '11-56': ['Channel of Curiosity', 'A seeker and storyteller. Ideas and imagery flow through you constantly, meant to be shared as stimulation and story — not as instructions anyone must follow. Your gift is making people feel and think through the tales you tell.'],
    '12-22': ['Channel of Openness', 'A social channel with exquisite timing. You express emotion with rare grace — when you\'re in the mood. Your voice, art, or presence moves people deeply, but only when the timing is right. Honoring your moods is honoring your gift.'],
    '13-33': ['Channel of the Prodigal', 'A witness and keeper of stories. You gather experiences and secrets — people confide in you — and after reflection you return with wisdom worth hearing. You\'re the memory of your community; your retreats are where raw experience becomes teachable truth.'],
    '16-48': ['Channel of Talent', 'Depth meets skill. You pair deep wells of insight with enthusiastic experimentation, and mastery comes through repetition — the ten-thousand-hours channel. Trust that your depth is there even when you fear you\'re not ready.'],
    '17-62': ['Channel of Acceptance', 'An organized mind. You turn opinions into structured, detailed, workable concepts. You\'re here to offer organized understanding others can operate by — offered as service, your detail becomes leadership; forced on others, it becomes mere opinion.'],
    '18-58': ['Channel of Judgment', 'You are designed to refine and improve the world around you, using your sharp eye for what can be made better. You naturally notice inefficiencies and how to fix them — the energy of editors, designers, coaches, and quality specialists. Offered from service, your discernment turns good into great; stuck in shadow, it becomes perfectionism. Critique when invited, and celebrate what already works.'],
    '19-49': ['Channel of Synthesis', 'Sensitivity to needs. You feel what people and communities need — food, shelter, belonging, fair terms — and you broker the emotional contracts that hold groups together. Your sensitivity is a leadership instrument; protect it with clear boundaries.'],
    '20-34': ['Channel of Charisma', 'Busy hands, present mind. You\'re built to be doing — thought manifested as activity in the now. When you\'re responding to what genuinely pulls you, your busyness is mesmerizing and productive; when you\'re not, it\'s just motion. Let response choose your motion.'],
    '20-57': ['Channel of the Brainwave', 'Penetrating in-the-moment awareness. Your intuition speaks in real time, and you can voice it as it arrives — an almost unsettling clarity about what is healthy or unhealthy right now. Trust the first knowing; it will not repeat itself.'],
    '21-45': ['Channel of the Money Line', 'A material maestro. You carry the energy of managing resources — controlling what you own and directing the tribe\'s material life. You need sovereignty: your own territory, your own terms. Given that, you\'re a natural steward of prosperity.'],
    '23-43': ['Channel of Structuring', 'Genius to freak. You have unique insights that arrive whole and unbidden — knowing without knowing how. Your task is translation: with the right timing and audience, your strangest thoughts are your most valuable ones.'],
    '24-61': ['Channel of Awareness', 'A thinker\'s mind. Inner truth presses on you — you circle back over mysteries until they yield inspiration. You\'re designed to think about thinking, to ponder the imponderable. Give your mind big questions, and let your life decisions come from elsewhere.'],
    '25-51': ['Channel of Initiation', 'A competitive, mystical spirit. You leap first into the unknown and your shocks of initiative open doors for everyone behind you. Life will initiate you too — each leap deepens a universal, impersonal kind of love.'],
    '26-44': ['Channel of Surrender', 'A natural entrepreneur and transmitter. You read patterns from the past — especially in people — and know exactly how to present something so it lands. Sales, persuasion, memory: your instinct for what worked before makes you the tribe\'s messenger of what to embrace next.'],
    '27-50': ['Channel of Preservation', 'A caretaker\'s design. You carry the energy of nourishing and protecting — values, people, and the vulnerable. Guard against caring past your capacity; your care is a resource that must include yourself.'],
    '28-38': ['Channel of Struggle', 'A stubborn fighter for meaning. You\'re designed to wrestle with life and discover what is truly worth fighting for. Struggle isn\'t your failure — it\'s your method. The purpose you find through it becomes wisdom others live by.'],
    '29-46': ['Channel of Discovery', 'Succeeding where others fail. You say yes with your whole body and see experiences through to their hidden treasure. Your commitments are sacred — when they come from genuine response, your perseverance turns everything into discovery.'],
    '30-41': ['Channel of Recognition', 'A dreamer with focused desire. Fantasies and feelings press on you toward new experience. You\'re here to feel deeply, imagine vividly, and learn which desires are meant to be lived versus savored as fuel for your creative fire.'],
    '32-54': ['Channel of Transformation', 'Driven ambition. You instinctively know what can rise and what will fall, and you have the drive to transform ambition into real advancement. Recognition from the right people is your accelerator — align your ambition with your authority so you climb the right mountains.'],
    '34-57': ['Channel of Power', 'An archetype of pure survival intelligence. Your power flows when intuition and energy move as one — acting in the now, guided by instinct. Trust the body; it knows before the mind can object.'],
    '35-36': ['Channel of Transitoriness', 'A jack of all trades. You\'re designed for the full buffet of human experience — feeling, tasting, moving on, and turning experience into emotional wisdom. "Been there, done that" isn\'t restlessness; it\'s your curriculum.'],
    '37-40': ['Channel of Community', 'The glue of the tribe. You carry the energy of bargains, loyalty, and belonging — who provides what, and on what terms. Your warmth builds families and teams; your clarity about fair agreements keeps them healthy.'],
    '39-55': ['Channel of Emoting', 'A moody, poetic spirit. Your emotional waves carry creative brilliance — provocation, music, romance, melancholy that turns into art. Your moods are not problems to fix; they\'re weather that waters your creativity. Never make big decisions mid-storm.'],
    '42-53': ['Channel of Maturation', 'A being of cycles. You\'re designed to begin, develop, and complete full cycles of experience — and the wisdom is in the completion. Enter what you can finish, finish what you enter, and your life compounds into maturity others learn from.'],
    '47-64': ['Channel of Abstraction', 'A mind for making sense of the past. Mental snapshots and memories press on you until they suddenly resolve into meaning. You can\'t force the epiphany — but when it comes, you turn confusion into stories that liberate people.'],
  },

  // ---- Nine centers: question, defined & open interpretations ----
  centers: {
    head: {
      q: 'How you get inspired',
      defined: {
        h: 'You have your own reliable source of inspiration and mental pressure.',
        body: ['With a defined Head Center, questions, doubts, and inspiration arise from within you on your own schedule. You consistently generate the questions worth asking — a dependable inner spark that doesn\'t rely on the world to stimulate it. Others around you often find themselves inspired simply by your presence, picking up on the mental pressure you naturally radiate.',
          'The shadow side is pressure that never switches off: a mind that keeps manufacturing questions can keep you up at night trying to answer all of them. Not every question your head produces deserves your energy — many exist to inspire others, not to be solved by you.'],
        p: 'When mental pressure builds, write the question down and ask: "Is this mine to answer, and is now the time?" Let your authority — not the pressure — decide.',
      },
      open: {
        h: 'You take in inspiration from the world — and amplify it.',
        body: ['With an open Head Center, inspiration comes to you from outside: people, places, books, conversations. You can feel other people\'s questions and doubts as if they were your own, which makes you unusually open-minded and genuinely wise about what is worth wondering about.',
          'The trap is mental pressure that doesn\'t belong to you — trying to answer everyone else\'s questions, chasing certainty, feeling you must "figure it all out." Chronic mental busyness in this center is borrowed, not yours to carry.'],
        p: 'When your mind races, ask: "Whose question is this?" Step away from the person or feed that sparked it, and notice how quickly the pressure dissolves.',
      },
    },
    ajna: {
      q: 'How you explore different ideas',
      defined: {
        h: 'Your way of conceptualizing the world is consistent and trustworthy.',
        body: ['With a defined Ajna, you process information in a fixed, reliable way — your mind organizes concepts, forms opinions, and builds certainty on its own dependable wavelength. People experience you as mentally solid: you know what you think.',
          'The shadow is rigidity. A mind this certain can mistake its processing style for the only valid one, defending positions past their usefulness. Your concepts are gifts for others; they were never meant to run your life decisions.'],
        p: 'Practice saying "I\'m certain of how I see it — and I might be seeing only part." Let your mind advise, and let your authority decide.',
      },
      open: {
        h: 'You are mentally fluid — able to see ideas from every side.',
        body: ['With an open Ajna, you don\'t process the world in one fixed way — you try on concepts, beliefs, and perspectives like lenses. This is real intellectual flexibility: over time you develop wisdom about which ideas are genuinely useful and which are just confidently held.',
          'The trap is pretending certainty you don\'t feel — clinging to borrowed opinions to seem consistent, or feeling anxious that you "change your mind too much." Your uncertainty is not a defect; it\'s the openness that makes you wise.'],
        p: 'Give yourself permission to say "I don\'t have a fixed view on that yet." Notice how much lighter thinking becomes when you don\'t have to defend a position.',
      },
    },
    throat: {
      q: 'How you communicate',
      defined: {
        h: 'You have a consistent, reliable voice — expression is your instrument.',
        body: ['With a defined Throat, your communication has a fixed flavor: a dependable way of speaking, expressing, and turning ideas into words or action. People can count on your voice, and its consistent tone is part of your identity.',
          'The shadow is talking to fill space, or speaking before your strategy and authority have been consulted. A defined throat has power — which means words spent carelessly also carry weight.'],
        p: 'Before big conversations, pause and check: "Am I speaking from my truth, or just because I can?" Timing turns your voice from noise into influence.',
      },
      open: {
        h: 'Your voice is flexible — you speak differently with everyone, and that\'s by design.',
        body: ['With an open Throat, how you express depends on who you\'re with; you channel and translate the energy of the room. You may notice your accent, vocabulary, even your opinions shift between audiences — this adaptability makes you a natural interpreter of others.',
          'The trap is talking to attract attention — blurting, interrupting, or feeling invisible unless you speak. The pressure to be heard is the not-self of this center. Paradoxically, your words land with the most impact when they\'re invited.'],
        p: 'In your next group setting, experiment with waiting to be asked before offering your view. Notice how differently people receive what you say.',
      },
    },
    g: {
      q: 'How you express your identity',
      defined: {
        h: 'Your sense of self and direction is fixed, steady, and internally sourced.',
        body: ['With a defined G Center, you carry a consistent identity — a reliable sense of who you are, what you love, and where you\'re headed. You don\'t need others to tell you who to be, and people around you often orient themselves by your steadiness.',
          'The shadow is inflexibility about direction — gripping an identity or path so tightly that life\'s invitations to evolve feel like threats. Your direction is reliable, but it still unfolds; let it.'],
        p: 'Regularly ask: "Does the way I\'m living still express who I actually am?" Course-correct from love, not fear.',
      },
      open: {
        h: 'You are a chameleon of identity — place and people shape who you become.',
        body: ['With an open G Center, you don\'t have one fixed identity — you taste and reflect the identities around you. Where you are and who you\'re with genuinely changes how you feel about yourself, which is why environment is the single most important decision of your life.',
          'The trap is the anxious search for a fixed self — "Who am I? Where am I going? Do I even know what love is?" These questions have no permanent answer for you, and they were never supposed to. You are wise about identity precisely because you\'re not locked into one.'],
        p: 'Audit your places and people: in which rooms do you like who you become? Spend more time in those. If a place feels wrong, it is wrong — for you.',
      },
    },
    heart: {
      q: 'How you value yourself',
      defined: {
        h: 'You have consistent access to willpower — and your word is your bond.',
        body: ['With a defined Heart/Ego Center, you have real willpower on tap: the capacity to make promises and keep them, to want things unapologetically, and to work for what you value. Healthy ego isn\'t arrogance here — it\'s the engine of your integrity.',
          'The shadow is over-promising or bulldozing — making commitments your heart isn\'t actually in, or imposing your will where it wasn\'t invited. Every broken promise erodes the very self-worth this center runs on.'],
        p: 'Treat promises as sacred currency: make fewer, keep all of them. Before committing, ask "Do I truly want this?" — and let the honest answer stand.',
      },
      open: {
        h: 'Your sense of worth is open — and proving yourself is the trap.',
        body: ['With an open Heart Center, you don\'t have consistent willpower, and you were never meant to run on it. Instead you sense the worth, desire, and will of everyone around you — over time becoming genuinely wise about what is truly valuable and who can be trusted to keep their word.',
          'The trap is the deepest not-self theme there is: trying to prove your worth. Over-promising, over-working, under-charging, saying yes to be valued. You have nothing to prove — your value doesn\'t depend on willpower you were never designed to have.'],
        p: 'Catch the phrase "I\'ll prove it" in any form. Replace it with your strategy: let recognition, response, or clarity come first. Never make promises under pressure.',
      },
    },
    solar: {
      q: 'How you experience emotions',
      defined: {
        h: 'You run on an emotional wave — feeling is your engine and your clock.',
        body: ['With a defined Solar Plexus, emotions rise and fall in you on a chemical wave — hope to disappointment and back — independent of circumstances. This wave gives your life depth, passion, and creative richness, and it sets the emotional weather for every room you enter.',
          'The shadow is acting at the extremes: promising the world at the peak, burning it down in the trough. There is no truth in the now for you — only the whole wave, averaged over time, tells you what\'s real.'],
        p: 'Institute a personal "sleep on it" rule for every significant decision. Track the choice across several days of moods; commit only to what stays true in all weathers.',
      },
      open: {
        h: 'You feel other people\'s emotions — often more strongly than they do.',
        body: ['With an open Solar Plexus, you absorb and amplify the feelings around you. You can walk into a room and instantly know its emotional state; other people\'s joy is contagious in you, and so is their tension. Over time this makes you extraordinarily empathic and wise about emotional truth.',
          'The trap is avoiding confrontation and chasing "nice" — holding back truth, avoiding necessary conflict, and carrying emotions that were never yours in order to keep the peace. Emotional honesty, not emotional comfort, is your path.'],
        p: 'When a strong feeling hits, ask: "Is this mine?" Step out of the room for two minutes — if the feeling drains away, it was borrowed. Return lighter.',
      },
    },
    sacral: {
      q: 'How you work best',
      defined: {
        h: 'You have sustainable life-force energy — when it\'s doing what it loves.',
        body: ['With a defined Sacral, you have renewable working energy — the capacity to build, make, and sustain effort day after day. But this engine has one condition: it only renews when it\'s responding to work it genuinely loves. Used correctly, you go to bed tired and wake up full.',
          'The shadow is grinding at things your gut never said yes to. The same engine that can build a life can also grind you down in the wrong job, the wrong project, the wrong commitment — that\'s where frustration and burnout live.'],
        p: 'End each day with one question: "Did today satisfy me?" A week of noes is your signal — not to push harder, but to change what you\'re responding to.',
      },
      open: {
        h: 'Your connection to life-force energy is fluid — you borrow it, amplify it, and must release it.',
        body: ['With an open Sacral, you don\'t generate sustainable working energy — you take in and amplify the energy of others. In bursts you can outwork anyone in the room (it\'s amplified!), but it isn\'t yours and it isn\'t renewable, which is why consistency feels so hard.',
          'The key challenge is not knowing when enough is enough: matching the pace of the defined-sacral people around you, overcommitting to external expectations, pushing past your limits until fatigue or burnout forces a stop. Your energy isn\'t a constant resource, and pretending otherwise is the fastest way to exhaust it.',
          'Living wisely here means responding rather than initiating when it comes to workload, guarding your boundaries, and resting before you\'re wrecked. When you honor your ebb and flow, you can support others powerfully without depleting yourself — and you become deeply wise about work itself: who\'s working well, who\'s overdoing it, and what enough actually looks like.'],
        p: 'Schedule rest like meetings — before you need it. And notice which people and places energize versus drain you; your environment is half your energy budget.',
      },
    },
    spleen: {
      q: 'How you work with your intuition',
      defined: {
        h: 'Your relationship with intuition, fear, and health is anchored in clear, instinctive knowing.',
        body: ['With a defined Spleen, your intuition is a steady, immediate presence — an in-the-moment sense of what is healthy, safe, and right for you. It speaks once, quietly, without explanation: a sudden knowing to act or avoid, grounded in the body\'s oldest survival intelligence.',
          'Your fears tend to be specific and useful — precise signals of misalignment rather than generalized anxiety. The challenge is speed: knowing this fast can tip into acting impulsively, or conversely, letting the mind talk you out of a signal that will not repeat itself.',
          'To live aligned with this center, trust the first flash and check fear against your body: is this a real protective message? Honor the knowing, act on it cleanly, and build an environment that supports your health — a nourished body keeps this radar sharp.'],
        p: 'Next time you feel a subtle internal "no" — a hesitation, a slight pull-back — honor it immediately, even without a reason. The reason arrives later; the safety arrives now.',
      },
      open: {
        h: 'You are deeply sensitive to wellbeing — yours and everyone else\'s.',
        body: ['With an open Spleen, you take in and amplify other people\'s fears, instincts, and sense of wellness. You can feel when something is off in a person or a room before anyone says a word, and over time you become truly wise about health, fear, and what safety really is.',
          'The trap is holding on too long to what doesn\'t feel good — jobs, relationships, habits — because letting go feels existentially unsafe, and borrowed fears whisper that you can\'t survive the change. Spontaneity is another trap: decisions made to escape fear rather than from your actual authority.'],
        p: 'Name the fear out loud and ask: "Is this mine, and is it current?" Most of what you carry belongs to other people or the past. Release what isn\'t yours before deciding anything.',
      },
    },
    root: {
      q: 'How you deal with stress',
      defined: {
        h: 'You possess a steady, powerful energy source for handling stress and pressure.',
        body: ['With a defined Root, adrenaline pressure is your own — it comes in reliable pulses of drive that let you stay calm and grounded in situations that overwhelm others. At your best, you convert stress into fuel for meaningful work, and your grounded presence steadies everyone near you.',
          'The shadow is internalized pressure without release — urgency leaking into your interactions, unrealistic pacing imposed on others, or rushing through tasks that deserved presence. Your pulse is on-off by nature: momentum comes in waves, and forcing it between pulses backfires.'],
        p: 'Move the pressure through your body — exercise, walking, breathwork — before it moves through your relationships. And when the pulse is off, rest without guilt; the next pulse always comes.',
      },
      open: {
        h: 'You amplify the pressure around you — hurry is the trap.',
        body: ['With an open Root, you absorb and amplify the ambient pressure of the world: deadlines, urgency, other people\'s restlessness. It feels like a constant hum of "not done yet" — a pressure to get things finished so you can finally be free of it. But the inbox refills; the pressure isn\'t yours and doesn\'t end.',
          'The trap is living hurried: rushing decisions, overbooking, saying yes to relieve pressure rather than because something is right. Over time you can become wise about pressure itself — able to feel exactly who is stressed and what stress does to people — without being run by it.'],
        p: 'When urgency spikes, ask: "What actually happens if this waits a day?" Almost always: nothing. Let that answer slow your yes.',
      },
    },
  },

  // ---- "Ways to align with your type" bullets ----
  align: {
    'Generator': [
      ['Follow the light-up', 'Your gut response is your compass. Give your energy only to what genuinely excites you — satisfaction is the proof you\'re spending your life force correctly.'],
      ['Let life come to you', 'Stop initiating from the mind. Put your energy into being visibly, happily engaged in what you love — the right opportunities respond to that signal.'],
      ['Use your energy fully', 'A Generator who doesn\'t burn their daily energy sleeps badly and feels restless. Move, make, work at what you love — then rest deeply.'],
      ['Honor the plateau', 'Mastery has flat stretches. Frustration at a plateau isn\'t always a "no" — check whether your gut still says yes to the work itself.'],
      ['Respond, then commit', 'Your commitments are powerful when they start as a gut yes. Never commit from social pressure — it\'s the fastest route to frustration.'],
    ],
    'Manifesting Generator': [
      ['Respond, then move fast', 'Wait for something to respond to — then trust your speed completely. Your shortcuts are legitimate; you\'re built to skip non-essential steps.'],
      ['Inform as you go', 'Your speed surprises people. A ten-second heads-up to those affected converts resistance into support.'],
      ['Keep multiple lanes', 'You\'re multi-passionate by design. Parallel projects aren\'t a lack of focus — they\'re your energy\'s natural shape.'],
      ['Quit cleanly', 'When something stops lighting you up, you\'re allowed to leave it. Mastery for you is breadth plus momentum, not one ladder.'],
      ['Watch for anger and frustration', 'Frustration means wrong thing; anger means people are slowing you down. Both are signals to re-route, not push.'],
    ],
    'Projector': [
      ['Recognize your unique gifts', 'You are here to guide, not to do all the work yourself. Focus on what you naturally see better than others, and trust that your wisdom is valuable.'],
      ['Own your role as a guide', 'You see what others can\'t. Trust that your perspective is valuable even when your way of operating looks different from the energy types around you.'],
      ['Refine your skills & knowledge', 'While waiting for the right invitations, invest in what excites you — study, observe, hone your expertise. Your wisdom becomes magnetic when you\'re immersed in what you love.'],
      ['Use your energy intentionally', 'Short bursts of deep work followed by true rest. Your success comes from working efficiently, not endlessly — you\'re not built for Generator hours.'],
      ['Be selective with commitments', 'Not every opportunity is meant for you. If something feels draining or unappreciated, step back and make room for what truly values your gifts.'],
      ['Surround yourself with recognition', 'Environments where you\'re seen bring out your best. If you\'re constantly overlooked, change where — or with whom — you invest your energy.'],
    ],
    'Manifestor': [
      ['Act on your urges', 'Your creative impulses are your engine. When the urge to initiate rises, honor it — you don\'t need permission.'],
      ['Inform before you act', 'Not asking — informing. Telling the people in your impact zone before you move melts the resistance your closed aura naturally creates.'],
      ['Work in surges', 'Your energy comes in powerful bursts, not a steady hum. Initiate hard, then rest deeply — both without apology.'],
      ['Start it, hand it off', 'You\'re built to launch, not to maintain. Design your projects so others can carry what you start.'],
      ['Guard your peace', 'Peace is your signature. Chronic anger means you\'re being controlled or you\'ve stopped informing — fix whichever it is.'],
    ],
    'Reflector': [
      ['Choose environments first', 'You become where you are. Pick homes, workplaces, and communities by how you feel inside them — this is your highest-leverage decision.'],
      ['Take the lunar cycle', 'For major decisions, wait ~28 days. Talk it through with different trusted people and notice what stays true across the whole cycle.'],
      ['Ride your daily weather', 'Feeling different every day is your design working, not failing. Track the moon\'s transits if you enjoy structure — your consistency lives there.'],
      ['Discharge what you borrow', 'You sample and amplify everyone\'s energy. Regular solitude lets you empty out and return to your own baseline.'],
      ['Trust your mirror nature', 'You feel the health of your community before anyone else. Surprise and delight are your signs of alignment; chronic disappointment means the environment needs changing.'],
    ],
  },

  // ---- Closing synthesis fragments ----
  closing: {
    openness: {
      high: 'Because so much of your chart is open, you are highly sensitive to the energy of other people. You may feel pressure to figure everything out mentally, to try doubly hard to feel seen, or to prove your worth by overcommitting. Remember: most of what you feel is amplified from around you. Your openness is not fragility — it is the very thing that makes you wise.',
      mid: 'Your chart balances definition and openness: parts of you are consistent and reliable, while other parts taste and amplify the world around you. The art of your life is telling the two apart — standing firmly in what is fixed in you, while wearing what you absorb from others lightly.',
      low: 'Your chart is heavily defined: most of your energy runs on fixed, reliable circuits. Your consistency is a gift to everyone around you — and your growth edge is staying receptive, since little of the world gets "inside" you uninvited. Choose your commitments carefully; your definitions make you persistent even on wrong roads.',
    },
    type: {
      'Generator': 'You are not here to force life to happen. You are here to respond to what lights you up and let satisfaction be your compass.',
      'Manifesting Generator': 'You are not here to pick one thing forever. You are here to respond, move fast, inform as you go, and let satisfaction be your compass.',
      'Projector': 'You are not here to force life to happen. You are here to sense what feels correct, share your guidance where it is recognized and invited, and let success find you through the people who truly see you.',
      'Manifestor': 'You are not here to wait for anyone. You are here to initiate what only you can see, inform those in your path, and protect your peace.',
      'Reflector': 'You are not here to be consistent. You are here to mirror your community, take your time, and let the right environments reveal who you are this month.',
    },
  },
};
