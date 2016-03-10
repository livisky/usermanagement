'use strict';

export default class extends think.controller.base {
  /**
   * some base method in here
   */
    async __before() {
        this.assign("title", "aaa");        
        await this.getConfig();
    }
    async getConfig() {
      let data = readFile(think.ROOT_PATH + "/src/common/config/config.json");
      data = JSON.parse(data);
      this.assign("_web", data);
    }
}