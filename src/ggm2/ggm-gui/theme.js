Blockly.Themes.GGM = Blockly.Theme.defineTheme('GGM', {
  'base': Blockly.Themes.Classic,
  'componentStyles': {
    'workspaceBackgroundColour': '#dbe4ff',
    'toolboxBackgroundColour': '#f8f9fa',
  }
});

class CustomConstantsProvider extends Blockly.blockRendering.ConstantProvider {
  constructor() {
    // Set up all of the constants from the base provider.
    super();

    // Override a few properties.
    /**
     * The width of the notch used for previous and next connections.
     * @type {number}
     * @override
     */
    this.NOTCH_WIDTH = 17;

    /**
     * The height of the notch used for previous and next connections.
     * @type {number}
     * @override
     */
    this.NOTCH_HEIGHT = 4;

    /**
     * Rounded corner radius.
     * @type {number}
     * @override
     */
    this.CORNER_RADIUS = 0;
    /**
     * The height of the puzzle tab used for input and output connections.
     * @type {number}
     * @override
     */
    this.TAB_HEIGHT = 15;
  }
  /**
   * @override
   */
  init() {
    super.init();
    // Add calls to create shape objects for the new connection shapes.
    this.RECT_PREV_NEXT = this.makeRectangularPreviousConn();
    this.RECT_INPUT_OUTPUT = this.makeRectangularInputConn();
  }

  /**
   * @override
   */
  /*shapeFor(connection) {
    const checks = connection.getCheck();
    switch (connection.type) {
      case Blockly.INPUT_VALUE:
      case Blockly.OUTPUT_VALUE:
        // Includes doesn't work in IE.
        if (checks && checks.indexOf('Number') != -1) {
          return this.RECT_INPUT_OUTPUT;
        }
        if (checks && checks.indexOf('String') != -1) {
          return this.RECT_INPUT_OUTPUT;
        }
        return this.PUZZLE_TAB;
      case Blockly.PREVIOUS_STATEMENT:
      case Blockly.NEXT_STATEMENT:
        return this.NOTCH;
      default:
        throw Error('Unknown type');
    }
  }*/

  /**
   * Return a rectangular notch for use with previous and next connections.
   */
  makeRectangularPreviousConn() {
    const width = this.NOTCH_WIDTH;
    const height = this.NOTCH_HEIGHT;

    function makeMainPath(dir) {
      return Blockly.utils.svgPaths.line(
          [
            Blockly.utils.svgPaths.point(0, height),
            Blockly.utils.svgPaths.point(dir * width, 2),
            Blockly.utils.svgPaths.point(0, -height)
          ]);
    }
    const pathLeft = makeMainPath(1);
    const pathRight = makeMainPath(-1);

    return {
      width: width,
      height: height,
      pathLeft: pathLeft,
      pathRight: pathRight
    };
  }

  /**
   * Return a rectangular puzzle tab for use with input and output connections.
   */
  makeRectangularInputConn() {
    const width = this.TAB_WIDTH;
    const height = this.TAB_HEIGHT;

    /**
     * Since input and output connections share the same shape you can
     * define a function to generate the path for both.
     */
    function makeMainPath(up) {
      return Blockly.utils.svgPaths.line(
          [
            Blockly.utils.svgPaths.point(-width, 0),
            Blockly.utils.svgPaths.point(0, -1 * up * height),
            Blockly.utils.svgPaths.point(width, 0)
          ]);
    }

    const pathUp = makeMainPath(5);
    const pathDown = makeMainPath(-5);

    return {
      width: width,
      height: height,
      pathDown: pathDown,
      pathUp: pathUp
    };
  }
};

class CustomRenderer extends Blockly.blockRendering.Renderer {
  constructor(name) {
    super(name);
  }

  /**
   * @override
   */
  makeConstants_() {
	  var a = new CustomConstantsProvider();
	  a.FULL_BLOCK_FIELDS = false;
	  a.NO_PADDING = 0;
	  a.ADD_START_HATS = true;
    return a;
  }
};

Blockly.blockRendering.register('custom_renderer', CustomRenderer);