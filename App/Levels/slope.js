const SLOPE = [{
  name: 'A Solid Slope',
  nick: 'SLOPE_POSITIVE',
  colors: Colors.biomes.alps,
  x: 10,
  y: 0,
  camera: {
    x: 0,
    y: 0,
    fov: 7,
  },
  requirements: ['HELLO_WORLD'],
  flashMathField: true,
  defaultExpression: '-x',
  hint: 'hint: x makes a slope',
  goals: [
    {
      type: 'path',
      expression: 'x',
      pathX: -4,
      x: -2,
      y: 0,
    },
  ],
  sledders: [{
    speech: [{
      speakerX: -0.4,
      content: 'Ready to go?',
      direction: 'up-up-left',
      distance: 1.5,
    },{
      speakerX: 0.3,
      content: 'Let’s do it!',
      direction: 'right-up',
      distance: 1,
    }]
  }],
  texts: [{
    x: -3,
    y: -2,
    size: 0.4,
    align: 'right',
    content: 'This is your objective →'
  },{
    x: -3.1,
    y: -6.8,
    size: 0.4,
    align: 'center',
    content: 'Edit this function to hit it!'
  }],
  slider: {expression:"nx", bounds:[-1,1,-1]},
  textBubbles: [{content:"Click here to edit your function", domSelector:"#expression-envelope", place:"top-right", destroyOnClick:true}, {content:"slide me up", domSelector:"#dotted-slider-box", place:"bottom-left",destroyOnClick:true}],
  sky: {
    asset:'images.western_slopes_background',
    margin: 1,
  },
},
{
  name: 'Try facing forwards?',
  nick: 'SLOPE_NEGATIVE',
  colors: Colors.biomes.alps,
  x: 10,
  y: 0,
  camera: {
    x: 2,
    y: -2,
    fov: 7,
  },
  requirements: null,
  defaultExpression: 'x',
  hint: 'hint: go negative',
  goals: [
    {
      type: 'path',
      expression: '-x',
      pathX: 6,
      x: 2,
      y: 0,
    },
  ],
  sledders: [{
    speech: [{
      speakerX: -0.4,
      content: '…forward this time? Please?',
      direction: 'up',
      distance: 1.5,
    },{
      speakerX: 0.3,
      content: 'Wuss.',
      direction: 'up-right',
      distance: 1,
    }]
  }],
  slider: {expression:"nx", bounds:[-1,1,1]},
  sky: {
    asset: 'images.western_slopes_background',
    margin: 1,
  },
},
{
  name: 'Constant Lake',
  nick: 'SLOPE_CONVERSATION_1',
  colors: Colors.biomes.alps,
  radius: 2,
  x: 7.5,
  y: 0,
  camera: {
    x: 2,
    y: -2,
    fov: 7,
  },
  requirements: ['SLOPE_NEGATIVE'],
  defaultExpression: '\\frac{2}{1+\\frac{1}{e^{x-5}}}+\\frac{-8}{1+\\frac{1}{e^{x-28}}}',
  directors: [{
    type: 'lerp',
    point0: [-1, 0],
    point1: [10, 0],
    state0: {
      position: [-2, 3.5],
      fov: 5,
    },
    state1: {
      position: [16, 8],
      fov: 12,
    },
  }],
  goals: [],
  sledders: [],
  sky: {
    asset: 'images.western_slopes_background_no_sky',
    margin: 1
  },
  sounds: [
    {
      asset: 'sounds.constant_lake.base',
      loop: true,
      volume: 0.2,
    },
    {
      asset: 'sounds.constant_lake.pad_1_loopable',
      loop: true,
      volume: 0.3,
    },
    {
      asset: 'sounds.constant_lake.pad_2_loopable',
      domain: [ 8, 12 ],
      fadeOut: 800,
      duration: 20000
    },
    {
      asset: 'sounds.constant_lake.pad_3_loopable',
      domain: [ 14, 17 ],
      fadeOut: 800,
      duration: 10000,
      volume: 1.2,  
    },
  ],
  walkers: [{
    x: -4,
    asset: 'images.benny_float',
    range: [NINF, 26],
    speech: [{
      speakerX: -0.4,
      content: 'The sun is setting soon',
      direction: 'up-up-left',
      domain: [-3, 0],
      distance: 1.5,
    },{
      speakerX: 0.3,
      content: 'NOT AS BEAUTIFUL AS YOU M\'LOVELY',
      direction: 'up-up-right',
      domain: [6, 9],
      distance: 1.8,
    }],
    walkers: {
      x: -6,
      asset: 'images.sam_float',
      bobSpeed: 0.918218,
      speech: [{
        speakerX: -0.4,
        content: 'It\'s beautiful!',
        direction: 'up-up-left',
        domain: [4, 8],
        distance: 1.3,
      },{
        color: '#fff',
        speakerX: -0.4,
        content: '...',
        direction: 'up-up-left',
        domain: [12, 14],
        distance: 1.0,
      },{
        color: '#fff',
        speakerX: -0.4,
        content: '…you\'re such a dork.',
        direction: 'up-up-left',
        domain: [14, 17],
        distance: 1.3,
      },{
        color: '#fff',
        speakerX: -0.4,
        content: 'I do love you, though.',
        direction: 'up-up-left',
        domain: [22, 26],
        distance: 1.3,
      }],
    },
  }],
  sprites: [
    {
      // TODO: Replace with actual animated/pretty lake
      asset: 'images.lake',
      size: 7,
      x: 30,
      y: -0.5,
    },
    {
      asset: 'images.tree*',
      flipX: "*",
      drawOrder: LAYERS.foreSprites,
      size: 4.8,
      x: -8,
      y: 0,
      offset: [0, 0.9],
      anchored:true
    },
    {
      asset: 'images.tree*',
      flipX: "*",
      size: 5.2,
      x: -4.5,
      y: 0,
      offset: [0, 0.9],
      anchored:true
    },
    {
      asset: 'images.tree*',
      flipX: "*",
      size: 4.1,
      x: -3.2,
      y: 0,
      offset: [0, 0.9],
      anchored:true
    },
    {
      asset: 'images.tree*',
      flipX: "*",
      drawOrder: LAYERS.foreSprites,
      size: 4.4,
      x: 3.7,
      y: 0,
      offset: [0, 0.9],
      anchored:true
    },
    {
      asset: 'images.tree*',
      flipX: "*",
      size: 4.3,
      x: 4.8,
      y: 0,
      offset: [0, 0.9],
      anchored:true
    },
    {
      asset: 'images.tree*',
      flipX: "*",
      size: 5,
      x: 6.3,
      y: 0,
      offset: [0, 0.9],
      anchored:true
    },
    {
      asset: 'images.tree*',
      flipX: "*",
      drawOrder: LAYERS.foreSprites,
      size: 5,
      x: 7.4,
      y: 0,
      offset: [0, 0.9],
      anchored:true
    },
    {
      asset: 'images.tree*',
      flipX: "*",
      size: 4.9,
      x: 11,
      y: 0,
      offset: [0, 0.9],
      anchored:true
    },
    {
      asset: 'images.tree*',
      flipX: "*",
      size: 5.4,
      x: 13.2,
      y: 0,
      offset: [0, 0.9],
      anchored:true
    },
    {
      asset: 'images.tree*',
      flipX: "*",
      drawOrder: LAYERS.foreSprites,
      size: 4.3,
      x: 15,
      y: 0,
      offset: [0, 0.9],
      anchored:true
    },
    {
      asset: 'images.rock',
      flipX: "*",
      drawOrder: LAYERS.foreSprites,
      size: 3,
      x: 9,
      y: -0.2,
      offset: [0, 0.6],
      anchored:true
    },
  ],
  // clouds: {
  //   velocity: 0.1,
  //   heights:[4,4.8]
  // },
},
{
  name: 'A real steep hill',
  nick: 'SLOPE_STEEPER',
  colors: Colors.biomes.alps,
  x: 10,
  y: -10,
  camera: {
    x: 2,
    y: -5.5,
    fov: 11,
  },
  requirements: ['SLOPE_NEGATIVE'],
  defaultExpression: '-x',
  hint: 'hint: try multiplying',
  goals: [
    {
      type: 'path',
      expression: '-x*2',
      pathX: 6,
      x: 2,
      y: 0,
    },
  ],
  sledders: [{
    speech: [{
      speakerX: -0.4,
      content: 'Wuss!',
      direction: 'up-up-left',
      distance: 1.3,
    },{
      speakerX: 0.3,
      content: '…shut up.',
      direction: 'up-right-right',
      distance: 1,
      speech: {
        content: 'This seems dangerous.',
        distance: 1,
      }
    }]
  }],
  slider: {
    expression: 'nx',
    bounds: [-1.5, -1, -1]
  },
  sky: {
    asset: 'images.western_slopes_background',
    margin: 1,
  },
},
{
  name: 'The bunny slope',
  nick: 'SLOPE_SHALLOWER',
  colors: Colors.biomes.alps,
  x: 10,
  y: 0,
  camera: {
    x: 2,
    y: 0,
    fov: 7,
  },
  requirements: null,
  hint: 'hint: what’s the opposite of multiplying?',
  defaultExpression: '-x',
  goals: [
    {
      type: 'path',
      expression: '-x/2',
      pathX: 6,
      x: 2,
      y: 0,
    },
  ],
  sledders: [{
    speech: [{
      speakerX: -0.4,
      content: 'But also definitely less fun.',
      direction: 'up',
      distance: 1.5,
      speech: {
        content: 'This is definitely safer.',
        direction: 'up-up-left',
        distance: 0.8,
      }
    },{
      speakerX: 0.3,
      content: 'There’s probably a connection there.',
      direction: 'right-up',
      distance: 0.8,
    }]
  }],
  slider: {expression:"\\frac{-x}{n}", bounds:[1,1.5,1]},
  sky: {
    asset: 'images.western_slopes_background',
    margin: 1,
  },
},
{
  name: 'Moving up in the world',
  nick: 'SLOPE_HIGHER',
  colors: Colors.biomes.alps,
  x: 10,
  y: 10,
  camera: {
    x: 5,
    y: 2,
    fov: 9,
  },
  requirements: ['SLOPE_NEGATIVE'],
  defaultExpression: '-x-3',
  hint: 'hint: add a constant',
  goals: [
    {
      type: 'path',
      expression: '-x+7',
      pathX: 6,
      x: 2,
      y: 0,
    },
  ],
  sledders: [{
    speech: [{
      speakerX: -0.4,
      content: '…sorry.',
      direction: 'up-left',
      distance: 1,
      speech: {
        content: 'Things seem better today!',
        distance: 1,
      }
    },{
      speakerX: 0.3,
      content: 'Yeah. Can we not talk about it?',
      direction: 'right-up-up',
      distance: 1.3,
    }]
  }],
  slider: {expression:"-x + n", bounds:[-3,1,-3]},
  sky: {
    asset: 'images.western_slopes_background',
    margin: 1,
  },
},
{
  name: 'About halfway down',
  nick: 'SLOPE_LOWER',
  colors: Colors.biomes.alps,
  x: 10,
  y: 0,
  camera: {
    x: 2,
    y: -4,
    fov: 11,
  },
  requirements: null,
  defaultExpression: '-x',
  hint: 'hint: if adding makes it go up…',
  goals: [
    {
      type: 'path',
      expression: '-x-3',
      pathX: 4,
      x: 3,
      y: 0,
    },
  ],
  sledders: [{
    speech: [{
      speakerX: -0.4,
      content: 'I love you.',
      direction: 'up',
      distance: 1.5,
    },{
      speakerX: 0.4,
      content: 'I love you too, Sam.',
      direction: 'right-up',
      distance: 0.75,
    }]
  }],
  slider: {expression:"-x + n", bounds:[-2,0,0]},
  sky: {
    asset: 'images.western_slopes_background',
    margin: 1,
  },
},
{
  name: 'We\'re at the bottom',
  nick: 'SLOPE_SCALE_TRANSLATE',
  colors: Colors.biomes.alps,
  x: 10,
  y: -10,
  camera: {
    x: 10,
    y: -5,
    fov: 12,
  },
  requirements: [
    'SLOPE_LOWER',
    'SLOPE_SHALLOWER',
  ],
  defaultExpression: '-\\frac{x}{2}',
  hint: 'put it all together!',
  goals: [
    {
      type: 'path',
      expression: '-x/3-5',
      pathX: 14,
      x: 3,
      y: 0,
    },
  ],
  sprites: [{
    x: 2,
    size: 2,
    asset: 'images.sam_float',
    speech: [{
      speakerX: 0.3,
      speakerY: -0.8,
      content: 'I’m gonna split off and check out the valley.',
      direction: 'up-up-right',
      distance: 2,
    }]
  }],
  sledders: [{
    asset: 'images.lunchbox_sled',
    speech: [{
      speakerX: 0,
      content: 'catch up with you later!',
      direction: 'up-up-left',
      distance: 1,
    }]
  }],
  sky: {
    asset: 'images.western_slopes_background',
    margin: 1,
  },
}]