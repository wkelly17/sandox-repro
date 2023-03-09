declare module "@brightcove/player-loader" {
  export = brightcovePlayerLoader
  /**
   * A function for asynchronously loading a Brightcove Player into a web page.
   *
   * @param  {Object} parameters
   *         A parameters object. See README for details.
   *
   * @return {Promise|undefined}
   *         A Promise, if possible.
   */
  declare function brightcovePlayerLoader(
    parameters: Object
  ): Promise<any> | undefined
}
